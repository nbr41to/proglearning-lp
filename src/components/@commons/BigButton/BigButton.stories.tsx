import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';

import { BigButton, BigButtonProps } from '.';

export default {
  title: 'Button/BigButton',
  component: BigButton,
  argTypes: {
    label: { control: 'text' },
  },
} as Meta;

const Template: Story<BigButtonProps> = (args) => <BigButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'ボタン',
};
