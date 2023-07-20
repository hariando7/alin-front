import Link from "next/link";
import Image from "next/image";

import ButtonGithub from "../molekul/buttonGithub";
import ButtonGoogle from "../molekul/buttonGoogle";
import ButtonSignIn from "../molekul/buttonSignIn";
import InputUserName from "../molekul/inputUserName";
import InputPw from "../molekul/inputPw";
import FoterSignInUp from "../molekul/foterSignInUp";

export default function SignIn() {
    return (
        <>
            <main
                class="flex w-full flex-col items-center bg-white dark:bg-navy-700 lg:max-w-md"
            >
                <div class="flex w-full max-w-sm grow flex-col justify-center p-5">
                    <div class="text-center">
                        <img
                            class="mx-auto h-16 w-16 lg:hidden"
                            src="/images/app-logo.svg"
                            alt="logo"
                        />
                        <div class="mt-4">
                            <h2
                                class="text-2xl font-semibold text-slate-600 dark:text-navy-100"
                            >
                                Welcome Back
                            </h2>
                            <p class="text-slate-400 dark:text-navy-300">
                                Please sign in to continue
                            </p>
                        </div>
                    </div>
                    <div class="mt-16">
                        <InputUserName></InputUserName>
                        <InputPw></InputPw>
                        <div class="mt-4 flex items-center justify-between space-x-2">
                            <label class="inline-flex items-center space-x-2">
                                <input
                                    class="form-checkbox is-outline h-5 w-5 rounded border-slate-400/70 bg-slate-100 before:bg-primary checked:border-primary hover:border-primary focus:border-primary dark:border-navy-500 dark:bg-navy-900 dark:before:bg-accent dark:checked:border-accent dark:hover:border-accent dark:focus:border-accent"
                                    type="checkbox"
                                />
                                <span class="line-clamp-1">Remember me</span>
                            </label>
                            <a
                                href="#"
                                class="text-xs text-slate-400 transition-colors line-clamp-1 hover:text-slate-800 focus:text-slate-800 dark:text-navy-300 dark:hover:text-navy-100 dark:focus:text-navy-100"
                            >Forgot Password?</a
                            >
                        </div>
                        <button
                            class="btn mt-10 h-10 w-full bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
                        >
                            Sign In
                        </button>
                        <div class="mt-4 text-center text-xs+">
                            <p class="line-clamp-1">
                                <span>Dont have Account?</span>

                                <a
                                    class="text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
                                    href="pages-singup-2.html"
                                >Create account</a
                                >
                            </p>
                        </div>
                        <div class="my-7 flex items-center space-x-3">
                            <div class="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
                            <p>OR</p>
                            <div class="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
                        </div>
                        <div class="flex space-x-4">
                            <button
                                class="btn w-full space-x-3 border border-slate-300 font-medium text-slate-800 hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-450 dark:text-navy-50 dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90"
                            >
                                <img
                                    class="h-5.5 w-5.5"
                                    src="images/100x100.png"
                                    alt="logo"
                                />
                                <span>Google</span>
                            </button>
                            <button
                                class="btn w-full space-x-3 border border-slate-300 font-medium text-slate-800 hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-450 dark:text-navy-50 dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90"
                            >
                                <img
                                    class="h-5.5 w-5.5"
                                    src="images/100x100.png"
                                    alt="logo"
                                />
                                <span>Github</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div
                    class="my-5 flex justify-center text-xs text-slate-400 dark:text-navy-300"
                >
                    <a href="#">Privacy Notice</a>
                    <div class="mx-3 my-1 w-px bg-slate-200 dark:bg-navy-500"></div>
                    <a href="#">Term of service</a>
                </div>
            </main>
        </>
    );
}