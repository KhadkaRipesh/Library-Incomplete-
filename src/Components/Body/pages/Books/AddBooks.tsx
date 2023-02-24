import React from "react";
import { useState } from "react";
import { Button, Drawer, Space, Form, Upload, Input } from "antd";
// import { Icon } from "../../../common/icons/Icon";
import { IoAddCircleOutline } from "react-icons/io5";
import { PlusOutlined } from "@ant-design/icons";
import type { FormItemProps } from "antd";
import {FloatButton} from "antd";

export default function AddBooks() {
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
      {/* <FloatButton
        // icon={<IoAddCircleOutline />}
        onClick={showDrawer}
        style={{ float: "right" }}
      >
        Add Book
      </FloatButton> */}
      <FloatButton className="addIcon" icon={<IoAddCircleOutline />} onClick={showDrawer} />
      <Drawer
        title="Add Books"
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
        <Form>
          <Form.Item valuePropName="fileList">
            <Upload action="/upload.do" listType="picture-card">
              <div>
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>Add Photo</div>
              </div>
            </Upload>
          </Form.Item>
        </Form>
        <Form name="form_item_path" layout="vertical">
          <MyFormItemGroup prefix={["user"]}>
            <MyFormItemGroup prefix={["name"]}>
              <MyFormItem name="bookname" label="Book Name">
                <Input />
              </MyFormItem>
              <MyFormItem name="authorname" label="Author Name">
                <Input />
              </MyFormItem>
            </MyFormItemGroup>

            <MyFormItem name="isbn" label="ISBN">
              <Input />
            </MyFormItem>
          </MyFormItemGroup>
          <Button type="primary" htmlType="submit" onClick={onClose}>
            Submit
          </Button>
        </Form>
      </Drawer>
    </>
  );
}
