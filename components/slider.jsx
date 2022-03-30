import Slider from "@mui/material/Slider";
import { Box, styled } from "@mui/system";
import styles from "../styles/Home.module.css";
import variables from "../styles/variables.module.css";

const StyledSlider = styled(Slider)({
  color: variables.strongCyan,
  height: "9px",
  boxShadow: "none",

  "& .MuiSlider-rail": {
    backgroundColor: variables.lightGrayishBlue,
    opacity: 1,
  },

  "& .MuiSlider-thumb": {
    height: "35px",
    width: "35px",
    boxShadow: "rgba(21, 213, 194, 0.75) 1px 10px 25px 1px",

    "&:active": {
      backgroundColor: variables.greenActive,
      boxShadow: "rgba(21, 213, 194, 0.85) 1px 10px 25px 1px",
    },

    "&::after": {
      position: "absolute",
      content: "''",
      borderRadius: "50%",
      width: "42px",
      height: "42px",
      top: "50%",
      left: "49.5%",
      background: "url('../icon-slider.svg') no-repeat",
      backgroundPosition: "center",
    },

    "&:focusVisible": {
      boxShadow: "rgba(21, 213, 194, 0.75) 1px 10px 25px 1px",
    },

    "&:hover": {
      boxShadow: "rgba(21, 213, 194, 0.75) 1px 10px 25px 1px",
    },
  },

  "& .MuiSlider-track": {
    opacity: 0.38,
  },
});

// Slider component
export default function UnstyledSlider({ onChange, value }) {
  return (
    <Box className={styles.priceC3} sx={{ width: "100%" }}>
      <StyledSlider value={value} min={8} max={36} onChange={onChange} />
    </Box>
  );
}
