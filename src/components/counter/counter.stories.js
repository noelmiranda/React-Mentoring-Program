import React from 'react';
import { Counter } from './Counter'; // Make sure to adjust the import path

export default {
  title: 'Components/Counter', // This will be the title of your storybook section
  component: Counter,
};

const Template = (args) => <Counter {...args} />;

export const Default = Template.bind({});
Default.args = {
  initialValue: 0,
};

export const WithCustomInitialValue = Template.bind({});
WithCustomInitialValue.args = {
  initialValue: 10,
};
