"use client";

import React from "react";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { ColorModeProvider, type ColorModeProviderProps } from "./color-mode";
import { useState, useEffect } from "react";

export function Provider(props: ColorModeProviderProps) {
  const [hydrated, setHydrated] = useState(false);

  // Returns on first render null so client and server match. Subsequent forces a rerender.
  // Fixes hydration error.
  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return null;
  }

  return (
    <ChakraProvider value={defaultSystem}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  );
}
