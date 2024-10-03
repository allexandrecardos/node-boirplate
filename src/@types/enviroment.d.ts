declare global {
  namespace NodeJS {
    interface ProcessEnv {
      API_KEY: string;
      DATABASE_URL: string;
      NODE_ENV: 'development' | 'production' | 'local';
      PORT?: number
    }
  }
}

export {};