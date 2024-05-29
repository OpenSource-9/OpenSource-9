# OpenSource 9 프로젝트

OpenSource 9 프로젝트트에 오신 것을 환영합니다!

## 목차

- [소개](#소개)
- [프로젝트 구조](#프로젝트-구조)
- [사용된 기술](#사용된-기술)
- [시작하기](#시작하기)
- [애플리케이션 실행](#애플리케이션-실행)
- [백엔드 설정](#백엔드-설정)
- [프론트엔드 설정](#프론트엔드-설정)
- [라이센스](#라이센스)

## 소개

My Running Game 프로젝트는 Three.js,React Three Fiber 를 사용하여 3D 그래픽을 렌더링하고, 동적인 점수판을 특징으로 하는 웹 기반 게임입니다. 이 애플리케이션은 Next.js를 사용하여 구축되었으며, ES6 자바스크립트 문법을 활용하고 백엔드는 AWS와 SQL 데이터베이스를 사용하여 구현되었습니다.

## 프로젝트 구조

이 프로젝트는 다음과 같이 구성되어 있습니다:

/
├── components/
│   ├── Game.jsx
│   ├── Header.jsx
│   └── Score.jsx
├── pages/
│   └── index.js
├── public/
│   └── assets/
├── styles/
│   └── globals.css
├── .gitignore
├── package.json
└── README.md


### 컴포넌트

- **Game.jsx**: Three.js로 개발된, 달리기 게임의 핵심이 되는 컴포넌트입니다.
- **Header.jsx**: 게임 및 점수판으로의 네비게이션 버튼을 포함한 헤더입니다. `Menu` 상태 변수를 사용하여 Game과 Scoreboard 컴포넌트를 전환합니다.
- **Score.jsx**: 플레이어의 점수를 표시하는 점수판 컴포넌트입니다.

### 페이지

- **index.js**: `Menu` 상태에 따라 Game 또는 Scoreboard를 조건부로 렌더링하는 애플리케이션의 메인 엔트리 포인트입니다.

## 사용된 기술

- **프론트엔드**:
  - Next.js
  - React.js
  - Three.js
  - React Three Fiber.js
  - Cannon.js 
  - ES6 자바스크립트

- **백엔드**:
  - AWS (Amazon Web Services)
  - SQL 데이터베이스

## 시작하기

프로젝트를 시작하려면 다음 단계를 따르세요:

1. **저장소 클론**:
    ```bash
    git clone https://github.com/your-username/my-running-game.git -수정 필요
    cd my-running-game - 수정필요
    ```

2. **의존성 설치**:
    ```bash
    npm install
    ```

3. **환경 변수 설정**:
    루트 디렉토리에 `.env` 파일을 생성하고 AWS 및 데이터베이스 연결에 필요한 환경 변수를 추가합니다.

4. **개발 서버 실행**:
    ```bash
    npm run dev
    ```

## 애플리케이션 실행

개발 서버를 시작한 후, 브라우저를 열고 `http://localhost:3000`으로 이동하여 애플리케이션을 확인할 수 있습니다. 헤더의 버튼을 사용하여 게임과 점수판을 전환할 수 있습니다.

## 백엔드 설정

1. **AWS 설정**:
   - AWS 계정을 설정하고 필요한 서비스(Lambda, RDS 등)를 생성합니다.
   - AWS 자격 증명 및 엔드포인트로 환경 변수를 구성합니다.

2. **SQL 데이터베이스**:
   - SQL 데이터베이스(MySQL, PostgreSQL 등)를 설정합니다.
   - 애플리케이션 요구 사항에 맞는 데이터베이스 스키마(예: 점수를 저장할 테이블)를 확인합니다.

## 프론트엔드 설정

프론트엔드는 Next.js를 사용하여 구축되었으며, 서버 사이드 렌더링과 정적 사이트 생성의 강력한 프레임워크를 제공합니다.

1. **컴포넌트**:
   - `Game.jsx` 컴포넌트는 Three.js를 사용하여 게임 로직과 렌더링을 처리합니다.
   - `Header.jsx` 컴포넌트는 네비게이션 및 상태 관리를 통해 게임 또는 점수판을 표시합니다.
   - `Score.jsx` 컴포넌트는 백엔드에서 점수를 가져와 표시합니다.

2. **스타일링**:
   - 해당 파일은 tailwind css를 이용하지만 전역 스타일링을 하고싶다면 globals.css를 이용할수도 있습니다.
   - 전역 스타일은 `styles/globals.css` 파일에 정의되어 있습니다.
   - 필요에 따라 컴포넌트별 스타일을 추가할 수 있습니다.

## 라이센스

이 프로젝트는 MIT 라이센스에 따라 라이센스가 부여됩니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.
