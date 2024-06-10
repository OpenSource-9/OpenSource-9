import { useState } from "react";
import './Score_style.css';
export const ScoreBoard=()=>{

    const [Player,setPlayer] = useState([  /* Player 정보가 담긴 배열 */
        { rank: 1, name: 'Name', score: 1500},
        { rank: 2, name: 'Name', score: 1400},
        { rank: 3, name: 'Name', score: 1300},
        { rank: 4, name: 'Name', score: 1200},
        { rank: 5, name: 'Name', score: 1100},
        { rank: 6, name: 'Name', score: 1000},
        { rank: 7, name: 'Name', score: 900},
        { rank: 8, name: 'Name', score: 800},
        { rank: 9, name: 'Name', score: 700},
        
    ]);
    

return <>
    <div className="leaderBoard">
                <h1>RANKING</h1>
                <table>
                    <thead>
                        <tr> 
                            <th>RANK</th>  {/* 순위표 attribute */}
                            <th>PLAYER</th>
                            <th>SCORE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Player.map(p => (  /*Player 배열을 p로 탐색하기, rank를 키로 정함*/
                            <tr key={p.rank}> 
                                <td>{p.rank}{단위(p.rank)}</td>
                                <td>{p.name}</td>
                                <td>{p.score}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
</>
 function 단위(rank){/*등수에 맞는 단위를 붙여주는 함수*/
    switch (rank) {
        case 1:
            return "st";
        case 2:
            return "nd";
        case 3:
            return "rd";
        default:
            return "th";
    }
}

}

 