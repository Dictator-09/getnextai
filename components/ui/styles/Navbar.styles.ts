export const styles = {
    auditButton: {
        container: "relative group overflow-hidden rounded-md", // Sharper corners for cyber look
        content: "relative px-6 py-3 bg-acid-lime text-black font-sans font-bold hover:bg-[#b3e600] transition-all duration-300 flex items-center gap-2",
        glow: "absolute inset-0 opacity-0 group-hover:opacity-100 bg-white/20 transition-opacity duration-300 pointer-events-none",
        iconWrapper: "flex items-center gap-2",
        text: "uppercase tracking-wide text-xs"
    },
    navLink: {
        button: "relative px-3 py-1.5 text-sm font-sans text-white/60 hover:text-white transition-colors group",
        text: "relative z-10",
        underline: "absolute bottom-0 left-0 w-full h-[1px] bg-acid-lime scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
    },
    navbar: {
        container: "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        base: "py-4 px-4 bg-[#030303]/80 backdrop-blur-md border-b border-white/5",
        desktop: "md:py-6 md:px-8 md:bg-transparent md:backdrop-blur-none md:border-none",
        scrolled: "md:!py-4 md:!px-12 md:!bg-[#030303]/80 md:!backdrop-blur-md md:!border-white/5",
        wrapper: "relative max-w-7xl mx-auto flex items-center justify-between",
        desktopNav: "hidden md:flex items-center gap-8",
        mobileToggle: "md:hidden p-2 text-white hover:text-acid-lime transition-colors",
        ctaContainer: "hidden md:block"
    },
    mobileMenu: {
        overlay: "fixed inset-0 z-40 bg-[#030303] flex items-center justify-center overflow-hidden",
        linkContainer: "group relative block overflow-hidden py-2",
        linkText: "text-4xl sm:text-6xl font-display font-medium text-white/50 group-hover:text-white transition-colors duration-300",
        linkUnderline: "absolute bottom-0 left-0 w-full h-[1px] bg-acid-lime translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-out",
        watermark: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.02]",
        watermarkText: "text-[20vw] font-display font-bold text-white leading-none",
        linksWrapper: "flex flex-col gap-6 text-center relative z-10",
        ctaWrapper: "pt-12"
    }
};
