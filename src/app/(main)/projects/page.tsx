"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Projects } from "@/content/projects";
export default function ProjectsList() {
  return (
    <>
      {Projects.map((project, index) => {
        return (
          <section key={index} className="my-24">
            <section className="container mx-auto p-4">
              <h1 className="font-bold text-xl text-primary">
                {project.sectionTitle}
              </h1>
            </section>
            {project.data.map((val, key) => {
              return <Comp key={key} val={val}></Comp>;
            })}
          </section>
        );
      })}
    </>
  );
}

function Comp(props: {
  val:
    | {
        title: string;
        hoverTitle: string;
        subTitle: string;
        notBlank?: boolean;
        link: string;
        image?: string;
        demo?: string;
      }
    | {
        title: string;
        hoverTitle: string;
        link: string;
        notBlank?: boolean;
        subTitle?: undefined;
        image?: string;
        demo?: string;
      };
}) {
  const compRef = useRef<HTMLAnchorElement>(null);
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(compRef.current, {
        yPercent: 100,
        opacity: 0,
        ease: "power4.out",
        duration: 1,
        scrollTrigger: {
          trigger: compRef.current,
          start: "top 100%",
          end: "bottom top",
          // scrub:true,
          // markers:true
        },
      });
    });
    return () => ctx.revert(); // cleanup!
  }, []);
  return (<a
  ref={compRef}
  href={props.val.link}
  target={props.val.notBlank ? "" : "_blank"}
  className="info-tile px-4 md:px-8 block overflow-hidden group border-b-2 border-text/10 cursor-pointer relative after:absolute after:w-full after:h-full after:top-0 after:left-0 after:bg-pink-700 after:origin-bottom hover:after:origin-top after:-z-10 after:duration-500 after:transition-transform after:scale-y-0 hover:after:scale-y-100"
>
  <div className="container relative mx-auto flex justify-between items-center">
    {/* Left section: Title & Hover Title */}
    <div className="h-full flex-1 relative overflow-hidden">
      <h1 className="text-xl md:text-5xl lg:text-7xl font-bold tracking-tighter py-12 transition-transform duration-500 group-hover:-translate-y-full">
        {props.val.title}
      </h1>
      <div className="absolute inset-0 flex flex-col justify-center translate-y-full transition-transform duration-500 group-hover:translate-y-0">
        <h1 className="text-xl md:text-5xl lg:text-7xl font-bold tracking-tighter">
          {props.val.title}
        </h1>
        <h2 className="text-lg md:text-2xl lg:text-3xl font-medium opacity-70">
          {props.val.hoverTitle}
        </h2>
      </div>
    </div>

    {/* Right: Image and Subtitle */}
    <div className="flex items-center gap-4">
      {/* Image (no inner <a>) */}
      {props.val.image && (
        <div
          onClick={(e) => {
            e.stopPropagation();
            window.open(props.val.demo, "_blank");
          }}
          className="w-48 h-24 md:h-32 lg:h-28 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500 cursor-pointer"
        >
          <img
            src={props.val.image}
            alt={props.val.title}
            className="object-cover h-full w-full rounded"
          />
        </div>
      )}
      {/* Subtitle */}
      <p className="text-text/70 opacity-0 group-hover:opacity-70 transition-opacity duration-500 text-xs md:text-base max-w-xs lg:max-w-md">
        {props.val.subTitle}
      </p>
    </div>
  </div>
</a>

  );
}
