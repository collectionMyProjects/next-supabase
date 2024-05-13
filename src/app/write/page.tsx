'use client';

import ReactSelect from 'react-select/creatable';

const Write = () => {
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
          <ReactSelect options={[]} placeholder="카테고리" isMulti={false} />
          <ReactSelect options={[]} placeholder="태그" isMulti />
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

export default Write;
