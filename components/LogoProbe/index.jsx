import React from "react";
import styled from "styled-components";
import { SfprodisplayBoldBlack24px } from "../../styledMixins";


function LogoProbe(props) {
  const { children } = props;

  return (
    <LogoProbe1>
      <SDGothicNeoBold48>{children}</SDGothicNeoBold48>
    </LogoProbe1>
  );
}

const LogoProbe1 = styled.div`
  width: 146px;
  height: 18px;
  display: flex;
  align-items: flex-start;
  overflow: hidden;
  border: 1px none;
`;

const SDGothicNeoBold48 = styled.div`
  ${SfprodisplayBoldBlack24px}
  min-height: 36px;
  margin-top: -11px;
  letter-spacing: 0;
  line-height: 36px;
  white-space: nowrap;
`;

export default LogoProbe;
