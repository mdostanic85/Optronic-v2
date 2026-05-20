type ProductBulletListProps = {
  items: string[];
  align?: 'center' | 'start';
};

export function ProductBulletList({ items, align = 'center' }: ProductBulletListProps) {
  return (
    <ul
      className={`flex flex-col gap-3 ${align === 'center' ? 'mx-auto max-w-3xl' : 'max-w-3xl'}`}
    >
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-base leading-relaxed text-op-body">
          <span
            className="mt-[0.55rem] h-2 w-2 flex-shrink-0 rounded-full bg-op-primary"
            aria-hidden
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
