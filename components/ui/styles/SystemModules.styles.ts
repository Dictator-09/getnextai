export const styles = {
    section: "relative py-24 md:py-32 overflow-hidden bg-[#030305]",
    background: {
        container: "absolute inset-0 pointer-events-none",
        grid: "absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20",
        glow: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#00C9A7]/5 blur-[120px] rounded-full"
    },
    header: {
        container: "mb-16 md:mb-24",
        pill: "flex items-center gap-3 mb-4",
        dot: "w-2 h-2 bg-[#00C9A7] rounded-full animate-pulse",
        label: "font-mono text-xs text-[#00C9A7] tracking-widest uppercase",
        title: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight max-w-3xl",
        subtitle: "text-white/40"
    },
    mobile: {
        container: "md:hidden space-y-4",
        card: "bg-[#0A0A0F] border border-white/10 rounded-2xl p-6 relative overflow-hidden",
        cardHeader: "flex items-center justify-between mb-4",
        label: "text-[#00C9A7] text-xs font-mono tracking-wider",
        status: "bg-[#00C9A7]/10 text-[#00C9A7] px-2 py-1 text-[10px] font-mono rounded",
        title: "text-xl font-bold text-white mb-1",
        subtitle: "text-white/60 text-sm mb-4",
        description: "text-white/70 text-sm leading-relaxed mb-6 border-l-2 border-[#00C9A7]/20 pl-4",
        tags: "flex flex-wrap gap-2",
        tag: "px-2 py-1 bg-white/5 border border-white/5 rounded text-[10px] text-white/50 font-mono"
    },
    desktop: {
        container: "hidden md:flex flex-col gap-4",
        card: {
            base: "group relative flex items-stretch gap-6 p-8 rounded-2xl border transition-all duration-300 cursor-pointer",
            active: "bg-[#0A0A0F] border-[#00C9A7]/30 shadow-[0_0_60px_rgba(0,201,167,0.1)] translate-x-4",
            inactive: "bg-[#050508]/50 border-white/5 hover:border-white/10"
        },
        indicator: "w-1 rounded-full transition-colors duration-300",
        indicatorActive: "bg-[#00C9A7]",
        indicatorInactive: "bg-white/5",
        contentWrapper: "flex-1",
        header: "flex items-center gap-3 mb-2",
        label: "font-mono text-xs tracking-widest transition-colors",
        labelActive: "text-[#00C9A7]",
        labelInactive: "text-white/30",
        title: "text-2xl font-display font-bold text-white mb-1",
        subtitle: "text-sm transition-colors",
        subtitleActive: "text-[#00C9A7]/80",
        subtitleInactive: "text-white/40",
        description: "text-white/70 leading-relaxed mb-6 max-w-2xl",
        tagContainer: "flex flex-wrap gap-2",
        tag: "px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-white/60 font-mono",
        iconContainer: "flex items-center justify-center w-24",
        iconBox: "w-12 h-12 border transition-colors",
        iconBoxActive: "border-[#00C9A7]/50",
        iconBoxInactive: "border-white/10",
        iconFill: "w-full h-full bg-[#00C9A7]/10"
    },
    cta: {
        container: "mt-16 md:mt-24 flex flex-col sm:flex-row items-center gap-6",
        button: "group relative px-8 py-4 bg-[#00C9A7] text-[#050508] font-display font-bold rounded-full overflow-hidden transition-transform active:scale-95",
        buttonText: "relative z-10",
        buttonHover: "absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300",
        footnote: "text-white/30 text-sm font-mono"
    },
    container: "container mx-auto px-4 sm:px-6 relative z-10"
};
