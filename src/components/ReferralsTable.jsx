import { useNavigate } from "react-router-dom";

function ReferralsTable({
  referrals = [],
  currentPage,
  setCurrentPage,
  totalPages,
  from,
  to,
  search,
  setSearch,
  sort,
  setSort
}) {
  const navigate = useNavigate();

  const formatDate = date =>
    date.replaceAll("-", "/");

  const formatProfit = value =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(value);

  return (
    <section className="bg-white rounded-2xl border border-gray-100 p-4 sm:p-6">
      <h2 className="text-lg font-semibold mb-6">
        All referrals
      </h2>


      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
        
        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          <label
            htmlFor="search"
            className="text-sm text-gray-500"
          >
            Search
          </label>

          <input
            id="search"
            aria-label="Search referrals"
            placeholder="Name or service…"
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            className="
              w-full
              sm:w-64
              border
              border-gray-200
              rounded-lg
              px-4
              py-2
              outline-none
            "
          />
        </div>

        <div className="flex items-center gap-2">
          <label
            htmlFor="sort"
            className="text-sm text-gray-500"
          >
            Sort by date
          </label>

          <select
            id="sort"
            value={sort}
            onChange={(e)=>setSort(e.target.value)}
            className="
              border
              border-gray-200
              rounded-lg
              px-3
              py-2
            "
          >
            <option value="desc">
              Newest first
            </option>

            <option value="asc">
              Oldest first
            </option>
          </select>
        </div>
      </div>


      <div className="overflow-x-auto">
        <table className="w-full min-w-[700px]">
          <thead>
            <tr className="bg-[#f8fafc]">
              <th className="text-left px-6 py-4 text-xs uppercase">
                Name
              </th>

              <th className="text-left px-6 py-4 text-xs uppercase">
                Service
              </th>

              <th className="text-left px-6 py-4 text-xs uppercase">
                Date
              </th>

              <th className="text-left px-6 py-4 text-xs uppercase">
                Profit
              </th>
            </tr>
          </thead>

          <tbody>
            {referrals.length === 0 ? (
              <tr>
                <td
                  colSpan="4"
                  className="text-center py-8 text-gray-500"
                >
                  No matching entries
                </td>
              </tr>
            ) : (
              referrals.map(item => (
                <tr
                  key={item.id}
                  onClick={() =>
                    navigate(`/referral/${item.id}`)
                  }
                  className="
                    border-t
                    cursor-pointer
                    hover:bg-gray-50
                  "
                >
                  <td className="px-6 py-4">
                    {item.name || "No matching entries"}
                  </td>

                  <td className="px-6 py-4">
                    {item.serviceName || "No matching entries"}
                  </td>

                  <td className="px-6 py-4">
                    {formatDate(item.date) || "No matching entries"}
                  </td>

                  <td className="px-6 py-4 text-[#6366F1] font-medium">
                    {formatProfit(item.profit) || "No matching entries"}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>


      <div className="mt-6 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        
        <p className="text-sm text-gray-500">
          {`Showing ${from}-${to} of ${referrals.length} entries`}
        </p>

        <div className="flex flex-wrap items-center gap-2">
          
          <button
            disabled={currentPage === 1}
            onClick = {(e)=>setCurrentPage(prev => prev - 1)}
            className="
              px-3 py-2
              border
              rounded-lg
              disabled:opacity-50
            "
          >
            Previous
          </button>

          {Array.from(
            { length: totalPages },
            (_, index) => (
              <button
                key={index}
                onClick={ 
                  setCurrentPage(index + 1)
                }
                className={`
                  w-10 h-10 rounded-lg border
                  ${
                    currentPage === index + 1
                      ? "bg-[#6366F1] text-white"
                      : ""
                  }
                `}
              >
                {index + 1}
              </button>
            )
          )}

          <button
            disabled={
              currentPage === totalPages
            }
             onClick={() =>setCurrentPage(prev => prev + 1)}
            className="
              px-3 py-2
              border
              rounded-lg
              disabled:opacity-50
            "
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}

export default ReferralsTable;