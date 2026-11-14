export type MetricIconKey =
  | 'coins'
  | 'users'
  | 'activity'
  | 'clock-alert'
  | 'flame'
  | 'sunrise'
  | 'moon'
  | 'timer'
  | 'heart'
  | 'sparkles'
  | 'gem'
  | 'arrow-left-right'
  | 'receipt'
  | 'wallet'
  | 'trending-up'
  | 'award';

export interface AgencyBarItem {
  agency: string;
  numericValue: number;
  displayValue: string;
  detail?: string;
}

export interface TimeSeriesPoint {
  label: string;
  rangeLabel: string;
  count: number;
}

export interface MetricItem {
  id: string;
  section: 'big-numbers' | 'fun-numbers' | 'participant-patterns';
  title: string;
  value: string;
  unit?: string;
  subtitle: string;
  tooltip: string;
  icon: MetricIconKey;
  emphasis?: 'featured' | 'standard';
  accentTone?: 'orange' | 'purple';
  bars?: readonly AgencyBarItem[];
  lineSeries?: readonly TimeSeriesPoint[];
}

export interface TimelineMilestone {
  id: string;
  targetMetricId: string;
  timeLabel: string;
  minutesFromStart: number;
  title: string;
  detail: string;
  elapsedNote: string;
  isPostEvent?: boolean;
}

export const EVENT_METADATA = {
  brand: 'EXPO PP',
  title: 'Resultados da Noite',
  subtitle:
    'Uma leitura guiada pelos marcos de engajamento, horários de pico e padrões dos visitantes — celebrando o evento com sigilo total sobre faturamento por agência.',
  summaryLine: '161 participantes únicos · 127.980 créditos circulados · Janela oficial até 21h30',
  privacyNote:
    'Regra de sigilo ativa: nenhum ranking financeiro ou comparativo de arrecadação entre agências é exibido.',
} as const;

export const BIG_NUMBERS: readonly MetricItem[] = [
  {
    id: 'total-credits',
    section: 'big-numbers',
    title: 'Total de créditos circulados',
    value: '127.980',
    unit: 'créditos',
    subtitle: 'Volume total movimentado dentro da janela oficial até 21h30',
    tooltip:
      'Soma global dos créditos transferidos nas 269 operações válidas até as 21h30, sem detalhamento ou ranking por agência.',
    icon: 'coins',
    emphasis: 'featured',
    accentTone: 'orange',
  },
  {
    id: 'unique-participants',
    section: 'big-numbers',
    title: 'Total de participantes',
    value: '161',
    unit: 'CPFs únicos',
    subtitle: 'Pessoas distintas com transações válidas até 21h30',
    tooltip:
      'Contagem de CPFs únicos que efetuaram pelo menos uma transferência de créditos dentro do horário oficial.',
    icon: 'users',
    emphasis: 'standard',
    accentTone: 'purple',
  },
  {
    id: 'tx-per-minute',
    section: 'big-numbers',
    title: 'Média de transações por minuto',
    value: '1,47',
    unit: 'tx / min',
    subtitle: 'Ritmo médio entre 18h26 e 21h29 (183 min)',
    tooltip:
      'Razão entre as 269 transações válidas e os 183,1 minutos corridos da primeira (18h26) à última operação válida (21h29).',
    icon: 'activity',
    emphasis: 'standard',
    accentTone: 'orange',
  },
  {
    id: 'total-transactions',
    section: 'big-numbers',
    title: 'Total de Transações',
    value: '269',
    unit: 'operações',
    subtitle: 'Total de transferências válidas registradas até 21h30',
    tooltip:
      'Quantidade total de operações confirmadas dentro do horário oficial do evento (excluindo 2 registros após 21h30).',
    icon: 'arrow-left-right',
    emphasis: 'standard',
    accentTone: 'purple',
  },
  {
    id: 'avg-ticket',
    section: 'big-numbers',
    title: 'Ticket Médio por Transação',
    value: '475,76',
    unit: 'créditos',
    subtitle: 'Valor médio movimentado em cada transferência válida',
    tooltip:
      'Média calculada dividindo o total de créditos circulados (127.980) pelas 269 operações válidas registradas.',
    icon: 'receipt',
    emphasis: 'featured',
    accentTone: 'orange',
  },
  {
    id: 'avg-spend-visitor',
    section: 'big-numbers',
    title: 'Gasto Médio por Visitante',
    value: '794,91',
    unit: 'créditos',
    subtitle: 'Cerca de 1,67 transações por pessoa',
    tooltip:
      'Média de créditos investidos por CPF único participante dentro da janela oficial (127.980 créditos entre 161 pessoas, ~1,67 tx/pessoa).',
    icon: 'wallet',
    emphasis: 'standard',
    accentTone: 'purple',
  },
];

