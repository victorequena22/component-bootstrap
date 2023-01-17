import React, { CSSProperties, useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { css } from '@emotion/css'
import { ColorBox, Color, createColor } from 'material-ui-color'
import Popover from '@material-ui/core/Popover'
import { RowConfig } from '../Contens'
interface colorProps {
  setData: (d: string) => void
  invert?: boolean
  style?: CSSProperties
  color: string
  children: any
  disable?: boolean
  className?: string
  disableAlpha?: boolean
  tip?: string
  colores?: string[]
  click?: () => void
}
function colorRGB([r, g, b]: number[], [i, j, t] = [0, 0, 0]) {
  return `rgb(${r + i}, ${g + j}, ${b + t})`
}
function textRGB([r, g, b]: number[]) {
  let r1 = r >= 128 ? 0 : 255
  let g1 = g >= 128 ? 0 : 255
  let b1 = b >= 128 ? 0 : 255
  const max = Math.max(r1, g1, b1)
  const min = Math.min(r1, g1, b1)
  if (max !== min) {
    if (r1 === g1) b1 = b1 === min ? Math.max(r, g, b) : Math.min(r, g, b)
    if (r1 === b1) g1 = g1 === min ? Math.max(r, g, b) : Math.min(r, g, b)
    if (b1 === g1) r1 = r1 === min ? Math.max(r, g, b) : Math.min(r, g, b)
  }
  return colorRGB([r1, g1, b1])
}
function getCSS(rgb: number[], invert: boolean): string {
  const back = colorRGB(rgb)
  const text = textRGB(rgb)
  const backH = colorRGB(rgb, [-20, -20, -20])
  const textH = textRGB(rgb.map((c: number) => 255 - c))
  return css`
    background-color: ${invert ? text : back};
    color: ${invert ? back : text};
    border-color: ${invert ? back : text};
    &:hover {
      background-color: ${invert ? textH : backH};
      color: ${invert ? backH : textH};
    }
  `
}
export function ButtonColor({
  tip,
  click,
  invert = false,
  style,
  className,
  setData,
  color: c,
  children,
  disable = false,
  disableAlpha = false,
  colores = [],
}: colorProps) {
  const [color, setColor] = useState(createColor(c))
  const [open, setOpen] = useState<any>(null)
  const handleChange = (c: Color) => {
    setData(`#${c.hex}`)
    setColor(c)
  }
  const handleClick = (event: any) => {
    setOpen(event.currentTarget)
    if (click) click()
  }
  const handleClose = () => setOpen(null)
  useEffect(() => setColor(createColor(c)), [c])
  return (
    <>
      <Button
        data-tip={tip}
        size='sm'
        as='label'
        className={`${className} ${disable ? '' : getCSS(color.rgb, invert)}`}
        onClick={handleClick}
        style={{ margin: '0 0 0 0', width: 36, height: 24, ...style }}
      >
        {children}
      </Button>
      {disable ? (
        <></>
      ) : (
        <Popover
          open={open}
          anchorEl={open}
          onClose={handleClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        >
          <ColorBox key={c + 'palete'} value={color} onChange={handleChange} disableAlpha={disableAlpha} />
          <RowConfig
            style={{
              width: '320px',
              padding: '.5rem .5rem .5rem .5rem',
              display: 'grid',
              gap: '.25rem',
              gridAutoFlow: 'dense',
              gridTemplateColumns: 'repeat(auto-fill, minmax(25px, 1fr))',
            }}
          >
            {colores.map((c) => (
              <div
                key={c}
                onClick={() => setData(c)}
                style={{ backgroundColor: c, border: '1px solid black', height: '25px' }}
              />
            ))}
          </RowConfig>
        </Popover>
      )}
    </>
  )
}
