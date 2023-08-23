import React from 'react';
import { Button, ButtonGroup, Modal, Row } from 'react-bootstrap';
import ModalMain, { ModalOptions } from './Main';
import { Variant } from 'react-bootstrap/esm/types';
interface Props extends ModalOptions {
    msn: string
    accion: () => void
    variant?: Variant
    isValid?: boolean
}
export default function ModalAccion(p: Props) {
    const { isValid = true, close, msn, accion, variant = 'warning' } = p;
    return <ModalMain {...p} variant={variant}>
        <Modal.Body >
            <Row style={{ padding: "10px 10px 10px 10px" }} dangerouslySetInnerHTML={{ __html: msn }} />
        </Modal.Body>
        <Modal.Footer >
            <ButtonGroup className="float-right">
                {isValid ? <Button onClick={() => { accion(); close() }} variant="success">
                    <span className="fa fa-check-circle-o"></span> Aceptar
                </Button> : <></>}
                <Button onClick={close} variant="danger">
                    <span className="fa fa-remove-circle"></span> Cancelar
                </Button>
            </ButtonGroup>
        </Modal.Footer>
    </ModalMain>
}