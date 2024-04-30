import React from 'react';
import { FormControlProps } from 'react-bootstrap';
type padre = FormControlProps & React.HTMLProps<HTMLInputElement>;
export interface Props extends padre {
    setData: (data: any) => void;
    value: string;
    update?: string;
    next?: () => void;
}
export default function InputDate(p: Props & {
    size?: 'sm' | 'lg';
}): React.JSX.Element;
export {};
