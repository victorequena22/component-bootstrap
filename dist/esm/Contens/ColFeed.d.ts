import React from 'react';
interface Props {
    error?: any;
    col: number;
}
export declare function ColFeed({ col, error, children }: Props & {
    children: any;
}): React.JSX.Element;
interface Selec {
    Selector: any;
    setData: (d: any) => void;
    valor: any;
}
export declare function ColFeedSelector({ col, error, Selector, setData, valor }: Props & Selec): React.JSX.Element;
export {};
