import React, { CSSProperties } from 'react'
import { Button } from "react-bootstrap"

interface Props {
    className?: string;
    style?: CSSProperties;
    action: () => void;
    tip?: string;
    icon: string;
    active?: boolean;
    disabled?: boolean;
    place?: string;
    variant?: 'default' | 'dark' | 'primary' | 'success' | 'danger' | 'warning' | 'info' | 'secondary'
    | 'outline-dark' | 'outline-primary' | 'outline-success' | 'outline-danger' | 'outline-warning' |
    'outline-info' | 'outline-secondary';
}
export function ButtonConfig({
    disabled,
    action,
    tip,
    className,
    icon,
    active,
    style,
    place = 'bottom',
    variant = 'outline-dark'
}: Props) {
    return <Button
        size='sm'
        disabled={disabled}
        className={className}
        data-place={place}
        data-tip={tip}
        active={active}
        onClick={action}
        style={{ width: 32, height: 24, ...style }}
        variant={variant}>
        <i className={icon} />
    </Button>
}