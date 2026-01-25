export const styles = {
    form: {
        container: "flex-1 space-y-4 relative",
        input: "w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors",
        inputError: "border-red-500",
        inputNormal: "border-white/10",
        select: "w-full bg-white/5 border border-white/10 rounded-lg p-4 text-gray-400 focus:outline-none focus:border-cyan-500 transition-colors",
        errorText: "text-red-400 text-sm mt-1"
    },
    successModal: {
        overlay: "absolute inset-0 bg-black/40 z-10 flex flex-col items-center justify-center rounded-xl backdrop-blur-xl",
        icon: "w-16 h-16 text-green-500 mb-4",
        title: "text-2xl font-bold text-white mb-2",
        message: "text-gray-400 text-center px-4",
        button: "mt-6 px-6 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white text-sm transition-colors"
    },
    errorBox: {
        container: "flex items-center gap-2 text-red-400 text-sm bg-red-500/10 p-3 rounded-lg border border-red-500/20",
        icon: "w-4 h-4"
    },
    submitButton: {
        base: "w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold py-4 rounded-lg shadow-lg hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2",
        loader: "w-5 h-5 animate-spin"
    }
};
