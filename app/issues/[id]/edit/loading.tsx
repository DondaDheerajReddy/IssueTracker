import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const loading = () => {
  return (
    <div className="max-w-xl space-y-4">
      <Skeleton height="2rem" />
      <Skeleton height="21rem" />
    </div>
  );
};

export default loading;
