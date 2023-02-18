import { Check, Question } from "react-bootstrap-icons"

export default function BaseInputHelper(props) {
    return (
        <div className={'text-left ' + props.className}>
            <label>{ props.label }</label>
            <div className='flex items-center gap-2'>
                { props.children }
                <button className="bg-lime-400 w-8 h-8 rounded-xl">
                    <Check className='mx-auto' />
                </button>
                <button className="bg-primary w-8 h-8 rounded-xl">
                    <Question className='mx-auto' />
                </button>
            </div>
        </div>
    )
}
