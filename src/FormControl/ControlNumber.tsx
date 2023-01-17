import React, { CSSProperties } from 'react'
import { FormControl, InputGroup } from 'react-bootstrap'
import InputText, { Props as padre } from '../Inputs/InputNumber'
interface Props extends padre {
  after?: string
  before?: string
  error?: any
  classGroup?: string
  styleGroup?: CSSProperties
}
export default function ControlNumber(p: Props) {
  const Props: () => any = () => {
    return { ...p }
  }
  const error = p.error && p.update ? (p.error[p.update] ? true : false) : p.error ? true : false
  return (
    <InputGroup className={p.classGroup} style={p.styleGroup} hasValidation={error}>
      {p.before ? (
        <InputGroup.Prepend>
          <InputGroup.Text>{p.before}</InputGroup.Text>
        </InputGroup.Prepend>
      ) : (
        <></>
      )}
      <InputText {...Props()} isInvalid={error} />
      {p.after ? (
        <InputGroup.Append>
          <InputGroup.Text>{p.after}</InputGroup.Text>
        </InputGroup.Append>
      ) : (
        <></>
      )}
      {error ? (
        <FormControl.Feedback type='invalid'>
          {p.error && p.update ? (p.error[p.update] ? p.error[p.update] : p.error) : ''}
        </FormControl.Feedback>
      ) : (
        <></>
      )}
    </InputGroup>
  )
}
