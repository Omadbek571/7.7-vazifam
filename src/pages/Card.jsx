import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Card() {

    const card = useSelector(state => state.card.card)
    const dispatch = useDispatch()

    function handleCardAdd(e) {
        e.preventDefault()

        const data = {
            id: Date.now(),
            name: "tel",
            price: 400,
            count: 4
        } 

        dispatch({ type: "ADD_CARD", payload: data })



    }

    return (
        <div className='border-2 bg-white'>
            <button onClick={handleCardAdd} className='btn btn-outline btn-accent'>ADD TO CARD</button>
        </div>
    )
}

export default Card