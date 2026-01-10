import { Link } from "react-router-dom";
import { motion, useReducedMotion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 150, damping: 15 });
  const smoothY = useSpring(mouseY, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [0.6, -0.6]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-0.6, 0.6]);
  const translateX = useTransform(smoothX, [-0.5, 0.5], [-6, 6]);
  const translateY = useTransform(smoothY, [-0.5, 0.5], [-6, 6]);

  useEffect(() => {
    if (shouldReduceMotion || !containerRef.current) return;

    let rafId: number | null = null;
    let lastX = 0;
    let lastY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      // Throttle with requestAnimationFrame to avoid jank
      if (rafId !== null) return;

      rafId = requestAnimationFrame(() => {
        const rect = containerRef.current?.getBoundingClientRect();
        if (!rect) {
          rafId = null;
          return;
        }

        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const x = (e.clientX - centerX) / (rect.width / 2);
        const y = (e.clientY - centerY) / (rect.height / 2);

        // Only update if change is significant (reduce unnecessary updates)
        if (Math.abs(x - lastX) > 0.01 || Math.abs(y - lastY) > 0.01) {
          mouseX.set(x * 0.02);
          mouseY.set(y * 0.02);
          lastX = x;
          lastY = y;
        }

        rafId = null;
      });
    };

    const handleMouseLeave = () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
      mouseX.set(0);
      mouseY.set(0);
      lastX = 0;
      lastY = 0;
    };

    const container = containerRef.current;
    container?.addEventListener("mousemove", handleMouseMove, { passive: true });
    container?.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
      container?.removeEventListener("mousemove", handleMouseMove);
      container?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mouseX, mouseY, shouldReduceMotion]);

  const logos = [
    { name: "Gmail", path: "/logo-gmail.png" },
    { name: "Outlook", path: "/logo-outlook.png" },
    { name: "Shopify", path: "/logo-shopify.png" },
    { name: "Zendesk", path: "/logo-zendesk.png" },
    { name: "Bol.com", path: "/Bol-logo-short.png" },
    { name: "Intercom", path: "/Intercom-logo.png" },
    { name: "WooCommerce", path: "/Woo-logo-long.png" },
  ];

  const notifications = [
    {
      id: 1,
      message: "Retourvraag automatisch afgehandeld",
      time: "2m",
      icon: "✓",
      delay: 0.4,
      yOffset: 0,
    },
    {
      id: 2,
      message: "Track & Trace gestuurd",
      time: "5m",
      icon: "📦",
      delay: 0.6,
      yOffset: 80,
    },
    {
      id: 3,
      message: "Orderstatus uitgelegd",
      time: "8m",
      icon: "✉️",
      delay: 0.8,
      yOffset: 160,
    },
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-[88vh] md:min-h-[90vh] overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse at 20% 30%, rgba(255, 182, 193, 0.15) 0%, transparent 50%),
          radial-gradient(ellipse at 80% 70%, rgba(173, 216, 230, 0.15) 0%, transparent 50%),
          linear-gradient(to bottom, #ffffff 0%, #fafafa 100%)
        `,
      }}
    >
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 60%, rgba(0,0,0,0) 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 60%, rgba(0,0,0,0) 100%)",
        }}
      />

      {/* Subtle vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, transparent 0%, transparent 50%, rgba(0,0,0,0.02) 100%)",
        }}
      />

      {/* Soft glow behind mockup - no blur for performance */}
      <div className="absolute top-1/2 right-[15%] w-[600px] h-[600px] bg-blue-200/8 rounded-full -translate-y-1/2 pointer-events-none hidden lg:block" />

      <div className="max-w-[1200px] mx-auto sm:px-6 lg:px-8 relative z-10 pt-20 md:pt-24 pb-8">
        <div className="grid lg:grid-cols-[48%_52%] gap-12 lg:gap-16 items-start lg:items-center min-h-[calc(88vh-140px)] md:min-h-[calc(90vh-140px)]">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left pt-8 lg:pt-0">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6"
            >
              <span className="text-xs font-bold tracking-[0.15em] text-slate-500 uppercase">
                CUSMATO
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-slate-900 leading-[1.05] tracking-tight mb-6"
            >
              Automatiseer klantantwoorden met{" "}
              <span className="text-blue-600">Cusmato</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg md:text-xl text-slate-600 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
            >
              Cusmato automatiseert e-mail- en chatvragen voor e-commerce — 24/7, in jouw tone of voice, met controle wanneer je het wil.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <motion.div
                whileHover={shouldReduceMotion ? {} : { scale: 1.02, y: -2 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  to="/probeer-14-dagen-gratis"
                  className="inline-flex items-center justify-center rounded-full h-10 sm:h-auto px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold bg-blue-600 text-white shadow-sm hover:bg-blue-700 transition-all hover:shadow-md"
                >
                  Probeer 14 dagen gratis
                </Link>
              </motion.div>
              <motion.div
                whileHover={shouldReduceMotion ? {} : { scale: 1.02, y: -2 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column - Mockup with Notifications */}
          <motion.div
            className="hidden lg:block relative"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={
              shouldReduceMotion
                ? {}
                : {
                    rotateX,
                    rotateY,
                    x: translateX,
                    y: translateY,
                    transformStyle: "preserve-3d",
                  }
            }
          >
            {/* Main Mockup Container */}
            <motion.div
              className="relative bg-white rounded-[24px] overflow-hidden"
              style={{
                boxShadow: `
                  0 25px 50px -12px rgba(0, 0, 0, 0.1),
                  0 0 0 1px rgba(0, 0, 0, 0.06),
                  0 8px 16px -4px rgba(0, 0, 0, 0.04)
                `,
              }}
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      y: [0, -6, 0],
                    }
              }
              transition={
                shouldReduceMotion
                  ? {}
                  : {
                      y: {
                        duration: 9,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }
              }
            >
              {/* Mac-style title bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-200/60 bg-slate-50/50">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 text-center">
                  <span className="text-xs font-medium text-slate-500">Cusmato Dashboard</span>
                </div>
                <div className="w-12" />
              </div>

              {/* Dashboard Screenshot */}
              <img
                src="/dashboard.png"
                alt="Cusmato dashboard - AI klantenservice automatisering"
                className="w-full h-auto object-cover block"
                loading="eager"
              />
            </motion.div>

            {/* Floating Notification Toasts */}
            {notifications.map((notification, index) => (
              <motion.div
                key={notification.id}
                className="absolute right-6 bg-white/98 border border-slate-200/80 rounded-[16px] px-4 py-3 shadow-lg z-20"
                style={{ top: `${notification.yOffset + 32}px` }}
                initial={{ opacity: 0, x: 20, y: 10 }}
                animate={
                  shouldReduceMotion
                    ? { opacity: 1, x: 0, y: 0 }
                    : {
                        opacity: 1,
                        x: 0,
                        y: [0, -3, 0],
                      }
                }
                transition={{
                  opacity: { duration: 0.5, delay: notification.delay },
                  x: { duration: 0.5, delay: notification.delay },
                  y: {
                    duration: 4 + index,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: notification.delay + 1,
                  },
                }}
              >
                <div className="flex items-center justify-between gap-3 min-w-[240px] max-w-[280px]">
                  <div className="flex items-center gap-2.5 flex-1 min-w-0">
                    <div className="text-sm flex-shrink-0">{notification.icon}</div>
                    <span className="text-sm font-semibold text-slate-900 truncate">
                      {notification.message}
                    </span>
                  </div>
                  <span className="text-xs text-slate-400 whitespace-nowrap flex-shrink-0 ml-2">
                    {notification.time}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Mobile Mockup - Below Text */}
          <motion.div
            className="lg:hidden mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl border border-slate-200/60">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-200/60 bg-slate-50/50">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 text-center">
                  <span className="text-xs font-medium text-slate-500">Cusmato Dashboard</span>
                </div>
                <div className="w-12" />
              </div>
              <img
                src="/dashboard.png"
                alt="Cusmato dashboard"
                className="w-full h-auto object-cover block"
                loading="eager"
              />
            </div>

            {/* Logo Row - Mobile */}
            <motion.div
              className="flex items-center justify-center gap-6 mt-8 flex-wrap"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              {logos.map((logo, index) => (
                <motion.div
                  key={logo.name}
                  className="w-10 h-10 rounded-xl bg-white shadow-sm border border-slate-200/60 flex items-center justify-center p-2"
                  whileHover={shouldReduceMotion ? {} : { scale: 1.1, y: -2 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2, delay: 0.8 + index * 0.05 }}
                >
                  <img
                    src={logo.path}
                    alt={`${logo.name} logo`}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Logo Row - Desktop (below mockup) */}
        <motion.div
          className="hidden lg:flex items-center justify-center gap-6 mt-12 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          {logos.map((logo, index) => (
            <motion.div
              key={logo.name}
              className="w-12 h-12 rounded-xl bg-white shadow-sm border border-slate-200/60 flex items-center justify-center p-2"
              whileHover={shouldReduceMotion ? {} : { scale: 1.1, y: -2 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2, delay: 1 + index * 0.05 }}
            >
              <img
                src={logo.path}
                alt={`${logo.name} logo`}
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
