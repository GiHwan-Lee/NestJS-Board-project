<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# 프로젝트 이름

Board application

# 프로젝트 소개

게시판 애플리케이션입니다. 사용자는 자신이 원하는 주제나 생각, 정보 등을 게시글로 작성하여 공유할 수 있습니다. 게시판은 사용자들 간의 소통과 정보 공유를 위한 중요한 플랫폼이며, 이 애플리케이션은 그러한 목적을 선순위로 두고 있습니다.

사용자는 다음과 같은 기능을 이용할 수 있습니다.

게시글 작성: 자신의 생각이나 정보를 게시글로 작성하고 다른 사용자들과 공유할 수 있습니다.

게시글 조회: 다른 사용자가 작성한 게시글을 조회하거나, 자신이 작성한 게시글을 특정 조건으로 검색하여 조회할 수 있습니다.

게시글 관리: 자신이 작성한 게시글에 대하여 수정하거나 삭제할 수 있습니다.

게시판 애플리케이션은 사용자의 편의성을 최우선으로 개발되었으며, 사용자 인증 기능을 통해 안전하게 서비스를 이용할 수 있습니다.

# 프로젝트 실행 방법

1. 환경 설정: 프로젝트는 config/development.yaml와 config/production.yaml 파일을 환경 설정으로 사용합니다. 이 파일들은 .gitignore에 포함되어 있기 때문에 GitHub에서 코드를 받아왔을 때는 이 파일들이 포함되어 있지 않습니다. 아래는 config/development.yaml의 예시입니다. (실제 필요한 변수들로 변경해서 사용해야 합니다.)

```bash

database:
  host: localhost
  port: 3306
  username: root
  password: password

```

2. 서버 실행: npm run start 명령어를 입력하여 서버를 실행합니다.

```bash

npm run start

```

3. API 테스트: 서버가 정상적으로 실행되면 Postman과 같은 API 테스트 도구를 사용해서 각 API의 동작을 확인할 수 있습니다. 이 테스트는 서버가 클라이언트의 요청을 올바르게 처리하고 응답하는지를 확인할 수 있습니다.

> 참고: 이 프로젝트를 실행하기 위해서는 Nest와 TypeScript가 설치되어 있어야 합니다. 또한, 프로젝트를 처음 실행하는 경우 npm install 명령어를 통해 필요한 패키지들을 설치해야 합니다.

# 프로젝트 구조 및 파일 설명

이 board 프로젝트는 NestJS 프레임워크를 기반으로 작성되었습니다. 프로젝트의 구조는 Layered Architecture 방식을 따라 설계되었으며, 이 아키텍쳐를 사용한 주된 이유는 프로젝트의 확장성, 유지 보수성 및 모듈화를 향상시키기 위함입니다. NestJS는 이러한 구조를 쉽게 구현할 수 있게 도와주므로 본 프로젝트의 핵심 구조에 적합하게 선택되었습니다.

