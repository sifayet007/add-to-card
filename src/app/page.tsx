
import AddToCard from "@/components/AddToCard";
import PostCard, { IPostData } from "@/components/PostCard";

export default async function Home() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()

  console.log(data)
  return (
    <div className="mt-18">
      <div className=" grid grid-cols-4 gap-5 max-w-[1320px] mx-auto">
        <PostCard data={data}></PostCard>
      </div>
      <div>
        <AddToCard />
      </div>
    </div>
  );
}
