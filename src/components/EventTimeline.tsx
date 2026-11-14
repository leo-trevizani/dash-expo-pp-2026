import { EVENT_TIMELINE_MILESTONES } from '../data/expoData';

interface EventTimelineProps {
  selectedMetricId: string | null;
  onSelectMetric: (metricId: string) => void;
}

export function EventTimeline({
  selectedMetricId,
  onSelectMetric,
}: EventTimelineProps) {
  const activeMilestone =
    EVENT_TIMELINE_MILESTONES.find(
      (m) => m.targetMetricId === selectedMetricId,
    ) ?? null;

  return (
    <div
      className="expo-card rounded-[16px] p-4 sm:p-5"
      aria-label="Linha do tempo cronológica dos principais marcos do evento"
    >
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <p className="font-mono-tech text-[11px] font-bold uppercase tracking-[0.6px] text-[#F27D26]">
            Linha do tempo da noite
          </p>
          <span className="text-[12px] text-[#9B93B2]">
            Selecione um marco para destacar o evento
          </span>
        </div>
        <span className="font-mono-tech text-[11px] tabular-nums text-[#C4BBD9]">
          18h26 — 21h29
        </span>
      </div>

      {/* Desktop 3-column aligned track + selectable event nodes */}
      <div className="relative hidden md:block">
        <div
          className="pointer-events-none absolute left-[16.67%] right-[16.67%] top-[18px] h-1.5 rounded-[8px] bg-[#251F35]"
          aria-hidden="true"
        >
          <div className="expo-gradient-accent h-full w-full rounded-[8px]" />
        </div>

        <ol className="relative grid grid-cols-3 gap-3">
          {EVENT_TIMELINE_MILESTONES.map((milestone) => {
            const isSelected = selectedMetricId === milestone.targetMetricId;
            return (
              <li key={milestone.id} className="min-w-0">
                <button
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => onSelectMetric(milestone.targetMetricId)}
                  className={`group flex w-full flex-col items-center rounded-[8px] px-2 pb-2 pt-2 text-center transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F27D26] ${
                    isSelected
                      ? 'bg-[#221E30]/75'
                      : 'hover:bg-[#1B1530]/60'
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className={`relative z-10 mb-3 inline-flex h-5 w-5 items-center justify-center rounded-full border-2 transition-transform duration-150 ${
                      isSelected
                        ? 'scale-110 border-[#FFFFFF] bg-[#F27D26] shadow-[0_0_0_4px_rgba(242,125,38,0.22)]'
                        : 'border-[#0F0A1F] bg-[#F27D26] group-hover:scale-110'
                    }`}
                  />
                  <span className="font-mono-tech text-[11px] font-bold tabular-nums tracking-[0.6px] text-[#F27D26]">
                    {milestone.timeLabel}
                  </span>
                  <span className="mt-0.5 text-[13px] font-bold leading-[1.35] text-white">
                    {milestone.title}
                  </span>
                  <span className="mt-0.5 text-[11px] leading-[1.35] text-[#9B93B2]">
                    {milestone.detail}
                  </span>
                </button>
              </li>
            );
          })}
        </ol>
      </div>

      {/* Mobile vertical chronological selectable list */}
      <ol className="space-y-2 md:hidden">
        {EVENT_TIMELINE_MILESTONES.map((milestone) => {
          const isSelected = selectedMetricId === milestone.targetMetricId;
          return (
            <li key={milestone.id}>
              <button
                type="button"
                aria-pressed={isSelected}
                onClick={() => onSelectMetric(milestone.targetMetricId)}
                className={`flex w-full items-start gap-3 rounded-[8px] border p-2.5 text-left transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F27D26] ${
                  isSelected
                    ? 'border-[#F27D26]/50 bg-[#221E30]/75'
                    : 'border-[#251F35] bg-transparent hover:bg-[#1B1530]/60'
                }`}
              >
                <span className="font-mono-tech shrink-0 pt-0.5 text-[12px] font-bold tabular-nums text-[#F27D26]">
                  {milestone.timeLabel}
                </span>
                <div className="min-w-0">
                  <p className="text-[13px] font-bold leading-[1.35] text-white">
                    {milestone.title}
                  </p>
                  <p className="text-[12px] leading-[1.35] text-[#9B93B2]">
                    {milestone.detail}
                  </p>
                </div>
              </button>
            </li>
          );
        })}
      </ol>

      {activeMilestone && (
        <p className="mt-3 border-t border-[#251F35] pt-2.5 text-[12px] text-[#D4CEE3]">
          <span className="font-mono-tech mr-2 font-bold text-[#F27D26]">
            {activeMilestone.timeLabel}
          </span>
          {activeMilestone.elapsedNote}
        </p>
      )}
    </div>
  );
}
