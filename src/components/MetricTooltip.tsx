import { useEffect, useId, useRef, useState } from 'react';
import { HelpCircle } from 'lucide-react';

interface MetricTooltipProps {
  label: string;
  content: string;
}

export function MetricTooltip({ label, content }: MetricTooltipProps) {
  const [open, setOpen] = useState(false);
  const [pinned, setPinned] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const tooltipId = useId();

  useEffect(() => {
    if (!open) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setPinned(false);
        setOpen(false);
      }
    }

    function handlePointerDown(event: PointerEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setPinned(false);
        setOpen(false);
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('pointerdown', handlePointerDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('pointerdown', handlePointerDown);
    };
  }, [open]);

  return (
    <div
      ref={containerRef}
      className="relative inline-flex items-center"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => {
        if (!pinned) setOpen(false);
      }}
    >
      <button
        type="button"
        aria-label={`Explicar métrica: ${label}`}
        aria-expanded={open}
        aria-describedby={open ? tooltipId : undefined}
        onFocus={() => setOpen(true)}
        onBlur={() => {
          if (!pinned) setOpen(false);
        }}
        onClick={() => {
          const nextPinned = !pinned;
          setPinned(nextPinned);
          setOpen(nextPinned);
        }}
        className="inline-flex h-10 w-10 -m-2 items-center justify-center rounded-lg text-[#9B93B2] transition-colors duration-150 hover:text-[#F27D26] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F27D26]"
      >
        <HelpCircle className="h-4 w-4" aria-hidden="true" />
      </button>

      {open && (
        <div
          id={tooltipId}
          role="tooltip"
          className="absolute right-0 top-full z-30 mt-2 w-64 max-w-[calc(100vw-3rem)] rounded-lg border border-[#F27D26]/40 bg-[#17112B] p-3 text-left text-xs leading-relaxed text-[#E7E2F3] shadow-[0_14px_28px_-6px_rgba(0,0,0,0.6),0_10px_15px_-3px_oklab(0.710617_0.106104_0.132957/0.18)]"
        >
          <p className="font-mono-tech mb-1 text-[10px] font-bold uppercase tracking-[0.5px] text-[#F27D26]">
            Como funciona
          </p>
          <p className="text-[#D4CEE3]">{content}</p>
        </div>
      )}
    </div>
  );
}
