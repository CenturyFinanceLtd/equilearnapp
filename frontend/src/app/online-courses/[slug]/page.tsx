import Wrapper from '@/layouts/Wrapper';
import CoursesDetails from '@/components/courses-details';

interface PageProps {
  params: { slug: string };
}

const CourseSlugPage = ({ params }: PageProps) => {
  return (
    <Wrapper>
      <CoursesDetails />
    </Wrapper>
  );
};

export default CourseSlugPage;