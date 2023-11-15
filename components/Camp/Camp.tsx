import { CampSite } from "./CampSite";
import Image from "next/image";


export const Camp = () => {
  return (
    <section className="  2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20 ">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <CampSite
          backgroundImage="bg-bg-img-1"
          title="Campamento Putuk Truno"
          subtitle="Prigen, Pasuruan"
          peopleJoined="50+ Unidos"
        />
        <CampSite
          backgroundImage="bg-bg-img-2"
          title="Campamento con vista a la montaña"
          subtitle="Somewhere in the Wilderness"
          peopleJoined="50+ Unidos"
        />
      </div>

      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
            <strong>Te sentis perdido</strong> ¿Y sin saber el camino?
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
            A partir de la ansiedad de los escaladores al visitar un nuevo Lugar
            de escalada, la posibilidad de perderse es muy grande. Es por eso
            que estamos aquí para aquellos de ustedes que quieran iniciar una
            aventura
          </p>
          <Image
            src="/quote.svg"
            alt="camp-2"
            width={186}
            height={219}
            className="camp-quote"
          />
        </div>
      </div>
    </section>
  );
};

