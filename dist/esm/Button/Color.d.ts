import { CSSProperties } from 'react';
interface colorProps {
    setData: (d: string) => void;
    invert?: boolean;
    style?: CSSProperties;
    color: string;
    children: any;
    disable?: boolean;
    className?: string;
    disableAlpha?: boolean;
    tip?: string;
    colores?: string[];
    click?: () => void;
}
export declare function ButtonColor({ tip, click, invert, style, className, setData, color: c, children, disable, disableAlpha, colores, }: colorProps): JSX.Element;
export {};
