import { css } from "styled-components";
import { Palette } from "../utils";

const MainHeading = css`
  font-family: Literata;
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 40px;
  color: ${Palette.textBrown};
`;

const HeaderMedium = css`
  font-family: Literata;
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 64px;
  color: ${Palette.textBrown};
`;

const HeaderLarge = css`
  font-family: Literata;
  font-style: normal;
  font-weight: 600;
  font-size: 60px;
  line-height: 72px;
  color: ${Palette.textBrown};
`;

const Body = css`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  color: ${Palette.textBrown};
`;

const BodySmall = css`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color: ${Palette.textBrown};
`;

const BodyMedium = css`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 32px;
  color: ${Palette.textBrown};
`;

const BodyMediumButton = css`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: ${Palette.lightText};
  text-transform: uppercase;
`;

const BodyMediumBold = css`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  color: ${Palette.textBrown};
`;

const BodyLarge = css`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 40px;
  color: ${Palette.textBrown};
`;

const AccentSmall = css`
  font-family: Oxygen Mono;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.04em;
`;

const Typography = {
  MainHeading,
  BodyMedium,
  BodyMediumButton,
  BodyMediumBold,
  HeaderMedium,
  HeaderLarge,
  Body,
  BodySmall,
  BodyMedium,
  BodyLarge,
  AccentSmall,
};

export default Typography;
