import { TextFieldElement } from "./TextField.style";

interface TextFieldProps {
    id: string;
    label: string;
    type: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    minLength?: number;
}

export const TextField = ({
    id,
    label,
    type = "text",
    value,
    onChange,
    required,
    minLength
}: TextFieldProps) => {
    return (
        <TextFieldElement>
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} value={value} onChange={onChange} required={required} minLength={minLength} />
        </TextFieldElement>
    );
};
