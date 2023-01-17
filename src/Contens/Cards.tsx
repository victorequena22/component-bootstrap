import React, { CSSProperties } from 'react'
import { Card, Row } from 'react-bootstrap'
import ReactTooltip from 'react-tooltip'
import { css } from '@emotion/css'
const TP: any = ReactTooltip
export function TitleCard({ children }: { children: any }) {
  return (
    <Row
      className='d-flex justify-content-center mt-1'
      style={{
        backgroundColor: '#fff',
        margin: '0 -3px -3px -3px',
        padding: '0 0 0 0',
        borderRadius: '0 0 .25rem .25rem',
      }}
    >
      <small style={{ fontSize: 9 }}>{children}</small>
    </Row>
  )
}
export function BoxConfig({
  children,
  width,
  margin,
  className,
  style,
  tip,
}: {
  tip?: string
  style?: CSSProperties
  className?: string
  children: any
  width?: string | number
  margin?: string
}) {
  return (
    <div data-tip={tip} className={className} style={{ margin, padding: '0 0 0 0', width, ...style }}>
      {children}
    </div>
  )
}
export function CardConfig({
  className,
  children,
  width,
  marginNull,
  style,
}: {
  className?: string
  children: any
  width: string
  marginNull?: boolean
  style?: CSSProperties
}) {
  return (
    <Card
      className={className}
      style={{ backgroundColor: '#eee', margin: marginNull ? '5px 0 0 0' : '0 0 0 5px', width, ...style }}
    >
      <Card.Body style={{ margin: '0 0 0 0', padding: '3px 3px 3px 3px' }}>{children}</Card.Body>
    </Card>
  )
}
export function RowConfig({
  className,
  children,
  top,
  style,
}: {
  style?: CSSProperties
  className?: string
  children: any
  top?: number
}) {
  return (
    <Row
      className={(className ? className : '') + (top ? ' mt-' + top : '')}
      style={{ margin: '0 0 0 0', padding: '0 0 0 0', ...style }}
    >
      {children}
    </Row>
  )
}
interface CardMainProps {
  children: any
  className?: string
  width?: string

}
export function CardMain({ children, width, className }: CardMainProps) {
  return (
    <Card className={className} style={{ width, backgroundColor: '#ccc', padding: '7px 7px 7px 7px' }}>
      <Row style={{ margin: '0 0 0 0', padding: '0 0 0 0' }}>
        <TP
          key={`tooltip${Math.random()}`}
          className={css`
            z-index: 99999999
          `}
          place='bottom'
        />
        {children}
      </Row>
    </Card>
  )
}
