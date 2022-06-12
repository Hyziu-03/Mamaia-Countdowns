const Button = (props) => <button className={'btn hover touch-target ' + props.className} tabIndex='-1' id={props.id}>{props.message}</button>;

export default Button;
