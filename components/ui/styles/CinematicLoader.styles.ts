export const styles = {
    container: "fixed inset-0 z-[9999] bg-[#050508] flex flex-col items-center justify-center overflow-hidden",
    content: {
        wrapper: "relative w-full max-w-md px-6",
        text: "text-4xl md:text-6xl font-bold font-mono text-[#00C9A7] mb-8 text-center tracking-tighter"
    },
    progress: {
        track: "w-full h-[2px] bg-white/10 rounded-full overflow-hidden",
        bar: "h-full bg-gradient-to-r from-[#00C9A7] to-[#FF6B35] w-0"
    },
    decoration: {
        container: "absolute top-0 left-0 w-full h-full pointer-events-none opacity-20",
        lineTop: "absolute top-[-20%] left-[10%] w-[1px] h-[40px] bg-[#00C9A7] animate-pulse",
        lineBottom: "absolute bottom-[-20%] right-[10%] w-[1px] h-[40px] bg-[#FF6B35] animate-pulse"
    }
};
