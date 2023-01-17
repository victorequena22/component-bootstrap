import { __assign } from "tslib";
import React from "react";
import { Button } from 'react-bootstrap';
export function ButtonChance(p) {
    var value = p.value, change = p.change, _a = p.states, v1 = _a[0], v2 = _a[1], _b = p.message, m1 = _b[0], m2 = _b[1], children = p.children;
    return React.createElement(Button, __assign({}, p, { onClick: function () { return change(!value); }, variant: value ? v1 : v2 }),
        children,
        " ",
        value ? m1 : m2);
}
//# sourceMappingURL=Chance.js.map