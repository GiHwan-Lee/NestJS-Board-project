import { Injectable, NotFoundException } from '@nestjs/common';
import { BoardStatus } from './board-status.enum';
import { CreateBoardDto } from './dto/create-board-dto';
import { Board } from './boards.entity';
import { BoardRepository } from './boards.repository';
import { User } from 'src/auth/user.entity';

@Injectable()
export class BoardsService {
  constructor(private boardRepository: BoardRepository) {} // board 레포지토리 주입

  // 사용자에 의해 특정 아이디의 게시글을 검색
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

  // 새로운 게시글 생성
  createBoard(createBoardDto: CreateBoardDto, user: User): Promise<Board> {
    return this.boardRepository.createBoard(createBoardDto, user);
  }

  // 사용자에 의해 게시글 삭제
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

  // 게시글 상태 업데이트
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

  // 모든 게시글 가져오기
  async getAllBoards(): Promise<Board[]> {
    return await this.boardRepository.find();
  }

  // 특정 사용자의 게시글 모두 가져오기
  async getAllBoardsByUsername(user: User): Promise<Board[]> {
    const query = this.boardRepository.createQueryBuilder('board');

    query.where('board.userId = :userId', { userId: user.id });

    const boards = await query.getMany();

    return boards;
  }
}
