import { useCountUp } from '@/hooks/useCountUp';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
}

export function AnimatedCounter({ end, duration = 2000, decimals = 0, prefix = '', suffix = '' }: AnimatedCounterProps) {
  const { count, ref } = useCountUp(end, duration, decimals);

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
}
