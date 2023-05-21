import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function Feeling() {
  const dispatch = useDispatch();

  const history = useHistory();

  //state
  const [newFeeling, setFeeling] = useState("");

  //handler for collecting data and pushing to /understanding
  //dispatch saved input within
  const saveFeeling = (event) => {
    event.preventDefault();
    if (newFeeling >= 1 && newFeeling <= 5)  {
      dispatch({
        type: "SAVE_FEELING",
        payload: newFeeling ,
      });
      console.log(newFeeling);
      history.push("/understanding");
    } else {
      alert("Please enter a number between 1 and 5!");
    }
  };
  return (
    <>
      <Box textAlign="center">
        <Typography variant="h4">How are you feeling?</Typography>
        <Typography variant="subtitle1" color="primary">
          On a scale of 1 to 5 (1 being horrible, 5 being incredible), how are you feeling?
        </Typography>
      </Box>

      <Box textAlign="center">
        <form onSubmit={saveFeeling}>
          <Box  justifyContent="center" alignItems="center" mt={2}>
            <TextField
              placeholder="Feeling?"
              value={newFeeling}
              onChange={(event) => setFeeling(event.target.value)}
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

export default Feeling;
