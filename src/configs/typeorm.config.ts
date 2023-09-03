import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as config from 'config';

// 외부 설정 파일에서 데이터베이스 설정을 가져옵니다.
const dbConfig = config.get('db');

export const typeORMConfig: TypeOrmModuleOptions = {
  // 데이터베이스 타입을 정의합니다 (예: postgres, mysql 등).
  type: dbConfig.type,

  // 데이터베이스 호스트를 정의합니다. 가능하다면 환경 변수를 우선합니다.
  host: process.env.RDS_HOSTNAME || dbConfig.host,

  // 데이터베이스 포트를 정의합니다. 가능하다면 환경 변수를 우선합니다.
  port: process.env.RDS_PORT || dbConfig.port,

  // 데이터베이스 사용자 이름을 정의합니다. 가능하다면 환경 변수를 우선합니다.
  username: process.env.RDS_USERNAME || dbConfig.username,

  // 데이터베이스 비밀번호를 정의합니다. 가능하다면 환경 변수를 우선합니다.
  password: process.env.RDS_PASSWORD || dbConfig.password,

  // 데이터베이스 이름을 정의합니다. 가능하다면 환경 변수를 우선합니다.
  database: process.env.RDS_DB_NAME || dbConfig.database,

  // 엔터티 파일의 경로입니다. JS와 TS 확장자 모두를 포함합니다.
  entities: [__dirname + '/../**/*.entity.{js,ts}'],

  // 데이터베이스가 현재 엔터티 상태와 동기화되어야 하는지 결정합니다.
  synchronize: dbConfig.synchronize,
};
