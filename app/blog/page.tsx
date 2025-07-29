import PostPreview from "@/components/ui/PostPreview";
import posts from "@/data/posts.json";

export default function Blog() {
  return (
    <section className="flex flex-col md:flex-row gap-5 min-h-screen justify-center bg-background py-30 px-10">
      <div className="flex-1 h-full p-2 flex flex-col gap-2">
        <h2 className="text-4xl text-primary font-bold">O mnie</h2>
        <p className="text-lg text-justify">
          Uczeń czwartej klasy technikum, z pasji i zawodu programista. Po
          godzinach biegam z rakietą po korcie - najczęściej badmintonową,
          chociaż ostatnimi czasy też z tenisową. Piszę o tematach
          społeczno-filozoficznych, a także redaguję polskojęzyczną Wikipedię.
          Czasami uchwycę jakiś ładny kadr moim wysłużonym Nikonem. Jestem
          katolikiem oraz członkiem LSO.
        </p>
      </div>
      <div className="flex-2 h-full flex flex-col gap-10">
        {posts.map((post, idx) => (
          <PostPreview
            key={idx}
            title={post.title}
            categories={post.categories}
            slug={post.slug}
            date={post.date}
          />
        ))}
      </div>
    </section>
  );
}
