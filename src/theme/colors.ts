import { Colors } from "./types";

export const baseColors = {
  failure: "#bb2222",
  primary: "#4746cd",
  primaryBright: "#FFFFFF",
  primaryDark: "#f6612e",
  secondary: "#f61f2e",
  success: "#50BB77",
  warning: "#FFBB12",
};

export const brandColors = {
  binance: "#e2394f",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#f61f2e",
  backgroundDisabled: "#f6612e",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#f61f2e",
  tertiary: "#4746cd",
  text: "#4746cd",
  textDisabled: "#BDC2C4",
  textSubtle: "#FFFFFF",
  borderColor: "#4746cd",
  card: "#FFFFFF",
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
