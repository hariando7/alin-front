import InputText from "@/components/atom/InputText";
import Image from "next/image";
import Link from "next/link";
import { active } from "sortablejs";

export default function SignUp() {
    return (
        <>
            <div className="hidden w-full place-items-center lg:grid">
                <div className="w-full max-w-lg p-6">
                    <Image
                        className="w-full"
                        id="hero-image-light"
                        src="/images/illustrations/dashboard-meet.svg"
                        alt="image"
                        width={500}
                        height={500}
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
                            width={500}
                            height={500}
                        />
                        <div className="mt-4">
                            <h2 className="text-2xl font-semibold text-slate-600 dark:text-navy-100">
                                Welcome To Alin
                            </h2>
                            <p className="text-slate-400 dark:text-navy-300">
                                Please sign up to continue
                            </p>
                        </div>
                    </div>
                    <div className="my-7 flex items-center space-x-3">
                        <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
                        <p className="text-tiny+ uppercase">sign up with email</p>

                        <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
                    </div>
                    <div className="mt-4 space-y-4">
                        <InputText
                            withLabel={{
                                active: true,
                                text: "Name",
                            }}
                            withIcon={{
                                active: true,
                                icon: "fa-user",
                            }}
                            props={{
                                placeholder: "Name"
                            }} />

                        <InputText
                            withLabel={{
                                active: true,
                                text: "Email",
                            }}
                            withIcon={{
                                active: true,
                                icon: "fa-envelope",
                            }}
                            props={{
                                placeholder: "Email"
                            }} />

                        <InputText
                            withLabel={{
                                active: true,
                                text: "Pasword",
                            }}
                            withIcon={{
                                active: true,
                                icon: "fa-lock",
                            }}
                            withHelper={{
                                active: true,
                                text: "Your password must be more than 6 letters"
                            }}
                            props={{
                                placeholder: "Pasword"
                            }} />
                        <div className="mt-4 flex items-center space-x-2">
                            <input
                                className="form-checkbox is-basic h-5 w-5 rounded border-slate-400/70 checked:border-primary checked:bg-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent"
                                type="checkbox"
                            />
                            <p className="line-clamp-1">
                                I agree with
                                <a
                                    href="#"
                                    className="text-slate-400 hover:underline dark:text-navy-300"
                                >
                                    privacy policy
                                </a>
                            </p>
                        </div>
                    </div>
                    <button className="btn mt-10 h-10 w-full bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90">
                        Sign In
                    </button>
                    <div className="mt-4 text-center text-xs+">
                        <p className="line-clamp-1">
                            <span>Already have an account? </span>
                            <Link
                                className="text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
                                href="/auth/sign-in"
                            >
                                Sign In
                            </Link>
                        </p>
                    </div>
                </div>
            </main>
        </>
    );
}
