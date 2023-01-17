import { CSSProperties } from 'react';
export declare function TitleCard({ children }: {
    children: any;
}): JSX.Element;
export declare function BoxConfig({ children, width, margin, className, style, tip, }: {
    tip?: string;
    style?: CSSProperties;
    className?: string;
    children: any;
    width?: string | number;
    margin?: string;
}): JSX.Element;
export declare function CardConfig({ className, children, width, marginNull, style, }: {
    className?: string;
    children: any;
    width: string;
    marginNull?: boolean;
    style?: CSSProperties;
}): JSX.Element;
export declare function RowConfig({ className, children, top, style, }: {
    style?: CSSProperties;
    className?: string;
    children: any;
    top?: number;
}): JSX.Element;
interface CardMainProps {
    children: any;
    className?: string;
    width?: string;
}
export declare function CardMain({ children, width, className }: CardMainProps): JSX.Element;
export {};
