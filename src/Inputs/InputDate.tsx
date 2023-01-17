import React, { useState } from 'react'
import { FormControl, FormControlProps } from 'react-bootstrap'
type padre = FormControlProps & React.HTMLProps<HTMLInputElement>
export interface Props extends padre {
  setData: (data: any) => void
  value: string
  update?: string
  next?: () => void
}

export default function InputDate(p: Props) {
  const [select, setSelect] = useState(false)
  const value = () => {
      if (select) return { defaultValue: p.value }
      else if (p.value !== '') return { value: p.value }
      else return { value: 'dd/mm/aaaa' }
    },
    Props = () => {
      const props: any = { ...p }
      props.value = undefined
      props.type = 'date'
      return { ...props, ...value() }
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
      onKeyUp={(e: React.KeyboardEvent) => {
        if (e.keyCode === 13) if (p.next) p.next()
      }}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.currentTarget
        if (p.update) p.setData({ [p.update]: value })
        else p.setData(value)
      }}
    />
  )
}
