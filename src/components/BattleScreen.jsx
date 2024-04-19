import './battleScreen.css';

const BattleScreen = ({ myPokeSelect, compRandSelect , myHealth, enemyHealth}) => {
    console.log({myPokeSelect});
    console.log({compRandSelect});
    if (!myPokeSelect || !compRandSelect) return null;
    return (
        <div className="battle-container">
            <div className="enemy-container">
                <h3 className='enemy-health'> {enemyHealth}</h3>
                <img src={compRandSelect[0].sprites.front_default} alt="enemy pokemon"/>  
            </div>
            <div className="my-container">
                <h3 className='my-health'> {myHealth}</h3>
                <img src={myPokeSelect[0].sprites.back_default} alt="my pokemon"/>
        </div> 
        </div>
    )
}

export default BattleScreen;