import { __assign } from "tslib";
import React from 'react';
import { Card, Row } from 'react-bootstrap';
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
    return React.createElement("div", { "data-tip": tip, className: className, style: __assign({ margin: margin, padding: '0 0 0 0', width: width }, style) }, children);
}
export function CardConfig(_a) {
    var className = _a.className, children = _a.children, width = _a.width, marginNull = _a.marginNull, style = _a.style;
    var margin = marginNull ? '5px 0 0 0' : '0 0 0 5px';
    return React.createElement(Card, { className: className, style: __assign({ backgroundColor: '#eee', margin: margin, width: width }, style) },
        React.createElement(Card.Body, { style: { margin: '0 0 0 0', padding: '3px 3px 3px 3px' } }, children));
}
export function RowConfig(_a) {
    var className = _a.className, children = _a.children, top = _a.top, style = _a.style;
    return React.createElement(Row, { style: __assign({ margin: '0 0 0 0', padding: '0 0 0 0' }, style), className: (className ? className : '') + (top ? ' mt-' + top : '') }, children);
}
export function CardMain(_a) {
    var children = _a.children, width = _a.width, className = _a.className, style = _a.style;
    var s = __assign({ width: width, backgroundColor: '#ccc', padding: '7px 7px 7px 7px' }, style);
    return React.createElement(Card, { className: className, style: s },
        React.createElement(Row, { style: { margin: '0 0 0 0', padding: '0 0 0 0' } }, children));
}
//# sourceMappingURL=Cards.js.map