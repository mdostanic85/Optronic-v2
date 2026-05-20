type ProductSectionHeaderProps = {
  badge?: string;
  title: string;
  description?: string;
  centered?: boolean;
};

export function ProductSectionHeader({ badge, title, description, centered = true }: ProductSectionHeaderProps) {
  return (
    <div className={centered ? 'mb-12 text-center' : 'mb-8'}>
      {badge ? (
        <div className="mb-4 inline-block rounded-full bg-op-primary-muted px-4 py-1 text-sm text-op-primary">
          {badge}
        </div>
      ) : null}
      <h2 className={`text-3xl text-op-ink md:text-4xl ${centered ? 'mb-4' : 'mb-3'}`}>{title}</h2>
      {description ? (
        <p className={`text-lg text-op-body ${centered ? 'mx-auto max-w-3xl' : 'max-w-3xl'}`}>{description}</p>
      ) : null}
    </div>
  );
}
