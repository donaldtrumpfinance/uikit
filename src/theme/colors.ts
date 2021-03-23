import { Colors } from "./types";

export const baseColors = {
  failure: "#bb2222",
  primary: "#141836",
  primaryBright: "#FFFFFF",
  primaryDark: "#f6612e",
  secondary: "#c20400",
  success: "#50BB77",
  warning: "#FFAA12",
};

export const brandColors = {
  binance: "#e2394f",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#3a406b",
  backgroundDisabled: "#fd8c17",
  contrast: "#191326",
  invertedContrast: "#00000",
  input: "#FFFFFF",
  tertiary: "#c20400",
  text: "#fd8c17",
  textDisabled: "#BDC2C4",
  textSubtle: "#FFFFFF",
  borderColor: "#141836",
  card: "#141836",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#ffb23d",
  background: "#343135",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#EAE2FC",
  textDisabled: "#666171",
  textSubtle: "#c9c4d4",
  borderColor: "#524B63",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
