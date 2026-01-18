<h1 align="center">Code-tare</h1>

<p align="center">
  <img src="docs/images/logo.png" alt="Code-tare Logo" width="400"/>
</p>

<p align="center">
  <strong>로컬 프로젝트를 한눈에 관리하는 웹 대시보드</strong>
</p>

<p align="center">
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License: MIT"/></a>
  <a href="https://github.com/tare/code-tare"><img src="https://img.shields.io/badge/version-1.1.0-blue.svg" alt="Version"/></a>
</p>

## 💡 만들게 된 계기

여러 가지 토이 프로젝트들을 하다 보니 관리가 너무 복잡해졌어요. 어떤 프로젝트가 어디에 있는지, 무슨 기술 스택을 썼는지, 언제 마지막으로 작업했는지 기억하기 어려웠죠.

"이 프로젝트들을 한눈에 보고 빠르게 접근할 수 있으면 좋겠다냥!" 🐱

그래서 만든 것이 Code-tare입니다. 실뭉치처럼 엉킨 프로젝트들을 깔끔하게 정리해주는 대시보드예요.

## 📸 대시보드 미리보기

<p align="center">
  <img src="docs/images/dashboard-screenshot.png" alt="Code-tare Dashboard" width="100%"/>
</p>

**주요 화면 구성:**
- 🔍 **검색 바**: 프로젝트 이름, 설명으로 빠른 검색
- 📊 **필터 패널**: 진행 상태, 구분 태그로 필터링
- 📦 **프로젝트 카드**: 제목, 진행 상태, 태그, 기술 스택 한눈에 확인
- ⚡ **빠른 실행 버튼**: Claude Code, VSCode, Finder, GitHub 원클릭 열기

## ⚙️ 작동 원리

Code-tare는 **LLM이나 복잡한 분석 없이**, 순수하게 파일 시스템을 스캔하여 정보를 수집합니다:

**🔍 자동 감지 방식:**
- `package.json` → Node.js 프로젝트
- `pyproject.toml` → Python Poetry 프로젝트
- `requirements.txt` → Python pip 프로젝트

**📊 정보 추출:**
- **설명**: package.json의 description 또는 README.md의 첫 문장
- **기술 스택**: dependencies 목록 자동 파싱
- **Git 정보**: .git/config에서 remote URL 추출
- **마지막 수정일**: .git/logs/HEAD의 최근 커밋 타임스탬프

**✨ 특징:**
- 완전히 로컬에서 실행 (외부 API 호출 없음)
- 빠른 스캔 속도 (정적 파일 분석)
- 비용 없음 (LLM 불필요)

## ⚠️ 시스템 요구사항

- **운영체제**: macOS (현재 macOS 전용)
- **Node.js**: v16 이상
- **npm**: v8 이상

**📝 참고:**
- Windows/Linux 지원은 현재 제공되지 않습니다
- Finder 열기, Terminal 열기 등의 기능은 macOS의 `open` 명령어를 사용합니다

## 🚀 빠른 시작

### 방법 1: 수동 설치

```bash
# 저장소 클론
git clone https://github.com/tare/code-tare.git
cd code-tare

# 환경 설정
cp .env.example .env
# .env 파일에서 SCAN_PATH를 본인의 프로젝트 폴더 경로로 수정

# 의존성 설치 및 실행
npm install
npm run install-all
npm run dev
```

브라우저에서 http://localhost:5173 접속

### 방법 2: 🤖 Claude Code / Codex 사용자

Claude Code CLI나 Codex를 사용한다면 더 간단합니다:

```bash
# 1. 저장소 클론
git clone https://github.com/tare/code-tare.git
cd code-tare

# 2. Claude Code 실행 후 다음 프롬프트 입력:
```

**프롬프트:**
```
이 프로젝트를 실행할 수 있게 환경 설정하고 서버 시작해줘.
SCAN_PATH는 /Users/내사용자명/프로젝트폴더 경로로 설정해줘.
```

