import { __assign } from "tslib";
import React, { useState } from 'react';
import { FormControl } from 'react-bootstrap';
export default function InputText(p) {
    var _a = useState(false), select = _a[0], setSelect = _a[1];
    var value = function () {
        if (select)
            return { defaultValue: p.value };
        else
            return { value: p.value };
    };
    var Props = function () {
        var props = __assign({}, p);
        props.value = undefined;
        return __assign(__assign({}, props), value());
    };
    var match = function (val, only) {
        var nval = '';
        if (val.length > 0) {
            val.split('').forEach(function (m) {
                switch (only) {
                    case 'alphanumeric':
                        if (/[A-Za-z0-9]/g.test(m))
                            nval += m;
                        break;
                    case 'letter':
                        if (/[A-Za-z]/g.test(m))
                            nval += m;
                        break;
                    case 'number':
                        if (/[0-9]/g.test(m))
                            nval += m;
                        break;
                }
            });
            return nval;
        }
        return '';
    };
    var Mask = function (val, mask) {
        var nval = '';
        if (val.length > 0) {
            mask.split('').forEach(function (m, i) {
                if (m === 'a' && val[i] !== undefined) {
                    if (/[A-Za-z]/g.test(val[i])) {
                        nval += val[i];
                    }
                }
                else if (m === 'A' && val[i] !== undefined) {
                    if (/[A-Za-z]/g.test(val[i])) {
                        nval += val[i].toUpperCase();
                    }
                }
                else if (m === '9' && val[i] !== undefined) {
                    if (/[0-9]/g.test(val[i])) {
                        nval += val[i];
                    }
                }
                else if (m === '*' && val[i] !== undefined) {
                    if (/[A-Za-z0-9]/g.test(val[i])) {
                        nval += val[i];
                    }
                }
                else if (val[i] !== undefined) {
                    if (nval.length === i)
                        nval += m;
                }
                else if (val[i] === undefined) {
                    if (m !== 'a' && m !== 'A' && m !== '9' && m !== '*')
                        if (nval.length === i)
                            nval += m;
                }
            });
            return nval;
        }
        else {
            return '';
        }
    };
    return (React.createElement(FormControl, __assign({}, Props(), { as: 'input', onFocus: function () {
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
            if (p.only)
                value = match(value, p.only);
            if (p.mask)
                value = Mask(value, p.mask);
            if (p.upper)
                value = value.toUpperCase();
            if (p.lower)
                value = value.toLowerCase();
            e.currentTarget.value = value;
            if (p.update)
                p.setData((_a = {}, _a[p.update] = value, _a));
            else
                p.setData(value);
        } })));
}
//# sourceMappingURL=InputText.js.map