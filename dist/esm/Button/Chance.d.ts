import React from 'react';
import { ButtonProps } from 'react-bootstrap';
import { ButtonVariant } from 'react-bootstrap/esm/types';
interface Props extends ButtonProps {
    value: boolean;
    change: (value: boolean) => void;
    states: [ButtonVariant, ButtonVariant];
    message: [string, string];
}
export declare function ButtonChance(p: Props): React.JSX.Element;
export {};
