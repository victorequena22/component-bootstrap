import React from 'react';
import { FormControlProps } from 'react-bootstrap';
type padre = FormControlProps & React.HTMLProps<HTMLInputElement>;
export interface Props extends padre {
    setData: (data: any) => void;
    value: number;
    update?: string;
    min?: number;
    max?: number;
    decimal?: number;
    next?: () => void;
}
export default function InputNumber(p: Props & {
    size?: 'sm' | 'lg';
}): JSX.Element;
export {};
