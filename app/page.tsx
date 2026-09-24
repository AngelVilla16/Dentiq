import Hero from '@/components/hero';
import Navbar from '@/components/navbar';
import '@/styles/index.css';

export default function Index() {
  return (
    <>
    <Navbar/>
    <main>
      <Hero />
    </main>
    </>
  );
}