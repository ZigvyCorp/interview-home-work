import Image from "next/image";
import styles from "./page.module.css";

export default function Post({ params }: { params: { id: string } }) {
	console.log("🚀 ~ file: page.tsx:5 ~ Post ~ params:", params);
	return <main className={styles.main}></main>;
}
