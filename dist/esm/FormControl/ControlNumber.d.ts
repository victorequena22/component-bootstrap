import { CSSProperties } from 'react';
import { Props as padre } from '../Inputs/InputNumber';
interface Props extends padre {
    after?: string;
    before?: string;
    error?: any;
    classGroup?: string;
    styleGroup?: CSSProperties;
}
export default function ControlNumber(p: Props): JSX.Element;
export {};
