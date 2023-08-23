import React, { useMemo } from 'react';
import { Modal, Row } from 'react-bootstrap';
import ModalMain, { ModalOptions } from './Main';

interface Props extends ModalOptions {
    url: string
}
export default function ModalPDF(p: Props) {
    const { url } = p;
    return <ModalMain {...p} >
        {useMemo(() => <>
            <Modal.Body>
                <Row>
                    <iframe src={url} title="print" frameBorder='0' width='100%' height='700wh' scrolling='no' />
                </Row>
            </Modal.Body>
        </>, [url])}
    </ModalMain>
}