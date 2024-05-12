'use client';

import { isSidebarOpen } from '@/atoms/sidebar';
import { useAtom } from 'jotai';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { BsRobot } from 'react-icons/bs';

const Header = () => {
  const [isOpen, setIsOpen] = useAtom(isSidebarOpen);

  return (
    <header className="flex h-16 items-center justify-between border-b px-4 lg:px-10">
      <button onClick={() => setIsOpen((tag) => !tag)} className="p-2">
        {isOpen ? (
          <AiOutlineClose className="size-5 lg:size-6" />
        ) : (
          <AiOutlineMenu className="size-5 lg:size-6" />
        )}
      </button>
      <Link href="/">
        <h1 className="text-3xl font-medium text-slate-600">BLOG</h1>
      </Link>
      <Link href="/search">
        <BsRobot className="size-5 lg:size-6" />
      </Link>
    </header>
  );
};

export default Header;
