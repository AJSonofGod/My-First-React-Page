import Ahamefuna from './img/Ahamefuna.jpg';

function TeamMemberCard ({ name, role, image }) {
  return (
    <div>
      <img src = {Ahamefuna} alt = {name} width = {100} />
      <h4>{name}</h4>
      <p>{role}</p>
    </div>
  );
}

export default TeamMemberCard;