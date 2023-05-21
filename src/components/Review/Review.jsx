import { useSelector } from "react-redux";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function Review() {
  //access store to retrieve individual input info
  const addFeelings = useSelector((store) => store.addFeelings);

  const addUnderstanding = useSelector((store) => store.addUnderstanding);

  const addSupported = useSelector((store) => store.addSupported);

  const addComments = useSelector((store) => store.addComments);

  //enables push to next page
  const history = useHistory();

  //create object for all inputs
  let allInputs = {
    feeling: addFeelings,
    understanding: addUnderstanding,
    support: addSupported,
    comments: addComments,
  };

  //post data to database
  //push to success portion of survey
  function handleSubmit() {
    axios
      .post("/api/input", allInputs)
      .then((response) => {})
      .catch((error) => {
        console.log(error);
        alert("Could not get inputs");
      });
    history.push("/success");
  }

  return (
    <>
      <Typography color="primary" variant="h3">Review Your Feedback</Typography>
      <div>
        <Typography variant="h6">
          {" "}
          Feelings: {addFeelings.toString()}{" "}
        </Typography>
        <Typography variant="h6">
          {" "}
          Support: {addSupported.toString()}{" "}
        </Typography>
        <Typography variant="h6">
          {" "}
          Comments: {addComments.toString()}{" "}
        </Typography>

        <Typography variant="h6">
          {" "}
          Understanding: {addUnderstanding.toString()}{" "}
        </Typography>

        <Button
          onClick={handleSubmit}
          variant="contained"
          type="submit"
          sx={{ mt: 5 }}
        >
          Submit
        </Button>
      </div>
    </>
  );
}

export default Review;
