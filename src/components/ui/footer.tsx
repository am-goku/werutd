import React from 'react'


function Footer() {
    return (
        <>
            <footer className="border-t border-emerald-800/40 bg-black/60 py-6 text-center text-sm text-emerald-300">
                <div className="mx-auto max-w-6xl px-4">© {new Date().getFullYear()} Football Fan Community</div>
            </footer>
        </>
    )
}

export default Footer