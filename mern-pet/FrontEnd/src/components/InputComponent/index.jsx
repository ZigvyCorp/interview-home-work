import React, { useState } from "react";
import { WrapperInputStyle } from "./style";

const InputComponent = (props) => {
    const { placeholder, ...rests } = props;
    const [valueInput, setValueInput] = useState('')
    return (
        <WrapperInputStyle placeholder={placeholder} valueInput={valueInput} {...rests} />
    )
}

export default InputComponent