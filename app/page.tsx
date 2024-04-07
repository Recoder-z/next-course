import { getServerSession } from "next-auth";
import { Metadata } from "next";
import authOptions from "./api/auth/authOptions";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main className="relative h-screen">
      <h1>Hello world</h1>

      {/* <Image
        src="https://bit.ly/react-cover"
        alt="tree"
        fill
        className="object-cover"
        sizes="(max-width:480) 100vw, (max-width:768px) 50vw, 33vw"
        quality={75}
        priority
      /> */}
    </main>
  );
}


export const metadata: Metadata = {
  title: "...",
};

// //for search engine, and incase you want to load from api or database
// export async function generateMetadata(): Promise<Metadata> {
//   const product = await fetch('');

//   return {
//     title:'product.title',
//     description:'...'
//   }
// }
