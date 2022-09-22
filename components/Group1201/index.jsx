import React from "react";
import Chip from "../Chip";
import styled from "styled-components";
import {
  ApplesdgothicneoRegularNormalBlack11,
  SfprodisplayRegularNormalTrueV13px,
  SfprodisplayRegularNormalWhite13px,
  ApplesdgothicneoRegularNormalTrueV1,
} from "../../styledMixins";


function Group1201(props) {
  const { chip1Props, chip2Props, chip3Props, chip4Props } = props;

  return (
    <Group12011>
      <FlexRow>
        <Chip>{chip1Props.children}</Chip>
        <SDGothicNeoBold48>
          <Span052>10,000</Span052>
          <Span152>원</Span152>
          <Span236> 할인</Span236>
        </SDGothicNeoBold48>
        <Chip className={chip2Props.className}>{chip2Props.children}</Chip>
        <SDGothicNeoBold481>
          <Span052>5%</Span052>
          <Span236> 할인</Span236>
        </SDGothicNeoBold481>
      </FlexRow>
      <FlexRow1>
        <Chip>{chip3Props.children}</Chip>
        <SDGothicNeoBold482>
          <Span052>10% </Span052>
          <Span236>할인</Span236>
        </SDGothicNeoBold482>
        <Chip className={chip4Props.className}>{chip4Props.children}</Chip>
        <SDGothicNeoBold481>
          <Span052>6,510</Span052>
          <Span152>원</Span152>
          <Span236> 적립</Span236>
        </SDGothicNeoBold481>
      </FlexRow1>
    </Group12011>
  );
}

const Group12011 = styled.div`
  position: absolute;
  width: 327px;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 48px;
`;

const FlexRow = styled.div`
  height: 20px;
  position: relative;
  display: flex;
  align-items: flex-start;
  min-width: 291px;
`;

const SDGothicNeoBold48 = styled.div`
  ${SfprodisplayRegularNormalWhite13px}
  min-height: 20px;
  margin-left: 8px;
  min-width: 77px;
  line-height: 20px;
  white-space: nowrap;
`;

const Span052 = styled.span`
  ${SfprodisplayRegularNormalTrueV13px}
  letter-spacing: 0;
`;

const Span152 = styled.span`
  ${ApplesdgothicneoRegularNormalTrueV1}
  letter-spacing: -0.20px;
`;

const Span236 = styled.span`
  ${ApplesdgothicneoRegularNormalBlack11}
  letter-spacing: -0.20px;
`;

const SDGothicNeoBold481 = styled.div`
  ${SfprodisplayRegularNormalWhite13px}
  min-height: 20px;
  margin-left: 8px;
  line-height: 20px;
  white-space: nowrap;
`;

const FlexRow1 = styled.div`
  height: 20px;
  position: relative;
  margin-top: 8px;
  display: flex;
  align-items: flex-start;
  min-width: 319px;
`;

const SDGothicNeoBold482 = styled.div`
  ${SfprodisplayRegularNormalWhite13px}
  min-height: 20px;
  margin-left: 8px;
  min-width: 50px;
  line-height: 20px;
  white-space: nowrap;
`;

export default Group1201;
