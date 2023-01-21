import React, { useState } from 'react'
import { FormControl, FormControlProps } from 'react-bootstrap'
type padre = FormControlProps & React.HTMLProps<HTMLInputElement>
export interface Props extends padre {
  setData: (data: any) => void
  value: string
  mask?: string
  update?: string
  upper?: boolean
  lower?: boolean
  reg?: RegExp
  only?: 'letter' | 'alphanumeric' | 'number'
  next?: () => void
}

export default function InputText(p: Props & { size?: 'sm' | 'lg' }) {
  const [select, setSelect] = useState(false)
  const value = () => {
    if (select) return { defaultValue: p.value }
    else return { value: p.value }
  }
  const Props = () => {
    const props: any = { ...p }
    props.value = undefined
    return { ...props, ...value() }
  }
  const match = (val: string, only: 'letter' | 'alphanumeric' | 'number') => {
    let nval = ''
    if (val.length > 0) {
      val.split('').forEach((m: string) => {
        switch (only) {
          case 'alphanumeric':
            if (/[A-Za-z0-9]/g.test(m)) nval += m
            break
          case 'letter':
            if (/[A-Za-z]/g.test(m)) nval += m
            break
          case 'number':
            if (/[0-9]/g.test(m)) nval += m
            break
        }
      })
      return nval
    }
    return ''
  }
  const Mask = (val: string, mask: string) => {
    let nval = ''
    if (val.length > 0) {
      mask.split('').forEach((m: string, i: number) => {
        if (m === 'a' && val[i] !== undefined) {
          if (/[A-Za-z]/g.test(val[i])) {
            nval += val[i]
          }
        } else if (m === 'A' && val[i] !== undefined) {
          if (/[A-Za-z]/g.test(val[i])) {
            nval += val[i].toUpperCase()
          }
        } else if (m === '9' && val[i] !== undefined) {
          if (/[0-9]/g.test(val[i])) {
            nval += val[i]
          }
        } else if (m === '*' && val[i] !== undefined) {
          if (/[A-Za-z0-9]/g.test(val[i])) {
            nval += val[i]
          }
        } else if (val[i] !== undefined) {
          if (nval.length === i) nval += m
        } else if (val[i] === undefined) {
          if (m !== 'a' && m !== 'A' && m !== '9' && m !== '*') if (nval.length === i) nval += m
        }
      })
      return nval
    } else {
      return ''
    }
  }
  return (
    <FormControl
      {...Props()}
      as='input'
      onFocus={() => {
        setSelect(true)
      }}
      onBlur={() => {
        setSelect(false)
      }}
      onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.keyCode === 13) if (p.next) p.next()
        if (p.onKeyUp) p.onKeyUp(e)
      }}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        let { value } = e.currentTarget
        if (p.only) value = match(value, p.only)
        if (p.mask) value = Mask(value, p.mask)
        if (p.upper) value = value.toUpperCase()
        if (p.lower) value = value.toLowerCase()
        e.currentTarget.value = value
        if (p.update) p.setData({ [p.update]: value })
        else p.setData(value)
      }}
    />
  )
}
