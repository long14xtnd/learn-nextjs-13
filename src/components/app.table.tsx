"use client";
import Table from "react-bootstrap/Table";
import CreateModal from "./create.modal";
interface IProps {
  blogs: IBlog[];
}
import Button from "react-bootstrap/Button";
import { useState } from "react";
const TableData = (props: IProps) => {
  const { blogs } = props;
  const [showModalCreate, setShowModalCreate] = useState<boolean>(false);
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
          {blogs?.map((blog) => {
            return (
              <tr key={blog.id}>
                <td>{blog.id}</td>
                <td>{blog.title}</td>
                <td>{blog.author}</td>
                <td>
                  <Button>View</Button>
                  <Button variant="warning" className="mx-3">
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
    </>
  );
};
export default TableData;
