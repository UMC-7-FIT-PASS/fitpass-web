import type { SVGProps } from "react";
const SvgBorderStar = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 16" {...props}>
    <path
      stroke="#2196F3"
      d="m8.5 1.618 1.433 4.41.112.345h5L11.294 9.1 11 9.312l.112.346 1.433 4.41-3.751-2.726-.294-.213-.294.213-3.751 2.726 1.433-4.41L6 9.312 5.706 9.1 1.955 6.373h5l.112-.345z"
    />
  </svg>
);
export default SvgBorderStar;
