import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const Home = async () => {
  const { userId } = await auth();

  if (!userId) {
    redirect("/login");
  }

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
