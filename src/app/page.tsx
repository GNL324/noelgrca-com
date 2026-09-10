import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Hi, I&apos;m Noel.</h1>
      <p>
        I&apos;m learning to code and studying computer science, one project
        at a time. This site is my developer profile — it tracks what I&apos;m
        building and how I&apos;m improving, and it&apos;ll keep growing as I
        do.
      </p>
      <p>
        Every project linked here is something I wrote myself.{" "}
        <Link href="/projects" className="underline-link">
          See what I&apos;ve built
        </Link>{" "}
        or{" "}
        <Link href="/about" className="underline-link">
          read more about me
        </Link>
        .
      </p>
    </div>
  );
}
