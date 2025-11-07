import TeamMemberCard from './TeamMemberCard';

function TeamList() {
  const team = [
    { name: 'AJ', role: 'Ethical Hacker', image: '' },
    { name: 'Asa', role: 'Web Developer', image: '' },
    { name: 'Job', role: 'Data Analyst', image: '' },
  ];

  return (
    <div className = "team-list">
      {team.map(team => (
        <TeamMemberCard 
        key = {team.id} 
        name = {team.name}
        role = {team.role}
        image = {team.image}/>
      ))}
    </div>
  );
}

export default TeamList;