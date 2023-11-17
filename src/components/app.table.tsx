"use client";
import Table from "react-bootstrap/Table";
import CreateModal from "./create.modal";
import UpdateModal from "./update.modal";
import Link from "next/link";
interface IProps {
  blogs: IBlog[];
}
import Button from "react-bootstrap/Button";
import { useState } from "react";
const TableData = (props: IProps) => {
  const { blogs } = props;
  const [blog, setBlog] = useState<IBlog | null>(null);
  const [showModalCreate, setShowModalCreate] = useState<boolean>(false);
  const [showModalUpdate, setShowModalUpdate] = useState<boolean>(false);
  return (
    <>
      <div
        className="mb-3 mt-4"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <h3>Table Content</h3>
        <Button variant="primary" onClick={() => setShowModalCreate(true)}>
          Create New Blog
        </Button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {blogs?.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.author}</td>
                <td>
                  <Link href={`blogs/${item.id}`} className="btn btn-primary">View</Link>
                  {/* <Button>View</Button> */}
                  <Button
                    variant="warning"
                    className="mx-3"
                    onClick={() => {
                      setBlog(item);
                      setShowModalUpdate(true);
                    }}
                  >
                    Edit
                  </Button>
                  <Button variant="danger">Delete</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <CreateModal
        showModalCreate={showModalCreate}
        setShowModalCreate={setShowModalCreate}
      ></CreateModal>
      <UpdateModal
        showModalUpdate={showModalUpdate}
        setShowModalUpdate={setShowModalUpdate}
        blog={blog}
        setBlog={setBlog}
      ></UpdateModal>
    </>
  );
};
export default TableData;
