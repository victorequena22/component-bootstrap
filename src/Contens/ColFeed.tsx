import { Col, InputGroup, FormControl } from 'react-bootstrap';
interface Props {
    error?: any,
    col: number,
}
export function ColFeed({ col, error, children }: Props & { children: any }) {
    return <Col xs={col} className="mt-2" as={InputGroup} hasValidation={error ? true : false} >
        {children}
        <FormControl.Feedback type="invalid">
            {error ? error : ''}
        </FormControl.Feedback>
    </Col>
}
interface Selec {
    Selector: any,
    setData: (d: any) => void
    valor: any
}
export function ColFeedSelector({ col, error, Selector, setData, valor }: Props & Selec) {
    return <ColFeed col={col} error={error}>
        <Selector defaultValue={valor} change={setData} isInvalid={error ? true : false} />
    </ColFeed>
}