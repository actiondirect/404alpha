import React from "react";
import Chip from "../Chip";
import styled from "styled-components";
import {
  SfprodisplayRegularNormalWhite13px,
  ApplesdgothicneoRegularNormalBlack11,
  ApplesdgothicneoRegularNormalTrueV1,
  SfprodisplayRegularNormalTrueV13px,
} from "../../styledMixins";


function Group1207(props) {
  const { chipProps } = props;

  return (
    <Group12071>
      <Chip>{chipProps.children}</Chip>
      <SDGothicNeoBold48>
        <Span059>10,000</Span059>
        <Span159>원</Span159>
        <Span239> 할인</Span239>
      </SDGothicNeoBold48>
    </Group12071>
  );
}

const Group12071 = styled.div`
  position: absolute;
  height: 20px;
  top: 0;
  left: 0;
  display: flex;
  align-items: flex-start;
  min-width: 145px;
`;

const SDGothicNeoBold48 = styled.div`
  ${SfprodisplayRegularNormalWhite13px}
  min-height: 20px;
  margin-left: 8px;
  line-height: 20px;
  white-space: nowrap;
`;

const Span059 = styled.span`
  ${SfprodisplayRegularNormalTrueV13px}
  letter-spacing: 0;
`;

const Span159 = styled.span`
  ${ApplesdgothicneoRegularNormalTrueV1}
  letter-spacing: -0.20px;
`;

const Span239 = styled.span`
  ${ApplesdgothicneoRegularNormalBlack11}
  letter-spacing: -0.20px;
`;

export default Group1207;
