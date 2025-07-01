import React from "react";

const CircularProgress = ({ percentage = 85, size = 160 }) => {
  const strokeWidth = 17;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-lg lg:text-[27px] font-bold mb-7">
        النتيجة النهائية
      </h1>
      <svg width={size} height={size}>
        {/* الخلفية */}
        <circle
          stroke="#E5E7EB"
          fill="transparent"
          strokeWidth={strokeWidth}
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />

        {/* الدائرة المتقدمة مع التدوير فقط لها */}
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
            transform: `rotate(-90deg)`,
            transformOrigin: "50% 50%",
          }}
        />

        {/* النسبة */}
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="fill-black font-bold lg:text-2xl"
        >
          {percentage}%
        </text>
      </svg>
    </div>
  );
};

export default CircularProgress;
