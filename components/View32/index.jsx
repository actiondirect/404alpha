import React from "react";
import styled from "styled-components";


function View32() {
  return (
    <View>
      <Bookmark src="https://anima-uploads.s3.amazonaws.com/projects/632bbe51c6e7698e68ac9946/releases/632c19d28c7143bb88c222f4/img/bookmark@2x.svg" />
    </View>
  );
}

const View = styled.div`
  display: flex;
  width: fit-content;
  align-items: flex-start;
  padding: 3px;
  position: absolute;
  top: 10px;
  left: 344px;
  background-color: var(--white);
  border-radius: 2px;
  border: 1px solid;
  border-color: var(--cultured-pearl);
`;

const Bookmark = styled.img`
  min-width: 24px;
  height: 24px;
`;

export default View32;
