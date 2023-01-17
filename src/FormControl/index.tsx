import Area from './ControlArea'
import Date from './ControlDate'
import Number from './ControlNumber'
import Text from './ControlText'
export default class Control {
  Area = Area
  Date = Date
  Number = Number
  Text = Text
}
export { Area as ControlArea, Date as ControlDate, Number as ControlNumber, Text as ControlText }
