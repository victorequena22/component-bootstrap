
import * as React from 'react'
import { render } from '@testing-library/react'
import 'jest-canvas-mock'
import { TitleCard, BoxConfig, CardConfig, RowConfig, CardMain, ColFeed } from './index'

describe('Prueba de renderizado Contens', () => {
  it('TitleCard', () => {
    render(<TitleCard>titulo</TitleCard>)
  })
  it('BoxConfig', () => {
    render(<BoxConfig>color</BoxConfig>)
  })
  it('CardConfig', () => {
    render(<CardConfig width='50px'>data</CardConfig>)
  })
  it('RowConfig', () => {
    render(<RowConfig>data</RowConfig>)
  })
  it('CardMain', () => {
    render(<CardMain>data</CardMain>)
  })
  it('ColFeed', () => {
    render(<ColFeed col={2}>data</ColFeed>)
  })
})
