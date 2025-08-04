import Badge from "@/components/ui/Badge";
import posts from "@/data/posts";
import Link from "next/link";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const post = posts.find((post) => post.slug === slug);

  if (!post) {
    return <div>Post Not Found</div>;
  }

  const paragraphs = post.content.split("\n");

  return (
    <section className="flex min-h-screen justify-center bg-background py-30 px-10">
      <div className="flex flex-col gap-5 items-center w-full md:w-4/5">
        <div className="flex flex-col w-full gap-2">
          <Link href="/blog" className="w-full text-primary">
            Powrót do listy postów
          </Link>
          <h2 className="text-4xl font-bold w-full">{post.title}</h2>
          <div className="flex flex-col md:flex-row gap-2 justify-between md:items-center w-full">
            <p className="opacity-80">{post.date}</p>
            <div className="flex gap-2">
              {post.categories.map((category, idx) => (
                <Badge key={idx} text={category} />
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 text-lg">
          {paragraphs.map((paragraph, idx) => {
            const firstLetterClass =
              idx === 0
                ? "first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:text-primary first-letter:mr-2"
                : "";
            return (
              <p key={idx} className={firstLetterClass + ` text-justify`}>
                {paragraph}
              </p>
            );
          })}
        </div>
      </div>
    </section>
  );
}
