import { BadRequestException, PipeTransform } from '@nestjs/common';
import { BoardStatus } from '../board-status.enum';

// 게시판의 상태에 대한 유효성 검사를 위한 Pipe
export class BoardStatusValidationPipe implements PipeTransform {
  // 상태 옵션으로 2가지만 들어오도록 설정
  readonly StatusOptions = [BoardStatus.PRIVATE, BoardStatus.PUBLIC];

  // 클라이언트로부터 받은 값을 대문자로 변환 후 유효성 확인
  transform(value: any) {
    value = value.toUpperCase();

    if (!this.isStatusValid(value)) {
      throw new BadRequestException(`${value} is not in the status options`);
    }

    return value;
  }

  // 클라이언트로부터 전달 받은 상태값이 StatusOptions에 있는지 확인
  private isStatusValid(status: any) {
    const index = this.StatusOptions.indexOf(status);

    if (index != -1) {
      return true;
    } else {
      return false;
    }
  }
}
