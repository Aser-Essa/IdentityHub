import React from "react";

export default function BlueArrow() {
  return (
    <>
      <svg
        width="32"
        height="307"
        viewBox="0 0 32 307"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="arrow-image">
          <g id="arrow-circle">
            <circle id="Ellipse 43" cx="16" cy="16" r="16" fill="#1E21E9" />
            <g id="arrow-down-double">
              <path
                id="Vector"
                d="M20.8 16.3999C20.8 16.3999 17.2649 21.1999 16 21.1999C14.7351 21.1999 11.2 16.3999 11.2 16.3999"
                stroke="white"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                id="Vector_2"
                d="M20.8 10.8C20.8 10.8 17.2649 15.5999 16 15.5999C14.7351 15.5999 11.2 10.7999 11.2 10.7999"
                stroke="white"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </g>
          <g id="arrow-line">
            <g id="Group 1000005945">
              <g id="Line 2" filter="url(#filter0_f_4_435)">
                <line
                  x1="16.96"
                  y1="31.2"
                  x2="16.96"
                  y2="300"
                  stroke="#1E21E9"
                  strokeWidth="1.92"
                />
              </g>
              <g id="Line 3" filter="url(#filter1_i_4_435)">
                <line
                  x1="16.96"
                  y1="31.9999"
                  x2="16.96"
                  y2="300.8"
                  stroke="url(#paint0_linear_4_435)"
                  strokeWidth="1.92"
                />
              </g>
            </g>
          </g>
        </g>
        <defs>
          <filter
            id="filter0_f_4_435"
            x="9.6"
            y="24.8"
            width="14.72"
            height="281.6"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="3.2"
              result="effect1_foregroundBlur_4_435"
            />
          </filter>
          <filter
            id="filter1_i_4_435"
            x="16"
            y="31.9999"
            width="1.91998"
            height="272"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="3.2" />
            <feGaussianBlur stdDeviation="4" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_4_435"
            />
          </filter>
          <linearGradient
            id="paint0_linear_4_435"
            x1="17.5077"
            y1="31.9999"
            x2="16.9733"
            y2="271.725"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.151484" stopColor="#3639FF" />
            <stop offset="1" stopColor="#6C55FF" stopOpacity="0" />
            <stop offset="1" stopColor="#6365FF" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
}
