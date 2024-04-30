import React from 'react';
import { FormControlProps } from 'react-bootstrap';
type padre = FormControlProps & React.HTMLProps<HTMLTextAreaElement>;
export interface Props extends padre {
    setData: (data: any) => void;
    value: string;
    update?: string;
    upper?: boolean;
    lower?: boolean;
    next?: () => void;
}
export default function InputArea(p: Props & {
    size?: 'sm' | 'lg';
}): React.JSX.Element;
export {};
