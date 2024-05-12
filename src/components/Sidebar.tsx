'use client';

import { isSidebarOpen } from '@/atoms/sidebar';
import { cn } from '@/utils/style';
import { useAtom } from 'jotai';
import Link from 'next/link';
import { AiFillGithub, AiFillInstagram, AiOutlineClose } from 'react-icons/ai';
import IconButton from './IconButton';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useAtom(isSidebarOpen);

  return (
    <div
      className={cn(
        'absolute z-10 min-h-screen flex-col gap-6 border-r bg-white p-10 text-base lg:relative',
        isOpen ? 'flex' : 'hidden',
      )}
    >
      <div className="flex justify-end lg:hidden">
        <IconButton
          Icon={AiOutlineClose}
          iconClassName="size-6 cursor-pointer"
          onClick={() => setIsOpen(false)}
        />
      </div>
      <Link href="/" className="w-48 font-medium text-gray-600 hover:underline">
        홈
      </Link>
      <Link
        href="/tag"
        className="w-48 font-medium text-gray-600 hover:underline"
      >
        태그
      </Link>
      <Link
        href="/category/Web-Developmnet"
        className="w-48 font-medium text-gray-600 hover:underline"
      >
        Web Development
      </Link>
      <div className="mt-10 flex items-center gap-4">
        <IconButton
          Icon={AiFillInstagram}
          component={Link}
          href="https://www.instagram.com/lsj0202_"
          target="_blank"
        />
        <IconButton
          Icon={AiFillGithub}
          component={Link}
          href="https://github.com/lsj0202"
          target="_blank"
        />
      </div>
    </div>
  );
};

export default Sidebar;
