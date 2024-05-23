import CarouselControlsInside from "./Carousel";
import Skeleton from "../pages/Organizations/Skeleton";

const CardSkeletonCarousel = () => {
  return (
    <CarouselControlsInside carousel={"organizations"}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Skeleton key={i} />
      ))}
    </CarouselControlsInside>
  );
};

export default CardSkeletonCarousel;
