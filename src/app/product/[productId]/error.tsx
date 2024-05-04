"use client";

function ErrorBoundary({error}: {error: Error}) {
    return <div>{error.message}</div>;
}

export default ErrorBoundary;
