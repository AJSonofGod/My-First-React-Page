function BookCard({ title, author, price }) {
  return (
    <div>
      <h4>{title}</h4>
      <p>Author: {author}</p>
      <p>Price: #{price}</p>
    </div>
  );
}

export default BookCard;