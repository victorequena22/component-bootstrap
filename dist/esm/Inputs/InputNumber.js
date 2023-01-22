import { __assign } from "tslib";
import React, { useState } from 'react';
import { FormControl } from 'react-bootstrap';
import { numberFormat } from '@victorequena22/utiles';
export default function InputNumber(p) {
    var _a = useState(false), select = _a[0], setSelect = _a[1];
    var value = function () {
        if (select)
            return { defaultValue: p.value, type: 'number' };
        else
            return { value: numberFormat(p.value, p.decimal) };
    }, Props = function () {
        var props = __assign({}, p);
        var style = p.style;
        style = __assign({ textAlign: 'right' }, style);
        props.value = undefined;
        props.style = undefined;
        return __assign(__assign(__assign({}, props), value()), { style: style });
    };
    return (React.createElement(FormControl, __assign({}, Props(), { onFocus: function () {
            setSelect(true);
        }, onBlur: function () {
            setSelect(false);
        }, onChange: function (e) {
            var _a;
            var value = e.currentTarget.value;
            var r = value !== '' ? parseFloat(value) : 0;
            if (p.min)
                if (p.min > r)
                    r = p.min;
            if (p.max)
                if (p.max < r)
                    r = p.max;
            if (p.update)
                p.setData((_a = {}, _a[p.update] = r, _a));
            else
                p.setData(r);
        } })));
}
//# sourceMappingURL=InputNumber.js.map