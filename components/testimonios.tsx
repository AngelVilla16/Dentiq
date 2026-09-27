import Card from '@/components/ui/Card';
import '@/styles/testimonios.css';


export default function Testimonios(){

    const TESTIMONIOS = [
        {   body: '"El sistema de citas es increiblemente fácil de usar. Agendé mi limpieza dental en menos de dos minutos y llegué el dia exacto sin ningún    contratiempo."',
            autor: 'Valentina Ruiz',
            fecha: 'Paciente desde 2021'
        },
        {
            body:' "Los recordatorios automáticos me han salvado la vida. Nunca más olvido mis citas de control y mi salud dental ha mejorado notablemente." ',
            autor:' Andrés Morales',
            fecha: 'Paciente desde 2022'
        },
        {
            body: ' "Poder ver mi historial clinico completo desde el celular es una función que no sabia que necesitaba. Recomiendo esta clinica a toda mi familia." ',
            autor: 'Carolina Jiménez',
             fecha: 'Paciente desde 2020'
        }
    ];


    return(
        <div className="testimonios-section">
           <span className="test-title">TESTIMONIOS</span>
           <h2>Lo que dicen nuestros pacientes</h2>
           <div className="grid-test-cards">
                {TESTIMONIOS.map((test)=>(
                    <Card body={test.body} footerHeadline={test.autor} footerSubheadline={test.fecha} key={test.autor} />
                ))}
           </div>
        </div>
    );
}