"use client";

import "~/styles/globals.css";

import React from "react";
import { Provider } from "../components/ui/provider";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
