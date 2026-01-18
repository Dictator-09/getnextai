import { onCLS, onINP, onFCP, onLCP, onTTFB } from "web-vitals";

type MetricHandler = (metric: { name: string; value: number; id: string }) => void;

/**
 * Reports Web Vitals metrics to console (dev) or analytics (prod)
 */
export function reportWebVitals(onPerfEntry?: MetricHandler) {
    const handler: MetricHandler = (metric) => {
        // Log to console in development
        if (process.env.NODE_ENV === "development") {
            console.log(`[Web Vitals] ${metric.name}: ${metric.value.toFixed(2)}`);
        }

        // Call custom handler if provided
        if (onPerfEntry) {
            onPerfEntry(metric);
        }
    };

    // Core Web Vitals
    onCLS(handler);   // Cumulative Layout Shift
    onINP(handler);   // Interaction to Next Paint
    onFCP(handler);   // First Contentful Paint
    onLCP(handler);   // Largest Contentful Paint
    onTTFB(handler);  // Time to First Byte
}

export default reportWebVitals;
