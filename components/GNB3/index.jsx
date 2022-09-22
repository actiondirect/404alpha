import React from "react";
import LogoProbe from "../LogoProbe";
import styled from "styled-components";


function GNB3(props) {
  const { logoProbeProps } = props;

  return (
    <GNB>
      <LogoProbe>{logoProbeProps.children}</LogoProbe>
    </GNB>
  );
}

const GNB = styled.div`
  width: 1920px;
  height: 60px;
  position: relative;
  display: flex;
  padding: 0 360px;
  align-items: center;
  border: 1px none;
`;

export default GNB3;
