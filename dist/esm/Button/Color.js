import { __assign, __makeTemplateObject } from "tslib";
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { css } from '@emotion/css';
import { ColorBox, createColor } from 'material-ui-color';
import Popover from '@material-ui/core/Popover';
import { RowConfig } from '../Contens';
function colorRGB(_a, _b) {
    var r = _a[0], g = _a[1], b = _a[2];
    var _c = _b === void 0 ? [0, 0, 0] : _b, i = _c[0], j = _c[1], t = _c[2];
    return "rgb(".concat(r + i, ", ").concat(g + j, ", ").concat(b + t, ")");
}
function textRGB(_a) {
    var r = _a[0], g = _a[1], b = _a[2];
    var r1 = r >= 128 ? 0 : 255;
    var g1 = g >= 128 ? 0 : 255;
    var b1 = b >= 128 ? 0 : 255;
    var max = Math.max(r1, g1, b1);
    var min = Math.min(r1, g1, b1);
    if (max !== min) {
        if (r1 === g1)
            b1 = b1 === min ? Math.max(r, g, b) : Math.min(r, g, b);
        if (r1 === b1)
            g1 = g1 === min ? Math.max(r, g, b) : Math.min(r, g, b);
        if (b1 === g1)
            r1 = r1 === min ? Math.max(r, g, b) : Math.min(r, g, b);
    }
    return colorRGB([r1, g1, b1]);
}
function getCSS(rgb, invert) {
    var back = colorRGB(rgb);
    var text = textRGB(rgb);
    var backH = colorRGB(rgb, [-20, -20, -20]);
    var textH = textRGB(rgb.map(function (c) { return 255 - c; }));
    return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    background-color: ", ";\n    color: ", ";\n    border-color: ", ";\n    &:hover {\n      background-color: ", ";\n      color: ", ";\n    }\n  "], ["\n    background-color: ", ";\n    color: ", ";\n    border-color: ", ";\n    &:hover {\n      background-color: ", ";\n      color: ", ";\n    }\n  "])), invert ? text : back, invert ? back : text, invert ? back : text, invert ? textH : backH, invert ? backH : textH);
}
export function ButtonColor(_a) {
    var tip = _a.tip, click = _a.click, _b = _a.invert, invert = _b === void 0 ? false : _b, style = _a.style, className = _a.className, setData = _a.setData, c = _a.color, children = _a.children, _c = _a.disable, disable = _c === void 0 ? false : _c, _d = _a.disableAlpha, disableAlpha = _d === void 0 ? false : _d, _e = _a.colores, colores = _e === void 0 ? [] : _e;
    var _f = useState(createColor(c)), color = _f[0], setColor = _f[1];
    var _g = useState(null), open = _g[0], setOpen = _g[1];
    var handleChange = function (c) {
        setData("#".concat(c.hex));
        setColor(c);
    };
    var handleClick = function (event) {
        setOpen(event.currentTarget);
        if (click)
            click();
    };
    var handleClose = function () { return setOpen(null); };
    useEffect(function () { return setColor(createColor(c)); }, [c]);
    return (React.createElement(React.Fragment, null,
        React.createElement(Button, { "data-tip": tip, size: 'sm', as: 'label', className: "".concat(className, " ").concat(disable ? '' : getCSS(color.rgb, invert)), onClick: handleClick, style: __assign({ margin: '0 0 0 0', width: 36, height: 24 }, style) }, children),
        disable ? (React.createElement(React.Fragment, null)) : (React.createElement(Popover, { open: open, anchorEl: open, onClose: handleClose, anchorOrigin: { vertical: 'bottom', horizontal: 'left' } },
            React.createElement(ColorBox, { key: c + 'palete', value: color, onChange: handleChange, disableAlpha: disableAlpha }),
            React.createElement(RowConfig, { style: {
                    width: '320px',
                    padding: '.5rem .5rem .5rem .5rem',
                    display: 'grid',
                    gap: '.25rem',
                    gridAutoFlow: 'dense',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(25px, 1fr))'
                } }, colores.map(function (c) { return (React.createElement("div", { key: c, onClick: function () { return setData(c); }, style: { backgroundColor: c, border: '1px solid black', height: '25px' } })); }))))));
}
var templateObject_1;
//# sourceMappingURL=Color.js.map