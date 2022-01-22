declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MONGODB_URL: string;
      PORT: string;
      NODE_ENV: "development" | "production";
      JWT_SECRET: string;
      CLIENT_URL: string;
      SESSION_SECRET: string;
    }
  }
}
export {};
