import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function Understanding() {
  const dispatch = useDispatch();

  const history = useHistory();

  //state
  const [newUnderstanding, setUnderstanding] = useState("");

  //handler for collecting data and pushing to /understanding
  //dispatch saved input within
  const saveUnderstanding = () => {
    event.preventDefault();
    if (newUnderstanding >= 1 && newUnderstanding <= 5) {
      dispatch({
        type: "SAVE_UNDERSTANDING",
        payload: newUnderstanding,
      });
      console.log(newUnderstanding);
      history.push("/supported");
    } else {
      alert("Please enter a number between 1 and 5!");
    }
  };

  return (
    <>
      <Box textAlign="center">
        <Typography variant="h4">How well are you understanding the material?</Typography>
        <Typography variant="subtitle1" color="primary">
          On a scale of 1 to 5 (1 being not at all, 5 being extremely well), how well are you understanding the material?
        </Typography>
      </Box>

      <Box textAlign="center">
        <form onSubmit={saveUnderstanding}>
          <Box  justifyContent="center" alignItems="center" mt={2}>
            <TextField
              placeholder="Understanding?"
              value={newUnderstanding}
              onChange={(event) => setUnderstanding(event.target.value)}
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

export default Understanding;
