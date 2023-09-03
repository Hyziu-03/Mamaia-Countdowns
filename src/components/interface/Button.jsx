export default function Button(props) {
    const { message, id, className } = props;
   
    let finalMessage = "";
    if(message === "Share") 
        finalMessage = <span className="icon share">share</span>;
    else if(message === "Delete")
        finalMessage = <span className="icon delete">delete</span>;
    else 
        finalMessage = message;

    return (
        <button 
            className={`btn hover touch-target ${className}`} 
            tabIndex="-1" 
            id={id}
        >
            {finalMessage}
        </button>
    );
}
