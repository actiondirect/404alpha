import React from "react";
import styled from "styled-components";


function Border(props) {
  const { className } = props;

  return <Border1 className={`border ${className || ""}`}></Border1>;
}

const Border1 = styled.div`
  position: absolute;
  width: 384px;
  height: 1px;
  top: 0;
  left: 0;
  background-color: var(--cararra);
  border: 1px none;

  &.border.rectangle-1508 {
    height: 34px;
    background-color: var(--alabaster);
  }

  &.border.rectangle-1510 {
    height: 34px;
    background-color: var(--alabaster);
  }

  &.border.rectangle-1509 {
    height: 34px;
    background-color: var(--alabaster);
  }

  &.border.rectangle-1508-1 {
    height: 34px;
    background-color: var(--alabaster);
  }

  &.border.rectangle-1510-1 {
    height: 34px;
    background-color: var(--alabaster);
  }

  &.border.rectangle-1509-1 {
    height: 34px;
    background-color: var(--alabaster);
  }
`;

export default Border;
