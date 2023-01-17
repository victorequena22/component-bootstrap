import Area from './InputArea';
import Date from './InputDate';
import Number from './InputNumber';
import Text from './InputText';
export default class Input {
    Area: typeof Area;
    Date: typeof Date;
    Number: typeof Number;
    Text: typeof Text;
}
export { Area as InputArea };
export { Date as InputDate };
export { Number as InputNumber };
export { Text as InputText };
