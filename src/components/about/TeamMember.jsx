function TeamMember({teamMember}) {
  return (
    <article className="team-member">
        <img src={teamMember.picture} alt="" />
        
        <div className="team-member-info">
            <h1>{teamMember.name}</h1>
            <p>{teamMember.role}</p>
        </div>
    </article>
  );
}

export default TeamMember;