**또는 더 구체적으로:**
```
.env.example을 .env로 복사하고, SCAN_PATH를 /Users/내사용자명/프로젝트폴더로 설정해줘.
그 다음 npm install, npm run install-all, npm run dev를 실행해서 서버를 시작해줘.
```

**💡 팁:**
- 프로젝트 폴더 경로는 본인의 실제 경로로 변경하세요
- 예: `/Users/tare/code_workshop`, `/Users/tare/projects` 등

## ✨ 주요 기능

- **자동 프로젝트 스캔**: 지정한 폴더의 모든 프로젝트를 자동으로 감지
- **태그 시스템**: 진행 상태 + 구분 태그로 프로젝트 분류
- **커스텀 제목**: 폴더명과 별개로 의미있는 제목 지정
- **검색 & 필터**: 실시간 검색 및 다양한 필터링
- **빠른 실행**: Claude Code, VSCode, Finder, GitHub 원클릭 열기
- **즐겨찾기**: 자주 쓰는 프로젝트 상단 고정

## 📖 사용 방법

### 1. 프로젝트 확인
- Dashboard에서 자동 스캔된 모든 프로젝트 확인
- 검색창으로 빠르게 찾기

### 2. 태그 추가
1. 프로젝트 카드의 **🏷️ 태그** 버튼 클릭
2. **진행 상태** 선택 (진행중, 중지, 완료, 계획중, deprecated)
3. **구분 태그** 선택 (AI, 웹앱, CLI 등)
4. 필요하면 새 태그 추가
5. **저장** 클릭

### 3. 프로젝트 제목 설정
1. 태그 편집 모달에서 **프로젝트 정보** 섹션 확인
2. **제목** 입력 (예: "틱톡 다운로더")
3. 저장하면 카드에 새 제목 표시
4. 폴더명도 함께 표시되어 구분 가능

### 4. 프로젝트 열기
카드 하단 버튼으로 바로 실행:
- **🤖 Claude**: Claude Code로 열기
- **📝 VSCode**: VS Code로 열기
- **📁 Finder**: Finder에서 보기
- **🔗 GitHub**: 저장소 페이지 열기

### 5. 필터링
좌측 필터 패널에서:
- 진행 상태별 필터
- 구분 태그별 필터
- 즐겨찾기만 보기

## ⚙️ 환경 설정

`.env` 파일 설정 항목:

```bash
# 프로젝트 스캔 경로 (필수)
SCAN_PATH=/Users/사용자명/프로젝트폴더

# 서버 포트 (선택, 기본값: 3001)
PORT=3001
```

## 🏷️ 태그 관리

### 진행 상태 태그
- 시스템 고정 태그 (수정 불가)
- 진행중, 중지, 완료, 계획중, deprecated
- 프로젝트당 1개만 선택

### 구분 태그
- 자유롭게 추가/삭제 가능
- 다중 선택 가능
- 전역 태그로 모든 프로젝트에서 공유
- 태그 추가 후 자동으로 모달 재개방 (v1.1.0 신규)

## 📁 프로젝트 구조

```
code-tare/
├── client/          # React 프론트엔드
├── server/          # Express 백엔드
├── data/            # 태그 데이터 (JSON)
└── README.md
```

## 💡 팁

1. **즐겨찾기 활용**: ⭐ 자주 사용하는 프로젝트는 즐겨찾기 등록
2. **아카이브**: 오래된 프로젝트는 📦 아카이브로 숨기기
3. **검색**: 제목, 폴더명, 설명 모두 검색 가능
4. **태그 조합**: 여러 구분 태그를 조합하여 세밀하게 분류

## 🔄 업데이트 이력

### v1.1.0 (2026-01-18)
- ✅ TagEditor 모달 자동 재개방
- ✅ 프로젝트 제목 커스터마이징
- ✅ 검색 로직 개선
- ✅ 안정성 향상 (window.location.reload 제거)

### v1.0.0 (2026-01-16)
- 🎉 첫 릴리즈

## 👤 제작자

**tare from the better**
- GitHub: [@tare](https://github.com/tare)

## 📝 라이선스

MIT License - 자유롭게 사용, 수정, 배포 가능

---

Made with ❤️ by tare from the better using Claude Code
