import TeamMember from "./TeamMember";

function TeamMembers({department}) {
  return (
    <section className="team-members">
        <h1>{department.name}</h1>

        <section>
          {department.teamMembers.map((teamMember, index) => {
            return <TeamMember key={index} teamMember={teamMember} />
          })}
        </section>
    </section>
  );
}

export default TeamMembers;