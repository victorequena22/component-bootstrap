import React from "react"
import { FormControl, InputGroup } from "react-bootstrap"
import InputText, { Props as padre } from "../Inputs/InputText"
interface Props extends padre {
    after?: any;
    before?: any;
    error?: any
    tamano?: 'sm' | 'lg'
    ancho?: string
    classGroup?: string
}
export default function ControlText(p: Props) {
    const Props: () => any = () => {
        return { ...p };
    }
    let error = p.error && p.update ? p.error[p.update] ? true : false : p.error ? true : false;
    return (<InputGroup style={{ width: p.ancho }} size={p.tamano} hasValidation={error}>
        {p.before ? <InputGroup.Prepend><InputGroup.Text>{p.before}</InputGroup.Text></InputGroup.Prepend> : <></>}
        <InputText size={p.tamano} {...Props()} isInvalid={error} />
        {p.after ? <InputGroup.Append><InputGroup.Text>{p.after}</InputGroup.Text></InputGroup.Append> : <></>}
        {error ? <FormControl.Feedback type="invalid">
            {p.error && p.update ? p.error[p.update] ? p.error[p.update] : p.error : ''}
        </FormControl.Feedback>: <></>}
    </InputGroup>)
}