import { __assign } from "tslib";
import React, { useState } from 'react';
import { FormControl } from 'react-bootstrap';
export default function InputArea(p) {
    var _a = useState(false), select = _a[0], setSelect = _a[1];
    var value = function () {
        if (select)
            return { defaultValue: p.value };
        else
            return { value: p.value };
    }, Props = function () {
        var props = __assign({}, p);
        props.value = undefined;
        return __assign(__assign({}, props), value());
    };
    return (React.createElement(FormControl, __assign({}, Props(), { as: 'textarea', onFocus: function () {
            setSelect(true);
        }, onBlur: function () {
            setSelect(false);
        }, onKeyUp: function (e) {
            if (e.keyCode === 13)
                if (p.next)
                    p.next();
            if (p.onKeyUp)
                p.onKeyUp(e);
        }, onChange: function (e) {
            var _a;
            var value = e.currentTarget.value;
            if (p.upper)
                value = value.toUpperCase();
            if (p.lower)
                value = value.toLowerCase();
            if (p.update)
                p.setData((_a = {}, _a[p.update] = value, _a));
            else
                p.setData(value);
        } })));
}
//# sourceMappingURL=InputArea.js.map