import { useAnimatedCounter } from "@/hooks/useAnimation";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

interface AnimatedCounterProps {
  end: number;
  start?: number;
  duration?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
}

export function AnimatedCounter({
  end,
  start = 0,
  duration = 2000,
  className,
  prefix = "",
  suffix = ""
}: AnimatedCounterProps) {
  const { ref, isVisible } = useScrollReveal();
  const count = useAnimatedCounter(isVisible ? end : start, duration, start);

  return (
    <span
      ref={ref}
      className={cn("refined-text font-bold", className)}
    >
      {prefix}{count}{suffix}
    </span>
  );
}