- `Board`: board 프로젝트의 루트 디렉토리입니다.
  - `/config`: 설정 파일들을 포함하는 폴더입니다.
    - `default.yaml`: 기본 설정을 정의하는 파일입니다.
    - `development.yaml`: 개발 환경에 대한 설정을 정의하는 파일입니다.
    - `production.yaml`: 프로덕션 환경에 대한 설정을 정의하는 파일입니다.
  - `/src`: 애플리케이션의 주요 소스 코드가 위치하는 폴더입니다.
    - `/auth`: 인증과 관련된 코드들을 포함하는 모듈입니다.
      - `/dto`: DTO(Data Transfer Object) 파일들을 포함하는 폴더입니다.
        - `auth-credential-dto.ts`: 인증 정보를 정의하는 DTO입니다.
      - `auth.controller.ts`: 인증 관련 요청 처리를 담당하는 컨트롤러입니다.
      - `auth.module.ts`: Auth 모듈의 구성요소들을 정의하고 연결하는 파일입니다. 이 파일은 Auth 관련 서비스, 컨트롤러, 그 외 의존성들을 모듈에 등록합니다.
      - `auth.service.ts`: 인증 관련 비즈니스 로직을 담당하는 서비스입니다.
      - `get-user.decorator.ts`: 사용자 정보를 요청 객체에서 추출하기 위한 사용자 정의 데코레이터입니다. 이 데코레이터는 요청에서 JWT 페이로드를 가져와 사용자를 식별합니다.
      - `jwt.strategy.ts`: JWT 인증 전략을 구현한 파일입니다.
      - `user.entity.ts`: 사용자 정보의 데이터베이스 엔터티를 정의하는 파일입니다.
      - `user.repository.ts`: 사용자 관련 CRUD 연산을 담당하는 리포지토리입니다.
    - `/boards`: 게시글 관련 코드들을 포함하는 모듈입니다.
      - `/dto`: DTO 파일들을 포함하는 폴더입니다.
        - `create-board-dto.ts`: 게시글 생성을 위한 DTO입니다.
      - `/pipes`: 사용자 정의 파이프를 포함하는 폴더입니다.
        - `board-status-validation.pipe.ts`: 게시글 상태의 유효성을 검증하는 파이프입니다.
      - `board-status.enum.ts`: 게시글의 상태를 나타내는 열거형 (enum)입니다. 게시글이 공개된 상태인지, 비공개 상태인지를 표시하기 위해 사용됩니다.
      - `boards.controller.ts`: 게시글 관련 요청 처리를 담당하는 컨트롤러입니다.
      - `boards.service.ts`: 게시글 관련 비즈니스 로직을 담당하는 서비스입니다.
      - `boards.entity.ts`: 게시글 정보의 데이터베이스 엔터티를 정의하는 파일입니다.
      - `boards.repository.ts`: 게시글 관련 CRUD 연산을 담당하는 리포지토리입니다.
      - `boards.module.ts`: Boards 모듈의 구성요소들을 정의하고 연결하는 파일입니다. 이 파일은 Boards 관련 서비스, 컨트롤러, 그 외 의존성들을 모듈에 등록합니다.
    - `/configs`: TypeORM 및 다른 설정 파일들이 위치하는 폴더입니다.
      - `typeorm.config.ts`: TypeORM에 대한 설정 파일입니다.
    - `app.module.ts`: 애플리케이션의 루트 모듈을 정의하는 파일입니다.
    - `main.ts`: 애플리케이션의 진입점을 정의하는 파일입니다.
  - `.gitignore`: Git 추적을 피해야하는 파일 및 디렉토리를 정의하는 파일입니다.
  - `package.json`: 프로젝트 메타데이터 및 의존성을 정의하는 파일입니다.
  - `tsconfig.json`: TypeScript 프로젝트 설정을 정의하는 파일입니다.

# 기술 스택

- NestJS: TypeScript 기반의 서버 사이드 애플리케이션 프레임워크

- TypeScript: JavaScript의 상위 집합인 프로그래밍 언어로, 정적 타입 검사 및 최신 ECMAScript 기능을 제공

- TypeORM: TypeScript와 JavaScript(ES7, ES6, ES5)를 위한 ORM. SQL 기반의 데이터베이스와 함께 작동하도록 설계됨

- Passport: 인증 미들웨어. 다양한 인증 전략을 통합하여 사용 가능함

- JWT: 요청자의 신원을 암호화하여 토큰 형태로 제공하는 방식

- bcryptjs: 비밀번호 해싱을 위한 라이브러리

-class-transformer & class-validator: 데이터 검증 및 변환을 위한 유틸리티 라이브러리

-pg: PostgreSQL 데이터베이스와의 상호 작용을 위한 모듈

-Prettier & ESLint: 코드 포맷팅 및 린팅을 도와주는 도구

# API 개요

## 📌 Auth Module

### 1. 사용자 회원가입

- `POST /auth/signup`: 새 사용자를 등록합니다. 사용자 이름, 비밀번호 등의 정보가 필요합니다.

### 2. 사용자 로그인

- `POST /auth/signin`: 사용자 이름과 비밀번호를 사용하여 로그인합니다. 성공 시 토큰을 반환합니다.

## 📌 Board Module

### 1. 특정 사용자의 게시글 모두 가져오기

