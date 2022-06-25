const Button = (props) => {
    console.log("Button.jsx");

    return (
        <button className="btn hover touch-target" tabIndex="-1" id={props.id}>{props.message}</button>
    );
}
    
export default Button;
