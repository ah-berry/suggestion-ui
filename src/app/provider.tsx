"use client";

import React from "react";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes";
import { useState, useEffect } from "react";

export default function Provider(props: { children: React.ReactNode }) {
  const [hydrated, setHydrated] = useState(false);

  // Returns on first render null so client and server match. Subsequent forces a rerender.
  // Fixes hydration error.
  useEffect(() => {
    // this forces a rerender
    setHydrated(true);
  }, []);

  if (!hydrated) {
    // this returns null on first render, so the client and server match
    return null;
  }

  return (
    <ChakraProvider value={defaultSystem}>{props.children}</ChakraProvider>
  );
}
