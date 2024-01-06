import './KoiApp.css';
import {useEffect, useState} from "react";

function KoiApp() {
    const players = ["Loud Jason", "Bobby"];

    const [stories, setStories] = useState([{name: 'yes', workers: []}, {name: 'no', workers: []}, {name: 'be', workers: []}])
    const [deleteMe, setDeleteMe] = useState(false)

    const roundRobinPlayers = ()=> {
        for(let x = 0; x < players.length; x++){
            findApplicableStory(players.pop())
        }
        setDeleteMe(true)
    }

    const findApplicableStory = (player) => {
        let smallestArrIndex = Infinity;
        stories.forEach((story,iw) => {
            smallestArrIndex = story.workers.length < smallestArrIndex ? i : smallestArrIndex
            console.log(story.workers.length < smallestArrIndex, story.workers.length, smallestArrIndex)
        })
        const tempStories = stories;
        console.log(smallestArrIndex)
        tempStories[smallestArrIndex].workers.push(player)
        setStories(tempStories)
    }
useEffect(()=> {
    if(!deleteMe){
        roundRobinPlayers();

    }
}, [])


  return (
    <div>
      <div>
          <div>Parrit 2.0</div>
      </div>
      <div>
          <div>
              {players.map(player=> <div>{player}</div>)}
          </div>
        <div style={  {display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '10px',
            gridAutoRows: 'minmax(100px, auto)'}}>
          {stories.map(story =>
              <div key={story}>
                  {story.name}
                  {story.workers.map((worker)=> <div>{worker}</div>)}
          </div>)}
        </div>
      </div>
    </div>
  );
}

export default KoiApp;
