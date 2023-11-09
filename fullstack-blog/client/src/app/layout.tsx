import FakePage from "@/components/FakePage";
import { Providers } from "@/redux/provider";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Interview Homework",
	description: "This is a sample application for an interview homework.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning={true}>
			<body>
				<Providers>
					<FakePage />
					{children}
				</Providers>
			</body>
		</html>
	);
}
