import { IconBaseProps } from "react-icons";
import {IoAddCircleOutline} from "react-icons/io5";
import {
  AiOutlineBook,
  AiOutlineFileAdd,
  AiOutlineSetting,
  AiOutlineUser,
} from "react-icons/ai";

import { GiBookshelf } from "react-icons/gi";
import { TbBooks, TbBookUpload, TbBookOff } from "react-icons/tb";
import { FiBookOpen } from "react-icons/fi";
import {FiLogOut} from "react-icons/fi"
import styles from "./Icon.module.css";
export const icons = {
  bookupload: TbBookUpload,
  Books: GiBookshelf,
  booksexpire: TbBookOff,
  student: AiOutlineUser,
  setting: AiOutlineSetting,
  add: AiOutlineFileAdd,
  bookOpen: FiBookOpen,
  addbooks: IoAddCircleOutline,
  user:AiOutlineUser,
  logout:FiLogOut,
};

export type CustomIconType = keyof typeof icons;

export interface IconProps extends IconBaseProps {
  icon: CustomIconType;
}
export function Icon({ icon, ...rest }: IconProps) {
  const I = icons[icon];
  return <I className={styles.icon} {...rest} />;
}
