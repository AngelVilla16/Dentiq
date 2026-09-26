import '@/styles/funcionamiento.css';

const STEPS = [
    {
        num: '01',
        title: 'Elige tu servicio',
        desc: 'Selecciona el tipo de consulta o tratamiento que necesitas.'
    },
    {
        num: '02',
        title: 'Escoge fecha y hora',
        desc: 'Revisa la disponibilidad en tiempo real y elige el horario que mejor te convenga.'
    },
    {
        num: '03',
        title: 'Confirma tus datos',
        desc: 'Ingresa tu información de contacto y recibe la confirmación al instante.'
    },
    {
        num: '04',
        title: 'Asiste a tu cita',
        desc: 'Llega puntualmente a la clínica con tu confirmación y listo.'
    }
];

export default function Funcionamiento(){
    return(
        <>
           <div className="funcionamiento-container">
             <div className="fn-head">
                 <span className="fn-headline">
                     PROCESO SIMPLE
                 </span>
                 <h2 className="fn-title">
                     Cómo agendar tu cita
                 </h2>
             </div>

             <div className="fn-body">
                 <div className="fn-left">
                     <div className="fn-img">
                         <img className="img-cita" src='/assets/agendando_cita.jpg' alt="paciente agendando cita" loading="lazy" />
                     </div>
                     <p className="fn-caption">
                         <span className="fn-dot" aria-hidden="true"></span>
                         Disponibilidad 24/7 desde cualquier dispositivo
                     </p>
                 </div>

                 <ol className="fn-steps">
                     {STEPS.map((step) => (
                         <li className="fn-step" key={step.num}>
                             <span className="fn-step-num">
                                 {step.num}
                             </span>
                             <div className="fn-step-body">
                                 <h3 className="fn-step-title">
                                     {step.title}
                                 </h3>
                                 <p className="fn-step-desc">
                                     {step.desc}
                                 </p>
                             </div>
                         </li>
                     ))}
                 </ol>
             </div>
           </div>
        </>
    );
}
