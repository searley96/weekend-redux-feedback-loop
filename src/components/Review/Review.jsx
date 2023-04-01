import { useSelector } from 'react-redux';
import axios from 'axios'
import { useHistory } from 'react-router-dom'

function Review() {

    //access store to retrieve individual input info
    const addFeelings = useSelector(store => store.addFeelings)
    
    const addUnderstanding = useSelector(store => store.addUnderstanding)

    const addSupported = useSelector(store => store.addSupported)

    const addComments = useSelector(store => store.addComments)

    //enables push to next page
    const history = useHistory();

    //create object for all inputs
    let allInputs = {
        feeling: addFeelings,
        understanding: addUnderstanding,
        support: addSupported,
        comments: addComments
    }

    //post data to database
    //push to success portion of survey
    function handleSubmit() {
        axios.post('/api/input', allInputs)
        .then((response) => {
        }).catch((error) => {
            console.log(error)
            alert('Could not get inputs')
        })
        history.push("/success")
    }
    
    return (
        

        <>
        <h1>Review Your Feedback</h1>
        <div>
        <ul>
            <li>Feelings: {addFeelings.toString()}</li>
            <li>Understanding: {addUnderstanding.toString()}</li>
            <li>Support: {addSupported.toString()}</li>
            <li>Comments: {addComments.toString()}</li>
        </ul>

        <button onClick={handleSubmit}>Submit</button>
        </div>
        </>
    )

}

export default Review;