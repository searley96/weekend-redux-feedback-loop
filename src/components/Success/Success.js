import { useHistory } from 'react-router-dom'

function Success () {

    //enable push to next page
    const history = useHistory();

    //push to Comments portion of survey 
    const resetSurvey = () => {
        history.push("/")
    }

    return (
        <>
        <div>
            <h1>Feedback!</h1>
        </div>
        <div>
            <h1>Thank You!</h1>
            <button onClick={resetSurvey}>Leave New Feedback</button>
        </div>
        </>
    )
}

export default Success;