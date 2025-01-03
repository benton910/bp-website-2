import { useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Footer, Navbar } from '../sections';
import { Inter } from 'next/font/google'
import CatfishBg from '@/components/CatfishBg';

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

const LandingLayout = ({ children }) => {
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme('dark');
  }, [setTheme]);

  return (
    <div className={inter.className}>
      <CatfishBg />
      <Navbar />
      <main className="relative flex flex-col text-gray-800">{children}</main>
      <Footer />
    </div>
  );
};

export default LandingLayout;
