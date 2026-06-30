export default function ScanLoader() {

  const steps = [
    "Extracting claims...",
    "Searching live sources...",
    "Ranking evidence...",
    "Generating intelligence report...",
  ];


  return (

    <div className="
      mt-10
      bg-zinc-900
      border
      border-zinc-700
      rounded-2xl
      p-6
    ">

      <h3 className="
        text-2xl
        font-bold
        mb-6
      ">

        AI Investigation In Progress

      </h3>

      <div className="space-y-4">

        {steps.map((step, index) => (

          <div
            key={index}
            className="
              flex
              items-center
              gap-3
              animate-pulse
            "
          >

            <div className="
              w-2
              h-2
              rounded-full
              bg-white
            " />

            <p className="text-zinc-300">
              {step}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}