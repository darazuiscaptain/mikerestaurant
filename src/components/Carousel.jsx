import { Carousel } from "@material-tailwind/react";
 
export function CarouselDefault() {

    const imageSrc = [
        "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
        "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
        "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
    ]
  return (
    <Carousel className="mt-16 w-auto h-[430px]" transition={{ duration: 1 }}>
      <img
        src={`${imageSrc[0]}`}
        alt="image 1"
        className="h-full w-full object-cover opacity-80"
      />
      <img
        src={`${imageSrc[1]}`}
        alt="image 2"
        className="h-full w-full object-cover opacity-80"
      />
      <img
        src={`${imageSrc[2]}`}
        alt="image 3"
        className="h-full w-full object-cover opacity-80"
      />
    </Carousel>
  );
}
