import type { MetricItem } from '../data/expoData';
import { MetricIcon } from './MetricIcon';
import { MetricTooltip } from './MetricTooltip';
import { TransactionLineChart } from './TransactionLineChart';

interface MetricCardProps {
  metric: MetricItem;
  className?: string;
  variant?: 'kpi' | 'tile' | 'row';
}

export function MetricCard({
  metric,
  className = '',
  variant = 'tile',
}: MetricCardProps) {
  const isPurple = metric.accentTone === 'purple';
  const cardToneClass = isPurple ? 'expo-card-purple' : '';
  const radiusClass = variant === 'kpi' ? 'rounded-[16px]' : 'rounded-[8px]';
  const paddingClass = variant === 'kpi' ? 'p-5' : 'p-4 sm:p-5';

  return (
    <article
      className={`expo-card ${cardToneClass} ${radiusClass} ${paddingClass} relative flex flex-col justify-between ${className}`}
    >
      <div>
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-[8px] border border-[#251F35] bg-[#0F0A1F] text-[#F27D26]">
              <MetricIcon name={metric.icon} className="h-4 w-4" />
            </span>
            <h3 className="text-[13px] font-bold leading-[1.38] text-[#E7E2F3]">
              {metric.title}
            </h3>
          </div>
          <MetricTooltip label={metric.title} content={metric.tooltip} />
        </div>

        {metric.lineSeries && metric.lineSeries.length > 0 ? (
          <TransactionLineChart
            series={metric.lineSeries}
            title={metric.title}
          />
        ) : metric.bars && metric.bars.length > 0 ? (
          <ol
            aria-label={`Gráfico comparativo de ${metric.title}`}
            className="mt-3.5 space-y-2.5"
          >
            {(() => {
              const maxVal = Math.max(
                ...metric.bars.map((item) => item.numericValue),
                1,
              );
              return metric.bars.map((bar, index) => {
                const widthPercent = Math.max(
                  8,
                  Math.round((bar.numericValue / maxVal) * 1000) / 10,
                );
                const isLeader = index === 0;
                const fillGradient = isLeader
                  ? 'linear-gradient(90deg, #F27D26 0%, #7C3AED 100%)'
                  : isPurple
                    ? 'linear-gradient(90deg, rgba(124, 58, 237, 0.85) 0%, rgba(124, 58, 237, 0.4) 100%)'
                    : 'linear-gradient(90deg, rgba(242, 125, 38, 0.82) 0%, rgba(242, 125, 38, 0.35) 100%)';

                return (
                  <li key={bar.agency} className="group/bar">
                    <div className="mb-1 flex items-baseline justify-between gap-2 text-[12px]">
                      <div className="flex items-baseline gap-1.5 min-w-0">
                        <span
                          className={`font-mono-tech text-[10px] tabular-nums ${
                            isLeader
                              ? 'font-bold text-[#F27D26]'
                              : 'text-[#9B93B2]'
                          }`}
                        >
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span
                          className={`truncate ${
                            isLeader
                              ? 'font-bold text-white'
                              : 'font-medium text-[#D4CEE3]'
                          }`}
                        >
                          {bar.agency}
                        </span>
                      </div>
                      <div className="flex items-baseline gap-1.5 shrink-0 font-mono-tech tabular-nums">
                        <span
                          className={`text-[12px] font-bold ${
                            isLeader ? 'text-[#F27D26]' : 'text-white'
                          }`}
                        >
                          {bar.displayValue}
                        </span>
                        {bar.detail && (
                          <span className="text-[10px] text-[#9B93B2]">
                            {bar.detail}
                          </span>
                        )}
                      </div>
                    </div>
                    <div
                      className="h-2 w-full overflow-hidden rounded-[4px] border border-[#251F35] bg-[#0F0A1F]"
                      role="progressbar"
                      aria-label={`${bar.agency}: ${bar.displayValue}${bar.detail ? ` (${bar.detail})` : ''}`}
                      aria-valuenow={bar.numericValue}
                      aria-valuemin={0}
                      aria-valuemax={maxVal}
                    >
                      <div
                        className="h-full rounded-[3px] transition-[width] duration-300"
                        style={{
                          width: `${widthPercent}%`,
                          background: fillGradient,
                        }}
                      />
                    </div>
                  </li>
                );
              });
            })()}
          </ol>
        ) : (
          <div
            className={`mt-3 ${
              variant === 'kpi'
                ? 'flex flex-wrap items-baseline gap-x-2.5 gap-y-1'
                : 'flex flex-col gap-1'
            }`}
          >
            <p
              className={`font-display tabular-nums tracking-[-0.03em] text-white ${
                variant === 'kpi'
                  ? 'text-[34px] xl:text-[38px] font-bold leading-[1.02]'
                  : variant === 'row'
                    ? 'text-[24px] xl:text-[26px] font-bold leading-[1.1]'
                    : 'text-[24px] sm:text-[26px] font-bold leading-[1.1]'
              }`}
            >
              {metric.value}
            </p>
            {metric.unit && (
              <span className="font-mono-tech text-[11px] font-bold uppercase tracking-[0.6px] text-[#F27D26]">
                {metric.unit}
              </span>
            )}
          </div>
        )}
      </div>

      <p className="mt-3 border-t border-[#251F35] pt-2.5 text-[12px] leading-[1.45] text-[#9B93B2]">
        {metric.subtitle}
      </p>
    </article>
  );
}
