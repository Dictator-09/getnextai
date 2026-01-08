export default function Logo({ className = "", showText = true }: { className?: string, showText?: boolean }) {
    return (
        <div className={`flex items-center gap-2 ${className}`}>
            <svg
                aria-hidden="true"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10"
            >
                <rect width="40" height="40" rx="8" fill="#06B6D4" />
                <path
                    d="M20 10L28.6603 15V25L20 30L11.3397 25V15L20 10Z"
                    fill="black"
                    fillOpacity="0.2"
                />
                <path
                    d="M20 12L26.9282 16V24L20 28L13.0718 24V16L20 12Z"
                    stroke="black"
                    strokeWidth="2"
                />
                <path
                    d="M20 17V23M17 20H23"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
            </svg>
            {showText && (
                <span className="text-xl font-bold tracking-tight text-black dark:text-white transition-colors">
                    GETNEXT<span className="font-light text-cyan-600 dark:text-cyan-400">AI</span>
                </span>
            )}
        </div>
    );
}
