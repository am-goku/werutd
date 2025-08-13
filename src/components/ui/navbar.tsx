import { cn } from "@/lib/utils";
import Image from "next/image";

type Route = "home" | "matches";

type Props = {
    onNavigate: (route: Route) => void;
    current: Route;
    logoSrc?: string;
};

export default function Navbar({ onNavigate, current, logoSrc }: Props) {
    return (
        <nav className="sticky top-0 z-40 w-full border-b border-emerald-800/40 bg-black/60 backdrop-blur supports-[backdrop-filter]:bg-black/40">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
                <div className="flex items-center gap-3">
                    {logoSrc ? (
                        // <img src={logoSrc} alt="Club logo" className="h-8 w-auto" />
                        // eslint-disable-next-line @next/next/no-img-element
                        <Image
                            src="/logo-3d.svg" // public/logo.svg
                            alt="Logo"
                            draggable={false}
                            width={50}
                            height={20}
                            style={{ filter: "brightness(0) invert(1)" }} // makes black → white
                        />
                    ) : (
                        <div className="h-8 w-8 rounded bg-emerald-600" aria-hidden />
                    )}
                    {/* <span className="text-sm text-emerald-300">United by the Beautiful Game</span> */}
                </div>
                <div className="flex items-center gap-2">
                    <button
                        className={cn(
                            "rounded-xl px-3 py-2 text-sm transition focus:outline-none focus:ring-2 focus:ring-emerald-500",
                            current === "home" ? "bg-emerald-700 text-white" : "text-emerald-300 hover:bg-emerald-800/40"
                        )}
                        onClick={() => onNavigate("home")}
                        aria-current={current === "home" ? "page" : undefined}
                    >
                        Home
                    </button>
                    <button
                        className={cn(
                            "rounded-xl px-3 py-2 text-sm transition focus:outline-none focus:ring-2 focus:ring-emerald-500",
                            current === "matches" ? "bg-emerald-700 text-white" : "text-emerald-300 hover:bg-emerald-800/40"
                        )}
                        onClick={() => onNavigate("matches")}
                        aria-current={current === "matches" ? "page" : undefined}
                    >
                        Matches
                    </button>
                </div>
            </div>
        </nav>
    );
}