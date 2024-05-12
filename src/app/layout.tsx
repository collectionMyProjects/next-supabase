import { cn } from '@/utils/style';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Footer from '../components/Footer';
import Header from '../components/Header';
import QueryClientProviders from '../components/QueryClientProviders';
import Sidebar from '../components/Sidebar';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '이상진의 블로그',
  description: '개발 관련 글을 올려요',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <QueryClientProviders>
          <div
            className={cn(
              'flex h-screen w-screen text-sm lg:text-base',
              inter.className,
            )}
          >
            <Sidebar />
            <div className="flex flex-1 flex-col">
              <Header />
              <div className="flex flex-1 flex-col overflow-y-auto">
                <main className="flex flex-1 flex-col">{children}</main>
                <Footer />
              </div>
            </div>
          </div>
        </QueryClientProviders>
      </body>
    </html>
  );
}
