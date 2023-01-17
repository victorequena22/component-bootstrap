import React from 'react'
import { render } from '@testing-library/react'
import 'jest-canvas-mock'
import { InputArea, InputDate, InputNumber, InputText } from './index'

describe('Prueba de renderizado Inputs', () => {
  it('ControlArea', () => {
    render(
      <InputArea
        value=''
        setData={(c) => {
          console.log(c)
        }}
      />,
    )
  })
  it('BoxConfig', () => {
    render(
      <InputDate
        value=''
        setData={(c) => {
          console.log(c)
        }}
      />,
    )
  })
  it('CardConfig', () => {
    render(
      <InputNumber
        value={0}
        setData={(c) => {
          console.log(c)
        }}
      />,
    )
  })
  it('RowConfig', () => {
    render(
      <InputText
        value=''
        setData={(c) => {
          console.log(c)
        }}
      />,
    )
  })
})
