// Nest.js 관련 라이브러리와 필요한 모듈들을 가져옵니다.
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Delete,
  UsePipes,
  ValidationPipe,
  ParseIntPipe,
  Patch,
  UseGuards,
  Logger,
} from '@nestjs/common';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board-dto';
import { Board } from './boards.entity';
import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';
import { BoardStatus } from './board-status.enum';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from 'src/auth/user.entity';

// 'boards' 경로에 대한 컨트롤러를 정의합니다.
@Controller('boards')
@UseGuards(AuthGuard()) // UseGuards를 사용하여 인증된 사용자만 접근하도록 합니다.
export class BoardsController {
  private logger = new Logger('BoardController');

  constructor(private boardService: BoardsService) {} // board 서비스 주입

  // 특정 사용자의 게시글 모두 가져오기
  @Get('/username')
  getAllBoardsByUsername(@GetUser() user: User): Promise<Board[]> {
    this.logger.verbose(`User ${user.username} trying to get all boards`);
    return this.boardService.getAllBoardsByUsername(user);
  }

  // 아이디로 게시글 가져오기
  @Get('/:id')
  getBoardById(@Param('id') id: number, @GetUser() user: User): Promise<Board> {
    return this.boardService.getBoardById(id, user);
  }

  // 새로운 게시글 생성
  @Post()
  @UsePipes(ValidationPipe) // 유효성 검사 파이프를 사용합니다.
  createBoard(
    @Body() createBoardDto: CreateBoardDto,
    @GetUser() user: User,
  ): Promise<Board> {
    this.logger.verbose(`User ${user.username} creating a new board
    Payload: ${JSON.stringify(createBoardDto)}`);
    return this.boardService.createBoard(createBoardDto, user);
  }

  // 아이디로 게시글 삭제
  @Delete('/:id')
  deleteBoard(
    @Param('id', ParseIntPipe) id: number,
    @GetUser() user: User,
  ): Promise<void> {
    return this.boardService.deleteBoard(id, user);
  }

  // 게시글 상태 업데이트
  @Patch('/:id/status')
  updateBoardStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body('status', BoardStatusValidationPipe) status: BoardStatus,
    @GetUser() user: User,
  ): Promise<Board> {
    return this.boardService.updateBoardStatus(id, status, user);
  }

  // 모든 게시글 가져오기
  @Get('/')
  getAllBoards(): Promise<Board[]> {
    return this.boardService.getAllBoards();
  }
}
