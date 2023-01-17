import { __assign, __makeTemplateObject } from "tslib";
import React from 'react';
import { Card, Row } from 'react-bootstrap';
import ReactTooltip from 'react-tooltip';
import { css } from '@emotion/css';
var TP = ReactTooltip;
export function TitleCard(_a) {
    var children = _a.children;
    return (React.createElement(Row, { className: 'd-flex justify-content-center mt-1', style: {
            backgroundColor: '#fff',
            margin: '0 -3px -3px -3px',
            padding: '0 0 0 0',
            borderRadius: '0 0 .25rem .25rem'
        } },
        React.createElement("small", { style: { fontSize: 9 } }, children)));
}
export function BoxConfig(_a) {
    var children = _a.children, width = _a.width, margin = _a.margin, className = _a.className, style = _a.style, tip = _a.tip;
    return (React.createElement("div", { "data-tip": tip, className: className, style: __assign({ margin: margin, padding: '0 0 0 0', width: width }, style) }, children));
}
export function CardConfig(_a) {
    var className = _a.className, children = _a.children, width = _a.width, marginNull = _a.marginNull, style = _a.style;
    return (React.createElement(Card, { className: className, style: __assign({ backgroundColor: '#eee', margin: marginNull ? '5px 0 0 0' : '0 0 0 5px', width: width }, style) },
        React.createElement(Card.Body, { style: { margin: '0 0 0 0', padding: '3px 3px 3px 3px' } }, children)));
}
export function RowConfig(_a) {
    var className = _a.className, children = _a.children, top = _a.top, style = _a.style;
    return (React.createElement(Row, { className: (className ? className : '') + (top ? ' mt-' + top : ''), style: __assign({ margin: '0 0 0 0', padding: '0 0 0 0' }, style) }, children));
}
export function CardMain(_a) {
    var children = _a.children, width = _a.width, className = _a.className;
    return (React.createElement(Card, { className: className, style: { width: width, backgroundColor: '#ccc', padding: '7px 7px 7px 7px' } },
        React.createElement(Row, { style: { margin: '0 0 0 0', padding: '0 0 0 0' } },
            React.createElement(TP, { key: "tooltip".concat(Math.random()), className: css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n            z-index: 99999999\n          "], ["\n            z-index: 99999999\n          "]))), place: 'bottom' }),
            children)));
}
var templateObject_1;
//# sourceMappingURL=Cards.js.map