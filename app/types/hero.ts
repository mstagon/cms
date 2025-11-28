export interface BootLine {
  content: string;
  delay: number;
  className?: string;
  highlight?: {
    text: string;
    className?: string;
  };
}

