import { useState, ChangeEvent } from "react";
import { StyledLabel } from "./ToggleSwitch.style";


export default function ToggleSwitch() {
    const [switchState, setSwitchState] = useState(false);

    function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
        console.log("---", e.target.checked);
        const newState = !switchState
        setSwitchState(newState);
        console.log(newState ? "On" : "Off")
    }
    return (
        <StyledLabel htmlFor="checkbox" checked={switchState}>
            <input
                id="checkbox"
                type="checkbox"
                checked={switchState}
                onChange={handleOnChange} />
        </StyledLabel>
    );
}