import { ReactNode } from "react";
import styled from "styled-components";

type SectionType = {
  children: ReactNode;
  class?: string
};

const Section: React.FC<SectionType> = (props) => {
  return <SectionTag className={ (props.class) && props.class }>{props.children}</SectionTag>;
};

const SectionTag = styled.section`
  display: flex;
  height: calc(100vh - 50px);
  flex-direction: column;
  padding: var(--space);
  overflow-y: auto;
`;

export default Section;
