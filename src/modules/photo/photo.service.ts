import { Component, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Photo } from './photo.entity';
import { PhotoRepositoryToken } from '../constants';

@Component()
export class PhotoService {
  constructor(
    @Inject(PhotoRepositoryToken) private readonly photoRepository: Repository<Photo>,
  ) {}

  async findAll(): Promise<Photo[]> {
    return await this.photoRepository.find();
  }
}