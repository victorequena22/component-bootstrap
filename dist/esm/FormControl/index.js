import Area from './ControlArea';
import Date from './ControlDate';
import Number from './ControlNumber';
import Text from './ControlText';
var Control = /** @class */ (function () {
    function Control() {
        this.Area = Area;
        this.Date = Date;
        this.Number = Number;
        this.Text = Text;
    }
    return Control;
}());
export default Control;
export { Area as ControlArea, Date as ControlDate, Number as ControlNumber, Text as ControlText };
//# sourceMappingURL=index.js.map