import type { Metadata } from "next";
export const metadata = {
  title: "Blogs list",
  description: "Generated by Hailongdev",
};

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}