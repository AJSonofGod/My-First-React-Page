function CustomerReviewCard({ name, rating, feedback }) {
  return (
    <div>
      <h4>{name}</h4>
      <p>{'★'.repeat(rating)}</p>
      <p>{feedback}</p>
    </div>
  );
}

export default CustomerReviewCard;