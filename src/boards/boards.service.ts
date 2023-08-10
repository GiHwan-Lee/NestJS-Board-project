import { Injectable, NotFoundException } from '@nestjs/common';
import { BoardStatus } from './board-status.enum';
import { CreateBoardDto } from './dto/create-board-dto';
import { Board } from './boards.entity';
import { BoardRepository } from './boards.repository';
import { User } from 'src/auth/user.entity';

@Injectable()
export class BoardsService {
  constructor(private boardRepository: BoardRepository) {}

  async getBoardById(id: number, user: User): Promise<Board> {
    const query = await this.boardRepository.createQueryBuilder('board');

    query.where('board.id = :id AND board.userId = :userId', {
      id,
      userId: user.id,
    });

    const found = await query.getOne();

    if (!found) {
      throw new NotFoundException(`Can't find Board with your ${id}`);
    }

    return found;
  }

  createBoard(createBoardDto: CreateBoardDto, user: User): Promise<Board> {
    return this.boardRepository.createBoard(createBoardDto, user);
  }

  async deleteBoard(id: number, user: User): Promise<void> {
    const result = await this.boardRepository
      .createQueryBuilder()
      .delete()
      .from(Board)
      .where('id = :id AND userId = :userId', { id, userId: user.id })
      .execute();

    if (result.affected === 0) {
      throw new NotFoundException(`Can't find Board with your ${id}`);
    }
  }

  async updateBoardStatus(
    id: number,
    status: BoardStatus,
    user: User,
  ): Promise<Board> {
    const board = await this.getBoardById(id, user);

    board.status = status;
    await this.boardRepository.save(board);

    return board;
  }

  async getAllBoards(): Promise<Board[]> {
    return await this.boardRepository.find();
  }

  async getAllBoardsByUsername(user: User): Promise<Board[]> {
    const query = this.boardRepository.createQueryBuilder('board');

    query.where('board.userId = :userId', { userId: user.id });

    const boards = await query.getMany();

    return boards;
  }
}
// 나중에 따로 getBoardById에 에러 처리 코드 추가하자. 노션에 '게시판 CRUD 만들기'에 해당 내용 있음. 그리고 나중에 상황 보고 다른 함수들에도 오류 처리 하는 코드 추가 고려
