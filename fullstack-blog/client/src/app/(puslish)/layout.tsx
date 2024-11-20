import Header from "@/components/layout/publish/header";

export default function PubLishLayout({ children }: { children: React.ReactNode }) {
	return (
		<div>
			<Header />
			<main className="container">{children}</main>
		</div>
	);
}
