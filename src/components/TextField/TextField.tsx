import { TextFieldElement } from "./TextField.style";

interface TextFieldProps {
    id: string;
    label: string;
    type: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    minLength?: number;
}

export const TextField = ({
    id,
    label,
    type = "text",
    onChange,
    required,
    minLength
}: TextFieldProps) => {
    return (
        <TextFieldElement>
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} onChange={onChange} required={required} minLength={minLength} />
        </TextFieldElement>
    );
};
