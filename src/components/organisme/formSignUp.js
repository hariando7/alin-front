import Link from "next/link";
import Image from "next/image";

import ButtonGithub from "../molekul/buttonGithub";
import ButtonGoogle from "../molekul/buttonGoogle";
import ButtonSignUp from "../molekul/buttonSignUp";
import InputUserName from "../molekul/inputUserName";
import InputEmail from "../molekul/inputEmail";
import InputPw from "../molekul/inputPw";
import InputRepeatPw from "../molekul/inputRepeatPw";

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
                                Welcome To Lineone
                            </h2>
                            <p class="text-slate-400 dark:text-navy-300">
                                Please sign up to continue
                            </p>
                        </div>
                    </div>

                    <div class="mt-10 flex space-x-4">
                        <ButtonGoogle></ButtonGoogle>
                        <ButtonGithub></ButtonGithub>
                    </div>
                    <div class="my-7 flex items-center space-x-3">
                        <div class="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
                        <p class="text-tiny+ uppercase">or sign up with email</p>

                        <div class="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
                    </div>
                    <div class="mt-4 space-y-4">
                        <InputUserName></InputUserName>
                        <InputEmail></InputEmail>
                        <InputPw></InputPw>
                        <InputRepeatPw></InputRepeatPw>
                        <div class="mt-4 flex items-center space-x-2">
                            <input
                                class="form-checkbox is-basic h-5 w-5 rounded border-slate-400/70 checked:border-primary checked:bg-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent"
                                type="checkbox"
                            />
                            <p class="line-clamp-1">
                                I agree with
                                <a
                                    href="#"
                                    class="text-slate-400 hover:underline dark:text-navy-300"
                                >
                                    privacy policy
                                </a>
                            </p>
                        </div>
                    </div>
                    <ButtonSignUp></ButtonSignUp>
                    <div class="mt-4 text-center text-xs+">
                        <p class="line-clamp-1">
                            <span>Already have an account? </span>
                            <a
                                class="text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
                                href="pages-login-2.html"
                            >Sign In</a
                            >
                        </p>
                    </div>
                </div>
            </main>
        </>
    );
}