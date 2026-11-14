import { useState } from 'react';
import type { TimeSeriesPoint } from '../data/expoData';

interface TransactionLineChartProps {
  series: readonly TimeSeriesPoint[];
  title: string;
}

const SVG_WIDTH = 380;
const SVG_HEIGHT = 186;
const PAD_LEFT = 28;
const PAD_RIGHT = 12;
const PAD_TOP = 14;
const PAD_BOTTOM = 24;
const PLOT_WIDTH = SVG_WIDTH - PAD_LEFT - PAD_RIGHT;
const PLOT_HEIGHT = SVG_HEIGHT - PAD_TOP - PAD_BOTTOM;
const MAX_Y = 60;
const Y_TICKS = [0, 15, 30, 45, 60] as const;

export function TransactionLineChart({
  series,
  title,
}: TransactionLineChartProps) {
  const peakIndex = series.reduce(
    (bestIdx, item, idx, arr) =>
      item.count > arr[bestIdx].count ? idx : bestIdx,
    0,
  );
  const [activeIndex, setActiveIndex] = useState<number>(peakIndex);

  if (series.length === 0) return null;

  const coords = series.map((point, index) => {
    const x =
      series.length === 1
        ? PAD_LEFT + PLOT_WIDTH / 2
        : PAD_LEFT + (index / (series.length - 1)) * PLOT_WIDTH;
    const y = PAD_TOP + PLOT_HEIGHT - (point.count / MAX_Y) * PLOT_HEIGHT;
    return { x, y, point };
  });

  const linePath = coords
    .map((c, idx) => `${idx === 0 ? 'M' : 'L'} ${c.x.toFixed(1)} ${c.y.toFixed(1)}`)
    .join(' ');

  const baselineY = PAD_TOP + PLOT_HEIGHT;
  const areaPath = `${linePath} L ${coords[coords.length - 1].x.toFixed(1)} ${baselineY.toFixed(1)} L ${coords[0].x.toFixed(1)} ${baselineY.toFixed(1)} Z`;

  const active = coords[activeIndex] ?? coords[peakIndex];
  const isPeak = activeIndex === peakIndex;

  return (
    <div
      className="mt-3"
      onMouseLeave={() => setActiveIndex(peakIndex)}
    >
      <div className="mb-2 flex flex-wrap items-center justify-between gap-2 rounded-[6px] border border-[#251F35] bg-[#0F0A1F]/80 px-2.5 py-1.5 text-[11px]">
        <div className="flex items-center gap-2 font-mono-tech tabular-nums">
          <span className="font-bold text-[#D4CEE3]">
            {active.point.rangeLabel}
          </span>
          {isPeak && (
            <span className="font-bold uppercase tracking-[0.5px] text-[#F27D26]">
              · Pico (Rush 20h57)
            </span>
          )}
        </div>
        <span className="font-mono-tech font-bold tabular-nums text-[#F27D26]">
          {active.point.count} {active.point.count === 1 ? 'operação' : 'operações'}
        </span>
      </div>

      <svg
        viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`}
        role="img"
        aria-label={`Gráfico de linha de ${title}: quantidade de transações por blocos de 15 minutos das 18h15 às 21h30`}
        className="w-full h-auto overflow-visible select-none"
      >
        <defs>
          <linearGradient id="expoLineAreaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F27D26" stopOpacity="0.34" />
            <stop offset="65%" stopColor="#7C3AED" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#0F0A1F" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="expoLineStrokeGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#7C3AED" />
            <stop offset="72%" stopColor="#F27D26" />
            <stop offset="100%" stopColor="#FF9142" />
          </linearGradient>
        </defs>

        {Y_TICKS.map((tick) => {
          const y = PAD_TOP + PLOT_HEIGHT - (tick / MAX_Y) * PLOT_HEIGHT;
          return (
            <g key={tick}>
              <line
                x1={PAD_LEFT}
                y1={y}
                x2={SVG_WIDTH - PAD_RIGHT}
                y2={y}
                stroke="#251F35"
                strokeWidth="1"
                strokeDasharray={tick === 0 ? undefined : '2 3'}
              />
              <text
                x={PAD_LEFT - 6}
                y={y + 3}
                textAnchor="end"
                fill="#9B93B2"
                fontSize="9.5"
                fontFamily="JetBrains Mono, ui-monospace, monospace"
              >
                {tick}
              </text>
            </g>
          );
        })}

        <path d={areaPath} fill="url(#expoLineAreaGrad)" />

        <line
          x1={active.x}
          y1={PAD_TOP}
          x2={active.x}
          y2={baselineY}
          stroke="rgba(242, 125, 38, 0.45)"
          strokeWidth="1"
          strokeDasharray="3 3"
        />

        <path
          d={linePath}
          fill="none"
          stroke="url(#expoLineStrokeGrad)"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {coords.map(({ x, y, point }, index) => {
          const showXLabel = index % 3 === 0;
          const isCurrent = index === activeIndex;
          const isPointPeak = index === peakIndex;
          return (
            <g key={point.label}>
              {showXLabel && (
                <text
                  x={x}
                  y={SVG_HEIGHT - 6}
                  textAnchor={
                    index === 0
                      ? 'start'
                      : index === coords.length - 1
                        ? 'end'
                        : 'middle'
                  }
                  fill={isCurrent ? '#FFFFFF' : '#9B93B2'}
                  fontSize="9.5"
                  fontWeight={isCurrent ? '700' : '400'}
                  fontFamily="JetBrains Mono, ui-monospace, monospace"
                >
                  {point.label}
                </text>
              )}

              {isCurrent && (
                <circle
                  cx={x}
                  cy={y}
                  r="7"
                  fill="rgba(242, 125, 38, 0.22)"
                />
              )}

              <circle
                cx={x}
                cy={y}
                r={isCurrent ? 4.2 : isPointPeak ? 3.5 : 2.4}
                fill={
                  isCurrent || isPointPeak ? '#F27D26' : '#161126'
                }
                stroke={
                  isCurrent
                    ? '#FFFFFF'
                    : isPointPeak
                      ? '#F27D26'
                      : '#9B93B2'
                }
                strokeWidth={isCurrent ? 1.8 : 1.5}
              />

              <circle
                cx={x}
                cy={y}
                r="13"
                fill="transparent"
                className="cursor-pointer focus:outline-none"
                tabIndex={0}
                role="button"
                aria-label={`${point.rangeLabel}: ${point.count} transações`}
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
