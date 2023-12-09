import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "@/components/NavBar";
import Post from "@/components/Post";

export default function Home() {
	return (
		<main className={styles.main}>
			<NavBar />
			<Post />
		</main>
	);
}
