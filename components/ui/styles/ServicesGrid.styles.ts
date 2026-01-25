export const colorClasses = {
    cyan: {
        gradient: "from-cyan-500 to-cyan-600",
        gradientLight: "from-cyan-500/20 via-cyan-400/20 to-cyan-600/20",
        bg: "bg-cyan-500/10",
        border: "border-cyan-500/20",
        text: "text-cyan-400",
        textDark: "text-cyan-300",
        glow: "shadow-[0_0_30px_rgba(6,182,212,0.3)]",
        glowHover: "hover:shadow-[0_0_50px_rgba(6,182,212,0.5)]"
    },
    purple: {
        gradient: "from-purple-500 to-purple-600",
        gradientLight: "from-purple-500/20 via-purple-400/20 to-purple-600/20",
        bg: "bg-purple-500/10",
        border: "border-purple-500/20",
        text: "text-purple-400",
        textDark: "text-purple-300",
        glow: "shadow-[0_0_30px_rgba(168,85,247,0.3)]",
        glowHover: "hover:shadow-[0_0_50px_rgba(168,85,247,0.5)]"
    },
    green: {
        gradient: "from-green-500 to-green-600",
        gradientLight: "from-green-500/20 via-green-400/20 to-green-600/20",
        bg: "bg-green-500/10",
        border: "border-green-500/20",
        text: "text-green-400",
        textDark: "text-green-300",
        glow: "shadow-[0_0_30px_rgba(34,197,94,0.3)]",
        glowHover: "hover:shadow-[0_0_50px_rgba(34,197,94,0.5)]"
    }
};

export const styles = {
    card: {
        container: "group relative",
        glow: "absolute -inset-1 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700",
        content: "relative h-full flex flex-col bg-black/40 backdrop-blur-xl rounded-[2rem] p-6 sm:p-8 border border-white/20 hover:border-white/30 transition-all duration-500",
        orb: "absolute top-0 right-0 w-48 h-48 bg-gradient-to-br rounded-full blur-3xl opacity-50",
        header: {
            container: "flex items-center justify-between mb-6 relative z-10",
            iconBox: "inline-flex items-center justify-center w-12 h-12 rounded-2xl border",
            icon: "w-5 h-5",
            timelineBadge: "flex items-center gap-2 text-xs font-medium uppercase tracking-wider px-3 py-1.5 rounded-full border"
        },
        number: "absolute top-8 right-8 text-6xl font-black opacity-10 select-none",
        title: {
            container: "text-2xl font-heading font-black mb-4 tracking-tight leading-tight relative z-10",
            primary: "text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400",
            highlight: "text-transparent bg-clip-text bg-gradient-to-r"
        },
        description: "text-gray-400 mb-6 leading-relaxed font-light max-w-md relative z-10",
        tags: {
            container: "flex flex-wrap gap-2 mb-6 relative z-10",
            tag: "px-3 py-1 border rounded-full text-xs"
        },
        features: {
            list: "space-y-3 mb-8 flex-grow relative z-10",
            item: "flex items-center text-sm font-medium",
            iconBox: "w-6 h-6 rounded-lg border flex items-center justify-center mr-3 flex-shrink-0",
            checkIcon: "w-3.5 h-3.5"
        },
        cta: {
            link: "relative z-10 mt-auto",
            button: "group/btn relative w-full md:w-auto px-6 py-3.5 bg-gradient-to-r rounded-xl text-white font-bold text-sm overflow-hidden transition-all duration-500",
            pulla: "absolute inset-0 bg-gradient-to-r opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 brightness-110",
            content: "relative flex items-center justify-center gap-2",
            arrow: "w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300"
        }
    }
};

export const sectionStyles = {
    section: "py-20 md:py-32 relative overflow-hidden",
    background: {
        base: "absolute inset-0 bg-gradient-to-b from-black via-[#030308] to-black",
        orb: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-cyan-500/5 via-purple-500/5 to-transparent rounded-full blur-3xl"
    },
    header: {
        container: "text-center mb-16 md:mb-20",
        label: "text-cyan-400 text-xs sm:text-sm uppercase tracking-widest mb-4",
        title: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white mb-4",
        highlight: "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500",
        subtitle: "text-gray-400 text-base md:text-lg max-w-2xl mx-auto"
    },
    grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8",
    stats: {
        container: "mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 p-4 sm:p-6 md:p-8 bg-black/40 backdrop-blur-xl border border-white/20 rounded-2xl",
        item: "text-center",
        valueContainer: "flex items-center justify-center gap-2 mb-2",
        value: "text-2xl md:text-3xl font-black text-white",
        label: "text-gray-500 text-xs md:text-sm"
    }
};
