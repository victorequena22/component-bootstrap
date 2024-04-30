import React, { CSSProperties } from 'react';
interface Props {
    className?: string;
    style?: CSSProperties;
    action: () => void;
    tip?: string;
    icon: string;
    active?: boolean;
    disabled?: boolean;
    place?: string;
    variant?: 'default' | 'dark' | 'primary' | 'success' | 'danger' | 'warning' | 'info' | 'secondary' | 'outline-dark' | 'outline-primary' | 'outline-success' | 'outline-danger' | 'outline-warning' | 'outline-info' | 'outline-secondary';
}
export declare function ButtonConfig({ disabled, action, tip, className, icon, active, style, place, variant, }: Props): React.JSX.Element;
export {};
