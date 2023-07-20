import Link from "next/link";
import Image from "next/image";

// import HeroImg from "@/components/signIn/heroImg";

export default function SignIn() {
    return (
        <>
            {/* <HeroImg></HeroImg> */}
            <div className="hidden w-full place-items-center lg:grid">
                <div className="w-full max-w-lg p-6">
                    <Image
                        className="w-full"
                        id="hero-image-light"
                        src="/images/illustrations/dashboard-check.svg"
                        alt="image"
                        width={500} height={500}
                    />
                </div>
            </div>
            <main className="flex w-full flex-col items-center bg-white dark:bg-navy-700 lg:max-w-md">
                <div className="flex w-full max-w-sm grow flex-col justify-center p-5">
                    <div className="text-center">
                        <Image
                            className="mx-auto h-16 w-16 lg:hidden"
                            src="/images/app-logo.svg"
                            alt="logo"
                            width={500} height={500}
                        />
                        <div className="mt-4">
                            <h2 className="text-2xl font-semibold text-slate-600 dark:text-navy-100">
                                Welcome Back
                            </h2>
                            <p className="text-slate-400 dark:text-navy-300">
                                Please sign in to continue
                            </p>
                        </div>
                    </div>
                    <div className="mt-16">
                        <label className="relative flex">
                            <input
                                className="form-input peer w-full rounded-lg bg-slate-150 px-3 py-2 pl-9 ring-primary/50 placeholder:text-slate-400 hover:bg-slate-200 focus:ring dark:bg-navy-900/90 dark:ring-accent/50 dark:placeholder:text-navy-300 dark:hover:bg-navy-900 dark:focus:bg-navy-900"
                                placeholder="Username"
                                type="text"
                            />
                            <span
                                className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 transition-colors duration-200"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                            </span>
                        </label>
                        <label className="relative mt-4 flex">
                            <input
                                className="form-input peer w-full rounded-lg bg-slate-150 px-3 py-2 pl-9 ring-primary/50 placeholder:text-slate-400 hover:bg-slate-200 focus:ring dark:bg-navy-900/90 dark:ring-accent/50 dark:placeholder:text-navy-300 dark:hover:bg-navy-900 dark:focus:bg-navy-900"
                                placeholder="Password"
                                type="password"
                            />
                            <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 transition-colors duration-200"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                    />
                                </svg>
                            </span>
                        </label>
                        <div className="mt-4 flex items-center justify-between space-x-2">
                            <label className="inline-flex items-center space-x-2">
                                <input
                                    className="form-checkbox is-outline h-5 w-5 rounded border-slate-400/70 bg-slate-100 before:bg-primary checked:border-primary hover:border-primary focus:border-primary dark:border-navy-500 dark:bg-navy-900 dark:before:bg-accent dark:checked:border-accent dark:hover:border-accent dark:focus:border-accent"
                                    type="checkbox"
                                />
                                <span className="line-clamp-1">Remember me</span>
                            </label>
                            <Link
                                href="/"
                                className="text-xs text-slate-400 transition-colors line-clamp-1 hover:text-slate-800 focus:text-slate-800 dark:text-navy-300 dark:hover:text-navy-100 dark:focus:text-navy-100"
                            >Forgot Password?
                            </Link>
                        </div>
                        <button
                            className="btn mt-10 h-10 w-full bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
                        >
                            Sign In
                        </button>
                        <div className="mt-4 text-center text-xs+">
                            <p className="line-clamp-1">
                                <span>Dont have Account?</span>

                                <Link
                                    className="text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
                                    href="/auth/sign-up"
                                >Create account</Link>
                            </p>
                        </div>
                        <div className="my-7 flex items-center space-x-3">
                            <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
                            <p>OR</p>
                            <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
                        </div>
                        <div className="flex space-x-4">
                            <button
                                className="btn w-full space-x-3 border border-slate-300 font-medium text-slate-800 hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-450 dark:text-navy-50 dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90"
                            >
                                <Image
                                    className="h-5.5 w-5.5"
                                    src="/images/100x100.png"
                                    alt="logo"
                                    width={500} height={500}
                                />
                                <span>Google</span>
                            </button>
                            <button
                                className="btn w-full space-x-3 border border-slate-300 font-medium text-slate-800 hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-450 dark:text-navy-50 dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90"
                            >
                                <Image
                                    className="h-5.5 w-5.5"
                                    src="/images/100x100.png"
                                    alt="logo"
                                    width={500} height={500}
                                />
                                <span>Github</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div
                    className="my-5 flex justify-center text-xs text-slate-400 dark:text-navy-300"
                >
                    <Link href="/">Privacy Notice</Link>
                    <div className="mx-3 my-1 w-px bg-slate-200 dark:bg-navy-500"></div>
                    <Link href="/">Term of service</Link>
                </div>
            </main>
        </>
    );
}