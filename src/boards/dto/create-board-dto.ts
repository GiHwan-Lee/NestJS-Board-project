import { IsNotEmpty } from 'class-validator';

// 게시판 생성을 위한 데이터 전송 객체(DTO)
export class CreateBoardDto {
  @IsNotEmpty() // 제목은 반드시 포함되어야 함
  title: string;

  @IsNotEmpty() // 설명은 반드시 포함되어야 함
  description: string;
}
