import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Slider from "../components/slider";
import Stack from "@mui/material/Stack";
import Switch from "../components/switch";
import { styled } from "@mui/system";
import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import variables from "../styles/variables.module.css";

const StyledButton = styled(Button)({
  height: "2.85rem",
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
  padding: "1rem 3rem 1.35rem",

  "@media(max-width: 600px)": {
    flexDirection: "column",
    padding: "1rem 3rem 2.5rem",
    gap: "1.5rem",
  },
});

const StackUp = styled(Stack)({
  padding: "3.5rem 3rem 2.85rem",

  "@media(max-width: 600px)": {
    padding: "2.5rem 1.5rem 2.5rem",
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
  const [values, setValues] = useState({
    slider: 10,
    pageviews: "10K",
    price: 8.0,
    billing: false,
    size: 1360,
  });

  // Handle change function for slide component
  const handleChange = event => {
    const { value: sliderValue } = event.target;

    if (typeof sliderValue === "number") {
      if (sliderValue < 12) {
        setValues(prevState => ({
          ...prevState,
          pageviews: "10K",
          price: 8,
        }));
      } else if (sliderValue < 16) {
        setValues(prevState => ({
          ...prevState,
          pageviews: "50K",
          price: 12,
        }));
      } else if (sliderValue < 24) {
        setValues(prevState => ({
          ...prevState,
          pageviews: "100K",
          price: 16,
        }));
      } else if (sliderValue < 36) {
        setValues(prevState => ({
          ...prevState,
          pageviews: "500K",
          price: 24,
        }));
      } else {
        setValues(prevState => ({
          ...prevState,
          pageviews: "1M",
          price: 36,
        }));
      }
      setValues(prevState => ({
        ...prevState,
        slider: sliderValue,
      }));
    }
  };

  // Switch change function for toggle switch component
  const handleSwitchChange = event => {
    const { checked } = event.target;

    setValues(prevState => ({
      ...prevState,
      billing: checked,
    }));
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      setValues(prevState => ({
        ...prevState,
        size: window.innerWidth,
      }));
    });
  }, []);

  return (
    <div className={styles.card}>
      <StackUp>
        <div className={styles.price}>
          <p className={styles.priceC1}>{values.pageviews} PAGEVIEWS</p>
          <div className={styles.priceSection}>
            <h2 className={styles.priceC2}>
              $
              {values.billing
                ? parseFloat(0.75 * values.price).toFixed(2)
                : parseFloat(values.price).toFixed(2)}
            </h2>
            <p>/month</p>
          </div>
          <Slider onChange={handleChange} checked={values.slider} />
        </div>
        <div className={styles.discount}>
          <p>Monthly Billing</p>
          <Switch checked={values.billing} onChange={handleSwitchChange} />
          <p>Yearly Billing</p>
          {values.size <= 600 ? (
            <p className={styles.badge}>-25%</p>
          ) : (
            <p className={styles.badge}>25% discount</p>
          )}
        </div>
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
