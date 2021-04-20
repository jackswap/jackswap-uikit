import { Colors } from "./types";

export const baseColors = {
  failure: "#ff0000",
  primary: "#ff1d25",
  primaryBright: "#ff8e91",
  primaryDark: "#cc1a20",
  secondary: "#3c3231",
  success: "#31d081",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#faf9f9",
  backgroundDisabled: "#ebe9e9",
  contrast: "#261313",
  invertedContrast: "#FFFFFF",
  input: "#f4eaea",
  inputSecondary: "#eccaca",
  tertiary: "#f5efef",
  text: "#292222",
  textDisabled: "#c4bdbd",
  textSubtle: "#5f3e2f",
  borderColor: "#ebe9e9",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #855640 0%, #3c3231 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#180c0c",
  backgroundDisabled: "#423737",
  contrast: "#FFFFFF",
  invertedContrast: "#261313",
  input: "#5a3f3f",
  inputSecondary: "#8d5757",
  tertiary: "#473535",
  text: "#f5f0f0",
  textDisabled: "#716161",
  textSubtle: "#c38d8d",
  borderColor: "#634b4b",
  card: "#2c2626",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #855640 0%, #3c3231 100%)",
  },
};
