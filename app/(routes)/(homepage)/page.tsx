import { Button } from "@/components/ui/button";
import { socialMedia } from "@/constans";
import Image from "next/image";
import Link from "next/link";
import Footer from "../_components/Footer";

interface Post {
  id: string;
  title: string;
  date: string;
}


export default async function Home() {
  let data = await fetch("https://api.vercel.app/blog");
  let posts: Post[] = await data.json();
  
  let latestPosts: Post[] = posts.slice(0, 4);

  return (
    <div className="space-y-8">
      <Image
        src={"/banner.jpg"}
        alt={"banner"}
        width={750}
        height={200}
        className="mt-4 rounded-xl"
      />
      <div className="hello px-8">
        <p className="text-2xl leading-relaxed text-center">
          Selam ziyaretçi 👋, ben Sinan! Kişisel websiteme hoşgeldin. GNU/Linux
          ile çalışmayı ve website tasarlamayı seven biriyim.. Burada çeşitli
          yazılarımı ve projelerimi bulabilirsin.
        </p>
      </div>

      <div className="social flex justify-center items-center">
        <ul className="flex gap-4">
          {socialMedia.map((link) => (
            <li key={link.route}>
              <Link href={link.route} target="_blank" rel="noopener noreferrer">
                <div className="flex items-center text-3xl hover:text-teal-500 transition-colors duration-300">
                  <link.icon className="" />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="latest-post flex flex-col justify-center items-center space-y-4">
        <h2 className="text-2xl font-semibold">Son Yazılar</h2>
        <ul className="post-list w-full mt-8 px-4 space-y-4">
          {latestPosts.map((post) => (
            <li key={post.id} className="h-entry">
              <div className="post-list-item flex justify-between text-lg">
                <span className="posts-list-title">
                  <Link className="post-list-item flex justify-between text-lg" href={`/blog/${post.id}`}>{post.title}</Link>
                </span>
                <span className="posts-list-date">{post.date}</span>
              </div>
            </li>
          ))}
        </ul>
        <div className="allBtn">
          <Button className="rounded-xl">Tümü</Button>
        </div>
      </div>

      <Footer />
    </div>
  );
}


