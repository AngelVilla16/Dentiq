interface buttonProps{
    className?:string,
    textBtn?:string,
    onClick?:()=>void,
    type?: "button" | "submit" | "reset";
    buttonIcon?:string;
}

export default function Button({className, textBtn, onClick, type, buttonIcon}: buttonProps){
    return(
        <button className={className} type={type} onClick={onClick}>
            {textBtn}
            {/* decorative: the button label already conveys the action, so the
                icon is hidden from assistive tech with an empty alt */}
            {buttonIcon && <img className="btn-icon" src={buttonIcon} alt="" />}
        </button>
    );
}