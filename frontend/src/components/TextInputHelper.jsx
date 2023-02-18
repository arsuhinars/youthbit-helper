import BaseInputHelper from "./BaseInputHelper"

export default function TextInputHelper(props) {
    return (
        <BaseInputHelper className={props.className} label={props.label}>
            <input
                placeholder={props.placeholder}
                className="
                    accent-primary rounded-md outline outline-2 outline-primary
                    grow py-1 px-2
                "
                type="text"
                disabled
            />
        </BaseInputHelper>
    )
}
