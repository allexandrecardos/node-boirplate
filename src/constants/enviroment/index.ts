export const ENVIROMENTS = {
  port: process.env.PORT || 3000,
  url: process.env.URL_APP || "http://localhost:3000",
} as const;
