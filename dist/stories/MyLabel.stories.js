var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import { MyLabel } from './MyLabel';
export default {
    title: 'MyComponents/MyLabel',
    component: MyLabel,
    argTypes: {
        size: { control: 'select', options: ['normal', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'] },
    }
};
var Template = function (args) { return _jsx(MyLabel, __assign({}, args)); };
export var Primary = Template.bind({});
Primary.args = {
    label: 'Test Label'
};
export var AllCaps = Template.bind({});
AllCaps.args = {
    label: 'Test Label Caps',
    size: 'normal',
    allCaps: true
};
export var CustomFontColor = Template.bind({});
CustomFontColor.args = {
    label: 'Test Font Color',
    size: 'h1',
    fontColor: '#ff0000'
};
