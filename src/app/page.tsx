'use client'

import Hero from "@/components/ui/hero";
import MatchesView from "@/components/ui/matchView";
import Navbar from "@/components/ui/navbar";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

type Route = "home" | "matches";

export default function FootballFanPage({ logoSrc = '/logo-3d.svg' }: { logoSrc?: string }) {
  const [route, setRoute] = useState<Route>("home");

  return (
    <div className="min-h-screen bg-black text-emerald-50">
      <a href="#content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded focus:bg-emerald-700 focus:px-3 focus:py-2">
        Skip to content
      </a>

      <Navbar onNavigate={setRoute} current={route} logoSrc={logoSrc} />

      <main id="content" className="">
        <AnimatePresence mode="wait">
          {route === "home" && (
            <motion.div key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
              <Hero onCta={() => setRoute("matches")} logoSrc={logoSrc} />
              {/* Short About Section */}
              <section className="mx-auto max-w-4xl px-6 pb-16">
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5 }}
                  className="rounded-2xl border border-emerald-800/40 bg-emerald-950/30 p-6 text-emerald-200"
                >
                  <h3 className="mb-2 text-lg font-semibold text-emerald-100">About our community</h3>
                  <p className="text-sm leading-6 opacity-90">
                    Welcome to the fan-run hub for matchdays, analysis, and banter. Join live threads, track stats in real time, and celebrate the magic of football with supporters around the world.
                  </p>
                </motion.div>
              </section>
            </motion.div>
          )}

          {route === "matches" && (
            <motion.div key="matches" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
              <MatchesView />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}