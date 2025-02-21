export interface Logo {
  url: string;
  size: number;
}

export interface PlayButton {
  url: string;
  text?: string;
  size: "small" | "base" | "large";
}
