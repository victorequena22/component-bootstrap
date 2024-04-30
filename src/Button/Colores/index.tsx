import React, { CSSProperties, useState, useCallback } from 'react';
import Popover from '@mui/material/Popover'
import { Button } from 'react-bootstrap';
import getColor from './getColors';
import ColorSolido, { Props } from './Seleccionar/Color';

interface colorProps extends Props {
  click?: () => void;
  invert?: boolean;
  style?: CSSProperties;
  children: any;
  disable?: boolean;
  className?: string;
  tip?: string;
}
export function ButtonColor(p: colorProps) {
  const { tip, click, invert = false, style = {}, className, color, children, disable = false, } = p;
  const [hover, setHover] = useState(false)
  const [open, setOpen] = useState<any>(null)
  const handleClick = useCallback((event: any) => { setOpen(event.currentTarget); if (click) click() }, [click])
  const handleClose = () => setOpen(null)
  return <>
    <Button data-tip={tip} size='sm' as='label' className={className} onClick={handleClick}
      style={{ margin: '0 0 0 0', width: 36, height: 24, ...style, ...getColor(color, hover, invert) }}
      onMouseEnter={() => setHover(true)} onMouseOut={() => setHover(false)}>{children}</Button>
    {disable ? <></> : <Popover open={open} anchorEl={open} onClose={handleClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}>
      <ColorSolido {...p} />
    </Popover>}
  </>
}