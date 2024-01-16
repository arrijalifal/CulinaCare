import '@/styles/globals.css';
import { Roboto } from '@next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto'
});

export default function App({ Component, pageProps }) {

  return <main className={`${roboto.variable} font-sans w-screen h-screen flex flex-col`}>
    <Component {...pageProps} />
  </main>
}
