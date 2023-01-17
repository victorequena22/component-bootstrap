import React, { useState } from 'react'
import { FormControl, FormControlProps } from 'react-bootstrap'
import { numberFormat } from 'utiles'
type padre = FormControlProps & React.HTMLProps<HTMLInputElement>
export interface Props extends padre {
  setData: (data: any) => void
  value: number
  update?: string
  min?: number
  max?: number
  decimal?: number
  next?: () => void
}

export default function InputNumber(p: Props) {
  const [select, setSelect] = useState(false)
  const value = () => {
      if (select) return { defaultValue: p.value, type: 'number' }
      else return { value: numberFormat(p.value, p.decimal) }
    },
    Props = () => {
      const props: any = { ...p }
      let { style } = p
      style = { textAlign: 'right', ...style }
      props.value = undefined
      props.style = undefined
      return { ...props, ...value(), style }
    }
  return (
    <FormControl
      {...Props()}
      onFocus={() => {
        setSelect(true)
      }}
      onBlur={() => {
        setSelect(false)
      }}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.currentTarget
        let r = value !== '' ? parseFloat(value) : 0
        if (p.min) if (p.min > r) r = p.min
        if (p.max) if (p.max < r) r = p.max
        if (p.update) p.setData({ [p.update]: r })
        else p.setData(r)
      }}
    />
  )
}
