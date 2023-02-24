import styles from "./Issuebook.module.css";
import { Autocomplete, Backdrop, TextField } from "@mui/material";
import { useState } from "react";
import Button from "@mui/material/Button";

function Boxtitle(props: any) {
  const { title } = props;
  return (
    <>
      <h3 className={styles.boxtitle}>{title}</h3>
      <div className={styles.hr}></div>
    </>
  );
}

  function Input(props: any) {
    const { label, options } = props;
    return (
      <>
        <Autocomplete
          onChange={props.onChange}
          value={props?.value ?? ""}
          sx={{ width: 680, marginBottom: "25px", marginTop: "12px" }}
          renderInput={(params) => (
            <TextField {...params} {...props} label={label} />
          )}
          options={options}
        />
      </>
    );
  }
  function handlebookissue(){

  }
export default function Issuebook(props: any) {
  const [isbn, setIsbn] = useState<any[]>([]);
  const [issuedetail, setIssuedetail] = useState<any>(null);
  const [studentUUID, setStudentUUID] = useState<any>();
  const [studentid, setStudentid] = useState<any[]>([]);


  return (
    <>
      <div className={styles.container}>
        <div className={styles.issue}>
          <Boxtitle title={`Issue Book By ${props.medium}`} hr="true" />
          <div className={styles.issuedetail}>
          {/* <Input /> */}
          <Input
              label={`Student ${props.medium}`}
              required
              value={issuedetail?.studentId}
              onChange={(e: any, value: any) => {
                setIssuedetail({ ...issuedetail, studentId: value });
                setStudentUUID(value);
              }}
              options={studentid}
            />
            <Input
              label="ISBN Number"
              required
              value={issuedetail?.bookId}
              onChange={(e: any, value: any) =>
                setIssuedetail({ ...issuedetail, bookId: value })
              }
              options={isbn}
            />
            </div>
        </div>
        <div className={styles.buttoncontainer}>
            <Button variant="outlined" onClick={handlebookissue}>
              Issue Book
            </Button>
          </div>
      </div>
    </>
  );
}
