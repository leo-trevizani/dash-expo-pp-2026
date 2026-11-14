import test from 'node:test';
import assert from 'node:assert/strict';
import {
  ALL_METRICS,
  BIG_NUMBERS,
  EVENT_TIMELINE_MILESTONES,
  FUN_NUMBERS,
  PARTICIPANT_PATTERNS,
  TIMELINE_END_MINUTES,
  TIMELINE_START_MINUTES,
  computeTimelinePositionPercent,
} from './expoData';

test('contains exact 3 sections and 14 metrics', () => {
  assert.equal(BIG_NUMBERS.length, 6);
  assert.equal(FUN_NUMBERS.length, 6);
  assert.equal(PARTICIPANT_PATTERNS.length, 2);
  assert.equal(ALL_METRICS.length, 14);
  assert.equal(EVENT_TIMELINE_MILESTONES.length, 3);
  assert.deepEqual(
    PARTICIPANT_PATTERNS.map((m) => m.id),
    ['superfans', 'butterflies'],
  );
  assert.equal(
    FUN_NUMBERS.some((m) => m.id === 'volume-champion'),
    true,
  );
  assert.equal(
    FUN_NUMBERS.some((m) => m.id === 'highest-avg-ticket'),
    true,
  );
});

test('all requested values are present without post-21h30 transactions', () => {
  const byId = Object.fromEntries(ALL_METRICS.map((m) => [m.id, m]));
  assert.equal(byId['total-credits'].value, '127.980');
  assert.equal(byId['unique-participants'].value, '161');
  assert.equal(byId['tx-per-minute'].value, '1,47');
  assert.equal(byId['total-transactions'].value, '269');
  assert.equal(byId['total-transactions'].unit, 'operações');
  assert.equal(byId['avg-ticket'].value, '475,76');
  assert.equal(byId['avg-ticket'].unit, 'créditos');
  assert.equal(byId['avg-spend-visitor'].value, '794,91');
  assert.equal(byId['avg-spend-visitor'].subtitle, 'Cerca de 1,67 transações por pessoa');
  assert.equal(byId['rush-hour'].value, '20h57');
  assert.equal(byId['early-bird'].title, 'Primeira transação');
  assert.equal(byId['early-bird'].value, '18h26');
  assert.equal(byId['early-bird'].unit, 'Agência Blend');
  assert.equal(byId['night-flight'].title, 'Última transação válida');
  assert.equal(byId['night-flight'].value, '21h29');
  assert.equal(byId['night-flight'].unit, 'Agência Ethos');
  assert.equal(byId['marathon'].title, 'Maior período');
  assert.equal(byId['marathon'].value, '2h e 55min');
  assert.equal(byId['marathon'].unit, 'Agência Blend');
  assert.equal(byId['volume-champion'].title, 'Campeã de Movimentação (Volume)');
  assert.equal(byId['volume-champion'].value, '70 transações');
  assert.equal(byId['volume-champion'].unit, 'Agência Beehive');
  assert.equal(byId['highest-avg-ticket'].title, 'Maior Ticket Médio por Operação');
  assert.equal(byId['highest-avg-ticket'].value, '568,11 créditos');
  assert.equal(byId['highest-avg-ticket'].unit, 'Agência Memise');
  assert.equal(byId['superfans'].value, '7 casos');
  assert.equal(byId['butterflies'].value, '6 visitantes');
});

test('bar chart cards include all 6 agencies ordered from largest to smallest', () => {
  const byId = Object.fromEntries(ALL_METRICS.map((m) => [m.id, m]));
  const chartIds = ['marathon', 'volume-champion', 'highest-avg-ticket'] as const;

  for (const id of chartIds) {
    const bars = byId[id].bars;
    assert.ok(bars && bars.length === 6, `${id} must have 6 agency bars`);
    for (let i = 1; i < bars.length; i += 1) {
      assert.ok(
        bars[i - 1].numericValue >= bars[i].numericValue,
        `${id} bars must be sorted descending`,
      );
    }
  }

  const totalTx = byId['volume-champion'].bars!.reduce(
    (sum, item) => sum + item.numericValue,
    0,
  );
  assert.equal(totalTx, 269);
  assert.equal(byId['marathon'].bars![0].agency, 'Blend');
  assert.equal(byId['volume-champion'].bars![0].agency, 'Beehive');
  assert.equal(byId['highest-avg-ticket'].bars![0].agency, 'Memise');
});

test('rush-hour line series covers 15-minute official window with peak at 20h45', () => {
  const rush = ALL_METRICS.find((m) => m.id === 'rush-hour');
  assert.ok(rush?.lineSeries && rush.lineSeries.length === 13);
  const windowTotal = rush.lineSeries.reduce((sum, pt) => sum + pt.count, 0);
  assert.equal(windowTotal, 269); // 271 total minus 2 post-21h30 transactions
  const peak = rush.lineSeries.reduce((best, pt) => (pt.count > best.count ? pt : best));
  assert.equal(peak.label, '20h45');
  assert.equal(peak.count, 52);
});

test('every metric provides a meaningful tooltip explanation and respects revenue secrecy', () => {
  const forbiddenRankingWords = ['ranking', 'arrecadou mais', 'top 1', '1º lugar', 'campeã de vendas'];
  for (const metric of ALL_METRICS) {
    assert.ok(metric.tooltip.trim().length >= 20, `Tooltip too short for ${metric.id}`);
    const combinedText = `${metric.title} ${metric.value} ${metric.unit ?? ''} ${metric.subtitle}`.toLowerCase();
    for (const forbidden of forbiddenRankingWords) {
      assert.equal(combinedText.includes(forbidden), false);
    }
  }
});

test('timeline position helper clamps and scales milestones in chronological order', () => {
  assert.equal(computeTimelinePositionPercent(TIMELINE_START_MINUTES), 0);
  assert.equal(computeTimelinePositionPercent(TIMELINE_END_MINUTES), 100);
  assert.equal(computeTimelinePositionPercent(TIMELINE_START_MINUTES - 30), 0);

  const positions = EVENT_TIMELINE_MILESTONES.map((m) =>
    computeTimelinePositionPercent(m.minutesFromStart),
  );
  for (let i = 1; i < positions.length; i += 1) {
    assert.ok(positions[i] > positions[i - 1], 'Timeline milestones must progress monotonically');
  }

  const funIds = new Set(FUN_NUMBERS.map((m) => m.id));
  for (const milestone of EVENT_TIMELINE_MILESTONES) {
    assert.equal(funIds.has(milestone.targetMetricId), true);
  }
});
