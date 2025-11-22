// ProgressBar 아톰은 CSS 변수 기반으로 진행도 애니메이션을 제공하는 바를 렌더링합니다.
"use client";

import type { CSSProperties } from "react";
import styles from "./ProgressBar.module.css";

interface ProgressBarProps {
  progress: number; // 0-100
  color: string;
  delay?: number;
  duration?: number;
}

export default function ProgressBar({
  progress,
  color,
  delay = 0.35,
  duration = 1,
}: ProgressBarProps) {
  const style = {
    "--progress": `${progress}%`,
    "--progress-delay": `${delay}s`,
    "--progress-duration": `${duration}s`,
    "--bar-color": color,
  } as CSSProperties;

  return (
    <div className={styles.wrapper} style={style}>
      <span className={styles.fill} style={{ background: color }} />
    </div>
  );
}
