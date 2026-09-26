import "@/styles/servicios.css";
import Card from '@/components/ui/Card';
export default function Servicios(){
    return(
        <>
            <div className="servicios" id="servicios">
                <div className="headline-section">
                    <span className="headline"> LO QUE OFRECEMOS</span>
                    <h2 className="title">Todo lo que necesitas en un solo lugar</h2>
                </div>
                <div className="cards-grid">
                    <Card headline='Citas en linea' src="/icons/calendar.svg"
                        body="Agenda tu cita desde cualquier dispositivo, 24/7, sin necesidad de llamar."
                    />


                    <Card headline="Recordatorios automáticos" src="/icons/notifications.svg"
                        body="Recibe alertas por SMS o Correo para nunca olvidar tu próxima visita."
                    />
                    
                    <Card headline="Historial Clinico" src="/icons/person.svg" 
                        body="Accede a tu historial de tratamientos y radiografias en un solo lugar."
                    />
                    
                    <Card headline="Confirmación Instantanea" src="/icons/confirm.svg"
                     body="Obtén confirmación inmediata de tu cita sin esperas ni tiempos de respuesta" 
                    
                    />
                </div>
            </div>
        </>
    );
}