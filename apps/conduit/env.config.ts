import arkenv from 'arkenv';

export default arkenv({
  POSTGRES_DB: "string = 'conduit'",
  POSTGRES_USER: "string = 'postgres'",
  POSTGRES_PASSWORD: "string = 'postgres'",
  POSTGRES_HOST: "string.host = '0.0.0.0'",
  POSTGRES_PORT: 'number.port = 5432',
  JWT_ALGORITHM: "string = 'HS256'",
  PORT: 'number.port = 3000',
  JWT_SECRET: 'string',
  NODE_ENV: "'development' | 'production' | 'test' = 'development'",
  LOG_LEVEL: "'debug' | 'info' = 'info'",
});
