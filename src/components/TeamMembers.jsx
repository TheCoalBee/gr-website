import TeamMember from "./TeamMember";

function TeamMembers({department}) {
  return (
    <section className="team-members">
        {department.teamMembers.map((teamMember, index) => {
          return <TeamMember key={index} teamMember={teamMember} />
        })}
    </section>
  );
}

export default TeamMembers;