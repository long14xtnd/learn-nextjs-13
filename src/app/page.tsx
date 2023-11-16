"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import style1 from "@/styles/app.module.css";
import style2 from "@/styles/main.module.css";
import Table from "react-bootstrap/Table";
import { useEffect } from "react";
import useSWR from "swr";
import TableData from "@/components/app.table";
export default function Home() {
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
  if (!data) {
    return <div>Loading...</div>;
  }
  return <TableData blogs={data}></TableData>;
}
