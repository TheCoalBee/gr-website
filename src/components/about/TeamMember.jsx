function TeamMember({teamMember}) {
  return (
    <article className="team-member">
        <div className="team-member-picture">
          <img
          src={teamMember.picture}
          style={{
            objectPosition: teamMember.offset}}
          alt=""/>
        </div>
        
        <div className="team-member-info">
            <h1>{teamMember.name}</h1>
            <p>{teamMember.role}</p>
        </div>
    </article>
  );
}

export default TeamMember;