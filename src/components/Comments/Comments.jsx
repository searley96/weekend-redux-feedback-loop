import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import "./Comments.css";

function Comments() {
  const dispatch = useDispatch();

  const history = useHistory();

  //state
  const [newComments, setComments] = useState({ comments: "" });

  //handler for collecting data and pushing to /understanding
  //dispatch saved input within
  const saveComments = () => {
    event.preventDefault();
    dispatch({
      type: "SAVE_COMMENTS",
      payload: newComments,
    });
    console.log(newComments);
    history.push("/review");
  };

  return (
    <>
      <div>
        <h1>Any comments you want to leave?</h1>

        <form id="comments" onSubmit={saveComments}>
          <h3>Comments?</h3>
          <input
            type="text"
            placeholder="Comments"
            value={newComments.comments}
            onChange={(event) => setComments(event.target.value)}
          ></input>
          <button type="submit">Next</button>
        </form>
      </div>
    </>
  );
}

export default Comments;
