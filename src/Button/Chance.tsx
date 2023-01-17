import { Button, ButtonProps } from 'react-bootstrap';
import { ButtonVariant } from 'react-bootstrap/esm/types';
interface Props extends ButtonProps {
    value: boolean
    change: (value: boolean) => void
    states: [ButtonVariant, ButtonVariant]
    message: [string, string]
}
export function ButtonChance(p: Props) {
    let { value, change, states: [v1, v2], message: [m1, m2], children } = p;
    return <Button {...p} onClick={() => change(!value)} variant={value ? v1 : v2}>
        {children} {value ? m1 : m2}
    </Button>
}