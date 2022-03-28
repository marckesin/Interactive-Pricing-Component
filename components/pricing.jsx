import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/system";
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

const StyledStack = styled(Stack)({
  borderTop: `3px solid ${variables.lightGrayishBlue}`,
  padding: "1rem 3rem 2.5rem",

  "@media(max-width: 600px)": {
    flexDirection: "column",
  },
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
  return (
    <div className={styles.card}>
      Pageviews $ /month Monthly Billing Yearly Billing 25% discount
      <StyledStack direction="row" spacing={2}>
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
      </StyledStack>
    </div>
  );
}
