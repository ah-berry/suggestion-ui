# Suggestion - UI

This is the frontend/UI of Suggestion - an OpenAI GPT 3.5 LLM-powered web application that suggests helpful mental health guidance for a hypothetical patient facing challenge(s) [_Suggestion_](https://suggestion-ui.vercel.app/). The user interface is a simple text prompt where a user can enter what troubles their patient is facing and a response is returned.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Usage](#usage)
- [Setup](#setup)
- [Contact](#contact)

## Technologies Used

- Next.js v15.2.3
- React v19.0.0
- TypeScript v5.8.2
- Tailwind v4.0.15
- Chakra UI v2.4.2
- Vercel (Deployment)

## Usage

The usage of Suggestion is very simple. Type in the challenge(s) your patient is facing and await a response.

## Setup

To setup the application, [_npm_](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) or [_yarn_](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable) are required.

1. Open your terminal and `git clone` the GitHub repository URL in your desired directory.
2. Navigate to the cloned directory with `cd <cloned_repository>` and install the project's dependencies with `npm install` or `yarn install`.
3. Create a .env file on the root of your directory and add a NEXT_PUBLIC_SUGGESTION_API_LAMBDA_FUNCTION_URL environmental variable pertaining to your deployed Lambda function URL. If you would like to run this web application locally, I can provide my own Lambda function URL no worries.
4. Run the application with `npm run dev` or `yarn dev`.
5. Open the application on your browser of choice with http://localhost:3000.

## Contact

The application was created by yours truly! Feel free to follow me on [_LinkedIn_](https://www.linkedin.com/in/ahmed-gorashi-546447b5/) and let me know if you liked using Suggestion!
