import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";

function Feeling() {
  const dispatch = useDispatch();

  const history = useHistory();

  //state
  const [newFeeling, setFeeling] = useState({ feeling : 0});

  //handler for collecting data and pushing to /understanding
  //dispatch saved input within
  const saveFeeling = () => {
    event.preventDefault();
    if (newFeeling > 0) {
      dispatch({
        type: "SAVE_FEELING",
        payload: newFeeling ,
      });
      console.log(newFeeling);
      history.push("/understanding");
    } else {
      alert("Please enter a number!");
    }
  };
  return (
    <>
      <div>
        <h1>How are you feeling today?</h1>
        <h3>Feeling?</h3>
      </div>
      <div>
        <form onSubmit={saveFeeling}>
          <input
            type="number"
            placeholder="How are you feeling?"
            value={newFeeling.feeling}
            onChange={(event) => setFeeling(event.target.value)}
          ></input>
          <button type="submit">Next</button>
        </form>
      </div>
    </>
  );
}

export default Feeling;
