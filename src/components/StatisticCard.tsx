import { CheckCircle, Award, Home, Smile } from 'lucide-react';
import { Statistic } from '../types';
import { useCountUp } from '../hooks/useCountUp';

interface StatisticCardProps {
  statistic: Statistic;
  isVisible: boolean;
}

const iconMap = {
  'check-circle': CheckCircle,
  'award': Award,
  'home': Home,
  'smile': Smile,
};

export function StatisticCard({ statistic, isVisible }: StatisticCardProps) {
  const count = useCountUp(statistic.value, 2000, isVisible);
  const Icon = iconMap[statistic.icon as keyof typeof iconMap];

  const isDecimal = statistic.label.includes('CSAT');
  const displayValue = isDecimal ? (count / 10).toFixed(1) : count;
  const suffix = isDecimal ? '' : ' +';

  return (
    <div className="text-center">
      <div className="mb-4 flex justify-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#FF6633]/20 animate-pulse-slow">
          <Icon className="h-8 w-8 text-[#FF6633]" />
        </div>
      </div>
      <div className="mb-2 text-5xl font-bold text-white">
        <span className="text-[#FF6633]">{displayValue}</span>
        <span className="text-white">{suffix}</span>
      </div>
      <div className="text-lg text-gray-300">{statistic.label}</div>
    </div>
  );
}
