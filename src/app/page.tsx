import Image from "next/image";

const Home = () => {
  return ( 
    <div className="flex justify-center items-center min-h-screen">
      <main className="p-300 rounded-[20px] space-y-300 max-w-[clamp(20.438rem,19.183rem+5.35vw,24rem)] border border-gray-950 shadow-[8px_8px_0_rgba(0,0,0,1)] bg-white">
        <Image
          src={"/images/illustration-article.svg"}
          alt="illustration-article"
          width={327}
          height={200}
          className="rounded-[10px]"
        />
        <section className="space-y-150">
          <div className="typo-4 px-150 py-50 rounded inline-block bg-yellow text-gray-950">
            Learning
          </div>
          <p className="typo-3 text-gray-950">
            Published <time dateTime="2023-12-21">21 Dec 2023</time>
          </p>
          <h1 className="typo-1 text-gray-950 hover:text-yellow hover:cursor-pointer">
            HTML & CSS foundations
          </h1>
          <p className="typo-2 text-gray-500">
            These languages are the backbone of every website,
            defining structure, content, and presentation.
          </p>
        </section>
        <div className="flex items-center space-x-150">
          <Image
            src="/images/image-avatar.webp"
            alt="avatar"
            width={32}
            height={32}

          />
          <span className="typo-4">Greg Hooper</span>
        </div>
      </main>
    </div>
  );
}

export default Home;