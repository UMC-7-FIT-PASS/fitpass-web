import type { SVGProps } from "react";
const SvgNaverPay = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    fill="none"
    viewBox="0 0 56 21"
    {...props}
  >
    <path fill="url(#NaverPay_svg__a)" d="M0 0h56v21H0z" />
    <defs>
      <pattern id="NaverPay_svg__a" width={1} height={1} patternContentUnits="objectBoundingBox">
        <use xlinkHref="#NaverPay_svg__b" transform="matrix(.00679 0 0 .01822 -.673 -.737)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,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"
        id="NaverPay_svg__b"
        width={334}
        height={130}
      />
    </defs>
  </svg>
);
export default SvgNaverPay;
