import React from "react"
import { Modal } from "react-bootstrap"
import { Variant } from "react-bootstrap/esm/types"

export interface ModalOptions {
    variant?: Variant
    open: boolean
    close: () => void
    title: string
}


export default function ModalMain({ title, close, open, variant, children }: ModalOptions & { children: any }) {
    return <Modal show={open} size='xl' centered onHide={close}>
        <Modal.Header closeButton className={'bg-' + variant}>
            <h6 className="m-0 font-weight-bold text-primary mr-auto align-self-center">
                <span><b>{title}</b></span>
            </h6>
        </Modal.Header>
        {children}
    </Modal>
}