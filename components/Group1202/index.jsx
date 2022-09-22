import React from "react";
import styled from "styled-components";
import { ApplesdgothicneoRegularNormalFuscou } from "../../styledMixins";


function Group1202() {
  return (
    <Group12021>
      <SDGothicNeoBold48>쿠폰</SDGothicNeoBold48>
      <Rectangle1499></Rectangle1499>
      <SDGothicNeoBold481>와우 회원</SDGothicNeoBold481>
      <Rectangle1499></Rectangle1499>
      <SDGothicNeoBold482>신한카드</SDGothicNeoBold482>
      <Rectangle1499></Rectangle1499>
      <SDGothicNeoBold483>카카오페이</SDGothicNeoBold483>
    </Group12021>
  );
}

const Group12021 = styled.div`
  ${ApplesdgothicneoRegularNormalFuscou}
  position: absolute;
  height: 18px;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  min-width: 217px;
`;

const SDGothicNeoBold48 = styled.div`
  min-height: 18px;
  min-width: 21px;
  letter-spacing: -0.2px;
  line-height: 18px;
  white-space: nowrap;
`;

const Rectangle1499 = styled.div`
  width: 1px;
  height: 12px;
  margin-left: 8px;
  background-color: var(--cararra);
  border: 1px none;
`;

const SDGothicNeoBold481 = styled.div`
  min-height: 18px;
  margin-left: 8px;
  min-width: 44px;
  letter-spacing: -0.2px;
  line-height: 18px;
  white-space: nowrap;
`;

const SDGothicNeoBold482 = styled.div`
  min-height: 18px;
  margin-left: 8px;
  min-width: 41px;
  letter-spacing: -0.2px;
  line-height: 18px;
  white-space: nowrap;
`;

const SDGothicNeoBold483 = styled.div`
  min-height: 18px;
  margin-left: 8px;
  min-width: 52px;
  letter-spacing: -0.2px;
  line-height: 18px;
  white-space: nowrap;
`;

export default Group1202;
