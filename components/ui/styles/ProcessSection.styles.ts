export const styles = {
    section: "py-24 md:py-32 relative overflow-hidden",
    background: {
        base: "absolute inset-0 bg-[#030305]",
        grid: "absolute inset-0 opacity-10"
    },
    container: "container mx-auto px-6 relative z-10",
    header: {
        wrapper: "text-center mb-16 md:mb-24",
        badge: {
            wrapper: "flex items-center justify-center gap-3 mb-4",
            dot: "w-2 h-2 bg-[#00C9A7] rounded-full animate-pulse",
            text: "font-mono text-xs text-[#00C9A7] tracking-widest uppercase"
        },
        title: "text-3xl md:text-5xl font-display font-bold text-white mb-4",
        highlight: "text-white/40",
        description: "text-white/40 max-w-2xl mx-auto font-light"
    },
    grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",
    step: {
        wrapper: "group relative",
        connector: "hidden lg:block absolute top-12 left-[60%] w-[120%] h-px bg-gradient-to-r from-[#00C9A7]/30 to-transparent z-0",
        card: "relative bg-[#050508]/80 backdrop-blur-sm border border-white/5 rounded-2xl p-8 hover:border-[#00C9A7]/30 transition-all duration-300 h-full flex flex-col z-10",
        glow: "absolute inset-0 bg-[#00C9A7]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl",
        iconBox: "w-12 h-12 rounded-lg bg-[#00C9A7]/10 border border-[#00C9A7]/30 flex items-center justify-center text-[#00C9A7] mb-6 mb-8 group-hover:scale-110 transition-transform duration-300",
        number: "absolute top-0 right-0 font-mono text-4xl font-bold text-white/5 group-hover:text-white/10 transition-colors",
        title: "text-xl font-display font-bold text-white mb-3 group-hover:text-[#00C9A7] transition-colors",
        description: "text-white/40 text-sm leading-relaxed mb-6",
        status: "inline-flex items-center gap-2 px-2 py-1 bg-white/5 rounded text-[10px] font-mono text-[#00C9A7]/70 uppercase tracking-wider"
    },
    cta: {
        wrapper: "text-center mt-20",
        button: "px-8 py-4 bg-transparent border border-[#00C9A7]/30 text-[#00C9A7] font-display font-bold rounded-full text-lg hover:bg-[#00C9A7]/10 transition-all duration-300 flex items-center gap-2 mx-auto shadow-[0_0_20px_rgba(0,201,167,0.1)]",
        icon: "w-5 h-5"
    }
};
