import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";


function Hero({ onCta, logoSrc }: { onCta: () => void; logoSrc?: string }) {
    return (
        <section
            className="relative flex min-h-[calc(100vh-56px)] items-center justify-center overflow-hidden bg-black"
            aria-label="Landing hero"
        >
            {/* Background image overlay */}
            {/* <div
                className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center"
                aria-hidden
            /> */}
            <div
                className="absolute inset-0 bg-[url('/cover/cover.png')] bg-cover bg-center"
                aria-hidden
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black" aria-hidden />

            <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
                <AnimatePresence>
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="space-y-6"
                    >
                        {logoSrc ? (
                            <div className="flex justify-center">
                                <Image
                                    src={logoSrc} // public/logo.svg
                                    alt="Logo"
                                    draggable={false}
                                    width={200}
                                    height={80}
                                    style={{ filter: "brightness(0) invert(1)" }} // makes black → white
                                />
                            </div>
                        ) : (
                            <div className="mx-auto h-20 w-20 rounded bg-emerald-600" aria-hidden />
                        )}

                        <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
                            United by the Beautiful Game
                        </h1>
                        <p className="mx-auto max-w-xl text-base text-emerald-200 sm:text-lg">
                            A global community of football lovers. Match threads, live chats, stats, and highlights — all in one place.
                        </p>
                        <div>
                            <motion.button
                                onClick={onCta}
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                                className="inline-flex items-center rounded-2xl bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                            >
                                View Matches
                            </motion.button>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}

export default Hero;