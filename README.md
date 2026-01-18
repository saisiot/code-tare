# 📦 프로젝트 관리 대시보드

53개 이상의 프로젝트를 한눈에 관리할 수 있는 웹 기반 대시보드입니다.

## ✨ 주요 기능

### 🎯 프로젝트 관리
- **자동 스캔**: workspace 내의 모든 프로젝트 자동 감지
- **메타데이터 추출**: README, package.json, pyproject.toml 등에서 정보 자동 수집
- **기술 스택 분석**: 의존성을 분석하여 사용 기술 자동 파악

### 🏷️ 2가지 태그 시스템

#### 1. 진행 관련 태그 (고정)
- `진행중`, `중지`, `완료`, `계획중`, `deprecated`
- 프로젝트당 1개만 선택 가능
- 시스템에 고정되어 변경 불가

#### 2. 구분 관련 태그 (자유 편집)
- 기본 제공: AI, 웹앱, CLI, 봇, 스크래퍼, 자동화, 지식관리 등
- 사용자가 자유롭게 추가/삭제/색상 변경 가능
- 다중 선택 가능
- 전역 태그로 모든 프로젝트에서 공유
- **신규**: 태그 추가 후 자동으로 모달 재개방 및 새 태그 자동 선택

### 📝 프로젝트 제목 커스터마이징
- 폴더명과 별개로 사용자 지정 제목 설정 가능
- 의미 있는 이름으로 프로젝트 식별 용이
- 제목과 폴더명 모두 검색 가능
- 조건부 폴더명 표시 (제목과 다를 때만)

### 🔍 검색 및 필터링
- 실시간 검색 (커스텀 제목, 폴더명, 설명)
- 진행 상태별 필터링
- 구분 태그별 필터링
- 즐겨찾기 필터링

### 🚀 원클릭 프로젝트 열기
- **Claude Code**: 프로젝트를 Claude Code로 열기
- **VS Code**: 프로젝트를 VS Code로 열기
- **Finder**: Finder에서 프로젝트 폴더 보기
- **GitHub**: Git remote가 있는 경우 GitHub에서 열기

### ⭐ 즐겨찾기 & 아카이브
- 자주 사용하는 프로젝트 즐겨찾기
- 오래된 프로젝트 아카이브하여 숨기기
- 즐겨찾기한 프로젝트가 항상 맨 위에 표시

## 🏗️ 기술 스택

### 백엔드
- Node.js + Express
- 파일 시스템 기반 프로젝트 스캔
- JSON 기반 태그 데이터 저장

### 프론트엔드
- React + Vite
- TailwindCSS
- 반응형 그리드 레이아웃

## 🚀 시작하기

### 필수 요구사항
- Node.js >= 18.0.0
- npm >= 9.0.0

### 빠른 시작 (권장)

```bash
# 1. 저장소 클론
git clone <repository-url>
cd _project-dashboard

# 2. 환경 설정
cp .env.example .env
# .env 파일을 열어서 SCAN_PATH를 본인의 프로젝트 폴더 경로로 수정

# 3. 의존성 설치 및 실행 (한 번에)
npm install
npm run install-all
npm run dev
```

브라우저에서 자동으로 `http://localhost:5173`이 열립니다!

### 수동 실행

백엔드와 프론트엔드를 개별적으로 실행하려면:

```bash
# 백엔드 (터미널 1)
cd server
npm install
npm run dev

# 프론트엔드 (터미널 2)
cd client
npm install
npm run dev
```

## 📂 디렉토리 구조

```
_project-dashboard/
├── server/
│   ├── server.js          # Express 서버
│   ├── scanner.js         # 프로젝트 스캔 로직
│   ├── tags.js            # 태그 관리 로직
│   ├── actions.js         # 프로젝트 열기 액션
│   └── package.json
├── client/
│   ├── src/
│   │   ├── App.jsx                      # 메인 앱
│   │   ├── components/
│   │   │   ├── ProjectCard.jsx         # 프로젝트 카드
│   │   │   ├── SearchBar.jsx           # 검색바
│   │   │   ├── FilterPanel.jsx         # 필터 패널
│   │   │   └── TagEditor.jsx           # 태그 편집 모달
│   │   └── index.css
│   └── package.json
└── data/
    ├── project-tags.json         # 프로젝트별 태그 저장
    ├── tag-definitions.json      # 전역 태그 정의
    └── tag-colors.json           # 태그 색상 정의
```

