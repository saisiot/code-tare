# 📦 Code-tare

> 로컬 프로젝트를 한눈에 관리하는 웹 대시보드

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/badge/version-1.1.0-blue.svg)](https://github.com/tare/code-tare)

## 🚀 빠른 시작

### 설치

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
