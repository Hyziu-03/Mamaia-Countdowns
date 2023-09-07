// Icons
import Delete from "components/icons/material/Delete";
import Share from "components/icons/material/Share";

export default function Button(props) {
    const { message, id, className } = props;
   
    const finalMessage = (message === "Share") ? <Share /> : 
        (message === "Delete") ? <Delete /> : 
        message;

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
