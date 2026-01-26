export const styles = {
    container: "relative bg-[#050505] p-1 rounded-2xl border border-white/5",
    modal: {
        overlay: "absolute inset-0 bg-[#030303]/95 z-20 flex flex-col items-center justify-center rounded-2xl backdrop-blur-xl p-8 border border-white/5",
        iconWrapper: "w-20 h-20 rounded-full bg-acid-lime/10 border border-acid-lime/20 flex items-center justify-center mb-6",
        icon: "w-10 h-10 text-acid-lime",
        title: "text-2xl font-display font-medium text-white mb-2 text-center",
        message: "text-white/60 text-center max-w-md mb-2 font-sans",
        note: "text-acid-lime text-sm mb-6 font-mono",
        button: "px-6 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-white text-sm transition-colors border border-white/10 hover:border-acid-lime/30"
    },
    form: {
        container: "space-y-4 p-6 sm:p-8",
        grid: "grid grid-cols-1 md:grid-cols-2 gap-4",
        inputWrapper: "relative",
        input: "w-full px-4 py-3.5 bg-[#0A0A0A] border rounded-lg text-white placeholder-white/20 focus:outline-none focus:border-acid-lime focus:ring-1 focus:ring-acid-lime/50 transition-all font-sans",
        inputError: "border-red-500/50 focus:border-red-500",
        inputNormal: "border-white/5 hover:border-white/10",
        errorText: "text-red-400 text-xs mt-1 font-mono",
        select: "w-full px-4 py-3.5 bg-[#0A0A0A] border rounded-lg text-white/60 focus:outline-none focus:border-acid-lime focus:ring-1 focus:ring-acid-lime/50 transition-all appearance-none cursor-pointer font-sans",
        optionDefault: "bg-[#0A0A0A] text-white/40",
        option: "bg-[#0A0A0A] text-white"
    },
    errorBox: {
        container: "flex items-center gap-2 text-red-400 text-sm bg-red-500/5 p-3 rounded-lg border border-red-500/10 font-mono",
        icon: "w-4 h-4"
    },
    submitButton: {
        base: "w-full bg-acid-lime text-black font-sans font-bold py-4 rounded-lg hover:bg-[#b3e600] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(204,255,0,0.1)] hover:shadow-[0_0_30px_rgba(204,255,0,0.3)]",
        loader: "w-5 h-5 animate-spin",
        icon: "w-5 h-5"
    },
    trustIndicators: {
        container: "flex flex-wrap items-center justify-center gap-4 pt-4 text-xs font-mono text-white/40 uppercase tracking-wider",
        item: "flex items-center gap-1.5",
        iconFree: "w-3 h-3 text-acid-lime",
        iconShield: "w-3 h-3 text-acid-lime",
        iconClock: "w-3 h-3 text-acid-lime"
    }
};
