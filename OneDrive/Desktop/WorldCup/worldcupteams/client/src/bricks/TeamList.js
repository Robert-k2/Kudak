import React from "react";
import Team from "./Team";

function TeamList(props) {
  function getTeamList(teamList) {
    return teamList.map((team) => {
      return <Team key={team.id} team={team} />;
    });
  }

  return getTeamList(props.teamList);
}

export default TeamList;


