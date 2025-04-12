"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Textarea, Button, Stack } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";

export default function HomePage() {
  const [userMessage, setUserMessage] = React.useState<string>("");
  const [stepType, setStepType] = React.useState<string>("userMessageEntry");
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [playgroundData, setPlaygroundData] = React.useState<string>("");

  const handleSubmit = () => {
    setIsLoading(true);

    // Mimic waittime response from an async API call as a timeout
    setTimeout(() => {
      setPlaygroundData(
        "I understand your patient's challenge and here are some steps to prevent.",
      );
      setStepType("userMessageResponse");
      setIsLoading(false);
    }, 2000);
  };

  const handleReturn = () => {
    setPlaygroundData("");
    setStepType("userMessageEntry");
  };

  const renderSteps = () => {
    if (stepType === "userMessageEntry") {
      if (isLoading) {
        return <Spinner colorPalette="green" size="xl" />;
      }

      return (
        <>
          <h1 className="text-5xl font-extrabold tracking-tight text-black sm:text-[5rem]">
            What challenge is your patient facing?
          </h1>
          <div>
            <Textarea
              placeholder="Ask me anything..."
              onChange={(e) => setUserMessage(e.target.value)}
            />
          </div>
          <div>
            <Stack align="center">
              <Button
                colorPalette="green"
                rounded="full"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </Stack>
          </div>
        </>
      );
    }

    if (stepType === "userMessageResponse") {
      return (
        <>
          <h1 className="text-5xl font-extrabold tracking-tight text-black sm:text-[5rem]">
            Suggestion
          </h1>
          <div>
            <p>{playgroundData}</p>
          </div>
          <div>
            <Stack align="center">
              <Button
                colorPalette="green"
                rounded="full"
                onClick={handleReturn}
              >
                New challenge
              </Button>
            </Stack>
          </div>
        </>
      );
    }

    return null;
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#E9F5F0] text-black">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        {renderSteps()}
      </div>
    </main>
  );
}
