export function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-bg-surface rounded-xl p-6 border border-bg-card">
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="font-pixel text-gold text-xs mb-2">{title}</h3>
      <p className="text-text-dim text-sm leading-relaxed">{description}</p>
    </div>
  );
}
