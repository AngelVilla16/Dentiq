import '@/styles/card.css';

interface CardProps{
    headline?:string;
    body?:string;
    src?:string;

}

export default function Card({ headline, body,src}:CardProps){
    return(
        <>
            <div className="card">
               
                <div className="head-card">
                    
                     <img className="img-card" src={src}/>
                      
                    <span className="card-headline"> {headline}</span>    
                </div>
                <div className="card-content">
                    <p>
                        {body}
                    </p>
                </div>
            </div>
        </>
    );
}