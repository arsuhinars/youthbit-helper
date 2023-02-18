export default function Button(props) {
    return (
        <button 
            className={
                ( props.background || 'bg-primary' ) +
                ' rounded-xl px-4 py-2 text-lg text-center ' +
                props.className
            }
        >
            {props.children}
        </button>
    );
}
