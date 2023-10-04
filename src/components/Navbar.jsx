'use client'
import Link from "next/link";
import ThemeButton from "./ThemeButton";
import { signIn } from "next-auth/react";

export default async function Navbar() {
  const session = "user";
  return (
    <div className="fixed inset-x-0 top-0 bg-skin-on-fill z-[10] h-fit border-b border-base py-2 ">
      <div className="flex items-center justify-between h-full gap-2 px-8 mx-auto max-w-7xl">
        {/* Logo */}
        <Link href={"/"} className="flex items-center gap-2">
          <p className="rounded-lg border-2 border-b-4 border-r-4 border-base px-2 py-1 text-xl font-bold transition-all hover:-translate-y-[2px] md:block">
            Quizmify
          </p>
        </Link>
        <div className="flex items-center gap-3">
          <ThemeButton/>
          {session?.user ? (
            <h3>User</h3>
          ) : (
            <button
              onClick={() => {
                signIn("google").catch(console.error);
              }}
            >
              Sign
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
