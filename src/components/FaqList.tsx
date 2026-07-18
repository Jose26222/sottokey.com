import { ChevronDown } from "lucide-react";
import { faqItems } from "@/data/site";

export function FaqList({ limit }: { limit?: number }) {
  const items = typeof limit === "number" ? faqItems.slice(0, limit) : faqItems;
  return (
    <div className="faq-list">
      {items.map((item, index) => (
        <details key={item.question}>
          <summary>
            <span>0{index + 1}</span>
            <strong>{item.question}</strong>
            <ChevronDown aria-hidden="true" />
          </summary>
          <p>{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
