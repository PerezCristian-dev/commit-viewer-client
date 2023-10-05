import { IsString } from 'class-validator';

export class UpdateCommentDto {
  @IsString()
  body: string;
}
