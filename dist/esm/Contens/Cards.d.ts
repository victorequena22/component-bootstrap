import { CSSProperties } from 'react';
export declare function TitleCard({ children }: {
    children: any;
}): JSX.Element;
interface Base {
    width?: string | number;
    style?: CSSProperties;
    className?: string;
    children: any;
}
interface BoxConfigProps extends Base {
    tip?: SVGStringList;
    margin?: string;
}
export declare function BoxConfig({ children, width, margin, className, style, tip }: BoxConfigProps): JSX.Element;
interface CardConfigProps extends Base {
    marginNull?: boolean;
}
export declare function CardConfig({ className, children, width, marginNull, style }: CardConfigProps): JSX.Element;
interface RowConfigProps extends Base {
    top?: number;
}
export declare function RowConfig({ className, children, top, style }: RowConfigProps): JSX.Element;
export declare function CardMain({ children, width, className, style }: Base): JSX.Element;
export {};
