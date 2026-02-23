"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

// declare global {
//   interface Window {
//     __TANSTACK_QUERY_CLIENT__: import("@tanstack/query-core").QueryClient;
//   }
// }
export default function QueryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60_000,
            refetchOnWindowFocus: false,
          },
        },
      }),
  );

  // eslint-disable-next-line react-hooks/immutability
  // window.__TANSTACK_QUERY_CLIENT__ = queryClient;

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
