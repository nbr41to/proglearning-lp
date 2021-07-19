import { Story, Meta } from '@storybook/react/types-6-0';
import { LottieCustom, LottieCustomProps } from '.';
import * as dev1 from './develop01.json';
import * as dev2 from 'src/assets/lottie/develop02.json';

export default {
  title: 'Lottie',
  component: LottieCustom,
} as Meta;

const Template: Story<LottieCustomProps> = (args) => <LottieCustom {...args} />;

export const Dev1 = Template.bind({});
Dev1.args = {
  src: dev1,
};

export const Dev2 = Template.bind({});
Dev2.args = {
  src: dev2,
};
