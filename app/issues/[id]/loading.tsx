import { Card, Heading, Text } from "@radix-ui/themes";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const loading = () => {
  return (
    <div className="max-w-xl">
      <Skeleton />
      <div className="flex space-x-4 my-4">
        <Skeleton width="5rem" />
        <Text>
          <Skeleton width="5rem" />
        </Text>
      </div>
      <Card className="prose">
        <Skeleton count={4} />
      </Card>
    </div>
  );
};

export default loading;
