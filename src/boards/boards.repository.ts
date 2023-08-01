import { Injectable } from '@nestjs/common';
//import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { Board } from './boards.entity';
import { BoardStatus } from './board-status.enum';
import { CreateBoardDto } from './dto/create-board-dto';

@Injectable()
export class BoardRepository extends Repository<Board> {
  constructor(private dataSourse: DataSource) {
    super(Board, dataSourse.createEntityManager());
  }

  async createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
    const { title, description } = createBoardDto;

    const board = this.create({
      title: title,
      description: description,
      status: BoardStatus.PUBLIC,
    });

    await this.manager.save(board);

    return board;
  }
}
