export const styles = {
    auditButton: {
        container: "relative group overflow-hidden",
        content: "relative px-6 py-3 rounded-full bg-gradient-to-r from-[#00C9A7] to-[#0D5C63] group-hover:from-[#00DDB8] group-hover:to-[#00C9A7] transition-all duration-300",
        glow: "absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 -z-10",
        iconWrapper: "flex items-center gap-2",
        text: "font-bold text-white"
    },
    navLink: {
        button: "relative px-2 py-1 text-sm font-medium text-gray-300 group",
        text: "relative z-10 group-hover:text-white transition-colors",
        underline: "absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#FF6B35] to-[#00C9A7]"
    },
    navbar: {
        container: "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        base: "py-3 px-4 bg-[#0a0a0f]/95 backdrop-blur-md border-b border-white/5", // Mobile/Default
        desktop: "md:py-4 md:px-8 md:bg-transparent md:backdrop-blur-none md:border-none",
        scrolled: "md:!py-3 md:!px-16 md:!bg-[#0a0a0f]/90 md:!backdrop-blur-md md:!border-white/5",
        wrapper: "relative max-w-7xl mx-auto flex items-center justify-between",
        desktopNav: "hidden md:flex items-center gap-8",
        mobileToggle: "md:hidden p-2 text-white",
        ctaContainer: "hidden md:block"
    },
    mobileMenu: {
        overlay: "fixed inset-0 z-40 bg-[#050508]/98 backdrop-blur-xl flex items-center justify-center overflow-hidden",
        linkContainer: "group relative block overflow-hidden",
        linkText: "text-5xl sm:text-7xl font-display font-bold text-white group-hover:text-[#00C9A7] transition-colors duration-300",
        linkUnderline: "absolute bottom-0 left-0 w-full h-[2px] bg-[#00C9A7] translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-out",
        watermark: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.03]",
        watermarkText: "text-[20vw] font-bold text-white leading-none",
        linksWrapper: "flex flex-col gap-8 text-center relative z-10",
        ctaWrapper: "pt-8"
    }
};
