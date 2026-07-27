import react from "react"; 
import Card from 'react-bootstrap/Card';
import Icon from "@mdi/react";
import {mdiIdentifier, mdiShield } from '@mdi/js';
import TeamList from "./TeamList";

function Team(props){
    return (
       <Card>
      <Card.Body>
        <div>
          <Icon path={mdiShield} size={1} color="grey" />{" "}
          {props.team.nationality}
        </div>

        <div>
          <Icon path={mdiIdentifier} size={1} color="grey" />{" "}
          {props.team.id}
        </div>

        <div>
          <img src={props.team.flag} alt={props.team.nationality} width={20} height={15}/>{" "}
          <span>{props.team.nationality}</span>
        </div>
      </Card.Body>
    </Card>
    )
}

export default Team; 




