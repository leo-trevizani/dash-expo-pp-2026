import {
  Activity,
  ArrowLeftRight,
  Award,
  ClockAlert,
  Coins,
  Flame,
  Gem,
  Heart,
  Moon,
  Receipt,
  Sparkles,
  Sunrise,
  Timer,
  TrendingUp,
  Users,
  Wallet,
} from 'lucide-react';
import type { MetricIconKey } from '../data/expoData';

interface MetricIconProps {
  name: MetricIconKey;
  className?: string;
}

export function MetricIcon({ name, className = 'w-5 h-5' }: MetricIconProps) {
  switch (name) {
    case 'coins':
      return <Coins className={className} aria-hidden="true" />;
    case 'users':
      return <Users className={className} aria-hidden="true" />;
    case 'activity':
      return <Activity className={className} aria-hidden="true" />;
    case 'clock-alert':
      return <ClockAlert className={className} aria-hidden="true" />;
    case 'flame':
      return <Flame className={className} aria-hidden="true" />;
    case 'sunrise':
      return <Sunrise className={className} aria-hidden="true" />;
    case 'moon':
      return <Moon className={className} aria-hidden="true" />;
    case 'timer':
      return <Timer className={className} aria-hidden="true" />;
    case 'heart':
      return <Heart className={className} aria-hidden="true" />;
    case 'sparkles':
      return <Sparkles className={className} aria-hidden="true" />;
    case 'gem':
      return <Gem className={className} aria-hidden="true" />;
    case 'arrow-left-right':
      return <ArrowLeftRight className={className} aria-hidden="true" />;
    case 'receipt':
      return <Receipt className={className} aria-hidden="true" />;
    case 'wallet':
      return <Wallet className={className} aria-hidden="true" />;
    case 'trending-up':
      return <TrendingUp className={className} aria-hidden="true" />;
    case 'award':
      return <Award className={className} aria-hidden="true" />;
  }
}
