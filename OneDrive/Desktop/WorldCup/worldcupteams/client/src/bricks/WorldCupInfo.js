import react from "react"; 
import styles from "../css/worldcup.module.css";

function WorldCupInfo(props) { 

    return (
        <h1> WorldCup{" "} 
        <span className={styles.worldCupNameHeader}>
        { props.worldCup.name }</span>
        </h1>
    )
}


export default WorldCupInfo;   
 








