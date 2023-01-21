/// <reference types="react" />
import { Props as padre } from '../Inputs/InputArea';
interface Props extends padre {
    after?: string;
    before?: string;
    error?: any;
    classGroup?: string;
}
export default function ControlArea(p: Props & {
    size?: 'sm' | 'lg';
}): JSX.Element;
export {};
