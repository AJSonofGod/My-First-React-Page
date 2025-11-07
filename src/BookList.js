import BookCard from './BookCard';

function BookList() {
  const books = [
    { title: 'Love the Way to Victory', author: 'Kenneth E. Hagin', price: 90.0 },
    { title: 'Tongues Beyound the Upper Room', author: 'Kenneth E. Hagin', price: 12.5 },
    { title: 'Spirit Within and the Spirit Upon', author: 'Kenneth E. Hagin', price: 15.0 },
  ];

  return (
    <div>
      {books.map(book => (
        <BookCard 
        key = {book.id} 
        title = {book.title} 
        author = {book.author}
        price = {book.price} />
      ))}
    </div>
  );
}

export default BookList;