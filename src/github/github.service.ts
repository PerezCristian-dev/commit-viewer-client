import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { Boom } from 'boom';
import { CreateCommentDto } from 'src/commits/dto';

@Injectable()
export class GithubService {
  private readonly githubApiBaseUrl = 'https://api.github.com';
  private readonly authToken = 'YOUR_GITHUB_ACCESS_TOKEN';

  async getCommits(username: string, repo: string) {
    const url = `${this.githubApiBaseUrl}/repos/${username}/${repo}/commits`;
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      // Handle error here
      throw error;
    }
  }

  async getComments(username: string, repo: string) {
    const url = `${this.githubApiBaseUrl}/repos/${username}/${repo}/comments`;
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      // Handle error here
      throw error;
    }
  }

  async getOneComment(username: string, repo: string, commentId: string) {
    const url = `${this.githubApiBaseUrl}/repos/${username}/${repo}/comments/${commentId}`;
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      // Handle error here
      throw error;
    }
  }

  async createComment(username: string, repo: string, body: CreateCommentDto) {
    const url = `${this.githubApiBaseUrl}/repos/${username}/${repo}/commits/${body.commit_sha}/comments`;
    const data = { body };
    const headers = { Authorization: `Bearer ${this.authToken}` };

    try {
      const response = await axios.post(url, data, { headers });
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
    const headers = { Authorization: `Bearer ${this.authToken}` };

    try {
      const response = await axios.post(url, data, { headers });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async deleteComment(username: string, repo: string, commentId: string) {
    const url = `${this.githubApiBaseUrl}/repos/${username}/${repo}/commits/${commentId}/comments`;
    const headers = { Authorization: `Bearer ${this.authToken}` };

    try {
      const response = await axios.post(url, { headers });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
