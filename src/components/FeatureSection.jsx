import { features } from "./common/Helper";
export default function FeatureSection() {
  return (
    <section className="w-full py-12">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        {features.map((f) => (
          <div key={f.title} className="flex flex-col gap-3">
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-lg ${f.bg}`}
            >
              {f.icon}
            </div>
            <h3 className="font-medium text-[16px] md:text-[18px] lg:text-[20px] color-navlink leading-[160%] tracking-[-0.4px]">
              {f.title}
            </h3>
            <p className="font-sm md:font-md color-navlink leading-[170%]">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
