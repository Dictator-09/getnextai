export const styles = {
    footer: "relative w-full bg-[#050508] pt-24 pb-12 overflow-hidden",
    background: {
        line: "absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent",
        radial: "absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(0,201,167,0.05),transparent_40%)] pointer-events-none"
    },
    container: "container mx-auto px-6 relative z-10",
    cta: {
        container: "mb-24 md:mb-32 flex flex-col items-center text-center",
        title: "font-heading font-black text-[15vw] leading-[0.8] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/80 to-white/20 select-none hover:to-white/40 transition-all duration-700",
        buttonWrapper: "mt-8 md:mt-12",
        button: "group relative inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-full overflow-hidden hover:border-[#00C9A7]/50 transition-all duration-300",
        buttonGlow: "absolute inset-0 bg-gradient-to-r from-[#00C9A7]/10 to-[#FF6B35]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
        buttonText: "relative z-10 text-lg md:text-xl text-gray-300 group-hover:text-white transition-colors",
        buttonIcon: "relative z-10 flex items-center justify-center w-8 h-8 rounded-full bg-white/10 group-hover:bg-[#00C9A7] group-hover:text-black transition-all duration-300 group-hover:rotate-45"
    },
    grid: {
        container: "grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-white/5 pt-16",
        brandCol: "col-span-1 md:col-span-2 space-y-8",
        brandText: "mt-6 text-gray-400 leading-relaxed max-w-md",
        global: {
            container: "flex flex-wrap items-center gap-3",
            icon: "w-4 h-4 text-[#00C9A7]",
            label: "text-gray-500 text-sm",
            regionsWrapper: "flex flex-wrap gap-2",
            regionBadge: "px-2 py-0.5 bg-white/5 border border-white/10 rounded text-gray-400 text-xs font-medium"
        },
        sectionTitle: "text-white font-bold mb-6 font-heading tracking-wide",
        linkList: "space-y-4",
        socialContainer: "flex gap-4 mt-8"
    },
    bottomBar: {
        container: "mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4",
        text: "text-gray-600 text-sm",
        designer: "text-gray-600 text-sm flex items-center gap-2",
        highlight: "text-[#00C9A7]"
    },
    socialLink: "w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-[#00C9A7] hover:text-black hover:scale-110 transition-all duration-300",
    footerLink: "text-gray-400 hover:text-[#00C9A7] hover:translate-x-1 transition-all duration-300 inline-block text-sm"
};
