import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom'
import { useState } from 'react';

function Comments () {

    const dispatch = useDispatch();

    const history = useHistory();

    //state
    const [newComments, setComments] = useState({comments : 0})

    //handler for collecting data and pushing to /understanding
//dispatch saved input within 
const saveComments = () => {
    event.preventDefault()
    dispatch({
        type: "SAVE_COMMENTS",
        payload: newComments
    })
    console.log(newComments)
    history.push("/review")
}

    return (
        <>
        <div>
            <h1>Any comments you want to leave?</h1>
            <h3>Comments?</h3>
        </div>
        <div>
       <form onSubmit={saveComments}>
            
            <input type="number" placeholder="Comments" value={newComments.comments} onChange={(event) => setComments(event.target.value)}></input>
            <button type="submit">Next</button>
        </form>
        </div>
        </>
    )

}

export default Comments;