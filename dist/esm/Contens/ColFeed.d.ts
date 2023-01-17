/// <reference types="react" />
interface Props {
    error?: any;
    col: number;
}
export declare function ColFeed({ col, error, children }: Props & {
    children: any;
}): JSX.Element;
interface Selec {
    Selector: any;
    setData: (d: any) => void;
    valor: any;
}
export declare function ColFeedSelector({ col, error, Selector, setData, valor }: Props & Selec): JSX.Element;
export {};
