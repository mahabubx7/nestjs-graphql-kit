export const loadEnvVariables = () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    type: process.env.DB_TYPE || 'postgres',
    host: process.env.DB_HOST || '127.0.0.1',
    port: parseInt(process.env.DB_PORT, 10) || 5432,
    username: process.env.DB_USER || 'developer',
    password: process.env.DB_PASSWORD || 'developer123',
    database: process.env.DB_NAME || 'nestjs_app',
    synchronize: process.env.DB_SYNC === 'true',
  },
});
