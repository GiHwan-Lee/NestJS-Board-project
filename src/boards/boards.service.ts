import { Injectable, NotFoundException } from '@nestjs/common';
import { BoardStatus } from './board-status.enum';
import { CreateBoardDto } from './dto/create-board-dto';

import { InjectRepository } from '@nestjs/typeorm';
import { Board } from './boards.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(Board)
    private boardRepository: Repository<Board>,
  ) {}

  async getBoardById(id: number): Promise<Board> {
    const found = await this.boardRepository.findOneBy({ id });

    if (!found) {
      throw new NotFoundException(`Can't find Board with your ${id}`);
    }

    return found;
  }

  async createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
    const { title, description } = createBoardDto;

    const board = this.boardRepository.create({
      title: title,
      description: description,
      status: BoardStatus.PUBLIC,
    });

    await this.boardRepository.save(board);

    return board;
  }
}

/*
@Injectable()
export class BoardsService {
  private boards: Board[] = [];

  getAllBoards(): Board[] {
    return this.boards;
  }



  deleteBoard(id: string): void {
    const found = this.getBoardById(id);
    this.boards = this.boards.filter((board) => board.id !== found.id);
  }

  updateBoardStatus(id: string, status: BoardStatus): Board {
    const board = this.getBoardById(id);

    board.status = status;

    return board;
  }
}
*/
// 나중에 따로 getBoardById에 에러 처리 코드 추가하자. 노션에 '게시판 CRUD 만들기'에 해당 내용 있음. 그리고 나중에 상황 보고 다른 함수들에도 오류 처리 하는 코드 추가 고려
