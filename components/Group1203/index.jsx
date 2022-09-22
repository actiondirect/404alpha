import React from "react";
import styled from "styled-components";
import { ApplesdgothicneoRegularNormalFuscou, SfprodisplayRegularNormalFuscousGra } from "../../styledMixins";


function Group1203() {
  return (
    <Group12031>
      <SDGothicNeoBold48>
        <Span056>L</Span056>
        <Span156> 멤버십</Span156>
      </SDGothicNeoBold48>
      <Rectangle1502></Rectangle1502>
      <SDGothicNeoBold481>우리카드</SDGothicNeoBold481>
      <Rectangle1502></Rectangle1502>
      <SDGothicNeoBold482>L Pay</SDGothicNeoBold482>
    </Group12031>
  );
}

const Group12031 = styled.div`
  position: absolute;
  height: 18px;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  min-width: 149px;
`;

const SDGothicNeoBold48 = styled.div`
  ${SfprodisplayRegularNormalFuscousGra}
  min-height: 18px;
  min-width: 40px;
  line-height: 18px;
  white-space: nowrap;
`;

const Span056 = styled.span`
  ${SfprodisplayRegularNormalFuscousGra}
  letter-spacing: 0;
`;

const Span156 = styled.span`
  ${ApplesdgothicneoRegularNormalFuscou}
  letter-spacing: -0.20px;
`;

const Rectangle1502 = styled.div`
  width: 1px;
  height: 12px;
  margin-left: 8px;
  background-color: var(--cararra);
  border: 1px none;
`;

const SDGothicNeoBold481 = styled.div`
  ${ApplesdgothicneoRegularNormalFuscou}
  min-height: 18px;
  margin-left: 8px;
  min-width: 41px;
  letter-spacing: -0.2px;
  line-height: 18px;
  white-space: nowrap;
`;

const SDGothicNeoBold482 = styled.div`
  ${SfprodisplayRegularNormalFuscousGra}
  min-height: 18px;
  margin-left: 8px;
  min-width: 28px;
  letter-spacing: 0;
  line-height: 18px;
  white-space: nowrap;
`;

export default Group1203;
