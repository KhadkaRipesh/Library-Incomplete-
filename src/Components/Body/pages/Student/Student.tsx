import React from "react";
import { Space, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import AddStudent from "./AddStudent";
import { motion } from "framer-motion";
import { Title } from "../../../common/title/Title";
import TopNav from "../../../Nav/TopNav";
export default function Student() {
  interface DataType {
    key: string;
    id: number;
    studentname: string;
    studentContact: string;
    email: string;
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
      title: "Student Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>View {record.id}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  const data: DataType[] = [
    {
      key: "1",
      id: 21049917,
      studentname: "Ripesh Khadka",
      studentContact: "9807053756",
      email: "np05cp4a210081@iic.edu.np",
    },
    {
      key: "2",
      id: 21049920,
      studentname: "Ronim Rajbhandari",
      studentContact: "9807023756",
      email: "np05cp4a210083@iic.edu.np",
    },
  ];
  return (
    <>
    <TopNav />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
      >
        <Title title="Add Students" />
        <Table columns={columns} dataSource={data} />
        <AddStudent />
      </motion.div>
    </>
  );
}
