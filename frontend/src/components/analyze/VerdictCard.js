export default function VerdictCard({
  verdict,
  confidence,
}) {

  return (

    <div
      className="
        bg-zinc-900
        border
        border-zinc-700
        rounded-2xl
        p-6
      "
    >

      <h2 className="text-3xl font-bold">

        {verdict}

      </h2>

      <p className="mt-2 text-zinc-400">

        Confidence: {confidence}%

      </p>

    </div>
  );
}