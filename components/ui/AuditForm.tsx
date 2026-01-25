"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, CheckCircle, AlertCircle, Zap, Shield, Clock } from "lucide-react";
import confetti from "canvas-confetti";
import { useToast } from "./Toast";
import { cn } from "@/lib/utils";

import { styles } from "./styles/AuditForm.styles";

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
        <div className={styles.container}>
            <AnimatePresence>
                {status === "success" && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className={styles.modal.overlay}
                    >
                        <div className={styles.modal.iconWrapper}>
                            <CheckCircle className={styles.modal.icon} />
                        </div>
                        <h3 className={styles.modal.title}>Audit Request Received!</h3>
                        <p className={styles.modal.message}>
                            Check your inbox within 48 hours for your personalized Loom video audit.
                        </p>
                        <p className={styles.modal.note}>We&apos;re excited to show you what&apos;s possible!</p>
                        <button
                            type="button"
                            onClick={() => setStatus("idle")}
                            className={styles.modal.button}
                        >
                            Submit Another Request
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className={styles.form.container}>
                <div className={styles.form.grid}>
                    <div>
                        <input
                            type="text"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className={cn(styles.form.input, errors.name ? styles.form.inputError : styles.form.inputNormal)}
                        />
                        {errors.name && <p className={styles.form.errorText}>{errors.name}</p>}
                    </div>
                    <div>
                        <input
                            type="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className={cn(styles.form.input, errors.email ? styles.form.inputError : styles.form.inputNormal)}
                        />
                        {errors.email && <p className={styles.form.errorText}>{errors.email}</p>}
                    </div>
                </div>

                <div className={styles.form.grid}>
                    <div>
                        <input
                            type="text"
                            placeholder="Website URL"
                            value={formData.website}
                            onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                            className={cn(styles.form.input, errors.website ? styles.form.inputError : styles.form.inputNormal)}
                        />
                        {errors.website && <p className={styles.form.errorText}>{errors.website}</p>}
                    </div>
                    <div>
                        <select
                            value={formData.businessType}
                            onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                            className={cn(styles.form.select, errors.businessType ? styles.form.inputError : styles.form.inputNormal)}
                        >
                            <option value="" className={styles.form.optionDefault}>Select Business Type</option>
                            {businessTypes.map((type) => (
                                <option key={type} value={type} className={styles.form.option}>{type}</option>
                            ))}
                        </select>
                        {errors.businessType && <p className={styles.form.errorText}>{errors.businessType}</p>}
                    </div>
                </div>

                {status === "error" && (
                    <div className={styles.errorBox.container}>
                        <AlertCircle className={styles.errorBox.icon} />
                        <span>{message}</span>
                    </div>
                )}

                <motion.button
                    type="submit"
                    disabled={status === "submitting"}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={styles.submitButton.base}
                >
                    {status === "submitting" ? (
                        <>
                            <Loader2 className={styles.submitButton.loader} />
                            Processing...
                        </>
                    ) : (
                        <>
                            Get My Free AI Audit
                            <Zap className={styles.submitButton.icon} />
                        </>
                    )}
                </motion.button>

                {/* Trust indicators */}
                <div className={styles.trustIndicators.container}>
                    <div className={styles.trustIndicators.item}>
                        <Zap className={styles.trustIndicators.iconFree} />
                        <span>100% Free</span>
                    </div>
                    <div className={styles.trustIndicators.item}>
                        <Shield className={styles.trustIndicators.iconShield} />
                        <span>No Obligation</span>
                    </div>
                    <div className={styles.trustIndicators.item}>
                        <Clock className={styles.trustIndicators.iconClock} />
                        <span>48hr Delivery</span>
                    </div>
                </div>
            </form>
        </div>
    );
}
