'use client';

import { MarkdownEditor } from '@/components/Markdown';
import { useCategories, useTags } from '@/utils/apiHooks';
import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';
import ReactSelect from 'react-select/creatable';

type WriteProps = {
  existingTags: string[];
  existingCategories: string[];
};

const WritePage = () => {
  const router = useRouter();

  const fileRef = useRef<HTMLInputElement>(null);

  const { existingCategories } = useCategories();
  const { existingTags } = useTags();

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async () => {
    if (title.length === 0) return alert('제목을 입력해주세요.');
    if (category.length === 0) return alert('카테고리를 입력해주세요.');
    if (tags.length === 0) return alert('태그를 입력해주세요.');
    if (content.length === 0) return alert('글 내용을 입력해주세요.');

    const formData = new FormData();

    formData.append('title', title);
    formData.append('category', category);
    formData.append('tags', tags);
    formData.append('content', content);

    if (fileRef.current?.files) {
      formData.append('file', fileRef.current?.files[0]);
    }

    const response = await fetch('/api/posts', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.id) router.push(`/posts/${data.id}`);
  };

  return (
    <div className="container mx-auto flex-col px-4 pb-20 pt-12">
      <h1 className="mb-8 text-2xl font-medium">새로운 글</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="제목"
            onChange={(e) => setTitle(e.target.value)}
            className="rounded-md border border-gray-300 p-2 transition-all hover:border-gray-400"
          />
          <input
            type="file"
            ref={fileRef}
            className="rounded-md border border-gray-300 p-2 transition-all hover:border-gray-400"
          />
          <ReactSelect
            options={(existingCategories ?? [])?.map((category) => ({
              value: category,
              label: category,
            }))}
            onChange={(e) => e && setCategory(e.value)}
            placeholder="카테고리"
            isMulti={false}
          />
          <ReactSelect
            options={(existingTags ?? [])?.map((tag) => ({
              value: tag,
              label: tag,
            }))}
            onChange={(e) =>
              e && setTags(JSON.stringify(e.map((tags) => tags.value)))
            }
            placeholder="태그"
            isMulti
          />
          <MarkdownEditor
            height={500}
            value={content}
            onChange={(e) => setContent(e ?? '')}
          />
        </div>
        <button
          type="submit"
          className="mt-4 w-full rounded-md bg-slate-600 py-2 text-white hover:bg-slate-700"
        >
          작성하기
        </button>
      </form>
    </div>
  );
};

export default WritePage;
