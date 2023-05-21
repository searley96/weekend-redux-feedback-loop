import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState } from "react";

function Understanding() {
  const dispatch = useDispatch();

  const history = useHistory();

  //state
  const [newUnderstanding, setUnderstanding] = useState({understanding : 0});

  //handler for collecting data and pushing to /understanding
  //dispatch saved input within
  const saveUnderstanding = () => {
    event.preventDefault();
    if (newUnderstanding > 0) {
      dispatch({
        type: "SAVE_UNDERSTANDING",
        payload: newUnderstanding,
      });
      console.log(newUnderstanding);
      history.push("/supported");
    } else {
      alert("Please enter a number!");
    }
  };

  return (
    <>
      <div>
        <h1>How well are you understanding the content?</h1>
        <h3>Understanding?</h3>
      </div>
      <div>
        <form onSubmit={saveUnderstanding}>
          <input
            type="number"
            placeholder="Understanding?"
            value={newUnderstanding.understanding}
            onChange={(event) => setUnderstanding(event.target.value)}
          ></input>
          <button type="submit">Next</button>
        </form>
      </div>
    </>
  );
}

export default Understanding;
