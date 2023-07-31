import { Board } from './boards.entity';
import { Repository } from 'typeorm';

export class BoardRepository extends Repository<Board> {}
