import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Noel Garcia",
  description: "Developer profile of Noel Garcia — projects and progress learning to code.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <header className="site-header container">
          <Link href="/" className="site-title">
            Noel Garcia
          </Link>
          <nav className="site-nav">
            <Link href="/">Home</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/about">About</Link>
          </nav>
        </header>
        <main className="site-main container">{children}</main>
        <footer className="site-footer container">
          © {new Date().getFullYear()} Noel Garcia
        </footer>
      </body>
    </html>
  );
}
