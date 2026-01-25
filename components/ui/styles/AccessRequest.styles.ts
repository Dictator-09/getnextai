export const styles = {
    section: "relative py-24 md:py-40 overflow-hidden",
    background: {
        base: "absolute inset-0 bg-[#030305]",
        grid: "absolute inset-0 opacity-10"
    },
    container: "container mx-auto px-4 sm:px-6 relative z-10",
    wrapper: "max-w-4xl mx-auto",
    header: {
        container: "text-center mb-12 md:mb-16",
        badge: "inline-flex items-center gap-2 mb-4",
        dot: "w-2 h-2 bg-[#00C9A7] rounded-full animate-pulse",
        label: "font-mono text-xs text-[#00C9A7] tracking-widest uppercase",
        title: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight mb-4",
        subtitle: "text-white/40 text-base md:text-lg max-w-xl mx-auto"
    },
    confirmation: {
        container: "text-center py-16",
        iconWrapper: "w-20 h-20 mx-auto mb-8 rounded-full bg-[#00C9A7]/10 border border-[#00C9A7]/30 flex items-center justify-center",
        icon: "w-10 h-10 bg-[#00C9A7] rounded-full",
        title: "text-2xl md:text-3xl font-display font-bold text-white mb-3",
        date: "text-white/50 mb-2",
        note: "text-[#00C9A7]/80 text-sm font-mono",
        resetButtonContainer: "mt-10",
        resetButton: "text-white/30 hover:text-white/50 text-sm transition-colors"
    },
    form: {
        container: "space-y-10",
        label: "block text-white/30 text-xs font-mono uppercase tracking-widest mb-4",
        grid: "grid grid-cols-3 gap-3 md:gap-4",
        timeGrid: "grid grid-cols-2 md:grid-cols-4 gap-3",
        inputs: {
            container: "space-y-4",
            row: "grid md:grid-cols-2 gap-4",
            field: "w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-[#00C9A7]/50 transition-colors"
        },
        submit: {
            button: "w-full md:w-auto px-10 py-5 bg-[#00C9A7] text-[#050508] font-display font-bold text-lg rounded-full transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-3",
            spinner: "w-5 h-5 animate-spin"
        }
    },
    selection: {
        button: "relative p-4 md:p-6 rounded-xl border transition-all duration-300",
        timeButton: "relative p-4 rounded-xl border transition-all duration-300",
        active: "bg-[#00C9A7]/10 border-[#00C9A7]/50 shadow-[0_0_30px_rgba(0,201,167,0.1)]",
        activeTime: "bg-[#00C9A7]/10 border-[#00C9A7]/50 shadow-[0_0_20px_rgba(0,201,167,0.1)]",
        inactive: "bg-white/5 border-white/10 hover:border-white/20",
        disabled: "bg-white/5 border-white/5 opacity-30 cursor-not-allowed",
        labelActive: "text-[#00C9A7]",
        labelInactive: "text-white/30",
        textActive: "text-white",
        textInactive: "text-white/60",
        indicator: "absolute -top-1 -right-1 w-3 h-3 bg-[#00C9A7] rounded-full"
    }
};
