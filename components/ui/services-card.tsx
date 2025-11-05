"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react";
import { Button } from "@/components/ui/button";

type CarouselApi = UseEmblaCarouselType[1] | undefined;

export interface Service {
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
  gradient: string;
}

const ServiceCard = ({
  service,
  index,
}: {
  service: Service;
  index: number;
}) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      className={cn(
        "relative flex h-[450px] w-full flex-col justify-between overflow-hidden rounded-3xl p-8 bg-gradient-to-r",
        service.gradient
      )}
    >
      <div className="z-10 flex flex-col items-start text-left">
        <span className="mb-8 text-sm font-mono text-gray-600">
          ( {service.number} )
        </span>
        <service.icon className="mb-auto h-12 w-12 text-gray-900" />
      </div>

      <div className="z-10">
        <h3 className="mb-2 text-lg font-semibold uppercase tracking-wider text-gray-900">
          {service.title}
        </h3>
        <p className="text-sm text-gray-700">{service.description}</p>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent"></div>
    </motion.div>
  );
};

export const ServiceCarousel = ({ services }: { services: Service[] }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
  });
  const [canScrollNext, setCanScrollNext] = React.useState(false);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return;
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <div ref={ref} className="relative">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ staggerChildren: 0.1 }}
        >
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex -ml-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="min-w-0 shrink-0 grow-0 basis-full md:basis-1/2 lg:basis-1/3 pl-4"
                >
                  <div className="p-1">
                    <ServiceCard service={service} index={index} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {canScrollNext && (
          <Button
            variant="outline"
            size="icon"
            className="absolute h-10 w-10 rounded-full right-2 top-1/2 -translate-y-1/2 bg-white/80 border-0 hover:bg-white text-gray-900"
            onClick={scrollNext}
          >
            <ArrowRight className="h-4 w-4" />
            <span className="sr-only">Next slide</span>
          </Button>
        )}
      </div>
    </div>
  );
};
