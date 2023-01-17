/// <reference types="react" />
import { Props as padre } from '../Inputs/InputText';
interface Props extends padre {
    after?: any;
    before?: any;
    error?: any;
    tamano?: 'sm' | 'lg';
    ancho?: string;
    classGroup?: string;
}
export default function ControlText(p: Props): JSX.Element;
export {};
