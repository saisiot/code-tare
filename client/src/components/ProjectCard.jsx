export default function ProjectCard({ project, tagColors, onOpenTagEditor }) {
  async function openProject(app) {
    try {
      const body = {
        path: project.path,
        app: app
      };

      if (app === 'github' && project.gitRemote) {
        body.url = project.gitRemote;
      }

      const res = await fetch('/api/projects/open', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });

      const data = await res.json();
      if (!data.success) {
        alert(`오류: ${data.error}`);
      }
    } catch (error) {
      console.error('Error opening project:', error);
      alert('프로젝트를 여는 중 오류가 발생했습니다.');
    }
  }

  function formatDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now - date;
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return '오늘';
    if (diffDays === 1) return '어제';
    if (diffDays < 7) return `${diffDays}일 전`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)}주 전`;
    if (diffDays < 365) return `${Math.floor(diffDays / 30)}개월 전`;
    return `${Math.floor(diffDays / 365)}년 전`;
  }

  function getTagColor(tag, category) {
    if (!tagColors) return 'bg-gray-100 text-gray-600';

    if (category === 'progress') {
      return tagColors.progress?.[tag] || 'bg-gray-100 text-gray-600';
    } else {
      return tagColors.categories?.[tag] || tagColors.categories?.default || 'bg-gray-100 text-gray-600';
    }
  }

  const { tags } = project;

  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow">
      {/* 헤더 */}
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-lg font-bold text-gray-900 truncate flex-1" title={project.name}>
          {project.name}
        </h3>
        {tags?.favorite && (
          <span className="text-yellow-400 ml-2">⭐</span>
        )}
      </div>

      {/* 태그 */}
      <div className="flex gap-1 flex-wrap mb-3 min-h-[28px]">
        {/* 진행 관련 태그 */}
        {tags?.progress && (
          <span className={`text-xs px-2 py-1 rounded font-semibold border-2 ${getTagColor(tags.progress, 'progress')}`}>
            {tags.progress}
          </span>
        )}

        {/* 구분 태그 */}
        {tags?.categories?.map(tag => (
          <span
            key={tag}
            className={`text-xs px-2 py-1 rounded ${getTagColor(tag, 'category')}`}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* 설명 */}
      <p className="text-gray-600 text-sm mb-3 line-clamp-2 min-h-[40px]">
        {project.description || '설명 없음'}
      </p>

      {/* 기술 스택 */}
      {project.techStack && project.techStack.length > 0 && (
        <div className="flex gap-1 flex-wrap mb-3">
          {project.techStack.slice(0, 5).map(tech => (
            <span key={tech} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
              {tech}
            </span>
          ))}
          {project.techStack.length > 5 && (
            <span className="text-xs text-gray-400">+{project.techStack.length - 5}</span>
          )}
        </div>
      )}

      {/* 메타 정보 */}
      <div className="text-xs text-gray-500 mb-3">
        <div>수정: {formatDate(project.lastModified)}</div>
        {project.type && project.type.length > 0 && (
          <div className="mt-1">타입: {project.type.join(', ')}</div>
        )}
      </div>

      {/* 액션 버튼 */}
      <div className="flex gap-2 flex-wrap border-t pt-3">
        <button
          onClick={() => openProject('claude')}
          className="flex-1 min-w-[80px] bg-purple-500 text-white px-2 py-1 rounded text-xs hover:bg-purple-600 transition-colors"
          title="Claude Code로 열기"
        >
          🤖 Claude
        </button>
        <button
          onClick={() => openProject('vscode')}
          className="flex-1 min-w-[80px] bg-blue-500 text-white px-2 py-1 rounded text-xs hover:bg-blue-600 transition-colors"
          title="VS Code로 열기"
        >
          📝 VSCode
        </button>
        <button
          onClick={() => openProject('finder')}
          className="flex-1 min-w-[80px] bg-gray-500 text-white px-2 py-1 rounded text-xs hover:bg-gray-600 transition-colors"
          title="Finder에서 보기"
        >
          📁 Finder
        </button>
        {project.gitRemote && (
          <button
            onClick={() => openProject('github')}
            className="flex-1 min-w-[80px] bg-gray-700 text-white px-2 py-1 rounded text-xs hover:bg-gray-800 transition-colors"
            title="GitHub에서 보기"
          >
            🔗 GitHub
          </button>
        )}
        <button
          onClick={onOpenTagEditor}
          className="flex-1 min-w-[80px] bg-green-500 text-white px-2 py-1 rounded text-xs hover:bg-green-600 transition-colors"
          title="태그 편집"
        >
          🏷️ 태그
        </button>
      </div>
    </div>
  );
}
