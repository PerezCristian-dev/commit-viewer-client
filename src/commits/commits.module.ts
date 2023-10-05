import { Module } from '@nestjs/common';
import { CommitsService } from './commits.service';
import { CommitsController } from './commits.controller';
import { GithubService } from 'src/github/github.service';


@Module({
  controllers: [CommitsController],
  providers: [CommitsService, GithubService],
})
export class CommitsModule {}
