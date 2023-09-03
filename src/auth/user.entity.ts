import { Board } from 'src/boards/boards.entity';
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';

// `User` 테이블과 매핑될 엔티티입니다.
@Entity()
// `username` 칼럼에 고유성 제약 조건을 설정합니다.
@Unique(['username'])
export class User extends BaseEntity {
  // 주요 키로 사용될 `id` 칼럼입니다. 값은 자동으로 생성됩니다.
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  // `User` 엔티티와 `Board` 엔티티 사이의 1:N 관계를 정의합니다.
  // 여기서는 한 명의 사용자가 여러 게시판을 가질 수 있습니다.
  @OneToMany((type) => Board, (board) => board.user, { eager: true })
  boards: Board[];
}
