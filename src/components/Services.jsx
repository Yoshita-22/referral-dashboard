function ServiceSummary({ serviceSummary }) {
  if (!serviceSummary) return null;

  return (
    <section
      aria-label="Service summary"
      className="
        bg-white
        rounded-2xl
        border
        border-gray-100
        p-4
        sm:p-6
      "
    >
      <h2 className="text-lg font-semibold text-gray-900 mb-6">
        Service summary
      </h2>

      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-4
        "
      >
        <div className="bg-[#fafbff] border border-gray-100 rounded-xl p-5">
          <p className="text-xs uppercase text-gray-400 font-semibold mb-2">
            Service
          </p>

          <p className="font-semibold text-[#6366F1]">
            {serviceSummary.service}
          </p>
        </div>

        <div className="bg-[#fafbff] border border-gray-100 rounded-xl p-5">
          <p className="text-xs uppercase text-gray-400 font-semibold mb-2">
            Your Referrals
          </p>

          <p className="font-semibold text-gray-900">
            {serviceSummary.yourReferrals}
          </p>
        </div>

        <div className="bg-[#fafbff] border border-gray-100 rounded-xl p-5">
          <p className="text-xs uppercase text-gray-400 font-semibold mb-2">
            Active Referrals
          </p>

          <p className="font-semibold text-gray-900">
            {serviceSummary.activeReferrals}
          </p>
        </div>

        <div className="bg-[#fafbff] border border-gray-100 rounded-xl p-5">
          <p className="text-xs uppercase text-gray-400 font-semibold mb-2">
            Total Ref. Earnings
          </p>

          <p className="font-semibold text-gray-900">
            {serviceSummary.totalRefEarnings}
          </p>
        </div>
      </div>
    </section>
  );
}

export default ServiceSummary;