export const styles = {
    section: "py-16 sm:py-24 relative overflow-hidden bg-gradient-to-b from-black via-[#050510] to-black",
    background: {
        base: "absolute inset-0 bg-[#030303]",
        blobCyan: "absolute top-0 right-0 w-[800px] h-[800px] bg-acid-lime/5 rounded-full blur-[120px] pointer-events-none mix-blend-screen",
        blobPurple: "absolute bottom-0 left-0 w-[600px] h-[600px] bg-hyper-violet/5 rounded-full blur-[100px] pointer-events-none mix-blend-screen"
    },
    backButton: "fixed top-6 left-6 z-50 flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full backdrop-blur-md transition-all group text-sm font-mono text-white/60 hover:text-white",
    header: {
        container: "text-center mb-10 sm:mb-16",
        badge: "inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-xs sm:text-sm font-medium mb-4 sm:mb-6",
        ping: {
            container: "relative flex h-2 w-2",
            animation: "animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75",
            dot: "relative inline-flex rounded-full h-2 w-2 bg-cyan-500"
        },
        title: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white mb-4 sm:mb-6 px-2",
        highlight: "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500",
        description: "text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-4"
    },
    process: {
        container: "mb-12 sm:mb-16",
        grid: "flex overflow-x-auto sm:overflow-visible sm:grid sm:grid-cols-3 gap-4 sm:gap-6 pb-4 sm:pb-0 snap-x-mandatory no-scrollbar",
        step: "relative min-w-[260px] sm:min-w-0 snap-center h-full",
        connector: "hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-cyan-500/50 to-transparent z-0",
        card: "h-full p-5 sm:p-6 backdrop-blur-sm rounded-2xl hover:border-cyan-500/30 transition-colors duration-300",
        iconBox: "w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400",
        number: "text-3xl sm:text-4xl font-black text-white/10",
        title: "text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2",
        description: "text-gray-400 text-sm"
    },
    mainContent: {
        grid: "grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start",
        leftColumn: "order-2 lg:order-1",
        headingLine: "text-3xl md:text-5xl font-heading font-bold mb-6 leading-[1.1]",
        headingHighlight: "bg-gradient-to-r from-[#FF6B35] to-[#C41E3A] bg-clip-text text-transparent",
        paragraph: "text-[#A0A0A8] text-lg mb-8 leading-relaxed max-w-xl",
        checklist: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4",
        checkItem: {
            container: "flex items-center gap-3",
            icon: "w-6 h-6 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center flex-shrink-0",
            text: "text-gray-300 text-sm sm:text-base"
        },
        testimonial: {
            container: "hidden sm:block mt-8 p-5 sm:p-6 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl",
            quote: "text-gray-300 italic mb-4 text-sm sm:text-base",
            authorAvatar: "w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm",
            authorName: "text-white font-medium text-sm",
            authorRole: "text-gray-500 text-xs"
        }
    },
    form: {
        container: "order-1 lg:order-2 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-8",
        title: "text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2",
        subtitle: "text-gray-400 text-xs sm:text-sm mb-4 sm:mb-6"
    }
};
