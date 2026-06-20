import {
  DollarSign,
  CreditCard,
  Link as LinkIcon,
  Trophy,
  Percent,
  Lock,
  Users,
  Repeat,
} from "lucide-react";

const icons = {
  balance: DollarSign,
  discountPct: CreditCard,
  totalRef: LinkIcon,
  discountAmt: Trophy,
  commissionAmt: Percent,
  totalEarn: Lock,
  commissionDisc: Users,
  bankTransfer: Repeat,
};

function Overview({ metrics = [] }) {
  return (
    <section
      role="region"
      aria-label="Overview metrics"
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
        Overview
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
        {metrics.map(metric => {
          const Icon = icons[metric.id] || DollarSign;

          return (
            <div
              key={metric.id}
              className="
                bg-[#fafbff]
                border
                border-gray-100
                rounded-xl
                p-5
                hover:shadow-sm
                transition
              "
            >
              <div
                className="
                  w-10
                  h-10
                  rounded-lg
                  bg-[#6366F1]
                  flex
                  items-center
                  justify-center
                  mb-4
                "
              >
                <Icon
                  size={18}
                  className="text-white"
                />
              </div>
              <h3
                className="
                  text-2xl
                  font-bold
                  text-gray-900
                  mb-1
                "
              >
                {metric.value}
              </h3>
              <p
                className="
                  text-sm
                  text-gray-500
                "
              >
                {metric.label}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}



export default Overview;