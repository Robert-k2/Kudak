import './App.css';
import TeamList from "./bricks/TeamList" ;
import WorldCupInfo from "./bricks/WorldCupInfo" ; 
import 'bootstrap/dist/css/bootstrap.min.css';

const worldCup = {
  name: '2026',
};


const teamList = [
  {
    nationality: "Czech Republic",
    flag: "https://flagcdn.com/w80/cz.png",
    id: "8fd09f3f5e2b4326",
    year: "2026",
  },
  {
    nationality: "France",
    flag: "https://flagcdn.com/w80/fr.png",
    id: "d6518140a5d6e2d0",
    year: "2026",
  },
  {
    nationality: "Spain",
    flag: "https://flagcdn.com/w80/es.png",
    id: "6797c49e1a286d52",
    year: "2026",
  },
  {
    nationality: "England",
    flag: "https://flagcdn.com/w80/gb-eng.png",
    id: "2862a7b1abf33eed",
    year: "2026",
  },
  {
    nationality: "Canada",
    flag: "https://flagcdn.com/w80/ca.png",
    id: "d6518140a5d6e2d0",
    year: "2026",
  },
  {
    nationality: "Japan",
    flag: "https://flagcdn.com/w80/jp.png",
    id: "2862a7b1abf33eed",
    year: "2026",
  },
  {
    nationality: "Brazil",
    flag: "https://flagcdn.com/w80/br.png",
    id: "6797c49e1a286d52",
    year: "2026",
  },
  {
    nationality: "South Africa",
    flag: "https://flagcdn.com/w80/za.png",
    id: "2862a7b1abf33eed",
    year: "2026",
  },
];


function getteamList( teamList){
  return teamList.map((team)=> {

  return (
    <div key = { team.id}>
    <div> {team.nationality} </div> 
     <div> {team.id} </div> 
     <div> {team.year} </div> 
 </div>  
   )
 })
} 

function App() {
  return (
    <div className="App">
      <WorldCupInfo worldCup ={worldCup} />
      <TeamList teamList={teamList} />
     

    </div>
  );
}


export default App;









