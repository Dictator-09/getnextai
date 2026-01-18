"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2 } from "lucide-react";
import confetti from "canvas-confetti";
import { useToast } from "./Toast";

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
            colors: ["#B8FF00", "#ffffff"],
        });
    };

    const selectedSlotData = timeSlots.find(s => s.id === selectedSlot);
    const selectedDayData = days.find(d => d.id === selectedDay);

    return (
        <section id="contact" className="relative py-24 md:py-40 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-[#030305]" />
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(184, 255, 0, 0.05) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(184, 255, 0, 0.05) 1px, transparent 1px)
                    `,
                    backgroundSize: "80px 80px",
                }}
            />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true }}
                        className="text-center mb-12 md:mb-16"
                    >
                        <div className="inline-flex items-center gap-2 mb-4">
                            <div className="w-2 h-2 bg-[#B8FF00] rounded-full animate-pulse" />
                            <span className="font-mono text-xs text-[#B8FF00] tracking-widest uppercase">
                                Request Access
                            </span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight mb-4">
                            Book Your Session
                        </h2>
                        <p className="text-white/40 text-base md:text-lg max-w-xl mx-auto">
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
                                className="text-center py-16"
                            >
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                                    className="w-20 h-20 mx-auto mb-8 rounded-full bg-[#B8FF00]/10 border border-[#B8FF00]/30 flex items-center justify-center"
                                >
                                    <div className="w-10 h-10 bg-[#B8FF00] rounded-full" />
                                </motion.div>

                                <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-3">
                                    Session Locked
                                </h3>
                                <p className="text-white/50 mb-2">
                                    {selectedDayData?.date} at {selectedSlotData?.time} {selectedSlotData?.zone}
                                </p>
                                <p className="text-[#B8FF00]/80 text-sm font-mono">
                                    Expect direct confirmation within 2 hours.
                                </p>

                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="mt-10"
                                >
                                    <button
                                        onClick={() => {
                                            setStatus("idle");
                                            setSelectedDay(null);
                                            setSelectedSlot(null);
                                            setFormData({ name: "", email: "", company: "" });
                                        }}
                                        className="text-white/30 hover:text-white/50 text-sm transition-colors"
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
                                className="space-y-10"
                            >
                                {/* Day Selection */}
                                <div>
                                    <label className="block text-white/30 text-xs font-mono uppercase tracking-widest mb-4">
                                        Select Day
                                    </label>
                                    <div className="grid grid-cols-3 gap-3 md:gap-4">
                                        {days.map((day, index) => (
                                            <motion.button
                                                key={day.id}
                                                type="button"
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: index * 0.1 }}
                                                onClick={() => setSelectedDay(day.id)}
                                                className={`relative p-4 md:p-6 rounded-xl border transition-all duration-300 ${selectedDay === day.id
                                                        ? "bg-[#B8FF00]/10 border-[#B8FF00]/50 shadow-[0_0_30px_rgba(184,255,0,0.1)]"
                                                        : "bg-white/5 border-white/10 hover:border-white/20"
                                                    }`}
                                            >
                                                <span className={`block text-xs font-mono uppercase mb-1 ${selectedDay === day.id ? "text-[#B8FF00]" : "text-white/30"
                                                    }`}>
                                                    {day.label}
                                                </span>
                                                <span className={`block text-lg md:text-xl font-display font-bold ${selectedDay === day.id ? "text-white" : "text-white/60"
                                                    }`}>
                                                    {day.date}
                                                </span>

                                                {selectedDay === day.id && (
                                                    <motion.div
                                                        layoutId="dayIndicator"
                                                        className="absolute -top-1 -right-1 w-3 h-3 bg-[#B8FF00] rounded-full"
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
                                            <label className="block text-white/30 text-xs font-mono uppercase tracking-widest mb-4">
                                                Select Time
                                            </label>
                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                                {timeSlots.map((slot, index) => (
                                                    <motion.button
                                                        key={slot.id}
                                                        type="button"
                                                        initial={{ opacity: 0, scale: 0.9 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        transition={{ delay: index * 0.05 }}
                                                        disabled={!slot.available}
                                                        onClick={() => setSelectedSlot(slot.id)}
                                                        className={`relative p-4 rounded-xl border transition-all duration-300 ${!slot.available
                                                                ? "bg-white/5 border-white/5 opacity-30 cursor-not-allowed"
                                                                : selectedSlot === slot.id
                                                                    ? "bg-[#B8FF00]/10 border-[#B8FF00]/50 shadow-[0_0_20px_rgba(184,255,0,0.1)]"
                                                                    : "bg-white/5 border-white/10 hover:border-white/20"
                                                            }`}
                                                    >
                                                        <span className={`block text-lg font-display font-bold ${selectedSlot === slot.id ? "text-white" : "text-white/60"
                                                            }`}>
                                                            {slot.time}
                                                        </span>
                                                        <span className="block text-xs text-white/30 mt-1">
                                                            {slot.zone}
                                                        </span>

                                                        {selectedSlot === slot.id && (
                                                            <motion.div
                                                                layoutId="slotIndicator"
                                                                className="absolute -top-1 -right-1 w-3 h-3 bg-[#B8FF00] rounded-full"
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
                                            className="space-y-4"
                                        >
                                            <label className="block text-white/30 text-xs font-mono uppercase tracking-widest mb-4">
                                                Your Details
                                            </label>

                                            <div className="grid md:grid-cols-2 gap-4">
                                                <input
                                                    type="text"
                                                    placeholder="Name"
                                                    value={formData.name}
                                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-[#B8FF00]/50 transition-colors"
                                                    required
                                                />
                                                <input
                                                    type="email"
                                                    placeholder="Email"
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-[#B8FF00]/50 transition-colors"
                                                    required
                                                />
                                            </div>
                                            <input
                                                type="text"
                                                placeholder="Company (optional)"
                                                value={formData.company}
                                                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                                className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-[#B8FF00]/50 transition-colors"
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
                                                className="w-full md:w-auto px-10 py-5 bg-[#B8FF00] text-[#050508] font-display font-bold text-lg rounded-full transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-3"
                                                style={{
                                                    boxShadow: "0 0 40px rgba(184, 255, 0, 0.3)",
                                                }}
                                            >
                                                {status === "submitting" ? (
                                                    <>
                                                        <Loader2 className="w-5 h-5 animate-spin" />
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
