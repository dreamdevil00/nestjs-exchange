import { createConnection } from 'typeorm';
import { DbConnectionToken } from '../constants';

export const databaseProviders = [
  {
    provide: DbConnectionToken,
    useFactory: async () => createConnection({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Passw0rd',
      database: 'nestapi',
      // insecureAuth: true,
      entities: [
        __dirname + '/../**/*.entity{.ts,.js}',
      ],
    }),
  },
];
