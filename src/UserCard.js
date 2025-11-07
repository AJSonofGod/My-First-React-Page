function UserCard({ name, email, age }) {
  return (
    <div>
      <h3>Name: {name}</h3>
      <p>Email: {email}</p>
      <p>Age: {age}</p>
    </div>
  );
}

export default UserCard;