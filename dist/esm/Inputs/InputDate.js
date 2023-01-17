import { __assign } from "tslib";
import React, { useState } from 'react';
import { FormControl } from 'react-bootstrap';
export default function InputDate(p) {
    var _a = useState(false), select = _a[0], setSelect = _a[1];
    var value = function () {
        if (select)
            return { defaultValue: p.value };
        else if (p.value !== '')
            return { value: p.value };
        else
            return { value: 'dd/mm/aaaa' };
    }, Props = function () {
        var props = __assign({}, p);
        props.value = undefined;
        props.type = 'date';
        return __assign(__assign({}, props), value());
    };
    return (React.createElement(FormControl, __assign({}, Props(), { onFocus: function () {
            setSelect(true);
        }, onBlur: function () {
            setSelect(false);
        }, onKeyUp: function (e) {
            if (e.keyCode === 13)
                if (p.next)
                    p.next();
        }, onChange: function (e) {
            var _a;
            var value = e.currentTarget.value;
            if (p.update)
                p.setData((_a = {}, _a[p.update] = value, _a));
            else
                p.setData(value);
        } })));
}
//# sourceMappingURL=InputDate.js.map