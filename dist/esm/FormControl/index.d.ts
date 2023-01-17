import Area from './ControlArea';
import Date from './ControlDate';
import Number from './ControlNumber';
import Text from './ControlText';
export default class Control {
    Area: typeof Area;
    Date: typeof Date;
    Number: typeof Number;
    Text: typeof Text;
}
export { Area as ControlArea, Date as ControlDate, Number as ControlNumber, Text as ControlText };
