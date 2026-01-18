import AIAuditSection from "@/components/ui/AIAuditSection";
import Providers from "../providers";

export default function AuditPage() {
    return (
        <Providers>
            <main className="relative min-h-screen w-full bg-[#030305]">
                <AIAuditSection />
            </main>
        </Providers>
    );
}
