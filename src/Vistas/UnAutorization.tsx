import React from 'react';
import { Card } from 'react-bootstrap';
import './Login.css'
export default function UnAutorization() {
    return <Card  style={{ height: 'calc(100vh - 200px)' }}>
        <Card.Header className='bg-danger d-flex'>
            <h2>NO ESTA AUTORIZADO PARA ESTAR EN ESTE SITIO</h2>
        </Card.Header>
        <Card.Body>
            <Card.Img style={{ marginLeft: '25%', transform: 'translate(-50%);', width: '15rem', height: '15rem' }} width='15rem' height='15rem' src='/logos/stop.svg' />
        </Card.Body>
    </Card>
}