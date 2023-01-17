
import * as React from 'react'
import { render } from '@testing-library/react'
import 'jest-canvas-mock'
import { ControlArea, ControlDate, ControlNumber, ControlText } from './index'

describe('Prueba de renderizado FormControl', () => {
  it('ControlArea', () => {
    render(
      <ControlArea
        value=''
        setData={(c) => {
          console.log(c)
        }}
      />,
    )
  })
  it('BoxConfig', () => {
    render(
      <ControlDate
        value=''
        setData={(c) => {
          console.log(c)
        }}
      />,
    )
  })
  it('CardConfig', () => {
    render(
      <ControlNumber
        value={0}
        setData={(c) => {
          console.log(c)
        }}
      />,
    )
  })
  it('RowConfig', () => {
    render(
      <ControlText
        value=''
        setData={(c) => {
          console.log(c)
        }}
      />,
    )
  })
})
