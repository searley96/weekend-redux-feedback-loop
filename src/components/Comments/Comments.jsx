import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";


function Comments() {
  const dispatch = useDispatch();

  const history = useHistory();

  //state
  const [newComments, setComments] = useState("");

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
      <Box textAlign="center">
        <Typography variant="h4">Any comments you want to leave?</Typography>
      </Box>

      <Box textAlign="center">
        <form onSubmit={saveComments}>
          <Box  justifyContent="center" alignItems="center" mt={2}>
            <TextField
              placeholder="Comments?"
              value={newComments}
              onChange={(event) => setComments(event.target.value)}
              sx={{ marginRight: 1 }}
            />
            <Button variant="contained" type="submit" sx={{ mt: 10}}>
              Next
            </Button>
          </Box>
        </form>
      </Box>
    </>
  );
}

export default Comments;
