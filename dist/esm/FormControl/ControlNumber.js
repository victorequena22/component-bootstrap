import { __assign } from "tslib";
import React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import InputText from '../Inputs/InputNumber';
export default function ControlNumber(p) {
    var Props = function () {
        return __assign({}, p);
    };
    var error = p.error && p.update ? (p.error[p.update] ? true : false) : p.error ? true : false;
    return (React.createElement(InputGroup, { className: p.classGroup, style: p.styleGroup, hasValidation: error },
        p.before ? (React.createElement(InputGroup.Prepend, null,
            React.createElement(InputGroup.Text, null, p.before))) : (React.createElement(React.Fragment, null)),
        React.createElement(InputText, __assign({}, Props(), { isInvalid: error })),
        p.after ? (React.createElement(InputGroup.Append, null,
            React.createElement(InputGroup.Text, null, p.after))) : (React.createElement(React.Fragment, null)),
        error ? (React.createElement(FormControl.Feedback, { type: 'invalid' }, p.error && p.update ? (p.error[p.update] ? p.error[p.update] : p.error) : '')) : (React.createElement(React.Fragment, null))));
}
//# sourceMappingURL=ControlNumber.js.map