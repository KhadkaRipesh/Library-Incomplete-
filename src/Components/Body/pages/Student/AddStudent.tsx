import React from "react";
import { useState } from "react";
import { Button, Drawer, Space, Form, Upload, Input } from "antd";
// import { Icon } from "../../../common/icons/Icon";
import { IoAddCircleOutline } from "react-icons/io5";
import { PlusOutlined } from "@ant-design/icons";
import type { FormItemProps } from "antd";
import {FloatButton} from "antd";

export default function AddStudent() {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  const MyFormItemContext = React.createContext<(string | number)[]>([]);
  interface MyFormItemGroupProps {
    prefix: string | number | (string | number)[];
    children: React.ReactNode;
  }

  function toArr(
    str: string | number | (string | number)[]
  ): (string | number)[] {
    return Array.isArray(str) ? str : [str];
  }

  const MyFormItemGroup = ({ prefix, children }: MyFormItemGroupProps) => {
    const prefixPath = React.useContext(MyFormItemContext);
    const concatPath = React.useMemo(
      () => [...prefixPath, ...toArr(prefix)],
      [prefixPath, prefix]
    );

    return (
      <MyFormItemContext.Provider value={concatPath}>
        {children}
      </MyFormItemContext.Provider>
    );
  };

  const MyFormItem = ({ name, ...props }: FormItemProps) => {
    const prefixPath = React.useContext(MyFormItemContext);
    const concatName =
      name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;

    return <Form.Item name={concatName} {...props} />;
  };
  return (
    <>
      <FloatButton
        icon={<IoAddCircleOutline />}
        onClick={showDrawer}
      />

      <Drawer
        title="Add Student"
        width={720}
        onClose={onClose}
        open={open}
        bodyStyle={{ paddingBottom: 80 }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
          </Space>
        }
      >
        <Form name="form_item_path" layout="vertical">
          <MyFormItemGroup prefix={["user"]}>
            <MyFormItemGroup prefix={["name"]}>
              <MyFormItem name="studentID" label="Student ID">
                <Input />
              </MyFormItem>
              <MyFormItem name="studentName" label="Student Name">
                <Input />
              </MyFormItem>
              <MyFormItem name="studentContact" label="Student Contact">
                <Input />
              </MyFormItem>
              <MyFormItem name="email" label="Student Email">
                <Input />
              </MyFormItem>
            </MyFormItemGroup>
          </MyFormItemGroup>
          <Button type="primary" htmlType="submit" onClick={onClose}>
            Add
          </Button>
        </Form>
      </Drawer>
    </>
  );
}
