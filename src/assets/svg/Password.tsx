import type { SVGProps } from "react";
const SvgPassword = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 25 26" {...props}>
    <path
      stroke="#BABABA"
      strokeLinecap="round"
      d="M8.402 10.148v-3.05A4.1 4.1 0 0 1 12.5 3v0a4.1 4.1 0 0 1 4.098 4.098v1.257"
    />
    <rect
      width={18}
      height={11.852}
      x={3.5}
      y={10.648}
      stroke="#BABABA"
      strokeLinejoin="round"
      rx={1.5}
    />
  </svg>
);
export default SvgPassword;
