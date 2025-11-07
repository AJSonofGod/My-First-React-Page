function CourseCard({ title, instructor, duration }) {
  return (
    <div>
      <h3>{title}</h3>
      <p><b>Instructor:</b> {instructor}</p>
      <p><b>Duration:</b> {duration}</p>
    </div>
  );
}

export default CourseCard;