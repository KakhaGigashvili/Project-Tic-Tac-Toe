import './Tictactoe.css'
import '../../public/x-solid.svg'
import '../../public/o-solid.svg'

export default () => {

    

    return(
        <div className='container'>
            <h1 className='title'>Tic Tac Toe Game</h1>
            <div className='board'>
                <div className='row1'>
                    <div className="boxes"></div>
                    <div className="boxes"></div>
                    <div className="boxes"></div>
                </div>
                <div className='row2'>
                    <div className="boxes"></div>
                    <div className="boxes"></div>
                    <div className="boxes"></div>
                </div>
                <div className='row3'>
                    <div className="boxes"></div>
                    <div className="boxes"></div>
                    <div className="boxes"></div>
                </div>
            </div>
            <button className='resert'> Resert</button>
        </div>
    )
}