export const FUN_NUMBERS: readonly MetricItem[] = [
  {
    id: 'rush-hour',
    section: 'fun-numbers',
    title: 'Horário de Rush (minuto mais caótico)',
    value: '20h57',
    unit: '10 transações simultâneas',
    subtitle: 'Transações a cada 15 min na janela oficial (18h15–21h29 · 269 tx)',
    tooltip:
      'Evolução do volume de transações em intervalos de 15 minutos durante toda a janela oficial (18h15 às 21h29), desconsiderando registros após 21h30. O pico ocorre entre 20h45 e 20h59 (52 operações, incluindo o rush de 10 tx às 20h57).',
    icon: 'flame',
    emphasis: 'featured',
    accentTone: 'orange',
    lineSeries: [
      { label: '18h15', rangeLabel: '18h15 — 18h29', count: 2 },
      { label: '18h30', rangeLabel: '18h30 — 18h44', count: 4 },
      { label: '18h45', rangeLabel: '18h45 — 18h59', count: 11 },
      { label: '19h00', rangeLabel: '19h00 — 19h14', count: 8 },
      { label: '19h15', rangeLabel: '19h15 — 19h29', count: 18 },
      { label: '19h30', rangeLabel: '19h30 — 19h44', count: 24 },
      { label: '19h45', rangeLabel: '19h45 — 19h59', count: 18 },
      { label: '20h00', rangeLabel: '20h00 — 20h14', count: 8 },
      { label: '20h15', rangeLabel: '20h15 — 20h29', count: 28 },
      { label: '20h30', rangeLabel: '20h30 — 20h44', count: 35 },
      { label: '20h45', rangeLabel: '20h45 — 20h59', count: 52 },
      { label: '21h00', rangeLabel: '21h00 — 21h14', count: 39 },
      { label: '21h15', rangeLabel: '21h15 — 21h29', count: 22 },
    ],
  },
  {
    id: 'marathon',
    section: 'fun-numbers',
    title: 'Maior período',
    value: '2h e 55min',
    unit: 'Agência Blend',
    subtitle: 'Intervalo entre a 1ª e a última operação válida de cada agência',
    tooltip:
      'Diferença de tempo entre a primeira e a última operação válida (até 21h30) da mesma agência, medindo apenas duração — nunca faturamento.',
    icon: 'timer',
    emphasis: 'featured',
    accentTone: 'purple',
    bars: [
      { agency: 'Blend', numericValue: 175, displayValue: '2h e 55min', detail: '18h26 — 21h21' },
      { agency: 'Beehive', numericValue: 169, displayValue: '2h e 49min', detail: '18h31 — 21h21' },
      { agency: 'Memise', numericValue: 158, displayValue: '2h e 38min', detail: '18h39 — 21h18' },
      { agency: 'Retina', numericValue: 140, displayValue: '2h e 20min', detail: '19h00 — 21h20' },
      { agency: 'Ethos', numericValue: 93, displayValue: '1h e 33min', detail: '19h55 — 21h29' },
      { agency: 'ZeniLab', numericValue: 58, displayValue: '0h e 58min', detail: '20h23 — 21h22' },
    ],
  },
  {
    id: 'early-bird',
    section: 'fun-numbers',
    title: 'Primeira transação',
    value: '18h26',
    unit: 'Agência Blend',
    subtitle: 'Quem abriu oficialmente o placar de movimentações',
    tooltip:
      'Primeira agência a registrar uma transferência válida na abertura da feira.',
    icon: 'sunrise',
    emphasis: 'standard',
    accentTone: 'orange',
  },
  {
    id: 'night-flight',
    section: 'fun-numbers',
    title: 'Última transação válida',
    value: '21h29',
    unit: 'Agência Ethos',
    subtitle: 'A última transferência dentro do horário oficial',
    tooltip:
      'Última movimentação confirmada antes do encerramento oficial do evento às 21h30.',
    icon: 'moon',
    emphasis: 'standard',
    accentTone: 'purple',
  },
];

