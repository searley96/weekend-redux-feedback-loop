import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState } from "react";

function Supported() {
  const dispatch = useDispatch();

  const history = useHistory();

  //state
  const [newSupported, setSupported] = useState({ supported: 0 });

  //handler for collecting data and pushing to /understanding
  //dispatch saved input within
  const saveSupported = () => {
    event.preventDefault();
    dispatch({
      type: "SAVE_SUPPORTED",
      payload: newSupported,
    });
    console.log(newSupported);
    history.push("/comments");
  };

  return (
    <>
      <div>
        <h1>How well are you being supported?</h1>
        <h3>Supported?</h3>
      </div>
      <div>
        <form onSubmit={saveSupported}>
          <input
            type="number"
            placeholder="Supported?"
            value={newSupported.understanding}
            onChange={(event) => setSupported(event.target.value)}
          ></input>
          <button type="submit">Next</button>
        </form>
      </div>
    </>
  );
}

export default Supported;
