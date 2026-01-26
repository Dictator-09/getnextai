export const styles = {
    section: "py-24 md:py-32 relative overflow-hidden",
    background: {
        base: "absolute inset-0 bg-deep-void",
        grid: "absolute inset-0 opacity-10 mix-blend-screen"
    },
    container: "container mx-auto px-6 relative z-10",
    header: {
        wrapper: "text-center mb-16 md:mb-24",
        badge: {
            wrapper: "flex items-center justify-center gap-3 mb-4",
            dot: "w-2 h-2 bg-acid-lime rounded-full animate-pulse",
            text: "font-mono text-xs text-acid-lime tracking-widest uppercase"
        },
        title: "text-3xl md:text-5xl font-display font-medium text-white mb-4",
        highlight: "text-white/40",
        description: "text-white/40 max-w-2xl mx-auto font-sans font-light"
    },
    grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
    step: {
        wrapper: "group relative",
        connector: "hidden lg:block absolute top-[2.5rem] left-[60%] w-[120%] h-px bg-gradient-to-r from-acid-lime/30 to-transparent z-0",
        card: "relative bg-[#050505] border border-white/5 rounded-lg p-8 hover:border-acid-lime/30 transition-all duration-300 h-full flex flex-col z-10 group-hover:bg-[#080808]",
        glow: "absolute inset-0 bg-acid-lime/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none",
        iconBox: "w-12 h-12 rounded bg-acid-lime/10 border border-acid-lime/20 flex items-center justify-center text-acid-lime mb-8 group-hover:scale-110 group-hover:bg-acid-lime group-hover:text-black transition-all duration-300",
        number: "absolute top-4 right-4 font-mono text-2xl font-bold text-white/5 group-hover:text-acid-lime/20 transition-colors",
        title: "text-lg font-display font-bold text-white mb-3 group-hover:text-acid-lime transition-colors",
        description: "text-white/40 text-sm leading-relaxed mb-6 font-sans",
        status: "inline-flex items-center gap-2 px-2 py-1 bg-white/5 rounded text-[10px] font-mono text-acid-lime/70 uppercase tracking-wider border border-white/5"
    },
    cta: {
        wrapper: "text-center mt-20",
        button: "px-8 py-4 bg-acid-lime text-black font-sans font-bold rounded-full text-lg hover:bg-[#b3e600] transition-all duration-300 flex items-center gap-2 mx-auto box-shadow-[0_0_20px_rgba(204,255,0,0.2)]",
        icon: "w-5 h-5"
    }
};
