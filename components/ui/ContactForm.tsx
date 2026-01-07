"use client";

import { useState } from "react";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        service: "Custom Website",
    });
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        // This URL will be replaced by the user after they deploy the script
        // defaulting to a placeholder or checking for an env var would be ideal in production
        // but for now we will ask the user to input it.
        // For this implementation, I will use a const that the user needs to update, 
        // or I can prompt them. 
        // better: use a prop or environment variable. 
        // effectively, I'll simulate success if no URL is present to show UI, 
        // but warn the user they need to add the URL.

        const WEBHOOK_URL = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_URL;

        if (!WEBHOOK_URL) {
            console.warn("Google Sheets URL not found in environment variables.");
            // Simulating success for UI demo if no URL provided yet
            setTimeout(() => {
                setStatus("error");
                setMessage("Integration Pending: Webhook URL missing.");
            }, 1500);
            return;
        }

        try {
            const response = await fetch(WEBHOOK_URL, {
                method: "POST",
                mode: "no-cors", // Required for Google Apps Script Webhooks
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            // Since 'no-cors' returns an opaque response, we assume success if no error is thrown
            setStatus("success");
            setFormData({ name: "", email: "", phone: "", service: "Custom Website" });
        } catch (error) {
            console.error("Submission Error:", error);
            setStatus("error");
            setMessage("Something went wrong. Please try again.");
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
                        className="absolute inset-0 bg-black/90 z-10 flex flex-col items-center justify-center rounded-xl backdrop-blur-md"
                    >
                        <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                        <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                        <p className="text-gray-400 text-center px-4">We'll be in touch shortly to build your future.</p>
                        <button
                            type="button"
                            onClick={() => setStatus("idle")}
                            className="mt-6 px-6 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white text-sm"
                        >
                            Send Another
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            <input
                type="text"
                placeholder="Name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-cyan-500 transition-colors"
            />
            <input
                type="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-cyan-500 transition-colors"
            />
            <input
                type="tel"
                placeholder="Phone Number"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-cyan-500 transition-colors"
            />
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
