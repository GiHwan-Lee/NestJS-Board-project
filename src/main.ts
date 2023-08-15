import { NestFactory } from '@nestjs/core'; // Nest에서 제공하는 팩토리 메서드 가져오기
import { AppModule } from './app.module'; // 메인 앱 모듈 가져오기
import { Logger } from '@nestjs/common'; // 로거 모듈 가져오기
import * as config from 'config'; // 환경변수 설정 모듈 가져오기

// 애플리케이션을 시작하고 부트스트랩하는 비동기 함수
async function bootstrap() {
  // 로거 객체 초기화
  const logger = new Logger();

  // Nest 애플리케이션 인스턴스 생성
  const app = await NestFactory.create(AppModule);

  // 설정 파일에서 서버 정보 가져온 뒤 포트 정보를 추출
  const serverConfig = config.get('server');
  const port = serverConfig.port;

  // 지정된 포트에서 애플리케이션 시작
  await app.listen(port);

  // 애플리케이션 시작 로그 출력
  logger.log(`Application running on port ${port}`);
}

// 부트스트랩 함수 실행하여 애플리케이션 시작
bootstrap();
