import SignUpForm from "@/components/auth/signUpForm";
import Link from "next/link";

export default function SignUpPage() {
	return (
		<section className="bg-white rounded-3xl md:px-3 md:py-5 px-2 py-3">
			<h1 className="text-center text-3xl font-semibold mb-1 md:mb-5">Welcome Back!</h1>
			<SignUpForm />
			<p className="text-center tracking-wide">
				Alreay have account?{" "}
				<Link href="/sign-in" className="text-sky-500">
					Sign in
				</Link>
			</p>
		</section>
	);
}
