import CustomerReviewCard from './CustomerReviewCard';

function ReviewList() {
  const reviews = [
    { name: 'AJ', rating: 5, feedback: 'Excellent product!' },
    { name: 'Asa', rating: 4, feedback: 'Very good, but delivery was slow.' },
    { name: 'Job', rating: 3, feedback: 'Average experience.' },
  ];

  return (
    <div>
      {reviews.map(review => (
        <CustomerReviewCard 
        key = {review.id}
        name = {review.name}
        rating = {review.rating}
        feedback = {review.feedback} />
      ))}
    </div>
  );
}

export default ReviewList;