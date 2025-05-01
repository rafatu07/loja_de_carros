import { useInView } from 'react-intersection-observer';
import { useCountUp } from '@/hooks/useCountUp';

interface AnimatedStatProps {
  end: number;
  label: string;
  prefix?: string;
}

export function AnimatedStat({ end, label, prefix = '' }: AnimatedStatProps) {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const value = useCountUp({
    end: inView ? end : 0,
    prefix,
  });

  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl font-bold text-blue-500">{value}</p>
      <p className="text-zinc-600 mt-2">{label}</p>
    </div>
  );
} 