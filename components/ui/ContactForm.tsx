"use client";

import { useState } from "react";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { useToast } from "./Toast";
import { cn } from "@/lib/utils";

import { styles } from "./styles/ContactForm.styles";

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
        <form onSubmit={handleSubmit} className={styles.form.container}>
            <AnimatePresence>
                {status === "success" && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className={styles.successModal.overlay}
                    >
                        <CheckCircle className={styles.successModal.icon} />
                        <h3 className={styles.successModal.title}>Message Sent!</h3>
                        <p className={styles.successModal.message}>We&apos;ll be in touch shortly to build your future.</p>
                        <button
                            type="button"
                            onClick={() => setStatus("idle")}
                            className={styles.successModal.button}
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
                    className={cn(styles.form.input, errors.name ? styles.form.inputError : styles.form.inputNormal)}
                    required
                />
                {errors.name && <p className={styles.form.errorText}>{errors.name}</p>}
            </div>
            <div>
                <input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={cn(styles.form.input, errors.email ? styles.form.inputError : styles.form.inputNormal)}
                    required
                />
                {errors.email && <p className={styles.form.errorText}>{errors.email}</p>}
            </div>
            <div>
                <input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={cn(styles.form.input, errors.phone ? styles.form.inputError : styles.form.inputNormal)}
                    required
                />
                {errors.phone && <p className={styles.form.errorText}>{errors.phone}</p>}
            </div>
            <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className={styles.form.select}
            >
                <option>Custom Website</option>
                <option>AI Voice Agent</option>
                <option>WhatsApp Automation</option>
                <option>Other</option>
            </select>

            {status === "error" && (
                <div className={styles.errorBox.container}>
                    <AlertCircle className={styles.errorBox.icon} />
                    <span>{message}</span>
                </div>
            )}

            <button
                type="submit"
                disabled={status === "submitting"}
                className={styles.submitButton.base}
            >
                {status === "submitting" ? (
                    <>
                        <Loader2 className={styles.submitButton.loader} />
                        Sending...
                    </>
                ) : (
                    "Initialize Transformation"
                )}
            </button>
        </form>
    );
}
