import React from 'react';
import { FormControlProps } from 'react-bootstrap';
type padre = FormControlProps & React.HTMLProps<HTMLInputElement>;
export interface Props extends padre {
    setData: (data: any) => void;
    value: string;
    mask?: string;
    update?: string;
    upper?: boolean;
    lower?: boolean;
    reg?: RegExp;
    only?: 'letter' | 'alphanumeric' | 'number';
    next?: () => void;
}
export default function InputText(p: Props & {
    size?: 'sm' | 'lg';
}): JSX.Element;
export {};
