import { useEffect, useState } from "react";
import './Score_style.css';
export const ScoreBoard=()=>{

    const [Player,setPlayer] = useState([  /* Player 정보가 담긴 배열 */
        { rank: 1, name: 'LOADING', score: 88},
    ]);

    const GetData =async()=>{
        setPlayer([]);
        let TempArr=[];
    const Ref=await  fetch('/api/score') 
    const Data = await Ref.json();
    const RankArr = Data.RankArr;

    for(let i=0; i<RankArr.length; i++){
        TempArr.push({rank: i+1, name: RankArr[i].user_name, score: RankArr[i].score});
    }
    setPlayer(TempArr);
    }
    //랭킹 정보를 가져오는 api 호출함수

    useEffect(()=>{
        GetData();
    },[]);
    //랭킹 정보를 가져오는 api 호출함수 실행

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

 