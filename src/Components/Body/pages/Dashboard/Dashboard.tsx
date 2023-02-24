import Card from "../../mini-component/Dashboardcard";
import { motion } from "framer-motion";
import styles from "./Dashboard.module.css";
import React from "react";
import { Title } from "../../../common/title/Title";
import Issuebook from "../../mini-component/Issuebook/Issuebook";
import TopNav from "../../../Nav/TopNav";

interface DashboardDataType {
  totalExpired: number;
  totalStudents: number;
  totalBooks: number;
  totalBorrowed: number;
}

export default function Dashboard() {
  const [data, setData] = React.useState<DashboardDataType | null>(null);

  return (
    <>
    <TopNav />
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
    >
      <Title title="Dashboard" />
      <motion.div
        className={styles.cards}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
        exit={{ opacity: 0 }}
      >
        <Card title={0} color="green" subtitle="Total Books" icon="Books" />
        <Card title={0} color="red" subtitle="Books Issued" icon="bookupload" />
        <Card title={0} color="blue" subtitle="Expired Books" icon="booksexpire" />
        <Card title={0} color="orange" subtitle="Total Students" icon="student" />
      </motion.div>
    <motion.div
    className={styles.middlecontainer}
    initial={{opacity:0}}
    animate={{opacity:1, transition: {duration: 0.5}}}
    exit={{opacity: 0}}>
        <Issuebook medium="collegeId"/>
        <Issuebook medium="name"/>

    </motion.div>
    </motion.div>
    </>
  );
}
