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

## License

Nest is [MIT licensed](LICENSE).
