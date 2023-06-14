import { __assign } from "tslib";
import React, { useEffect, useState, useCallback } from 'react';
import { Button } from 'react-bootstrap';
import { ColorBox, createColor } from 'mui-color';
import Popover from '@mui/material/Popover';
import { RowConfig } from '../Contens';
export function ButtonColor(_a) {
    var tip = _a.tip, click = _a.click, _b = _a.invert, invert = _b === void 0 ? false : _b, style = _a.style, className = _a.className, setData = _a.setData, c = _a.color, children = _a.children, _c = _a.disable, disable = _c === void 0 ? false : _c, _d = _a.disableAlpha, disableAlpha = _d === void 0 ? false : _d, _e = _a.colores, colores = _e === void 0 ? [] : _e;
    var _f = useState(createColor(c)), color = _f[0], setColor = _f[1];
    var _g = useState(false), hover = _g[0], setHover = _g[1];
    var _h = useState(null), open = _h[0], setOpen = _h[1];
    var handleChange = useCallback(function (c) { setData("#".concat(c.hex)); setColor(c); }, [setColor, setData]);
    var handleClick = useCallback(function (event) { setOpen(event.currentTarget); if (click)
        click(); }, [click]);
    var handleClose = function () { return setOpen(null); };
    useEffect(function () { return setColor(createColor(c)); }, [c]);
    return React.createElement(React.Fragment, null,
        React.createElement(Button, { "data-tip": tip, size: 'sm', as: 'label', className: className, onClick: handleClick, style: __assign(__assign({ margin: '0 0 0 0', width: 36, height: 24 }, style), getColor(color.rgb, hover, invert)), onMouseEnter: function () { return setHover(true); }, onMouseOut: function () { return setHover(false); } }, children),
        disable ? React.createElement(React.Fragment, null) : React.createElement(Popover, { open: open, anchorEl: open, onClose: handleClose, anchorOrigin: { vertical: 'bottom', horizontal: 'left' } },
            React.createElement(ColorBox, { key: c + 'palete', value: color, onChange: handleChange, disableAlpha: disableAlpha }),
            React.createElement(Colores, { colores: colores, setData: setData })));
}
function Colores(_a) {
    var colores = _a.colores, setData = _a.setData;
    return React.createElement(RowConfig, { style: {
            width: '320px', padding: '.5rem .5rem .5rem .5rem',
            display: 'grid', gap: '.25rem', gridAutoFlow: 'dense',
            gridTemplateColumns: 'repeat(auto-fill, minmax(25px, 1fr))'
        } }, colores.map(function (c) { return React.createElement("div", { key: c, onClick: function () { return setData(c); }, style: { backgroundColor: c, border: '1px solid black', height: '25px' } }); }));
}
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
function getColor(rgb, hover, invert) {
    if (hover) {
        var backH = colorRGB(rgb, [-20, -20, -20]);
        var textH = textRGB(rgb.map(function (c) { return 255 - c; }));
        return {
            color: invert ? textH : backH,
            borderColor: invert ? textH : backH,
            backgroundColor: invert ? backH : textH
        };
    }
    var back = colorRGB(rgb);
    var text = textRGB(rgb);
    return {
        color: invert ? text : back,
        borderColor: invert ? text : back,
        backgroundColor: invert ? back : text
    };
}
//# sourceMappingURL=Color.js.map