import React from "react";
import Wrapper from "@/layouts/Wrapper";
import OnlineCourses from "@/components/online-courses";

import { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "Online Courses - Equilearn - ",
  description: "Full Stack Developer",
  keywords: "Full Stack Developer, at rk-theme",
};

const index = () => {
  return (
    <Wrapper>
      <OnlineCourses />
    </Wrapper>
  );
};

export default index;
