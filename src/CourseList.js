import CourseCard from './CourseCard';

function CourseList() {
  const courses = [
    { title: 'Intro to Web Tech.', instructor: 'Dr. Samuel Idowu', duration: '14 weeks' },
    { title: 'Web Innovation', instructor: 'Dr. Promise Champion', duration: '14 weeks' },
    { title: 'Computer Programming', instructor: 'Dr. Uchenna Jerry', duration: '14 weeks' },
  ];

  return (
    <div>
      {courses.map(course => (
        <CourseCard 
        key = {course.id}
        title = {course.title}
        instructor = {course.instructor}
        duration = {course.duration} />
      ))}
    </div>
  );
}

export default CourseList;