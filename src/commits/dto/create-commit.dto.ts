import { IsString } from 'class-validator';

interface Headers {
  'X-GitHub-Api-Version': string;
}

export class CreateCommentDto {
  @IsString()
  body: string;
  @IsString()
  owner: string;
  @IsString()
  repo: string;
  @IsString()
  commit_sha: string;
  @IsString()
  path: string;
  @IsString()
  position: number;
  @IsString()
  line: number;

  headers: Headers;
}
