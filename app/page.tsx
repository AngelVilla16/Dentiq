import Hero from '@/components/hero';
import Navbar from '@/components/navbar';
import Servicios from '@/components/servicios';
import '@/styles/index.css';

export default function Index() {
  return (
    <>
    <Navbar/>
    <main>
      <section>
        <Hero />
      </section>
      <section id='servicios'>
        <Servicios />
      </section>
    </main>
    </>
  );
}