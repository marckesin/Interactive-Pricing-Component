// import SwitchUnstyled from "@mui/base/SwitchUnstyled";
import Switch from "@mui/material/Switch";
import { styled } from "@mui/system";
import variables from "../styles/variables.module.css";

const label = { inputProps: { "aria-label": "Switch demo" } };

const StyledSwitch = styled(Switch)({
  width: 50,
  height: 26,
  padding: 0,
  display: "flex",

  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(24px)",
    },
  },

  "&:hover .MuiSwitch-track": {
    backgroundColor: variables.softCyan,
  },

  "& .MuiSwitch-switchBase": {
    padding: 3,
    top: 1,
    left: 1,
    "&.Mui-checked": {
      transform: "translateX(24px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: variables.softCyan,
      },
    },
    "&.MuiSwitch-switchBase:hover": {
      backgroundColor: "transparent",
    },
  },

  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 18,
    height: 18,
    borderRadius: 12,
  },

  "& .MuiSwitch-track": {
    borderRadius: 16,
    opacity: 1,
    backgroundColor: variables.lightGrayishBlue1,
    boxSizing: "border-box",
  },
});

// Switch component
export default function NewSwitch({ onChange, checked }) {
  return <StyledSwitch {...label} onChange={onChange} checked={checked} />;
}
