import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import PostThread from "@/components/forms/CreatePost";
import { fetchUser } from "@/lib/actions/user.actions";

async function Page() {
  const user = await currentUser();
  if (!user) return null;

  const userInfo = await fetchUser(user.id);
  if (!userInfo?.onboarded) redirect("/onboarding");
  const userId = userInfo._id.toString();
  return (
    <>
      <h1 className='head-text'>New Post</h1>
      <PostThread userId={userId} />
    </>
  );
}

export default Page;