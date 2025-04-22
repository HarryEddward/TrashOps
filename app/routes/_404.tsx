import { Head } from "$fresh/runtime.ts";

export default function Error404() {
  return (
    <>
      <Head>
        <title>404 - Page not found</title>
      </Head>
      <div class="w-full h-screen flex justify-center items-center">
        <span className={"font-black text-3xl"}>En contrucción  🏗️</span>
      </div>
    </>
  );
}
