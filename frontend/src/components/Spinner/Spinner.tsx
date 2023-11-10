import classNames from "classnames/bind";
import styles from "./Spinner.module.scss";

const cx = classNames.bind(styles);

export const Spinner = () => {
	return <span className={cx("loader")}></span>;
};
