import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MyLabel } from './MyLabel';

export default {
  title: 'MyComponents/MyLabel',
  component: MyLabel,
  argTypes: {
    size: { control: 'select', options: ['normal', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'] },
  }
} as ComponentMeta<typeof MyLabel>;

const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Test Label'
};

export const AllCaps = Template.bind({});
AllCaps.args = {
  label: 'Test Label Caps',
  size: 'normal',
  allCaps: true
};

export const CustomFontColor = Template.bind({});
CustomFontColor.args = {
  label: 'Test Font Color',
  size: 'h1',
  fontColor: '#ff0000'
};