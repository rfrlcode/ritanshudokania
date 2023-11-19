// import { allPosts } from "@/.contentlayer/generated"
// import Link from "next/link"

// export default function Home() {
//   return (
//     <div className="prose dark:prose-invert">
//       {allPosts.map((post) => (
//         <article key={post._id}>
//           <Link href={post.slug}>
//             <h2>{post.title}</h2>
//           </Link>
//           {post.description && <p>{post.description}</p>}
//         </article>
//       ))}
//     </div>
//   )
// }

import Link from "next/link";

export default function Home() {
  // Array of post titles
  const posts = [
    { title: "ReferralHub", slug: "https://www.referralhub.xyz/", description: "Find referral codes for brands you love!" },
    { title: "DealsHQ", slug: "https://www.dealshq.xyz/", description: "Find deals on products and brands you love!" }
  ];

  return (
    <div className="prose dark:prose-invert">
      {posts.map((post) => (
        <article key={post.slug}>
          <Link href={post.slug} target="_blank">
            <h2>{post.title}</h2>
          </Link>
          <p>{post.description}</p>
        </article>
      ))}
    </div>
  );
}
