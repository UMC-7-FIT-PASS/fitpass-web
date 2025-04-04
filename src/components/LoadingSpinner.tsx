import Lottie from "react-lottie-player";
import loadingAnimation from "../assets/lottie/loading.json";

const LoadingSpinner = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <Lottie loop animationData={loadingAnimation} play className="w-28 h-28" />
    </div>
  );
};

export { LoadingSpinner };
