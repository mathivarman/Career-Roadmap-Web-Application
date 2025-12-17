'use client';

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    // Suppress error display - just log to console in development
    if (process.env.NODE_ENV === 'development') {
        console.log('Error caught:', error);
    }

    // Return null to not show any error UI
    return null;
}