- `GET /boards/username`: 현재 로그인된 특정 사용자의 모든 게시글을 가져옵니다.

### 2. 아이디로 게시글 가져오기

- `GET /boards/:id`: 지정된 ID의 게시글 정보를 가져옵니다. 해당 사용자에 대한 권한 검사가 있습니다.

### 3. 새로운 게시글 생성

- `POST /boards`: 새 게시글을 생성합니다. 제목, 내용 등의 정보가 필요하며, 게시글 생성자의 정보도 포함됩니다.

### 4. 아이디로 게시글 삭제

- `DELETE /boards/:id`: 지정된 ID의 게시글을 삭제합니다. 해당 사용자에 대한 권한 검사가 있습니다.

### 5. 게시글 상태 업데이트

- `PATCH /boards/:id/status`: 지정된 ID의 게시글 상태를 업데이트합니다. 예: 'OPEN', 'CLOSED' 등의 상태로 변경 가능합니다.

### 6. 모든 게시글 가져오기

- `GET /boards/`: 데이터베이스의 모든 게시글 정보와 총 개수를 가져옵니다.

## 더 알아보기

더 자세한 API 정보는 []의 Postman API 문서를 참고해주세요.

# 오류 발생 및 문제 해결 과정

-express 와는 달리 코드를 작성할 때 자동 import 해주는 기능이 nest에는 존재하는데, 이 기능이 제대로 동작하지 않아서 찾아보니 특정 모듈을 생성할 때 그 모듈의 모듈 파일에 제대로 imports와 providers 등에 알맞은 파일들이 들어가야 하는데, 이걸 자동적으로 잘 들어가게 하려면 모듈 파일을 먼저 생성해야 한다는 것을 알게 되었습니다.

-postgres와 pgAdmin을 설치할 때 가장 최신 버전을 사용했는데, pgAdmin이 제대로 실행되지 않는 문제가 있었습니다. 알아보니 이는 최신 버전에서 종종 발생하는 문제라서 더 낮은 버전을 설치하니 해결 되었습니다.

-repository 만든 뒤에 EntityRepository를 사용하여 해당 클래스가 엔티티 역할을 할 것이라는걸 선언해야 했는데, 현재 EntityRepository는 사용이 불가하므로 Repository 기본 클래스에 extends를 해주는 방식으로 대체하여 사용했습니다.

# 프로젝트를 진행하면서 느낀 점 및 후기

-지금까지 express를 사용하여 MVC 패턴에 따라 여러 프로젝트를 만들어 봤었는데, 이번에 처음으로 Layered Architecture를 사용해서 만들어 본 프로젝트 입니다.

-express에서는 직접 구현해야 했던 많은 기능들이 NestJS에서는 기본으로 제공되는데, 이러한 기본 제공 기능들은 단순히 편의성을 넘어서 획일화된 규칙으로 작용하며 개발에 있어 안정성과 유지보수성, 그리고 협업에 큰 장점을 가져다 준다는 장점이 있다는 것을 알게 되었습니다.

-express와 달리 코드마다 각자의 역할을 세분화함으로써 하나의 코드가 하나의 기능을 담당하게 할 수 있다는 점이 express와의 큰 차이점입니다. 이렇게 하나의 코드가 하나의 기능만을 담당하게 함으로써 유지보수성을 높일 수 있고 가독성이 높아진다는 장점이 있다는 것을 알게 되었습니다. 처음에는 Layered Architecture의 개념이 확 머리에 들어오지 않았는데 막상 작성을 해보니 express에서 MVC 모델로 만들었던 것처럼 라우터, 컨트롤러, data층과 같이 결국 기능을 세분화 하는 것이고 더욱 자세하게 나눴을 뿐이기 때문에 이런 구조를 이해하는데 있어서 기존에 공부했던 내용들이 많은 도움이 되었던것 같습니다.

-TypeScript를 사용함으로써 JavaScript보다 더 완성도 높은 프로젝트를 구성할 수 있었습니다.

# 향후 구현하고 싶은 기능들

-테스트

## License

Nest is [MIT licensed](LICENSE).
