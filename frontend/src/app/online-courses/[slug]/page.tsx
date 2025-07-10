import Wrapper from '@/layouts/Wrapper';
import CoursesDetails from '@/components/courses-details';

interface PageProps {
  params: { slug: string };
}

const CourseSlugPage = async ({ params }: PageProps) => {
  let course = null;
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/courses/${params.slug}`,
      { cache: 'no-store' }
    );
    if (res.ok) {
      course = await res.json();
    }
  } catch (e) {
    console.error('Failed to fetch course', e);
  }

  return (
    <Wrapper>
      <CoursesDetails course={course} />
    </Wrapper>
  );
};

export default CourseSlugPage;