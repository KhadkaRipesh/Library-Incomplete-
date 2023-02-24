import React from "react";
import { Space, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import AddBooks from "./AddBooks";
import { motion } from "framer-motion";
import { Title } from "../../../common/title/Title";
import TopNav from "../../../Nav/TopNav";
import { QuestionCircleOutlined } from '@ant-design/icons';
import { Popconfirm } from 'antd';


export default function Books() {
  interface DataType {
    key: string;
    isbn: string;
    bookname: string;
    author: string;
  }

  const columns: ColumnsType<DataType> = [
    {
      title: "ISBN",
      dataIndex: "isbn",
      key: "isbn",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Book Name",
      dataIndex: "bookname",
      key: "age",
    },
    {
      title: "Author",
      dataIndex: "author",
      key: "author",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>View {record.isbn}</a>
          <Popconfirm
            title="Delete the task"
            description="Are you sure to delete this data?"
            icon={<QuestionCircleOutlined style={{ color: "red" }} />}
          >
            <a href="#">Delete</a>
            {/* <a>Delete</a> */}
          </Popconfirm>
        </Space>
      ),
    },
  ];

  const data: DataType[] = [
    {
      key: "1",
      isbn: "0-5821-5979-2",
      bookname: "Code: The Hidden Language of Computer Hardware and Software",
      author: "Charles Petzold",
    },
    {
      key: "2",
      isbn: "0-3791-4994-X",
      bookname: "Clean Code: A Handbook of Agile Software",
      author: "Robert C. Martin",
    },
    {
      key: "3",
      isbn: "0-8095-9098-0",
      bookname: "Algorithms",
      author: "Robert Sedgewick & Kevin Wayne",
    },
  ];
  return (
    <>
      <TopNav />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
      >
        <Title title="Add Books" />
        <Table columns={columns} dataSource={data} />
        <AddBooks />
      </motion.div>
    </>
  );
}
