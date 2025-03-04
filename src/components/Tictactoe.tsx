'use client'

import './Tictactoe.css'
import { useState } from 'react'

export default () => {

    let initialData  =['','','','','','','','','']

    const[count, setCount] = useState(0)
    const[lock, setLock] = useState(false)
    const [data, setData] = useState(initialData)
    const [winningLine, setWinningLine] = useState<number[] | null>(null)

    const toggle = (e: any, num: any) => {
        if (lock || data[num] !== '') {
            return
        }

        const newData = [...data]
        if (count % 2 === 0) {
            e.target.innerHTML = `<img src='/x-solid.svg' />`
            newData[num] = 'X'
        } else {
            e.target.innerHTML = `<img src='/o-solid.svg' />`
            newData[num] = 'O'
        }

        setData(newData)
        setCount(count + 1)
        checkWin(newData)
    }


    const checkWin = (newData: any) => {
        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], 
            [0, 3, 6], [1, 4, 7], [2, 5, 8], 
            [0, 4, 8], [2, 4, 6],             
        ]

        for (let pattern of winPatterns) {
            const [a, b, c] = pattern
            if (newData[a] && newData[a] === newData[b] && newData[a] === newData[c]) {
                setWinningLine([a, b, c])
                won()
                return
            }
        }
    }

    const won = () => {
        setLock(true)
    }

    const resetGame = () => {
        setData(initialData)
        setCount(0)
        setLock(false)
        setWinningLine(null)
        const boxes = document.querySelectorAll('.boxes')
        boxes.forEach((box: any) => (box.innerHTML = ''))
    }

    return(
        <div className='container'>
            <h1 className='title'>Tic Tac Toe Game</h1>
            <div className="board">
                <div className="row1">
                    <div className={`boxes ${winningLine?.includes(0) ? 'flash' : ''}`} onClick={(e: any) => toggle(e, 0)}></div>
                    <div className={`boxes ${winningLine?.includes(1) ? 'flash' : ''}`} onClick={(e: any) => toggle(e, 1)}></div>
                    <div className={`boxes ${winningLine?.includes(2) ? 'flash' : ''}`} onClick={(e: any) => toggle(e, 2)}></div>
                </div>
                <div className="row2">
                    <div className={`boxes ${winningLine?.includes(3) ? 'flash' : ''}`} onClick={(e: any) => toggle(e, 3)}></div>
                    <div className={`boxes ${winningLine?.includes(4) ? 'flash' : ''}`} onClick={(e: any) => toggle(e, 4)}></div>
                    <div className={`boxes ${winningLine?.includes(5) ? 'flash' : ''}`} onClick={(e: any) => toggle(e, 5)}></div>
                </div>
                <div className="row3">
                    <div className={`boxes ${winningLine?.includes(6) ? 'flash' : ''}`} onClick={(e: any) => toggle(e, 6)}></div>
                    <div className={`boxes ${winningLine?.includes(7) ? 'flash' : ''}`} onClick={(e: any) => toggle(e, 7)}></div>
                    <div className={`boxes ${winningLine?.includes(8) ? 'flash' : ''}`} onClick={(e: any) => toggle(e, 8)}></div>
                </div>
            </div>
            <button className='resert' onClick={resetGame}> Reset</button>
        </div>
    )
}