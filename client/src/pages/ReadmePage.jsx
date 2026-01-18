import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function ReadmePage() {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchReadme();
  }, []);

  async function fetchReadme() {
    try {
      const res = await fetch('/api/readme');
      const data = await res.json();

      if (data.success) {
        setContent(data.content);
      } else {
        setError('README를 불러올 수 없습니다.');
      }
    } catch (err) {
      console.error('Error fetching README:', err);
      setError('README를 불러오는 중 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">📖 README 로드 중...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <article className="prose prose-slate max-w-none
            prose-headings:text-gray-900
            prose-h1:text-3xl prose-h1:font-bold prose-h1:border-b prose-h1:pb-2
            prose-h2:text-2xl prose-h2:font-semibold prose-h2:mt-8
            prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-6
            prose-p:text-gray-700 prose-p:leading-7
            prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
            prose-strong:text-gray-900 prose-strong:font-semibold
            prose-code:text-pink-600 prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
            prose-pre:bg-gray-900 prose-pre:text-gray-100
            prose-ul:list-disc prose-ul:ml-6
            prose-ol:list-decimal prose-ol:ml-6
            prose-li:text-gray-700
            prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:pl-4 prose-blockquote:italic
            prose-img:rounded-lg prose-img:shadow-md
            prose-table:border-collapse
            prose-th:bg-gray-100 prose-th:px-4 prose-th:py-2 prose-th:border
            prose-td:px-4 prose-td:py-2 prose-td:border
          ">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {content}
            </ReactMarkdown>
          </article>
        </div>
      </div>
    </div>
  );
}
