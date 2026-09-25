interface CardProps{
    className?: string;
    headline?:string;
    body?:string;
    src?:string;

}

export default function Card({className, headline, body,src}:CardProps){
    return(
        <>
            <div className="card">
               
                <div className="head-card">
                    <div className="img-head">
                     <img src={src}/>
                    </div>  
                    <span className={className}> {headline}</span>    
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