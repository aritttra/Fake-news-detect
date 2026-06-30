export default function PageWrapper({
  children,
}) {

  return (

    <main
      className="
        min-h-screen

        bg-[#05070A]

        text-white

        overflow-x-hidden
      "
    >

      {children}

    </main>
  );
}