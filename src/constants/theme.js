import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

// USE IT WHEN NEED TO CHANGE THEME
export const dark = {
  
  };
  // USE IT WHEN NEED TO CHANGE THEME
  export const standard = {
    theme: "standard",
    base1: "#F5F5F7",
    base2: "#f5f5ff",
    base3: "#ebebff",
    base4: "#e0e0ff",
    blue2: "#addbff",
    blue3: "#7cc5ff",
    blue4: "#2d8ad3",
    primary: "#040D12",
    buttonMask: "rgba(255,255,255,.2)",
    dot: "#f5f5ff",
    indigo4: "#bec2e6",
    mask: "rgba(255,255,255,.8)",
    red2: "#e4606a",
    red3: "#fee5e7",
    shadow: "#e0e0ff",
    darkShadow: "#aaaac7",
    text: "#17001c",
    text2: "#392f3a",
    text3: "#514953",
    white: "#ffffff",
    pink1: "#fe46b0",
    pink2: "#fee7f5",
    pink3: "#ffa7dd",
    purple: "#66017b",
    purple2: "#9718b1",
    purpleLight: "#66017b",
    green: "#56b801",
    dark: false,
    colors: {
      primary: "#040D12",
      background: "#F6F4EB",
      card: "#f5f5ff",
      text: "#66017b",
      border: "#e0e0ff",
      notification: "yellow",
      activeTab: "#9718b1",
      inactiveTab: "#685d6b",
    },
  };


export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 30,
    padding: 10,
    padding2: 12,

    // font sizes
    largeTitle: 50,
    h1: 30,
    h2: 22,
    h3: 20,
    h4: 18,
    body1: 30,
    body2: 20,
    body3: 16,
    body4: 14,
    body5: 12,

    // app dimensions
    width,
    height
};

export const FONTS = {
    largeTitle: { fontFamily: "Roboto-regular", fontSize: SIZES.largeTitle, lineHeight: 55 },
    h1: { fontFamily: "Roboto-Black", fontSize: SIZES.h1, lineHeight: 36 },
    h2: { fontFamily: "Roboto-Bold", fontSize: SIZES.h2, lineHeight: 30 },
    h3: { fontFamily: "Roboto-Bold", fontSize: SIZES.h3, lineHeight: 22 },
    h4: { fontFamily: "Roboto-Bold", fontSize: SIZES.h4, lineHeight: 22 },
    body1: { fontFamily: "Roboto-Regular", fontSize: SIZES.body1, lineHeight: 36 },
    body2: { fontFamily: "Roboto-Regular", fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontFamily: "Roboto-Regular", fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontFamily: "Roboto-Regular", fontSize: SIZES.body4, lineHeight: 22 },
    body5: { fontFamily: "Roboto-Regular", fontSize: SIZES.body5, lineHeight: 22 },
};

const appTheme = { standard, SIZES, FONTS };

export default appTheme;