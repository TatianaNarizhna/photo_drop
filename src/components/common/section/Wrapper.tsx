import React, { FC } from "react";
import { Section } from "./WrapperStyles";

interface SectionProps {
  children: React.ReactNode;
}

const Wrapper: FC<SectionProps> = ({ children }) => {
  return <Section>{children}</Section>;
};

export default Wrapper;
