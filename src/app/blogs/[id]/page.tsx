"use client";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import useSWR, { Fetcher } from "swr";
import Link from "next/link";
const ViewDetailBlog = ({ params }: { params: { id: string } }) => {
  const fetcher: Fetcher<IBlog, string> = (url: string) =>
    fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    `http://localhost:8000/blogs/${params.id}`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Link href="/blogs" className="btn btn-danger mt-3 mb-3">Back to home</Link>
      <Card style={{ width: "18rem" }} className="text-center">
        <Card.Body>
          <Card.Title>{data?.title}</Card.Title>
          <Card.Text>{data?.content}</Card.Text>
          <Button variant="primary">{data?.author}</Button>
        </Card.Body>
      </Card>
    </div>
  );
};
export default ViewDetailBlog;
