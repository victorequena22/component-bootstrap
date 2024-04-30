import React, { CSSProperties } from 'react';
export declare function TitleCard({ children }: {
    children: any;
}): React.JSX.Element;
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
export declare function BoxConfig({ children, width, margin, className, style, tip }: BoxConfigProps): React.JSX.Element;
interface CardConfigProps extends Base {
    marginNull?: boolean;
}
export declare function CardConfig({ className, children, width, marginNull, style }: CardConfigProps): React.JSX.Element;
interface RowConfigProps extends Base {
    top?: number;
}
export declare function RowConfig({ className, children, top, style }: RowConfigProps): React.JSX.Element;
export declare function CardMain({ children, width, className, style }: Base): React.JSX.Element;
export {};
