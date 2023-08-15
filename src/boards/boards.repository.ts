import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Board } from './boards.entity';
import { BoardStatus } from './board-status.enum';
import { CreateBoardDto } from './dto/create-board-dto';
import { User } from 'src/auth/user.entity';

@Injectable()
export class BoardRepository extends Repository<Board> {
  // 데이터 소스 주입을 위한 생성자
  constructor(private dataSourse: DataSource) {
    super(Board, dataSourse.createEntityManager());
  }

  // 새로운 게시글을 생성하는 함수
  async createBoard(
    createBoardDto: CreateBoardDto,
    user: User,
  ): Promise<Board> {
    const { title, description } = createBoardDto;

    // 새로운 게시글을 객체로 생성
    const board = this.create({
      title: title,
      description: description,
      status: BoardStatus.PUBLIC,
      user: user,
    });

    // 데이터베이스에 해당 게시글을 저장
    await this.manager.save(board);

    return board;
  }
}
