"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ReactNode, useState } from "react";

export default function QueryProvider({ children }: { children: ReactNode }) {
  // One QueryClient instance for the entire session
  const [client] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={client}>
      {children}
      {/* toggle in DevTools ⇧⌘J */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
