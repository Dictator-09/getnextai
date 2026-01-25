export const styles = {
    progress: {
        bar: "fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#FF6B35] via-[#C41E3A] to-[#00C9A7] origin-left z-[100]",
        indicator: {
            wrapper: "fixed bottom-8 left-8 z-50 hidden md:block",
            container: "relative w-14 h-14",
            bgCircle: "w-full h-full -rotate-90",
            progressSvg: "absolute inset-0 w-full h-full -rotate-90",
            glow: "absolute inset-0 rounded-full blur-xl -z-10"
        }
    },
    minimal: {
        bar: "fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#FF6B35] to-[#00C9A7] origin-left z-[100]"
    },
    side: {
        wrapper: "fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block",
        line: {
            container: "relative w-[2px] h-48 bg-[#00C9A7]/10 rounded-full overflow-hidden",
            fill: "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#FF6B35] via-[#C41E3A] to-[#00C9A7]"
        },
        text: "absolute right-4 text-xs font-mono text-[#00C9A7]"
    }
};
