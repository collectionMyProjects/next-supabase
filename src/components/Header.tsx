'use client';

import { isSidebarOpen } from '@/atoms/sidebar';
import { useAtom } from 'jotai';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { BsRobot } from 'react-icons/bs';
import IconButton from './IconButton';

const Header = () => {
  const [isOpen, setIsOpen] = useAtom(isSidebarOpen);

  return (
    <header className="flex h-16 items-center justify-between border-b px-4 lg:px-10">
      <IconButton
        Icon={isOpen ? AiOutlineClose : AiOutlineMenu}
        component="button"
        onClick={() => setIsOpen((tag) => !tag)}
      />
      <Link href="/">
        <h1 className="text-3xl font-medium text-slate-600">BLOG</h1>
      </Link>
      <IconButton Icon={BsRobot} component={Link} href="/search" />
    </header>
  );
};

export default Header;
