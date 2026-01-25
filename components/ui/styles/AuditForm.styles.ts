export const styles = {
    container: "relative",
    modal: {
        overlay: "absolute inset-0 bg-black/40 z-10 flex flex-col items-center justify-center rounded-2xl backdrop-blur-xl p-8",
        iconWrapper: "w-20 h-20 rounded-full bg-gradient-to-br from-green-500/20 to-green-600/10 flex items-center justify-center mb-6",
        icon: "w-10 h-10 text-green-500",
        title: "text-2xl font-bold text-white mb-2 text-center",
        message: "text-gray-400 text-center max-w-md mb-2",
        note: "text-cyan-400 text-sm mb-6",
        button: "px-6 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white text-sm transition-colors"
    },
    form: {
        container: "space-y-4",
        grid: "grid grid-cols-1 md:grid-cols-2 gap-4",
        inputWrapper: "relative",
        input: "w-full px-4 py-3.5 bg-white/5 border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-all",
        inputError: "border-red-500",
        inputNormal: "border-white/10",
        errorText: "text-red-400 text-sm mt-1",
        select: "w-full px-4 py-3.5 bg-white/5 border rounded-xl text-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-all appearance-none cursor-pointer",
        optionDefault: "bg-black",
        option: "bg-black text-white"
    },
    errorBox: {
        container: "flex items-center gap-2 text-red-400 text-sm bg-red-500/10 p-3 rounded-lg border border-red-500/20",
        icon: "w-4 h-4"
    },
    submitButton: {
        base: "w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold py-4 rounded-xl shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:shadow-[0_0_50px_rgba(6,182,212,0.5)] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2",
        loader: "w-5 h-5 animate-spin",
        icon: "w-5 h-5"
    },
    trustIndicators: {
        container: "flex flex-wrap items-center justify-center gap-4 pt-4 text-sm text-gray-500",
        item: "flex items-center gap-1.5",
        iconFree: "w-4 h-4 text-cyan-500",
        iconShield: "w-4 h-4 text-green-500",
        iconClock: "w-4 h-4 text-purple-500"
    }
};
