import React from "react";
import styled from "styled-components";
import { ApplesdgothicneoBoldMountainMist10p } from "../../styledMixins";


function Chip(props) {
  const { children, className } = props;

  return (
    <Chip1 className={`chip ${className || ""}`}>
      <SDGothicNeoBold48 className="sd-gothic-neo-bold48-74">{children}</SDGothicNeoBold48>
    </Chip1>
  );
}

const Chip1 = styled.div`
  display: flex;
  width: fit-content;
  align-items: flex-start;
  gap: 10px;
  padding: 2px 6px;
  background-color: var(--white);
  border-radius: 2px;
  border: 1px solid;
  border-color: var(--cararra);

  &.chip.chip-1 {
    margin-left: 49px;
  }

  &.chip.chip-3 {
    margin-left: 64px;
  }

  &.chip.chip-4 {
    margin-left: 49px;
  }

  &.chip.chip-5 {
    margin-left: 64px;
  }

  &.chip.chip-6 {
    margin-left: 49px;
  }

  &.chip.chip-7 {
    margin-left: 49px;
  }

  &.chip.chip-8 {
    margin-left: 49px;
  }

  &.chip.chip-9 {
    margin-left: 64px;
  }

  &.chip.chip-10 {
    margin-left: 49px;
  }

  &.chip.chip-11 {
    margin-left: 64px;
  }

  &.chip.chip-12 {
    margin-left: 49px;
  }

  &.chip.chip-13 {
    margin-left: 49px;
  }
`;

const SDGothicNeoBold48 = styled.div`
  ${ApplesdgothicneoBoldMountainMist10p}
  width: fit-content;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: 15px;
  white-space: nowrap;
`;

export default Chip;
