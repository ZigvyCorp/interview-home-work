import Header from "@/components/layout/publish/header";

export default function PubLishLayout({ children }: { children: React.ReactNode }) {
	return (
		<body>
			<Header />
			<main className="container">{children}</main>
		</body>
	);
}
