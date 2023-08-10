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

@Controller('boards')
@UseGuards(AuthGuard())
export class BoardsController {
  private logger = new Logger('BoardController');

  constructor(private boardService: BoardsService) {}

  @Get('/username')
  getAllBoardsByUsername(@GetUser() user: User): Promise<Board[]> {
    this.logger.verbose(`User ${user.username} trying to get all boards`);
    return this.boardService.getAllBoardsByUsername(user);
  }

  @Get('/:id')
  getBoardById(@Param('id') id: number, @GetUser() user: User): Promise<Board> {
    return this.boardService.getBoardById(id, user);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createBoard(
    @Body() createBoardDto: CreateBoardDto,
    @GetUser() user: User,
  ): Promise<Board> {
    this.logger.verbose(`User ${user.username} creating a new board
    Payload: ${JSON.stringify(createBoardDto)}`);
    return this.boardService.createBoard(createBoardDto, user);
  }

  @Delete('/:id')
  deleteBoard(
    @Param('id', ParseIntPipe) id: number,
    @GetUser() user: User,
  ): Promise<void> {
    return this.boardService.deleteBoard(id, user);
  }

  @Patch('/:id/status')
  updateBoardStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body('status', BoardStatusValidationPipe) status: BoardStatus,
    @GetUser() user: User,
  ): Promise<Board> {
    return this.boardService.updateBoardStatus(id, status, user);
  }

  @Get('/')
  getAllBoards(): Promise<Board[]> {
    return this.boardService.getAllBoards();
  }
}
