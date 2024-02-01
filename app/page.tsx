import Link from "next/link";
import {getServerAuthSession} from "@/server/auth";
import UserInfo from "@/components/UserInfo";

export default async function Home() {
  const authSession = await getServerAuthSession();

  return (
    <main className="flex items-center justify-center h-screen">
      {authSession?.user && <UserInfo user={authSession?.user}/>}
      {!authSession?.user && (
        <Link className="font-medium mt-2 text-blue-600 hover:underline" href="/login">
          Login
        </Link>
      )}
    </main>
  );
}
