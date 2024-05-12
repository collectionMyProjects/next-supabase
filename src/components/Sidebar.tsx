import { isSidebarOpen } from '@/atoms/sidebar';
import { cn } from '@/utils/style';
import { useAtom } from 'jotai';

const Sidebar = () => {
  const [isOpen, setIsOepn] = useAtom(isSidebarOpen);

  return <div className={cn('min-h-screen', isOpen ? 'flex' : 'hidden')}></div>;
};

export default Sidebar;
