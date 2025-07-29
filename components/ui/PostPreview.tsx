import Link from "next/link";
import React from "react";
import Badge from "./Badge";

type PostPreviewProps = {
  slug: string;
  title: string;
  categories: string[];
  date: string;
};
const PostPreview = ({ slug, title, categories, date }: PostPreviewProps) => {
  return (
    <div className="flex flex-col gap-2 border-b-2 py-2 border-b-gray-700">
      <Link
        href={`/blog/${slug}`}
        className="text-3xl font-bold cursor-pointer"
      >
        {title}
      </Link>
      <p className="opacity-80">{date}</p>
      <div className="flex gap-2">
        {categories.map((category, idx) => (
          <Badge key={idx} text={category} />
        ))}
      </div>
    </div>
  );
};

export default PostPreview;
