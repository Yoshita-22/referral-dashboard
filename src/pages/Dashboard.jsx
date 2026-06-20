import { useEffect, useState } from 'react'
import Overview from '../components/Overview'
import Cookies from 'js-cookie'
import ServiceSummary from '../components/Services'
import ShareReferral from '../components/ShareReferral'
import Header from '../components/Header'
import ReferralsTable from '../components/ReferralsTable'


function Dashboard() {
const [dashboardData,setdashboardData] = useState({});
const [referrals,setReferrals] = useState([]);
const [search,setSearch] = useState("");
const [sort,setSort] = useState("")
const [currentPage, setCurrentPage] = useState(1);

useEffect(() => {
  const fetchReferrals = async () => {
    try {
      const token = Cookies.get("jwt_token");
      const response = await fetch(
        `https://v9fes04dwf.execute-api.eu-north-1.amazonaws.com/api/referrals?search=${search}&sort=${sort}`,
        {
          method: "GET",
          headers: {
           
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();

      if (!response.ok) {
        console.error("API Error:", data);
        return;
      }
      setdashboardData(data.data);
      setReferrals(data.data.referrals)
      console.log("Success:", data.data.metrics);
    } catch (error) {
      console.error("Fetch Error:", error);
    }
  };

  fetchReferrals();
}, [search,sort]);
 
//pagination
const ITEMS_PER_PAGE = 10;

const totalPages = Math.ceil(
  referrals.length / ITEMS_PER_PAGE
);

const startIndex =
  (currentPage - 1) * ITEMS_PER_PAGE;

const endIndex =
  startIndex + ITEMS_PER_PAGE;

const paginatedReferrals =
  referrals.slice(startIndex, endIndex);

const from =
  referrals.length === 0
    ? 0
    : startIndex + 1;

const to = Math.min(
  endIndex,
  referrals.length
);


 
  return (
    <div>
        <Header/>
        <Overview metrics = {dashboardData.metrics}/>
        <ServiceSummary serviceSummary = {dashboardData.serviceSummary}/>
        <ShareReferral referral = {dashboardData.referral}/>
        <ReferralsTable referrals = {paginatedReferrals} currentPage = {currentPage} setCurrentPage={setCurrentPage} totalPages = {totalPages} from = {from} to = {to}
 search ={search} setSearch = {setSearch} sort = {sort} setSort = {setSort} />
        
    </div>
  )
}

export default Dashboard