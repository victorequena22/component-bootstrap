import { __assign } from "tslib";
import React from 'react';
import { Button } from 'react-bootstrap';
export function ButtonConfig(_a) {
    var disabled = _a.disabled, action = _a.action, tip = _a.tip, className = _a.className, icon = _a.icon, active = _a.active, style = _a.style, _b = _a.place, place = _b === void 0 ? 'bottom' : _b, _c = _a.variant, variant = _c === void 0 ? 'outline-dark' : _c;
    return (React.createElement(Button, { size: 'sm', disabled: disabled, className: className, "data-place": place, "data-tip": tip, active: active, onClick: action, style: __assign({ width: 32, height: 24 }, style), variant: variant },
        React.createElement("i", { className: icon })));
}
//# sourceMappingURL=Config.js.map