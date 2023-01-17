import React from "react";
import { Col, InputGroup, FormControl } from 'react-bootstrap';
export function ColFeed(_a) {
    var col = _a.col, error = _a.error, children = _a.children;
    return React.createElement(Col, { xs: col, className: "mt-2", as: InputGroup, hasValidation: error ? true : false },
        children,
        React.createElement(FormControl.Feedback, { type: "invalid" }, error ? error : ''));
}
export function ColFeedSelector(_a) {
    var col = _a.col, error = _a.error, Selector = _a.Selector, setData = _a.setData, valor = _a.valor;
    return React.createElement(ColFeed, { col: col, error: error },
        React.createElement(Selector, { defaultValue: valor, change: setData, isInvalid: error ? true : false }));
}
//# sourceMappingURL=ColFeed.js.map