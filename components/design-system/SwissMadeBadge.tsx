import { cn } from '../ui/utils';

const swissMadeImage = '/assets/swiss-made.svg?v=20260401';

type SwissMadeBadgeProps = {
  className?: string;
};

/** Swiss Made sticker for hero / page cover sections (scrolls with the section). */
export function SwissMadeBadge({ className }: SwissMadeBadgeProps) {
  return (
    <div
      className={cn(
        'pointer-events-none absolute inset-x-0 top-0 z-10 hidden md:block',
        className,
      )}
      aria-hidden
    >
      <div className="mx-auto flex max-w-op-container justify-end px-op-gutter">
        <img
          id="quality-sticker"
          src={swissMadeImage}
          alt="Swiss Made"
          className="h-auto w-[250px] max-w-[min(100%,250px)]"
          width="250"
          height="62"
        />
      </div>
    </div>
  );
}
