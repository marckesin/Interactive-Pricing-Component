import Slider from "@mui/material/Slider";
import { Box, styled } from "@mui/system";
import variables from "../styles/variables.module.css";

const StyledSlider = styled(Slider)({
  color: variables.green,
  height: "9px",

  "& .MuiSlider-rail": {
    backgroundColor: variables.lightGrayishBlue,
    opacity: 1,
  },

  "& .MuiSlider-thumb": {
    height: "35px",
    width: "35px",
    boxShadow: "rgba(21, 213, 194, 0.5) 1px 10px 25px 1px",

    "&:active": {
      backgroundColor: variables.greenActive,
      boxShadow: "rgba(21, 213, 194, 0.5) 1px 10px 25px 1px",
    },

    "&:focusVisible": {
      boxShadow: "rgba(21, 213, 194, 0.5) 1px 10px 25px 1px",
    },

    "&:hover": {
      boxShadow: "rgba(21, 213, 194, 0.5) 1px 10px 25px 1px",
    },
  },

  "& .MuiSlider-track": {
    opacity: 0.38,
  },
});

// Slider component
export default function UnstyledSlider() {
  return (
    <Box sx={{ width: "100%" }}>
      <StyledSlider defaultValue={0} />
    </Box>
  );
}
