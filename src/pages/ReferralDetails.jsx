import { useEffect, useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import Cookies from "js-cookie";

function ReferralDetails() {
  const { id } = useParams();

  const [referral, setReferral] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const getReferral = async () => {
      try {
        const token = Cookies.get("jwt_token");

        const response = await fetch(
          `https://v9fes04dwf.execute-api.eu-north-1.amazonaws.com/api/referrals?id=${id}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await response.json();

        if (!response.ok || !data.data) {
          setNotFound(true);
          return;
        }

        setReferral(data.data.referrals[0]);
        
      } catch (err) {
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    };

    getReferral();
  }, [id]);

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-10">
        Loading...
      </div>
    );
  }

  if (notFound) {
    return <Navigate to="/not-found" replace />;
  }

  const formattedDate = referral.date.replaceAll("-", "/");

  const formattedProfit = new Intl.NumberFormat(
    "en-US",
    {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }
  ).format(referral.profit);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      
    

      <Link
        to="/"
        className="
          text-[#6366F1]
          font-medium
          hover:underline
          inline-block
          mb-8
        "
      >
        ← Back to dashboard
      </Link>



      <h1 className="text-4xl font-bold text-slate-900 mb-3">
        Referral Details
      </h1>

      <p className="text-slate-500 mb-10">
        Full information for this referral partner.
      </p>

      {/* Card */}

      <div
        className="
          bg-white
          rounded-3xl
          border
          border-gray-100
          shadow-sm
          p-6
          sm:p-10
          max-w-3xl
        "
      >
 

        <div className="flex items-center justify-between">
          <h2 className="text-5xl font-bold text-slate-900">
            {referral.name}
          </h2>

          <span
            className="
              px-4
              py-2
              rounded-full
              bg-indigo-50
              text-[#6366F1]
              font-medium
            "
          >
            {referral.serviceName}
          </span>
        </div>

        <hr className="my-8" />


        <div className="space-y-6">
          
          <DetailRow
            label="Referral ID"
            value={referral.id}
          />

          <DetailRow
            label="Name"
            value={referral.name}
          />

          <DetailRow
            label="Service Name"
            value={referral.serviceName}
          />

          <DetailRow
            label="Date"
            value={formattedDate}
          />

          <DetailRow
            label="Profit"
            value={formattedProfit}
          />
        </div>
      </div>
    </div>
  );
}

function DetailRow({ label, value }) {
  return (
    <div
      className="
        flex
        flex-col
        sm:flex-row
        sm:items-center
        gap-2
        border-b
        border-gray-100
        pb-5
      "
    >
      <div
        className="
          w-full
          sm:w-48
          text-sm
          font-semibold
          uppercase
          tracking-wide
          text-slate-400
        "
      >
        {label}
      </div>

      <div className="text-xl font-medium text-slate-900">
        {value}
      </div>
    </div>
  );
}

export default ReferralDetails;