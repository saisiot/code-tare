import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
  const location = useLocation();

  return (
    <nav className="bg-white shadow-md sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">
            📊 프로젝트 대시보드
          </h1>

          <div className="flex gap-4">
            <Link
              to="/"
              className={`px-4 py-2 rounded transition-colors ${
                location.pathname === '/'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              📁 프로젝트
            </Link>
            <Link
              to="/tags"
              className={`px-4 py-2 rounded transition-colors ${
                location.pathname === '/tags'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              🏷️ 태그 관리
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
