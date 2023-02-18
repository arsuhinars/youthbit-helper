export default function BaseInputHelper(props) {
    return (
        <div>
            <label>{ props.label }</label>
            <div>
                { props.children }
            </div>
        </div>
    )
}
