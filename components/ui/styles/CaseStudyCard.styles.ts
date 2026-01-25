export const styles = {
    wrapper: "group relative h-full",
    card: {
        base: "relative bg-[#050508]/90 backdrop-blur-xl border rounded-3xl p-8 transition-all duration-500 h-full flex flex-col group-hover:-translate-y-2",
        hover: "hover:border-white/20"
    },
    topBar: "flex items-center justify-between mb-8",
    badge: {
        base: "inline-flex items-center gap-2 px-3 py-1.5 border rounded-md text-[10px] font-mono font-bold uppercase tracking-wider",
        icon: "w-3 h-3"
    },
    iconBox: "w-10 h-10 rounded-lg border flex items-center justify-center",
    title: "text-2xl font-display font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/50 transition-all",
    location: "text-white/40 text-xs font-mono mb-6 uppercase tracking-wider",
    problem: {
        wrapper: "mb-6 pl-4 border-l border-white/10",
        text: "text-white/60 text-sm leading-relaxed",
        label: "text-white/30 text-xs font-mono block mb-1"
    },
    solution: {
        wrapper: "mb-8 pl-4 border-l border-[#B8FF00]/30",
        text: "text-white/80 text-sm leading-relaxed",
        label: "text-xs font-mono block mb-1 uppercase"
    },
    metrics: {
        grid: "grid grid-cols-3 gap-2 mt-auto",
        item: "bg-white/5 border border-white/5 rounded-lg p-3 text-center group-hover:bg-white/10 transition-colors",
        value: "text-lg font-bold font-display",
        label: "text-white/30 text-[10px] font-mono uppercase mt-1"
    },
    link: "mt-8 inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest group-hover:gap-4 transition-all duration-300",
    linkIcon: "w-4 h-4"
};

export const colorVariants = {
    neon: {
        border: "border-[#B8FF00]/30",
        text: "text-[#B8FF00]",
        bg: "bg-[#B8FF00]/10",
        glow: "shadow-[0_0_30px_rgba(184,255,0,0.1)]",
        gradient: "from-[#B8FF00]/20 to-[#B8FF00]/5"
    },
    cyan: {
        border: "border-cyan-500/30",
        text: "text-cyan-400",
        bg: "bg-cyan-500/10",
        glow: "shadow-[0_0_30px_rgba(6,182,212,0.1)]",
        gradient: "from-cyan-500/20 to-cyan-500/5"
    },
    white: {
        border: "border-white/30",
        text: "text-white",
        bg: "bg-white/10",
        glow: "shadow-[0_0_30px_rgba(255,255,255,0.1)]",
        gradient: "from-white/20 to-white/5"
    }
};
