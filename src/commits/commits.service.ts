import { Injectable, Body } from '@nestjs/common';
import { GithubService } from 'src/github/github.service';
import { CreateCommentDto, DeleteCommentDto } from './dto';
import { Comment, GitHubCommit } from 'src/interfaces/commit.interface';
import {
  CommentReponse,
  CommitResponse,
  CommitResponseI,
} from 'src/interfaces/commit-response.interface';

@Injectable()
export class CommitsService {
  constructor(private readonly githubService: GithubService) {}

  async getAllCommits(
    userName: string,
    repoName: string,
    offset: number,
    limit: number,
  ): Promise<CommitResponseI> {
    const commits = await this.githubService.getCommits(
      userName,
      repoName,
      offset,
      limit,
    );

    const comments = await this.getAllComments(userName, repoName);

    let commitsArray: Array<CommitResponse> = [];
    if (commits) {
      commitsArray = commits.map((commit: GitHubCommit): CommitResponse => {
        return {
          id: commit.sha,
          message: commit.commit.message,
          commiter: commit.commit.committer.name,
          commiter_avatar: commit.committer.avatar_url,
          commiter_details: commit.committer.html_url,
          details_url: commit.html_url,
          date: commit.commit.committer.date,
          comments: comments.map((comment: Comment): CommentReponse => {
            if (comment.commit_id === commit.sha) {
              return {
                id: comment.id,
                body: comment.body,
                user: comment.user.login,
                user_avatar: comment.user.avatar_url,
                user_details: comment.user.html_url,
                date: comment.created_at,
                html_url: comment.html_url,
              };
            }
            return null;
          }),
        };
      });
    }

    return {
      author: {
        userName: commits?.[0].author.login,
        avatar: commits?.[0].author.avatar_url,
        details: commits?.[0].author.html_url,
      },
      commits: commitsArray,
      commit_count: commitsArray.length,
    };
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
