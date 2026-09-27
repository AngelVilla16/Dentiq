import '@/styles/card.css';

interface CardProps{
    headline?:string;
    body?:string;
    src?:string;
    footerHeadline?:string;
    footerSubheadline?:string;

}

export default function Card({ headline, body,src, footerHeadline, footerSubheadline}:CardProps){
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
                <div className="card-footer">
                    {footerHeadline}
                    {footerSubheadline}
                </div>
            </div>
        </>
    );
}