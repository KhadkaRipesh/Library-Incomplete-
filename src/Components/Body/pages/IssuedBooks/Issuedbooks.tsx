import React from "react";
import { Space, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { motion } from "framer-motion";
import { Title } from "../../../common/title/Title";
import TopNav from "../../../Nav/TopNav";
export default function IssuedBooks() {
  interface DataType {
    key: string;
    isbn: string;
    bookname: string;
    author: string;
    id: number;
    studentname: string;
    studentContact: string;
    issuedDate: string;
    expiredDate: string;
    fineAmount: number;
  }

  const columns: ColumnsType<DataType> = [
    {
      title: "Student ID",
      dataIndex: "id",
      key: "id",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Student Name",
      dataIndex: "studentname",
      key: "studentname",
    },
    {
      title: "Student Contact",
      dataIndex: "studentContact",
      key: "studentContact",
    },
    {
      title: "Book ISBN",
      dataIndex: "isbn",
      key: "isbn",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Issued Date",
      dataIndex: "issuedDate",
      key: "issuedDate",
    },
    {
      title: "Expired Date",
      dataIndex: "expiredDate",
      key: "expiredDate",
    },
    {
        title: "Fine Amount",
        dataIndex: "fineAmount",
        key: "fineAmount",
      },
    {
      title: "Author",
      dataIndex: "author",
      key: "author",
    },
    {
        title: "Status",
        dataIndex: "status",
        key: "status",
      },
  ];

  const data: DataType[] = [
    {
      key: "1",
      isbn: "0-5821-5979-2",
      bookname: "Code: The Hidden Language of Computer Hardware and Software",
      author: "Charles Petzold",
      id: 21049917,
      studentname: "Ripesh Khadka",
      studentContact: "9807053756",
      issuedDate: "20 JAN 2023",
      expiredDate: "27 JAN 2023",
      fineAmount: 0,

    },
    {
        key: "2",
        isbn: "0-3791-4994-X",
        bookname: "Clean Code: A Handbook of Agile Software",
        author: "Robert C. Martin",
        id: 21049816,
        studentname: "Jeeban Giri",
        studentContact: "9807052433",
        issuedDate: "20 JAN 2023",
        expiredDate: "27 JAN 2023",
        fineAmount: 0,
  
      },
    // {
    //   key: "2",
    //   isbn: "0-3791-4994-X",
    //   bookname: "Clean Code: A Handbook of Agile Software",
    //   author: "Robert C. Martin",
    //   id: 20512660,
    // },
    // {
    //   key: "3",
    //   isbn: "0-8095-9098-0",
    //   bookname: "Algorithms",
    //   author: "Robert Sedgewick & Kevin Wayne",
    //   id: 20512660,

    // },
  ];
  return (
    <>
    <TopNav/>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
      >
        <Title title="Issued Books" />
        <Table columns={columns} dataSource={data} />
      </motion.div>
    </>
  );
}
