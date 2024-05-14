'use client';

import { MarkdownEditor } from '@/components/Markdown';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';

type WriteProps = {
  existingTags: string[];
  existingCategories: string[];
};

const WritePage = () => {
  const router = useRouter();

  const titleRef = useRef<HTMLInputElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  return (
    <div className="container mx-auto flex-col px-4 pb-20 pt-12">
      <h1 className="mb-8 text-2xl font-medium">새로운 글</h1>
      <form>
        <div className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="제목"
            className="rounded-md border border-gray-300 p-2 transition-all hover:border-gray-400"
          />
          <input
            type="file"
            className="rounded-md border border-gray-300 p-2 transition-all hover:border-gray-400"
          />
          {/* <ReactSelect
            options={existingCategories.map((category) => ({
              value: category,
              label: category,
            }))}
            placeholder="카테고리"
            isMulti={false}
          />
          <ReactSelect
            options={existingTags.map((tag) => ({
              value: tag,
              label: tag,
            }))}
            placeholder="태그"
            isMulti
          /> */}
          <MarkdownEditor height={500} />
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
