"use client";
import useSWR from "swr";
import TableData from "@/components/app.table";

const BlogsPage = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    "http://localhost:8000/blogs",
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch("http://localhost:8000/blogs");

  //     const data = await response.json();
  //     console.log(data);
  //   };
  //   fetchData();
  // }, []);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <TableData blogs={data?.sort((a: any, b: any) => b.id - a.id)}></TableData>
  );
};
export default BlogsPage;
