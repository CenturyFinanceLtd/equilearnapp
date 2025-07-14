import BreadcrumbCoursesDetails from '@/common/breadcrumb/BreadcrumbCoursesDetails';
import MarqueeOne from '@/common/MarqueeOne';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';
import CoursesDetailsArea, { Course } from './CoursesDetailsArea';
import RelatedCourses from './RelatedCourses';

interface CoursesDetailsProps {
   course?: Course | null;
}

const CoursesDetails = ({ course }: CoursesDetailsProps) => {
  return (
    <>
      <HeaderOne />
      <BreadcrumbCoursesDetails course={course} />
       <CoursesDetailsArea course={course} />
      <RelatedCourses />
      <MarqueeOne style_2={true} />
      <FooterOne />
    </>
  );
};

export default CoursesDetails;