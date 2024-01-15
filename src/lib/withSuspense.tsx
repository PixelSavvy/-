import { Suspense } from "react";

export const withSuspense = (
  Component: React.ReactNode,
  fallback: JSX.Element
) => {
  return <Suspense fallback={fallback}>{Component}</Suspense>;
};
