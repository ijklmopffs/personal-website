export async function getStaticProps() {
  return {
    props: {
      pageId: "essays",
      metadata: {
        title: "Essays | Nuel Elekwachi",
        description: "Write the essays by Nuel Elekwachi",
        openGraph: {
          image: "https://example.com/image.jpg",
          url: "https://example.com",
        },
      },
    },
  };
}

export default function Essays() {
  return (
    <div className="mt-16 px-8">
      <header>
        <h1 className="font-bold text-4xl text-zinc-800">Nuel&apos;s Essays</h1>
      </header>
    </div>
  );
}
