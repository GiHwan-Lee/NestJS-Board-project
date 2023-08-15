import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BoardStatus } from './board-status.enum';
import { User } from 'src/auth/user.entity';

@Entity() // 엔티티 데코레이터: Board를 데이터베이스의 테이블로 나타냄
export class Board extends BaseEntity {
  @PrimaryGeneratedColumn() // 기본 키와 자동 증가 컬럼
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: BoardStatus;

  // 다대일 관계: 각 게시판은 한 사용자에 속함
  @ManyToOne((type) => User, (user) => user.boards, { eager: false })
  user: User;
}
