export const styles = {
    section: "py-24 relative overflow-hidden bg-gradient-to-b from-black to-[#030308]",
    background: "absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/10 via-transparent to-transparent",
    container: "container mx-auto px-6 relative z-10",
    header: {
        container: "text-center mb-16",
        label: "text-cyan-400 text-sm uppercase tracking-widest mb-4",
        title: "text-4xl md:text-5xl font-heading font-black text-white mb-4",
        highlight: "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500",
        description: "text-gray-400 max-w-2xl mx-auto"
    },
    map: {
        container: "relative w-full max-w-4xl mx-auto mb-16 aspect-[2/1]",
        background: "absolute inset-0 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl overflow-hidden",
        grid: "absolute inset-0",
        region: {
            container: "absolute",
            pulseWrapper: "relative",
            pulse: "absolute inline-flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400 opacity-20 animate-ping",
            dot: "relative inline-flex h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.8)]",
            labelWrapper: "absolute top-4 left-1/2 -translate-x-1/2 whitespace-nowrap",
            label: "px-2 py-1 bg-black/80 border border-white/10 rounded text-cyan-400 text-xs font-medium"
        },
        svg: "absolute inset-0 w-full h-full"
    },
    grid: {
        container: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6",
        card: "flex flex-col items-center text-center p-4 bg-white/5 border border-white/10 rounded-2xl hover:border-cyan-500/30 transition-all duration-300 group",
        iconBox: "w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300",
        title: "text-white font-bold text-sm mb-1",
        description: "text-gray-500 text-xs"
    }
};
