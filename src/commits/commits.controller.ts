import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  Headers,
} from '@nestjs/common';
import { CommitsService } from './commits.service';
import { ApiTags, ApiResponse, ApiOperation } from '@nestjs/swagger';
import { CreateCommentDto, UpdateCommentDto } from './dto';

@Controller('commits')
@ApiTags('commits')
export class CommitsController {
  constructor(private readonly commitsService: CommitsService) {}

  @Get(':username/:reponame')
  @ApiOperation({ summary: 'Get All Commits by username and repo' })
  @ApiResponse({ status: 200, description: 'Commits found' })
  @ApiResponse({ status: 404, description: 'Commits not found' })
  getAllCommits(
    @Param('username') userName: string,
    @Param('reponame') repoName: string,
    @Query('offset') offset: number,
    @Query('limit') limit: number,
    @Headers('authorization') authorizationHeader: string,
  ) {
    return this.commitsService.getAllCommits(userName, repoName, offset, limit, authorizationHeader);
  }

  @Get('comments/:username/:reponame')
  @ApiOperation({ summary: 'Get All comments by username and repo' })
  @ApiResponse({ status: 200, description: 'Comments found' })
  @ApiResponse({ status: 404, description: 'Comments not found' })
  getAllComments(
    @Param('username') userName: string,
    @Param('reponame') repoName: string,
  ) {
    return this.commitsService.getAllComments(userName, repoName);
  }

  @Get('comments/:username/:reponame/:commentId')
  @ApiOperation({ summary: 'Get comment by id' })
  @ApiResponse({ status: 200, description: 'Comment found' })
  @ApiResponse({ status: 404, description: 'Comment not found' })
  getOneComment(
    @Param('username') userName: string,
    @Param('reponame') repoName: string,
    @Param('commentId') commentId: string,
  ) {
    return this.commitsService.getOneComment(userName, repoName, commentId);
  }

  @Post('comments/:username/:reponame/:commentId')
  @ApiOperation({ summary: 'Create a comment' })
  @ApiResponse({ status: 200, description: 'Comment created' })
  @ApiResponse({ status: 404, description: 'Unable to create comment' })
  createComment(
    @Param('username') userName: string,
    @Param('reponame') repoName: string,
    @Param('commentId') commentId: string,
    @Body() createCommentDto: CreateCommentDto,
  ) {
    const { body, headers, line, owner, path, position, repo } =
      createCommentDto;
    return this.commitsService.createComment(userName, repoName, {
      body,
      commit_sha: commentId,
      headers,
      line,
      owner,
      path,
      position,
      repo,
    });
  }

  @Patch('comments/:username/:reponame/:commentId')
  @ApiOperation({ summary: 'Update comment by id' })
  @ApiResponse({ status: 200, description: 'Comment updated' })
  @ApiResponse({ status: 404, description: 'Unable to update comment' })
  updateComment(
    @Param('username') userName: string,
    @Param('reponame') repoName: string,
    @Param('commentId') commentId: string,
    @Body() updateCommentDto: UpdateCommentDto,
  ) {
    const { body } = updateCommentDto;
    return this.commitsService.updateComment(
      userName,
      repoName,
      commentId,
      body,
    );
  }

  @Delete('comments/:username/:reponame/:commentId')
  @ApiOperation({ summary: 'Delete comment by id' })
  @ApiResponse({ status: 200, description: 'Comment deleted' })
  @ApiResponse({ status: 404, description: 'Comment not found' })
  deleteComment(
    @Param('username') userName: string,
    @Param('reponame') repoName: string,
    @Param('commentId') commentId: string,
  ) {
    return this.commitsService.deleteComment(userName, repoName, commentId);
  }
}
