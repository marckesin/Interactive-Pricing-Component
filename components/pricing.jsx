import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/system";
import { useState } from "react";
import Slider from "../components/slider";
import styles from "../styles/Home.module.css";
import variables from "../styles/variables.module.css";

const StyledButton = styled(Button)({
  height: "40%",
  width: "37%",
  textTransform: "none",
  backgroundColor: variables.darkDesaturatedBlue,
  fontWeight: 500,
  margin: "auto 0 auto auto !important",
  borderRadius: "25px",

  "&:hover": {
    backgroundColor: variables.darkDesaturatedBlue,
    color: variables.lightGrayishBlue1,
  },

  "@media(max-width: 600px)": {
    margin: "auto !important",
    width: "75%",
  },
});

const StackBottom = styled(Stack)({
  borderTop: `3px solid ${variables.lightGrayishBlue}`,
  padding: "1rem 3rem 2.5rem",

  "@media(max-width: 600px)": {
    flexDirection: "column",
  },
});

const StackUp = styled(Stack)({
  padding: "1rem 3rem 2.5rem",
});

const StyledListItemText = styled(ListItemText)({
  paddingLeft: "16px",
  margin: 0,
  color: variables.grayishBlue,

  "@media(max-width: 600px)": {
    flex: "0 0 auto",
  },
});

const StyledListItem = styled(ListItem)({
  padding: "4px 0",

  "@media(max-width: 600px)": {
    justifyContent: "center",
  },
});

// Card pricing component
export default function Pricing() {
  const list = ["Unlimited websites", " 100% data ownership", "Email reports"];
  const [value, setValue] = useState(8);
  const [pageviews, setPageviews] = useState("10K");

  const handleChange = event => {
    const value = event.target.value;
    if (typeof value === "number") {
      if (value < 12) {
        setPageviews("10K");
      } else if (value < 16) {
        setPageviews("50K");
      } else if (value < 24) {
        setPageviews("100K");
      } else if (value < 36) {
        setPageviews("500K");
      } else {
        setPageviews("1M");
      }
      setValue(value);
    }
  };

  return (
    <div className={styles.card}>
      <StackUp>
        <h3>{pageviews} PAGEVIEWS</h3>
        $ /month Monthly Billing Yearly Billing 25% discount
        <Slider onChange={handleChange} value={value} />
      </StackUp>
      <StackBottom direction="row" spacing={2}>
        <List>
          {list.map((item, index) => (
            <StyledListItem key={index}>
              <svg xmlns="http://www.w3.org/2000/svg" width="9" height="8">
                <path
                  fill="none"
                  stroke="#10D8C4"
                  strokeWidth="2"
                  d="M1 4.134l1.907 1.908L7.949 1"
                />
              </svg>
              <StyledListItemText inset primary={item} />
            </StyledListItem>
          ))}
        </List>
        <StyledButton variant="contained">Start my trial</StyledButton>
      </StackBottom>
    </div>
  );
}
