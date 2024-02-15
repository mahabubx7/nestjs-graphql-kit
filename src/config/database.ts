import { DataSource } from 'typeorm';

export const dbProviders = [
  {
    provide: 'PostgresDB',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: process.env.DB_HOST || '127.0.0.1',
        port: parseInt(process.env.DB_PORT, 10) || 5432,
        username: process.env.DB_USER || 'developer',
        password: process.env.DB_PASSWORD || 'developer123',
        database: process.env.DB_NAME || 'nestjs_app',
        synchronize: process.env.DB_SYNC === 'true',
        entities: ['dist/**/*.entity{.ts,.js}'],
        migrations: ['dist/migrations/*.js'],
      });

      return dataSource.initialize();
    },
  },
];
