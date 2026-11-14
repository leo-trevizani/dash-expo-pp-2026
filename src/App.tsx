import {
  BarChart3,
  Clock,
  ExternalLink,
  LayoutDashboard,
  ShieldCheck,
  Users,
} from 'lucide-react';
import { useState } from 'react';
import {
  BIG_NUMBERS,
  EVENT_METADATA,
  FUN_NUMBERS,
  PARTICIPANT_PATTERNS,
} from './data/expoData';
import { EventTimeline } from './components/EventTimeline';
import { MetricCard } from './components/MetricCard';

type NavSectionId =
  | 'visao-geral'
  | 'big-numbers'
  | 'numeros-divertidos'
  | 'padroes';

const NAV_ITEMS: readonly {
  id: NavSectionId;
  label: string;
  icon: typeof LayoutDashboard;
}[] = [
  { id: 'visao-geral', label: 'Visão Geral', icon: LayoutDashboard },
  { id: 'big-numbers', label: 'Principais métricas', icon: BarChart3 },
  { id: 'numeros-divertidos', label: 'Performance', icon: Clock },
  { id: 'padroes', label: 'Comportamento', icon: Users },
];

const POST_EVENT_FORM_URL = 'https://forms.gle/UCGH6Pug6AW7fHS66';

export default function App() {
  const [activeNav, setActiveNav] = useState<NavSectionId>('visao-geral');
  const [selectedTimelineMetricId, setSelectedTimelineMetricId] = useState<
    string | null
  >(null);

  function handleSelectTimelineMetric(metricId: string) {
    setSelectedTimelineMetricId((prev) => (prev === metricId ? null : metricId));
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#0F0A1F] text-white">
      {/* Full-Width Top Navigation Bar */}
      <header className="sticky top-0 z-30 flex h-16 items-center justify-between gap-3 border-b border-[#251F35] bg-[#0F0A1F]/95 px-4 backdrop-blur-md sm:gap-4 sm:px-6">
        <a
          href="#visao-geral"
          aria-label="Expo PP 2026"
          className="inline-flex shrink-0 items-center gap-2 rounded-[8px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F27D26] sm:gap-2.5"
        >
          <img
            src="./assets/aistudio/image_f7f0da98.png"
            alt="Expo PP"
            className="h-6 w-auto object-contain sm:h-8"
          />
          <span
            className="h-4 w-px bg-[#251F35] sm:h-5"
            aria-hidden="true"
          />
          <span className="font-display text-[15px] font-bold leading-none tracking-[-0.02em] text-[#D4CEE3] tabular-nums sm:text-[20px]">
            2026
          </span>
        </a>

        <a
          href={POST_EVENT_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-display inline-flex h-9 shrink-0 items-center gap-1.5 whitespace-nowrap rounded-[12px] bg-[#F27D26] px-3 text-[11px] font-bold uppercase tracking-[0.9px] text-[#0F0A1F] shadow-[0_10px_15px_-3px_oklab(0.710617_0.106104_0.132957/0.2),0_4px_6px_-4px_oklab(0.710617_0.106104_0.132957/0.2)] transition-colors duration-150 hover:bg-[#FF9142] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFFFFF] sm:h-10 sm:gap-2 sm:px-4 sm:text-[13px] sm:tracking-[1.1px]"
        >
          <span>Formulário Pós-Evento</span>
          <ExternalLink className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
        </a>
      </header>

      <div className="flex flex-1">
        {/* Desktop Dashboard Sidebar */}
        <aside
          aria-label="Navegação do painel"
          className="hidden lg:flex lg:w-[248px] lg:shrink-0 lg:flex-col lg:justify-between border-r border-[#251F35] bg-[#130E26] sticky top-16 h-[calc(100vh-4rem)]"
        >
          <div className="px-3 py-5">
            <p className="font-mono-tech mb-2.5 px-2.5 text-[10px] font-bold uppercase tracking-[0.5px] text-[#9B93B2]">
              Painel do Evento
            </p>
            <nav className="space-y-1">
              {NAV_ITEMS.map((item) => {
                const Icon = item.icon;
                const isActive = activeNav === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setActiveNav(item.id)}
                    className={`flex items-center gap-2.5 rounded-[8px] px-2.5 py-2 text-[13px] font-medium whitespace-nowrap transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F27D26] ${
                      isActive
                        ? 'bg-[#221E30] text-white border border-[#251F35]'
                        : 'text-[#C4BBD9] border border-transparent hover:bg-[#1B1530] hover:text-white'
                    }`}
                  >
                    <Icon
                      className={`h-4 w-4 shrink-0 ${
                        isActive ? 'text-[#F27D26]' : 'text-[#9B93B2]'
                      }`}
                      aria-hidden="true"
                    />
                    <span className="truncate">{item.label}</span>
                  </a>
                );
              })}
            </nav>
          </div>

          <div className="border-t border-[#251F35] p-5 text-[12px] leading-[1.5]">
            <p className="font-mono-tech text-[10px] font-bold uppercase tracking-[0.5px] text-[#F27D26]">
              Resumo da Janela
            </p>
            <p className="mt-1.5 font-mono-tech tabular-nums text-[#D4CEE3]">
              18h26 — 21h29
            </p>
            <p className="mt-3 text-[11px] leading-[1.45] text-[#9B93B2]">
              Leitura guiada sem rankings financeiros ou comparativos entre agências.
            </p>
          </div>
        </aside>

        {/* Main Workspace Column */}
        <div className="flex min-w-0 flex-1 flex-col">
          <main className="flex-1 px-4 py-5 sm:px-6 sm:py-6">
            <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-5">
              {/* Compact Dashboard Overview Header */}
              <section
                id="visao-geral"
                className="scroll-mt-20 expo-dashboard-banner rounded-[16px] border border-[#251F35] px-5 py-5 sm:px-6"
              >
                <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <p className="font-mono-tech text-[11px] font-bold uppercase tracking-[0.6px] text-[#F27D26]">
                      Resultados Oficiais · Evento de Publicidade
                    </p>
                    <h1 className="expo-display-heading mt-1.5 text-[28px] sm:text-[34px] text-white">
                      Dashboard de Resultados{' '}
                      <span className="expo-gradient-text">Expo PP</span>
                    </h1>
                  </div>

                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-[#251F35] pt-3 text-[12px] font-mono-tech text-[#9B93B2] lg:border-t-0 lg:border-l lg:pl-6 lg:pt-0 lg:flex-col lg:items-end lg:shrink-0">
                    <span className="tabular-nums font-bold text-white">
                      161 participantes únicos
                    </span>
                    <span className="lg:hidden" aria-hidden="true">·</span>
                    <span className="tabular-nums font-bold text-white">
                      127.980 créditos circulados
                    </span>
                    <span className="lg:hidden" aria-hidden="true">·</span>
                    <span>Janela oficial até 21h30</span>
                  </div>
                </div>
              </section>

              {/* Section 01: Principais métricas */}
              <section
                id="big-numbers"
                aria-label="Principais métricas"
                className="scroll-mt-20"
              >
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                  {BIG_NUMBERS.map((metric) => (
                    <MetricCard
                      key={metric.id}
                      metric={metric}
                      variant="kpi"
                    />
                  ))}
                </div>
              </section>

              {/* Section 02: Performance (Timeline + 6 cards) */}
              <section
                id="numeros-divertidos"
                aria-label="Performance"
                className="scroll-mt-20 flex flex-col gap-4"
              >
                <EventTimeline
                  selectedMetricId={selectedTimelineMetricId}
                  onSelectMetric={handleSelectTimelineMetric}
                />

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {FUN_NUMBERS.slice(0, 2).map((metric) => (
                    <MetricCard
                      key={metric.id}
                      metric={metric}
                      variant="tile"
                      className={
                        selectedTimelineMetricId === metric.id
                          ? 'expo-card-selected'
                          : ''
                      }
                    />
                  ))}
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {FUN_NUMBERS.slice(2, 4).map((metric) => (
                    <MetricCard
                      key={metric.id}
                      metric={metric}
                      variant="tile"
                      className={
                        selectedTimelineMetricId === metric.id
                          ? 'expo-card-selected'
                          : ''
                      }
                    />
                  ))}
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {FUN_NUMBERS.slice(4).map((metric) => (
                    <MetricCard
                      key={metric.id}
                      metric={metric}
                      variant="tile"
                      className={
                        selectedTimelineMetricId === metric.id
                          ? 'expo-card-selected'
                          : ''
                      }
                    />
                  ))}
                </div>
              </section>

              {/* Section 03: Comportamento (Superfãs e Borboletas) */}
              <section
                id="padroes"
                aria-label="Comportamento"
                className="scroll-mt-20"
              >
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {PARTICIPANT_PATTERNS.map((metric) => (
                    <MetricCard
                      key={metric.id}
                      metric={metric}
                      variant="tile"
                    />
                  ))}
                </div>
              </section>
            </div>
          </main>

          {/* Compact Dashboard Footer */}
          <footer className="border-t border-[#251F35] bg-[#0F0A1F] px-4 py-4 sm:px-6">
            <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-2 text-[12px] text-[#9B93B2] sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2 text-[#D4CEE3]">
                <ShieldCheck className="h-4 w-4 shrink-0 text-[#F27D26]" aria-hidden="true" />
                <span>{EVENT_METADATA.privacyNote}</span>
              </div>
              <span className="font-mono-tech text-[11px] uppercase tracking-[0.5px]">
                Expo PP · Leitura Guiada
              </span>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