export const PARTICIPANT_PATTERNS: readonly MetricItem[] = [
  {
    id: 'volume-champion',
    section: 'participant-patterns',
    title: 'Campeã de Movimentação (Volume)',
    value: '70 transações',
    unit: 'Agência Beehive',
    subtitle: 'Distribuição das 269 operações válidas por agência (maior para menor)',
    tooltip:
      'Quantidade de transações válidas (até 21h30) registradas por cada agência, medindo apenas volume de operações e não faturamento.',
    icon: 'trending-up',
    emphasis: 'featured',
    accentTone: 'orange',
    bars: [
      { agency: 'Beehive', numericValue: 70, displayValue: '70 tx', detail: '26,0%' },
      { agency: 'Blend', numericValue: 68, displayValue: '68 tx', detail: '25,3%' },
      { agency: 'Memise', numericValue: 46, displayValue: '46 tx', detail: '17,1%' },
      { agency: 'ZeniLab', numericValue: 44, displayValue: '44 tx', detail: '16,4%' },
      { agency: 'Retina', numericValue: 24, displayValue: '24 tx', detail: '8,9%' },
      { agency: 'Ethos', numericValue: 17, displayValue: '17 tx', detail: '6,3%' },
    ],
  },
  {
    id: 'highest-avg-ticket',
    section: 'participant-patterns',
    title: 'Maior Ticket Médio por Operação',
    value: '568,11 créditos',
    unit: 'Agência Memise',
    subtitle: 'Valor médio por transação válida em cada agência (maior para menor)',
    tooltip:
      'Média de créditos transferidos por operação válida em cada agência, sem exibir ou comparar arrecadação total.',
    icon: 'award',
    emphasis: 'featured',
    accentTone: 'purple',
    bars: [
      { agency: 'Memise', numericValue: 568.11, displayValue: '568,11', detail: 'créditos' },
      { agency: 'Blend', numericValue: 515.74, displayValue: '515,74', detail: 'créditos' },
      { agency: 'ZeniLab', numericValue: 485.57, displayValue: '485,57', detail: 'créditos' },
      { agency: 'Beehive', numericValue: 467.79, displayValue: '467,79', detail: 'créditos' },
      { agency: 'Retina', numericValue: 369.46, displayValue: '369,46', detail: 'créditos' },
      { agency: 'Ethos', numericValue: 223.53, displayValue: '223,53', detail: 'créditos' },
    ],
  },
  {
    id: 'superfans',
    section: 'participant-patterns',
    title: 'Superfãs',
    value: '7 casos',
    unit: 'fidelidade recorrente',
    subtitle: 'Doaram mais de 1x para a mesma agência',
    tooltip:
      'Superfã é o participante que voltou a investir créditos mais de uma vez na mesma agência ao longo da noite.',
    icon: 'heart',
    emphasis: 'standard',
    accentTone: 'orange',
  },
  {
    id: 'butterflies',
    section: 'participant-patterns',
    title: 'Borboletas',
    value: '6 visitantes',
    unit: 'exploração ampla',
    subtitle: 'Interagiram com quase todas as agências',
    tooltip:
      'Visitantes curiosos que circularam pelo evento inteiro e distribuíram apoios por quase todas as agências participantes.',
    icon: 'sparkles',
    emphasis: 'standard',
    accentTone: 'purple',
  },
];

export const ALL_METRICS: readonly MetricItem[] = [
  ...BIG_NUMBERS,
  ...FUN_NUMBERS,
  ...PARTICIPANT_PATTERNS,
];

export const TIMELINE_START_MINUTES = 18 * 60 + 26; // 18h26
export const TIMELINE_END_MINUTES = 21 * 60 + 29; // 21h29

export const EVENT_TIMELINE_MILESTONES: readonly TimelineMilestone[] = [
  {
    id: 'milestone-early-bird',
    targetMetricId: 'early-bird',
    timeLabel: '18h26',
    minutesFromStart: 18 * 60 + 26,
    title: 'Primeira transação',
    detail: 'Agência Blend · Abertura do evento',
    elapsedNote: 'Marco inicial · Primeira transação às 18h26 pela Agência Blend.',
  },
  {
    id: 'milestone-rush',
    targetMetricId: 'rush-hour',
    timeLabel: '20h57',
    minutesFromStart: 20 * 60 + 57,
    title: 'Horário de Rush',
    detail: '10 transações simultâneas no mesmo minuto',
    elapsedNote: '+2h31 após a abertura · Pico máximo de transações simultâneas.',
  },
  {
    id: 'milestone-night-flight',
    targetMetricId: 'night-flight',
    timeLabel: '21h29',
    minutesFromStart: 21 * 60 + 29,
    title: 'Última transação válida',
    detail: 'Agência Ethos · Encerramento no prazo',
    elapsedNote: '+32min após o Rush · Última transação válida às 21h29 pela Agência Ethos.',
  },
];

export function computeTimelinePositionPercent(minutesFromMidnight: number): number {
  const span = TIMELINE_END_MINUTES - TIMELINE_START_MINUTES;
  if (span <= 0) return 0;
  const clamped = Math.min(
    TIMELINE_END_MINUTES,
    Math.max(TIMELINE_START_MINUTES, minutesFromMidnight),
  );
  return Math.round(((clamped - TIMELINE_START_MINUTES) / span) * 1000) / 10;
}
