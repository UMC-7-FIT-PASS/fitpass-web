import { MARKETING_POLICY } from "../../constants/policies";

function MarketingPolicyPage() {
  return (
    <div className="flex flex-col gap-6 p-6">
      {MARKETING_POLICY.map((policy, index) => (
        <div className="flex flex-col gap-2" key={index}>
          <h2 className="text-gray-600 text-18px font-bold">{policy.title}</h2>
          <p className="whitespace-pre-line text-gray-500 text-14px">{policy.content}</p>
        </div>
      ))}
    </div>
  );
}

export default MarketingPolicyPage;