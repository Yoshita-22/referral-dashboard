import { useEffect, useState } from 'react'
import Overview from '../components/Overview'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Cookies from 'js-cookie'


function Dashboard() {
const [dashboardData,setdashboardData] = useState({});
useEffect(() => {
  const fetchReferrals = async () => {
    try {
      const token = Cookies.get("jwt_token");
      const response = await fetch(
        "https://v9fes04dwf.execute-api.eu-north-1.amazonaws.com/api/referrals",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
        }
      );

      

      const data = await response.json();

      if (!response.ok) {
        console.error("API Error:", data);
        return;
      }
      setdashboardData(data.data);
      console.log("Success:", data.data.metrics);
    } catch (error) {
      console.error("Fetch Error:", error);
    }
  };

  fetchReferrals();
}, []);
 
  return (
    <div>
        <Navbar/>
        <Overview metrics = {dashboardData.metrics}/>
        <Footer/>
    </div>
  )
}

export default Dashboard