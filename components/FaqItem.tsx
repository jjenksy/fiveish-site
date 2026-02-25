export function FaqItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <details className="group border border-bg-surface rounded-lg">
      <summary className="flex items-center justify-between p-4 hover:bg-bg-surface/50 transition-colors">
        <span className="font-medium text-text-main">{question}</span>
        <span className="faq-arrow text-text-dim transition-transform ml-4">
          &#9662;
        </span>
      </summary>
      <div className="px-4 pb-4 text-text-dim text-sm leading-relaxed">
        {answer}
      </div>
    </details>
  );
}
