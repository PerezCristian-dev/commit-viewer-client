import { Injectable, Body } from '@nestjs/common';
import { GithubService } from 'src/github/github.service';
import { CreateCommentDto, DeleteCommentDto } from './dto';

@Injectable()
export class CommitsService {
  constructor(private readonly githubService: GithubService) {}

  async getAllCommits(userName: string, repoName: string) {
    return await this.githubService.getCommits(userName, repoName);
  }

  async getAllComments(userName: string, repoName: string) {
    return await this.githubService.getComments(userName, repoName);
  }

  async getOneComment(userName: string, repoName: string, commentId: string) {
    return await this.githubService.getOneComment(
      userName,
      repoName,
      commentId,
    );
  }

  async createComment(
    userName: string,
    repoName: string,
    body: CreateCommentDto,
  ) {
    return await this.githubService.createComment(userName, repoName, body);
  }

  async updateComment(
    userName: string,
    repoName: string,
    commentId: string,
    body: string,
  ) {
    return await this.githubService.updateComment(
      userName,
      repoName,
      commentId,
      body,
    );
  }

  async deleteComment(username: string, repo: string, commentId: string) {
    return await this.githubService.deleteComment(username, repo, commentId);
  }
}
