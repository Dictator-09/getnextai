"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2 } from "lucide-react";
import confetti from "canvas-confetti";
import { useToast } from "./Toast";

import { styles } from "./styles/AccessRequest.styles";

const timeSlots = [
    { id: "1", time: "10:00 AM", zone: "IST", available: true },
    { id: "2", time: "2:00 PM", zone: "IST", available: true },
    { id: "3", time: "6:00 PM", zone: "IST", available: false },
    { id: "4", time: "10:00 PM", zone: "IST", available: true },
];

const days = [
    { id: "today", label: "Today", date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric" }) },
    { id: "tomorrow", label: "Tomorrow", date: new Date(Date.now() + 86400000).toLocaleDateString("en-US", { month: "short", day: "numeric" }) },
    { id: "day3", label: new Date(Date.now() + 172800000).toLocaleDateString("en-US", { weekday: "short" }), date: new Date(Date.now() + 172800000).toLocaleDateString("en-US", { month: "short", day: "numeric" }) },
];

export default function AccessRequest() {
    const { showToast } = useToast();
    const formRef = useRef<HTMLFormElement>(null);

    const [selectedDay, setSelectedDay] = useState<string | null>(null);
    const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
    const [formData, setFormData] = useState({ name: "", email: "", company: "" });
    const [status, setStatus] = useState<"idle" | "submitting" | "confirmed">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!selectedDay || !selectedSlot || !formData.name || !formData.email) {
            showToast("error", "Please complete all fields");
            return;
        }

        setStatus("submitting");

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        setStatus("confirmed");

        confetti({
            particleCount: 60,
            spread: 50,
            origin: { y: 0.7 },
            colors: ["#00C9A7", "#ffffff"],
        });
    };

    const selectedSlotData = timeSlots.find(s => s.id === selectedSlot);
    const selectedDayData = days.find(d => d.id === selectedDay);

    return (
        <section id="contact" className={styles.section}>
            {/* Background */}
            <div className={styles.background.base} />
            <div
                className={styles.background.grid}
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(184, 255, 0, 0.05) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(184, 255, 0, 0.05) 1px, transparent 1px)
                    `,
                    backgroundSize: "80px 80px",
                }}
            />

            <div className={styles.container}>
                <div className={styles.wrapper}>
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true }}
                        className={styles.header.container}
                    >
                        <div className={styles.header.badge}>
                            <div className={styles.header.dot} />
                            <span className={styles.header.label}>
                                Request Access
                            </span>
                        </div>

                        <h2 className={styles.header.title}>
                            Book Your Session
                        </h2>
                        <p className={styles.header.subtitle}>
                            Limited availability. Direct line to our architects.
                        </p>
                    </motion.div>

                    <AnimatePresence mode="wait">
                        {status === "confirmed" ? (
                            /* Confirmation State */
                            <motion.div
                                key="confirmed"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                className={styles.confirmation.container}
                            >
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                                    className={styles.confirmation.iconWrapper}
                                >
                                    <div className={styles.confirmation.icon} />
                                </motion.div>

                                <h3 className={styles.confirmation.title}>
                                    Session Locked
                                </h3>
                                <p className={styles.confirmation.date}>
                                    {selectedDayData?.date} at {selectedSlotData?.time} {selectedSlotData?.zone}
                                </p>
                                <p className={styles.confirmation.note}>
                                    Expect direct confirmation within 2 hours.
                                </p>

                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className={styles.confirmation.resetButtonContainer}
                                >
                                    <button
                                        onClick={() => {
                                            setStatus("idle");
                                            setSelectedDay(null);
                                            setSelectedSlot(null);
                                            setFormData({ name: "", email: "", company: "" });
                                        }}
                                        className={styles.confirmation.resetButton}
                                    >
                                        Book another session
                                    </button>
                                </motion.div>
                            </motion.div>
                        ) : (
                            /* Booking Form */
                            <motion.form
                                key="form"
                                ref={formRef}
                                onSubmit={handleSubmit}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className={styles.form.container}
                            >
                                {/* Day Selection */}
                                <div>
                                    <label className={styles.form.label}>
                                        Select Day
                                    </label>
                                    <div className={styles.form.grid}>
                                        {days.map((day, index) => (
                                            <motion.button
                                                key={day.id}
                                                type="button"
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: index * 0.1 }}
                                                onClick={() => setSelectedDay(day.id)}
                                                className={`${styles.selection.button} ${selectedDay === day.id
                                                    ? styles.selection.active
                                                    : styles.selection.inactive
                                                    }`}
                                            >
                                                <span className={`block text-xs font-mono uppercase mb-1 ${selectedDay === day.id ? styles.selection.labelActive : styles.selection.labelInactive
                                                    }`}>
                                                    {day.label}
                                                </span>
                                                <span className={`block text-lg md:text-xl font-display font-bold ${selectedDay === day.id ? styles.selection.textActive : styles.selection.textInactive
                                                    }`}>
                                                    {day.date}
                                                </span>

                                                {selectedDay === day.id && (
                                                    <motion.div
                                                        layoutId="dayIndicator"
                                                        className={styles.selection.indicator}
                                                    />
                                                )}
                                            </motion.button>
                                        ))}
                                    </div>
                                </div>

                                {/* Time Slot Selection */}
                                <AnimatePresence>
                                    {selectedDay && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                        >
                                            <label className={styles.form.label}>
                                                Select Time
                                            </label>
                                            <div className={styles.form.timeGrid}>
                                                {timeSlots.map((slot, index) => (
                                                    <motion.button
                                                        key={slot.id}
                                                        type="button"
                                                        initial={{ opacity: 0, scale: 0.9 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        transition={{ delay: index * 0.05 }}
                                                        disabled={!slot.available}
                                                        onClick={() => setSelectedSlot(slot.id)}
                                                        className={`${styles.selection.timeButton} ${!slot.available
                                                            ? styles.selection.disabled
                                                            : selectedSlot === slot.id
                                                                ? styles.selection.activeTime
                                                                : styles.selection.inactive
                                                            }`}
                                                    >
                                                        <span className={`block text-lg font-display font-bold ${selectedSlot === slot.id ? styles.selection.textActive : styles.selection.textInactive
                                                            }`}>
                                                            {slot.time}
                                                        </span>
                                                        <span className="block text-xs text-white/30 mt-1">
                                                            {slot.zone}
                                                        </span>

                                                        {selectedSlot === slot.id && (
                                                            <motion.div
                                                                layoutId="slotIndicator"
                                                                className={styles.selection.indicator}
                                                            />
                                                        )}
                                                    </motion.button>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* Contact Info */}
                                <AnimatePresence>
                                    {selectedSlot && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className={styles.form.inputs.container}
                                        >
                                            <label className={styles.form.label}>
                                                Your Details
                                            </label>

                                            <div className={styles.form.inputs.row}>
                                                <input
                                                    type="text"
                                                    placeholder="Name"
                                                    value={formData.name}
                                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                    className={styles.form.inputs.field}
                                                    required
                                                />
                                                <input
                                                    type="email"
                                                    placeholder="Email"
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    className={styles.form.inputs.field}
                                                    required
                                                />
                                            </div>
                                            <input
                                                type="text"
                                                placeholder="Company (optional)"
                                                value={formData.company}
                                                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                                className={styles.form.inputs.field}
                                            />
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* Submit */}
                                <AnimatePresence>
                                    {selectedSlot && formData.name && formData.email && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 20 }}
                                        >
                                            <motion.button
                                                type="submit"
                                                disabled={status === "submitting"}
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                className={styles.form.submit.button}
                                                style={{
                                                    boxShadow: "0 0 40px rgba(184, 255, 0, 0.3)",
                                                }}
                                            >
                                                {status === "submitting" ? (
                                                    <>
                                                        <Loader2 className={styles.form.submit.spinner} />
                                                        Locking Session...
                                                    </>
                                                ) : (
                                                    "Confirm Session"
                                                )}
                                            </motion.button>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.form>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
