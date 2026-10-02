import Hero from '@/components/hero';
import Navbar from '@/components/navbar';
import Servicios from '@/components/servicios';
import Funcionamiento from '@/components/funcionamiento';
import Testimonios from '@/components/testimonios';
import Contacto from '@/components/contacto';
import Banner from '@/components/banner';
import '@/styles/index.css';

export default function Index() {
  return (
    <>
    <Navbar/>
    <main>
      <section id='inicio'>
        <Hero />
      </section>
      <section id='servicios'>
        <Servicios />
      </section>
      <section id='funcionamiento'>
        <Funcionamiento/>
      </section>
      <section id="testimonios">
        <Testimonios/>
      </section>
      <section>
        <Banner/>
      </section>
       <section id="contacto" className="contacto-section">
        <Contacto/>
      </section>
    </main>
    </>
  );
}