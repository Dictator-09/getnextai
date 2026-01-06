"use client";

import { useState } from "react";

// High-quality Unsplash images for the tiles
const images = [
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=600&fit=crop", // Abstract gradient
    "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=400&h=600&fit=crop", // Abstract waves
    "https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d?w=400&h=600&fit=crop", // Colorful gradient
    "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=400&h=600&fit=crop", // Purple gradient
    "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&h=600&fit=crop", // Gradient abstract
    "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=400&h=600&fit=crop", // Blue gradient
    "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=400&h=600&fit=crop", // Pink gradient
    "https://images.unsplash.com/photo-1557672199-6c1c7e0c0c0a?w=400&h=600&fit=crop", // Orange gradient
    "https://images.unsplash.com/photo-1618556450991-2f1af64e8191?w=400&h=600&fit=crop", // Green gradient
];

const ExpandOnHover = () => {
    const [expandedImage, setExpandedImage] = useState(3);

    const getImageWidth = (index: number) =>
        index === expandedImage ? "24rem" : "5rem";

    return (
        <div className="w-full h-screen bg-[#f5f4f3]">
            <div className="relative grid min-h-screen grid-cols-1 items-center justify-center p-2 transition-all duration-300 ease-in-out lg:flex w-full">
                <div className="w-full h-full overflow-hidden rounded-3xl">
                    <div className="flex h-full w-full items-center justify-center overflow-hidden bg-[#f5f4f3]">
                        <div className="relative w-full max-w-6xl px-5">
                            <div className="flex w-full items-center justify-center gap-1">
                                {images.map((src, idx) => (
                                    <div
                                        key={idx}
                                        className="relative cursor-pointer overflow-hidden rounded-3xl transition-all duration-500 ease-in-out"
                                        style={{
                                            width: getImageWidth(idx + 1),
                                            height: "24rem",
                                        }}
                                        onMouseEnter={() => setExpandedImage(idx + 1)}
                                    >
                                        <img
                                            className="w-full h-full object-cover"
                                            src={src}
                                            alt={`Image ${idx + 1}`}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExpandOnHover;
