"use client";

import React, { useState } from "react";
import { Textarea, Button, Stack } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";

export default function HomePage() {
  const [userMessage, setUserMessage] = React.useState<string>("");
  const [stepType, setStepType] = React.useState<string>("userMessageEntry");
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [responseMessage, setResponseMessage] = React.useState<string>("");

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_SUGGESTION_API_LAMBDA_FUNCTION_URL || "",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user_message: userMessage,
          }),
        },
      );

      // Attempted streaming chunck but didn't fully implement
      // const reader = response.body?.getReader();
      // const decoder = new TextDecoder("utf-8");

      // if (!reader) {
      //   throw new Error("Reader not available from response body.");
      // }

      // const read = async () => {
      //   console.log("Read called");
      //   const { done, value } = await reader.read();
      //   console.log(done, value);
      //   if (done) {
      //     return;
      //   }

      //   const chunk = decoder.decode(value);
      //   console.log("chunk");
      //   console.log(chunk);
      //   setResponseMessage((prev) => prev + chunk);
      // };
      // await read();

      const data = await response.json();
      setIsLoading(false);
      setStepType("userMessageResponse");
      setResponseMessage(data.responseContent);
    } catch (error) {
      setResponseMessage("Something went wrong. Please try again.");
      setStepType("userMessageResponse");
    }
  };

  const handleReturn = () => {
    setUserMessage("");
    setResponseMessage("");
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
            <ReactMarkdown>{responseMessage}</ReactMarkdown>
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
