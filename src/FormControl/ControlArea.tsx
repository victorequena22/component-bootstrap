import React from 'react'
import { InputGroup, FormControl } from 'react-bootstrap'
import InputText, { Props as padre } from '../Inputs/InputArea'
interface Props extends padre {
  after?: string
  before?: string
  error?: any
  classGroup?: string
}
export default function ControlArea(p: Props) {
  const Props: () => any = () => {
    return { ...p }
  }
  const error = p.error && p.update ? (p.error[p.update] ? true : false) : p.error ? true : false
  return (
    <InputGroup hasValidation={error}>
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
