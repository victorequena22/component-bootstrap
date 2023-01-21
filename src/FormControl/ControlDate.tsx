import React from 'react'
import { FormControl, InputGroup } from 'react-bootstrap'
import InputText, { Props as padre } from '../Inputs/InputDate'
interface Props extends padre {
  after?: string
  before?: string
  error?: any
  classGroup?: string
}
export default function ControlDate(p: Props& { size?: 'sm' | 'lg' }) {
  const Props: () => any = () => {
    return { ...p }
  }
  const error = p.error && p.update ? (p.error[p.update] ? true : false) : p.error ? true : false
  return (
    <InputGroup hasValidation={error} className={p.classGroup}>
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
