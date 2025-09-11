import Image from "next/image";

const Home = () => {
  return ( 
    <div className="flex justify-center items-center min-h-screen">
      <main className="p-300 rounded-[20px] space-y-300 max-w-[327px] border border-gray-950 right-bottom-shadow bg-white">
        <Image
          src={"/images/illustration-article.svg"}
          alt="illustration-article"
          width={327}
          height={200}
          quality={100}
          className="rounded-[10px]"
        />
        <section className="space-y-150">
          <h2 className="category px-150 py-50 rounded max-w-[73px] text-center bg-yellow">
            Learning
          </h2>
          <p className="publish-date">
            Published <time dateTime="2023-12-21">21 Dec 2023</time>
          </p>
          <h1 className="title">
            HTML & CSS foundations
          </h1>
          <p className="description">
            These languages are the backbone of every website,
            defining structure, content, and presentation.
          </p>
        </section>
        <address className="flex items-center space-x-150">
          <Image
            src="/images/image-avatar.webp"
            alt="avatar"
            width={32}
            height={32}
            quality={100}
          />
          <span className="author not-italic">Greg Hooper</span>
        </address>
      </main>
    </div>
  );
}

export default Home;