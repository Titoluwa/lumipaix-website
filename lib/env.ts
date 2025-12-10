// lib/env.ts
export interface EnvironmentVariables {
  NEWS_API_KEY: string
  NEXT_PUBLIC_NEWS_API_KEY?: string
  WEB3FORMS_ACCESS_KEY: string
}

// Validate environment variables
export const validateEnv = (): void => {
  const requiredVars = ['NEWS_API_KEY']
  
  requiredVars.forEach((varName) => {
    if (!process.env[varName]) {
      console.warn(`Warning: ${varName} environment variable is not set`)
    }
  })
}