import React, { CSSProperties } from 'react'
import { Card, Row } from 'react-bootstrap'
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
interface Base {
  width?: string | number
  style?: CSSProperties
  className?: string
  children: any
}
interface BoxConfigProps extends Base {
  tip?: SVGStringList
  margin?: string
}
export function BoxConfig({ children, width, margin, className, style, tip }: BoxConfigProps) {
  return <div data-tip={tip} className={className}
    style={{ margin, padding: '0 0 0 0', width, ...style }}>
    {children}
  </div>
}
interface CardConfigProps extends Base {
  marginNull?: boolean
}
export function CardConfig({ className, children, width, marginNull, style }: CardConfigProps) {
  const margin = marginNull ? '5px 0 0 0' : '0 0 0 5px'
  return <Card className={className} style={{ backgroundColor: '#eee', margin, width, ...style }}>
    <Card.Body style={{ margin: '0 0 0 0', padding: '3px 3px 3px 3px' }}>{children}</Card.Body>
  </Card>
}
interface RowConfigProps extends Base {
  top?: number
}
export function RowConfig({ className, children, top, style }: RowConfigProps) {
  return <Row style={{ margin: '0 0 0 0', padding: '0 0 0 0', ...style }}
    className={(className ? className : '') + (top ? ' mt-' + top : '')}>
    {children}
  </Row>
}
export function CardMain({ children, width, className, style }: Base) {
  const s = { width, backgroundColor: '#ccc', padding: '7px 7px 7px 7px', ...style };
  return <Card className={className} style={s}>
    <Row style={{ margin: '0 0 0 0', padding: '0 0 0 0' }}>
      {children}
    </Row>
  </Card>

}
