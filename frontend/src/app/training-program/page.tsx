import React from "react";
import Wrapper from "@/layouts/Wrapper";
import TrainingProgram from "@/components/training-program";

import { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "Training Program - Equilearn - ",
  description: "Full Stack Developer",
  keywords: "Full Stack Developer, at rk-theme",
};

const index = () => {
  return (
    <Wrapper>
      <TrainingProgram />
    </Wrapper>
  );
};

export default index;
