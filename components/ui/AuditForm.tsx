"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, CheckCircle, AlertCircle, Zap, Shield, Clock } from "lucide-react";
import confetti from "canvas-confetti";
import { useToast } from "./Toast";

const businessTypes = [
    "E-commerce",
    "SaaS / Tech",
    "Agency",
    "Restaurant / Cafe",
    "Professional Services",
    "Healthcare",
    "Real Estate",
    "Other"
];

export default function AuditForm() {
    const { showToast } = useToast();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        website: "",
        businessType: "",
    });
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState<Record<string, string>>({});

    const validateForm = () => {
        const newErrors: Record<string, string> = {};

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email";
        }

        if (!formData.website.trim()) {
            newErrors.website = "Website URL is required";
        } else if (!/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/.test(formData.website)) {
            newErrors.website = "Please enter a valid URL";
        }

        if (!formData.businessType) {
            newErrors.businessType = "Please select a business type";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            showToast("error", "Please fix the errors in the form");
            return;
        }

        setStatus("submitting");

        const WEBHOOK_URL = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_URL;

        if (!WEBHOOK_URL) {
            // Simulate success for demo
            setTimeout(() => {
                setStatus("success");
                setFormData({ name: "", email: "", website: "", businessType: "" });
                setErrors({});
                showToast("success", "Your audit request has been received! We'll send your personalized Loom video within 48 hours.");
                confetti({
                    particleCount: 100,
                    spread: 70,
                    origin: { y: 0.6 }
                });
            }, 1500);
            return;
        }

        try {
            await fetch(WEBHOOK_URL, {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...formData,
                    type: "AI Audit Request",
                    timestamp: new Date().toISOString()
                }),
            });

            setStatus("success");
            setFormData({ name: "", email: "", website: "", businessType: "" });
            setErrors({});
            showToast("success", "Your audit request has been received! We'll send your personalized Loom video within 48 hours.");

            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
        } catch (error) {
            console.error("Submission Error:", error);
            setStatus("error");
            setMessage("Something went wrong. Please try again.");
            showToast("error", "Something went wrong. Please try again.");
        }
    };

    return (
        <div className="relative">
            <AnimatePresence>
                {status === "success" && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/40 z-10 flex flex-col items-center justify-center rounded-2xl backdrop-blur-xl p-8"
                    >
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-500/20 to-green-600/10 flex items-center justify-center mb-6">
                            <CheckCircle className="w-10 h-10 text-green-500" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2 text-center">Audit Request Received!</h3>
                        <p className="text-gray-400 text-center max-w-md mb-2">
                            Check your inbox within 48 hours for your personalized Loom video audit.
                        </p>
                        <p className="text-cyan-400 text-sm mb-6">We're excited to show you what's possible!</p>
                        <button
                            type="button"
                            onClick={() => setStatus("idle")}
                            className="px-6 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white text-sm transition-colors"
                        >
                            Submit Another Request
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <input
                            type="text"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className={`w-full px-4 py-3.5 bg-white/5 border ${errors.name ? 'border-red-500' : 'border-white/10'} rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-all`}
                        />
                        {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                    </div>
                    <div>
                        <input
                            type="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className={`w-full px-4 py-3.5 bg-white/5 border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-all`}
                        />
                        {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <input
                            type="text"
                            placeholder="Website URL"
                            value={formData.website}
                            onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                            className={`w-full px-4 py-3.5 bg-white/5 border ${errors.website ? 'border-red-500' : 'border-white/10'} rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-all`}
                        />
                        {errors.website && <p className="text-red-400 text-sm mt-1">{errors.website}</p>}
                    </div>
                    <div>
                        <select
                            value={formData.businessType}
                            onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                            className={`w-full px-4 py-3.5 bg-white/5 border ${errors.businessType ? 'border-red-500' : 'border-white/10'} rounded-xl text-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-all appearance-none cursor-pointer`}
                        >
                            <option value="" className="bg-black">Select Business Type</option>
                            {businessTypes.map((type) => (
                                <option key={type} value={type} className="bg-black text-white">{type}</option>
                            ))}
                        </select>
                        {errors.businessType && <p className="text-red-400 text-sm mt-1">{errors.businessType}</p>}
                    </div>
                </div>

                {status === "error" && (
                    <div className="flex items-center gap-2 text-red-400 text-sm bg-red-500/10 p-3 rounded-lg border border-red-500/20">
                        <AlertCircle className="w-4 h-4" />
                        <span>{message}</span>
                    </div>
                )}

                <motion.button
                    type="submit"
                    disabled={status === "submitting"}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold py-4 rounded-xl shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:shadow-[0_0_50px_rgba(6,182,212,0.5)] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                    {status === "submitting" ? (
                        <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Processing...
                        </>
                    ) : (
                        <>
                            Get My Free AI Audit
                            <Zap className="w-5 h-5" />
                        </>
                    )}
                </motion.button>

                {/* Trust indicators */}
                <div className="flex flex-wrap items-center justify-center gap-4 pt-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1.5">
                        <Zap className="w-4 h-4 text-cyan-500" />
                        <span>100% Free</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Shield className="w-4 h-4 text-green-500" />
                        <span>No Obligation</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4 text-purple-500" />
                        <span>48hr Delivery</span>
                    </div>
                </div>
            </form>
        </div>
    );
}
