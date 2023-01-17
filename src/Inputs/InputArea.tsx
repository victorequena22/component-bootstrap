import React, { useState } from "react"
import { FormControl, FormControlProps } from "react-bootstrap";
type padre = FormControlProps & React.HTMLProps<HTMLTextAreaElement>;
export interface Props extends padre {
    setData: (data: any) => void,
    value: string
    update?: string
    upper?: boolean
    lower?: boolean
    next?: () => void
}

export default function InputArea(p: Props) {
    const [select, setSelect] = useState(false);
    const value = () => {
        if (select) return { defaultValue: p.value };
        else return { value: p.value }
    }, Props = () => {
        const props: any = { ...p };
        props.value = undefined;
        return { ...props, ...value() };
    }
    return <FormControl {...Props()} as='textarea'
        onFocus={() => { setSelect(true) }}
        onBlur={() => { setSelect(false) }}
        onKeyUp={(e: React.KeyboardEvent<HTMLTextAreaElement>) => {
            if (e.keyCode === 13) if (p.next) p.next();
            if (p.onKeyUp) p.onKeyUp(e);
        }}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
            let { value } = e.currentTarget;
            if (p.upper) value = value.toUpperCase();
            if (p.lower) value = value.toLowerCase();
            if (p.update) p.setData({ [p.update]: value });
            else p.setData(value);
        }}
    />
}