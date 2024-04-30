import React from 'react';
import { Props as padre } from '../Inputs/InputDate';
interface Props extends padre {
    after?: string;
    before?: string;
    error?: any;
    classGroup?: string;
}
export default function ControlDate(p: Props & {
    size?: 'sm' | 'lg';
}): React.JSX.Element;
export {};