## 🎨 사용법

### 프로젝트 검색
1. 상단 검색바에 프로젝트명이나 설명 입력
2. 실시간으로 결과 필터링

### 태그 편집
1. 프로젝트 카드의 "🏷️ 태그" 버튼 클릭
2. 진행 상태 선택 (라디오 버튼, 1개만)
3. 구분 태그 선택 (체크박스, 다중 선택)
4. 필요시 새로운 구분 태그 추가
5. 즐겨찾기 / 아카이브 체크
6. "저장" 버튼 클릭

### 새 구분 태그 추가
1. 태그 편집 모달에서 "새 구분 태그 추가" 섹션으로 이동
2. 태그 이름 입력 (예: "백엔드", "모바일")
3. "+ 전역 태그로 추가" 버튼 클릭
4. 모든 프로젝트에서 해당 태그 선택 가능

### 구분 태그 삭제
1. 태그 편집 모달 하단의 "⚙️ 구분 태그 전체 관리" 버튼 클릭
2. 삭제할 태그 옆의 "삭제" 버튼 클릭
3. 해당 태그를 사용 중인 프로젝트가 있으면 경고 표시

### 프로젝트 열기
- **🤖 Claude**: Claude Code로 프로젝트 열기
- **📝 VSCode**: VS Code로 프로젝트 열기
- **📁 Finder**: Finder에서 프로젝트 폴더 보기
- **🔗 GitHub**: GitHub 리포지토리 열기 (git remote가 있는 경우만)

## 📊 데이터 저장

모든 태그 데이터는 `data/` 폴더에 JSON 형식으로 저장됩니다:

- `project-tags.json`: 각 프로젝트의 태그 정보
- `tag-definitions.json`: 전역 태그 정의 (진행 상태, 구분 태그)
- `tag-colors.json`: 태그별 색상 정의

## 🔧 API 엔드포인트

### 프로젝트
- `GET /api/projects` - 모든 프로젝트 목록
- `POST /api/projects/scan` - 프로젝트 재스캔
- `POST /api/projects/open` - 프로젝트 열기

### 태그
- `GET /api/tags/available` - 사용 가능한 태그 목록
- `GET /api/tags/:projectName` - 특정 프로젝트의 태그
- `POST /api/tags/:projectName` - 프로젝트 태그 저장
- `POST /api/tags/manage` - 전역 태그 추가/삭제
- `POST /api/tags/colors` - 태그 색상 업데이트

## 💡 팁

1. **즐겨찾기 활용**: 자주 사용하는 프로젝트는 즐겨찾기로 등록하면 항상 맨 위에 표시됩니다.

2. **태그 조합**: 여러 구분 태그를 조합하여 프로젝트를 더 세밀하게 분류할 수 있습니다.

3. **검색 + 필터**: 검색과 필터를 동시에 사용하여 원하는 프로젝트를 빠르게 찾을 수 있습니다.

4. **아카이브**: 오래된 프로젝트는 아카이브 처리하여 메인 뷰에서 숨길 수 있습니다.

## ✨ 최신 업데이트

### v1.1.0 (2026-01-18)
- ✅ TagEditor 모달 자동 재개방: 태그 추가 후 자동으로 Dashboard 복귀 및 모달 재개방
- ✅ 프로젝트 제목 커스터마이징: 폴더명과 별개로 사용자 지정 제목 설정
- ✅ 검색 로직 개선: 커스텀 제목과 폴더명 모두 검색 가능
- ✅ window.location.reload() 제거: 안정성 및 UX 향상

## 🎯 향후 계획

- [ ] 프로젝트 통계 대시보드
- [ ] 태그별 프로젝트 수 시각화
- [ ] 최근 활동 타임라인
- [ ] 프로젝트 내보내기/가져오기
- [ ] 다크 모드 지원
- [ ] Fullscreen TagManagement 모달 (모달 스택 방식)

## 📝 라이선스

MIT

---

Made with ❤️ using Claude Code
