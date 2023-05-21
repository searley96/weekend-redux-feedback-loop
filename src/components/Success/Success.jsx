import { useHistory } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function Success() {
  //enable push to next page
  const history = useHistory();

  //push to Comments portion of survey
  const resetSurvey = () => {
    history.push("/");
  };

  return (
    <>
      <div>
        <Typography variant="h4">Thank You For Your Feedback!</Typography>
        <Button variant="contained" sx={{ mt: 2}} onClick={resetSurvey}>Leave New Feedback</Button>
      </div>
    </>
  );
}

export default Success;
