import { memo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

interface CodeLine {
  text: string;
  delay: number;
}

const codeLines: CodeLine[] = [
  { text: "classify: 'Levering'", delay: 0 },
  { text: "priority: Normal", delay: 800 },
  { text: "draft_response()", delay: 1600 },
  { text: "send_email()", delay: 2400 },
];

function HeroCodeAnimation() {
  const shouldReduceMotion = useReducedMotion();
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const [currentCycle, setCurrentCycle] = useState(0);

  useEffect(() => {
    if (shouldReduceMotion) {
      setVisibleLines([0, 1, 2, 3]);
      return;
    }

    const interval = setInterval(() => {
      setVisibleLines([]);
      setCurrentCycle((prev) => prev + 1);

      codeLines.forEach((line, index) => {
        setTimeout(() => {
          setVisibleLines((prev) => [...prev, index]);
        }, line.delay);
      });
    }, 4500);

    codeLines.forEach((line, index) => {
      setTimeout(() => {
        setVisibleLines((prev) => [...prev, index]);
      }, line.delay);
    });

    return () => clearInterval(interval);
  }, [shouldReduceMotion, currentCycle]);

  return (
    <div className="relative w-full max-w-[280px] sm:max-w-[320px]">
      <div className="bg-slate-900/80 backdrop-blur-sm rounded-xl border border-white/10 p-4 sm:p-5 shadow-lg opacity-80">
        <div className="flex items-center gap-2 mb-3 pb-3 border-b border-white/10">
          <div className="flex gap-1.5">
            <div className="w-2 h-2 rounded-full bg-red-400/60" />
            <div className="w-2 h-2 rounded-full bg-yellow-400/60" />
            <div className="w-2 h-2 rounded-full bg-green-400/60" />
          </div>
          <span className="text-[10px] text-slate-400 font-mono">process.py</span>
        </div>
        <div className="space-y-2 font-mono text-xs sm:text-sm">
          {codeLines.map((line, index) => (
            <motion.div
              key={`${currentCycle}-${index}`}
              initial={{ opacity: 0, x: -10 }}
              animate={
                visibleLines.includes(index)
                  ? { opacity: shouldReduceMotion ? 0.85 : 0.85, x: 0 }
                  : { opacity: 0, x: -10 }
              }
              transition={{ duration: 0.3 }}
              className="text-slate-300"
            >
              <span className="text-slate-500">→</span> {line.text}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default memo(HeroCodeAnimation);
