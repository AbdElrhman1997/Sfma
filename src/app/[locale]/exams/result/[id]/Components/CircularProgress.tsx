import { useTranslations } from "next-intl";
import React from "react";

const CircularProgress = ({ percentage = 85 }) => {
  const [size, setSize] = React.useState(120);
  const [strokeWidth, setStrokeWidth] = React.useState(12);
  const t = useTranslations("exam");
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        // lg screens and above
        setSize(160);
        setStrokeWidth(17);
      } else {
        // mobile/tablet
        setSize(120);
        setStrokeWidth(12);
      }
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center justify-start h-full">
      <h1 className="text-lg lg:text-[27px] font-bold lg:mb-7 mb-4">
        {t("final_result")}
      </h1>
      <svg width={size} height={size}>
        {/* Background Circle */}
        <circle
          stroke="#E5E7EB"
          fill="transparent"
          strokeWidth={strokeWidth}
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        {/* Progress Circle */}
        <circle
          stroke="#61B8A0"
          fill="transparent"
          strokeWidth={strokeWidth}
          r={radius}
          cx={size / 2}
          cy={size / 2}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{
            transition: "stroke-dashoffset 0.5s ease",
            transform: "rotate(-90deg)",
            transformOrigin: "50% 50%",
          }}
        />
        {/* Percentage Text */}
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="fill-black font-bold lg:text-2xl text-base"
        >
          {percentage}%
        </text>
      </svg>
    </div>
  );
};

export default CircularProgress;
