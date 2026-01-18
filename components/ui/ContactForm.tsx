"use client";

import { useState } from "react";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { useToast } from "./Toast";

export default function ContactForm() {
    const { showToast } = useToast();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        service: "Custom Website",
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

        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required";
        } else if (!/^[0-9]{10,}$/.test(formData.phone.replace(/[\s-]/g, ''))) {
            newErrors.phone = "Please enter a valid phone number";
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
            console.warn("Google Sheets URL not found in environment variables.");
            setTimeout(() => {
                setStatus("error");
                setMessage("Integration Pending: Webhook URL missing.");
                showToast("error", "Integration Pending: Webhook URL missing.");
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
                body: JSON.stringify(formData),
            });

            setStatus("success");
            setFormData({ name: "", email: "", phone: "", service: "Custom Website" });
            setErrors({});
            showToast("success", "Message sent successfully! We'll get back to you soon.");

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
        <form onSubmit={handleSubmit} className="flex-1 space-y-4 relative">
            <AnimatePresence>
                {status === "success" && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/40 z-10 flex flex-col items-center justify-center rounded-xl backdrop-blur-xl"
                    >
                        <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                        <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                        <p className="text-gray-400 text-center px-4">We'll be in touch shortly to build your future.</p>
                        <button
                            type="button"
                            onClick={() => setStatus("idle")}
                            className="mt-6 px-6 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white text-sm transition-colors"
                        >
                            Send Another
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            <div>
                <input
                    type="text"
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full px-4 py-3 bg-white/5 border ${errors.name ? 'border-red-500' : 'border-white/10'} rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors`}
                    required
                />
                {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
            </div>
            <div>
                <input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-4 py-3 bg-white/5 border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors`}
                    required
                />
                {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
            </div>
            <div>
                <input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full px-4 py-3 bg-white/5 border ${errors.phone ? 'border-red-500' : 'border-white/10'} rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors`}
                    required
                />
                {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
            </div>
            <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-gray-400 focus:outline-none focus:border-cyan-500 transition-colors"
            >
                <option>Custom Website</option>
                <option>AI Voice Agent</option>
                <option>WhatsApp Automation</option>
                <option>Other</option>
            </select>

            {status === "error" && (
                <div className="flex items-center gap-2 text-red-400 text-sm bg-red-500/10 p-3 rounded-lg border border-red-500/20">
                    <AlertCircle className="w-4 h-4" />
                    <span>{message}</span>
                </div>
            )}

            <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold py-4 rounded-lg shadow-lg hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
                {status === "submitting" ? (
                    <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                    </>
                ) : (
                    "Initialize Transformation"
                )}
            </button>
        </form>
    );
}
