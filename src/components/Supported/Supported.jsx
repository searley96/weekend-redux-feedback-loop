import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function Supported() {
  const dispatch = useDispatch();
  const history = useHistory();

  // State
  const [newSupported, setSupported] = useState("");

  // Handler for collecting data and pushing to /understanding
  const saveSupported = (event) => {
    event.preventDefault();
    if (newSupported >= 1 && newSupported <= 5) {
      dispatch({
        type: "SAVE_SUPPORTED",
        payload: { newSupported },
      });
      console.log(newSupported);
      history.push("/comments");
    } else {
      alert("Please enter a number between 1 and 5!");
    }
  };

  return (
    <>
      <Box textAlign="center">
        <Typography variant="h4">How well are you being supported?</Typography>
        <Typography variant="subtitle1" color="primary">
          On a scale of 1 to 5 (1 being not at all, 5 being extremely), how supported do you feel?
        </Typography>
      </Box>

      <Box textAlign="center">
        <form onSubmit={saveSupported}>
          <Box  justifyContent="center" alignItems="center" mt={2}>
            <TextField
              placeholder="Supported?"
              value={newSupported}
              onChange={(event) => setSupported(event.target.value)}
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

export default Supported;


