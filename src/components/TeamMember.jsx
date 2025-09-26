function TeamMember({teamMember}) {
  return (
    <article className="team-member">
        <img src={teamMember.picture} alt="" />
        
        <div className="team-member-info">
            <h1>{teamMember.name}</h1>
            <h2>{teamMember.role}</h2>
        </div>
    </article>
  );
}

export default TeamMember;