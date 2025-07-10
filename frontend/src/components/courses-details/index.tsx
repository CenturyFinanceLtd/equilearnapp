import BreadcrumbCoursesDetails from '@/common/breadcrumb/BreadcrumbCoursesDetails';
import MarqueeOne from '@/common/MarqueeOne';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';
import CoursesDetailsArea from './CoursesDetailsArea';
import RelatedCourses from './RelatedCourses';

interface CoursesDetailsProps {
  course?: { courseName?: string } | null;
}

const CoursesDetails = ({ course }: CoursesDetailsProps) => {
  return (
    <>
      <HeaderOne />
      <BreadcrumbCoursesDetails course={course} />
      <CoursesDetailsArea />
      <RelatedCourses />
      <MarqueeOne style_2={true} />
      <FooterOne />
    </>
  );
};

export default CoursesDetails;