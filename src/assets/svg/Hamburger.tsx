import type { SVGProps } from "react";
const SvgHamburger = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 16" {...props}>
    <path
      fill="#2196F3"
      d="M0 .96A.94.94 0 0 1 .293.281C.48.101.735 0 1 0h20c.265 0 .52.101.707.281.188.18.293.424.293.679a.94.94 0 0 1-.293.679c-.187.18-.442.281-.707.281H1c-.265 0-.52-.101-.707-.281A.94.94 0 0 1 0 .96M0 8a.94.94 0 0 1 .293-.679C.48 7.141.735 7.04 1 7.04h20c.265 0 .52.101.707.281.188.18.293.424.293.679a.94.94 0 0 1-.293.679c-.187.18-.442.281-.707.281H1c-.265 0-.52-.101-.707-.281A.94.94 0 0 1 0 8m0 7.04a.94.94 0 0 1 .293-.679c.187-.18.442-.281.707-.281h20c.265 0 .52.101.707.281.188.18.293.424.293.679a.94.94 0 0 1-.293.679c-.187.18-.442.281-.707.281H1c-.265 0-.52-.101-.707-.281A.94.94 0 0 1 0 15.04"
    />
  </svg>
);
export default SvgHamburger;
