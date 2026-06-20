import { useState } from "react";

function ShareReferral({ referral }) {
  const [copied, setCopied] = useState("");

  if (!referral) return null;

  const copyToClipboard = async (text, type) => {
    await navigator.clipboard.writeText(text);

    setCopied(type);

    setTimeout(() => {
      setCopied("");
    }, 2000);
  };

  return (
    <section
      aria-label="Share referral"
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
        Refer friends and earn more
      </h2>

      <div
        className="
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-6
        "
      >

        <div>
          <label
            className="
              block
              text-xs
              uppercase
              font-semibold
              text-gray-400
              mb-2
            "
          >
            Your Referral Link
          </label>

          <div className="flex gap-2">
            <input
              readOnly
              value={referral.link}
              className="
                flex-1
                bg-[#fafbff]
                border
                border-gray-200
                rounded-lg
                px-4
                py-3
                text-sm
                outline-none
              "
            />

            <button
              onClick={() =>
                copyToClipboard(
                  referral.link,
                  "link"
                )
              }
              className="
                px-5
                py-3
                bg-[#6366F1]
                text-white
                rounded-lg
                font-medium
                hover:bg-[#5458e6]
              "
            >
              {copied === "link"
                ? "Copied!"
                : "Copy"}
            </button>
          </div>
        </div>


        <div>
          <label
            className="
              block
              text-xs
              uppercase
              font-semibold
              text-gray-400
              mb-2
            "
          >
            Your Referral Code
          </label>

          <div className="flex gap-2">
            <input
              readOnly
              value={referral.code}
              className="
                flex-1
                bg-[#fafbff]
                border
                border-gray-200
                rounded-lg
                px-4
                py-3
                text-sm
                outline-none
              "
            />

            <button
              onClick={() =>
                copyToClipboard(
                  referral.code,
                  "code"
                )
              }
              className="
                px-5
                py-3
                bg-[#6366F1]
                text-white
                rounded-lg
                font-medium
                hover:bg-[#5458e6]
              "
            >
              {copied === "code"
                ? "Copied!"
                : "Copy"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShareReferral;