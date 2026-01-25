export const styles = {
    section: "py-16 relative overflow-hidden border-t border-white/5",
    container: "container mx-auto px-6",
    header: "text-center mb-10",
    label: "text-gray-500 text-sm uppercase tracking-widest",
    marquee: {
        wrapper: "relative overflow-hidden",
        maskLeft: "absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10",
        maskRight: "absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10",
        track: "flex gap-12 items-center"
    },
    card: {
        wrapper: "flex-shrink-0 flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full hover:border-white/20 transition-colors",
        dot: "w-3 h-3 rounded-full",
        text: "text-gray-400 text-sm font-medium whitespace-nowrap"
    },
    footer: "text-center text-gray-600 text-xs mt-8"
};
