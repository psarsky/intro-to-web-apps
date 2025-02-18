const Button = (props: { onClick: () => void; text: string }) => (
	<button onClick={props.onClick}>{props.text}</button>
);

export default Button;
