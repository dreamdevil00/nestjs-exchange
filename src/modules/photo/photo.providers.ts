import { Connection, Repository } from 'typeorm';
import { Photo } from './photo.entity';
import { PhotoRepositoryToken, DbConnectionToken } from '../constants';

export const photoProviders = [
  {
    provide: PhotoRepositoryToken,
    useFactory: (connection: Connection) => connection.getRepository(Photo),
    inject: [DbConnectionToken],
  },
];