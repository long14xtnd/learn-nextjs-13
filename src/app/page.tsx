"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import style1 from "@/styles/app.module.css";
import style2 from "@/styles/main.module.css";
import Table from "react-bootstrap/Table";
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:8000/blogs");

      const data = await response.json();
      console.log(data);
    };
    fetchData();
  }, []);
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
  );
}
