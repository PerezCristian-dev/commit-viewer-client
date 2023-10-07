import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { Boom } from 'boom';
import { CreateCommentDto } from 'src/commits/dto';
import { GitHubCommit } from 'src/interfaces/commit.interface';

@Injectable()
export class GithubService {
  private readonly githubApiBaseUrl = 'https://api.github.com';
  private readonly authToken = process.env.GITHUB_AUTH_TOKEN || '';
  private readonly headers = { Authorization: `Bearer ${this.authToken}` };

  async getCommits(
    username: string,
    repo: string,
    offset: number,
    limit: number,
    authorizationHeader: string,
  ): Promise<Array<GitHubCommit>> {
    const url = `${this.githubApiBaseUrl}/repos/${username}/${repo}/commits?page=${offset}&per_page=${limit}`;

    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: authorizationHeader,
        },
      });
      return response.data;
    } catch (error) {
      console.error({
        status: error.response.status,
        message: error.response.statusText,
        error: error.message,
      });
    }
  }

  async getComments(username: string, repo: string) {
    const url = `${this.githubApiBaseUrl}/repos/${username}/${repo}/comments`;
    try {
      const response = await axios.get(url, { headers: this.headers });
      return response.data;
    } catch (error) {
      console.error({
        status: error.response.status,
        message: error.response.statusText,
        error: error.message,
      });
    }
  }

  async getOneComment(username: string, repo: string, commentId: string) {
    const url = `${this.githubApiBaseUrl}/repos/${username}/${repo}/comments/${commentId}`;
    try {
      const response = await axios.get(url, { headers: this.headers });
      return response.data;
    } catch (error) {
      // Handle error here
      throw error;
    }
  }

  async createComment(username: string, repo: string, body: CreateCommentDto) {
    const url = `${this.githubApiBaseUrl}/repos/${username}/${repo}/commits/${body.commit_sha}/comments`;
    const data = { body };

    try {
      const response = await axios.post(url, data, { headers: this.headers });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async updateComment(
    username: string,
    repo: string,
    commentId: string,
    body: string,
  ) {
    const url = `${this.githubApiBaseUrl}/repos/${username}/${repo}/commits/${commentId}/comments`;
    const data = { body };

    try {
      const response = await axios.post(url, data, { headers: this.headers });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async deleteComment(username: string, repo: string, commentId: string) {
    const url = `${this.githubApiBaseUrl}/repos/${username}/${repo}/commits/${commentId}/comments`;

    try {
      const response = await axios.post(url, { headers: this.headers });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
