import { css, CSSObject, FlattenSimpleInterpolation, SimpleInterpolation } from 'styled-components';

export const theme = {
  colors: {
    main: 'aquamarine',
    sub: '#5D9CEC',
  },
  fonts: {
    base: '\'ヒラギノ丸ゴ Pro W4\', \'ヒラギノ丸ゴ Pro\', \'Hiragino Maru Gothic Pro\', \'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'HG丸ｺﾞｼｯｸM-PRO\', \'HGMaruGothicMPRO\'',
  },
  sp: (
    first: CSSObject | TemplateStringsArray,
    ...interpolations: SimpleInterpolation[]
  ): FlattenSimpleInterpolation => css`
    @media (max-width: 650px) {
      ${css(first, ...interpolations)}
    }
  `,
};
