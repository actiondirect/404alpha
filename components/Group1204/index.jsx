import React from "react";
import Chip from "../Chip";
import styled from "styled-components";
import {
  ApplesdgothicneoRegularNormalBlack11,
  SfprodisplayRegularNormalTrueV13px,
  SfprodisplayRegularNormalWhite13px,
  ApplesdgothicneoRegularNormalTrueV1,
} from "../../styledMixins";


function Group1204(props) {
  const { chip1Props, chip2Props } = props;

  return (
    <Group12041>
      <Chip>{chip1Props.children}</Chip>
      <SDGothicNeoBold48>
        <Span057>10,000</Span057>
        <Span157>원</Span157>
        <Span238> 할인</Span238>
      </SDGothicNeoBold48>
      <Chip className={chip2Props.className}>{chip2Props.children}</Chip>
      <SDGothicNeoBold481>
        <Span057>5%</Span057>
        <Span238> 할인</Span238>
      </SDGothicNeoBold481>
    </Group12041>
  );
}

const Group12041 = styled.div`
  position: absolute;
  height: 20px;
  top: 0;
  left: 0;
  display: flex;
  align-items: flex-start;
  min-width: 295px;
`;

const SDGothicNeoBold48 = styled.div`
  ${SfprodisplayRegularNormalWhite13px}
  min-height: 20px;
  margin-left: 8px;
  min-width: 77px;
  line-height: 20px;
  white-space: nowrap;
`;

const Span057 = styled.span`
  ${SfprodisplayRegularNormalTrueV13px}
  letter-spacing: 0;
`;

const Span157 = styled.span`
  ${ApplesdgothicneoRegularNormalTrueV1}
  letter-spacing: -0.20px;
`;

const Span238 = styled.span`
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

export default Group1204;
