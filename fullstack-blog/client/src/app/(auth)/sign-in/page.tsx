import SignInForm from "@/components/auth/signInForm";
import Link from "next/link";

export default function SignInPage() {
	return (
		<section className=" bg-white rounded-3xl md:px-3 md:py-5 px-2 py-3">
			<h1 className="text-center text-3xl font-semibold mb-1 md:mb-5">Welcome Back!</h1>
			<SignInForm />
			<p className="text-center tracking-wide">
				Don&apos;t have an account?{" "}
				<Link href="/sign-up" className="text-sky-500">
					Sign up
				</Link>
			</p>
		</section>
	);
}
