import BaseInputHelper from "./BaseInputHelper"

export default function TextInputHelper(props) {
    return (
        <BaseInputHelper className={props.className}>
            <input
                placeholder={props.placeholder}
                className="
                    accent-primary
                    py-1 px-2
                "
                type="checkbox"
                defaultChecked={true}
                disabled
            />
            <label className="grow">{props.label}</label>
        </BaseInputHelper>
    )
}
