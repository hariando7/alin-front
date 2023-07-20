

import Image from "next/image";
import Input from "../atom/Input";




export default function clientMessagesPersonal() {

    return (
        <>
            {/* <!-- clientMessagesPersonal --> */}
            <div class="card px-4 pb-4 sm:px-5">
                <div class="my-3 flex h-8 items-center justify-between">
                    <h2
                        class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100"
                    >
                        Client Messages
                    </h2>

                    <div id="client-messages-menu" class="inline-flex">
                        <button
                            class="popper-ref btn -mr-1.5 h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                                />
                            </svg>
                        </button>

                        <div class="popper-root">
                            <div
                                class="popper-box rounded-md border border-slate-150 bg-white py-1.5 font-inter dark:border-navy-500 dark:bg-navy-700"
                            >
                                <ul>
                                    <li>
                                        <a
                                            href="#"
                                            class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                                        >Action</a
                                        >
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                                        >Another Action</a
                                        >
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                                        >Something else</a
                                        >
                                    </li>
                                </ul>
                                <div
                                    class="my-1 h-px bg-slate-150 dark:bg-navy-500"
                                ></div>
                                <ul>
                                    <li>
                                        <a
                                            href="#"
                                            class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                                        >Separated Link</a
                                        >
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="space-y-4">
                    <div
                        class="flex cursor-pointer items-center justify-between space-x-2"
                    >
                        <div class="flex items-center space-x-3">
                            <div class="avatar">
                                <img
                                    class="rounded-full"
                                    src="images/200x200.png"
                                    alt="avatar"
                                />
                            </div>
                            <div>
                                <div class="flex items-center space-x-2">
                                    <p
                                        class="font-medium text-slate-700 dark:text-navy-100"
                                    >
                                        Konnor Guzman
                                    </p>
                                    <div
                                        class="flex h-4.5 min-w-[1.125rem] items-center justify-center rounded-full bg-slate-200 px-1.5 text-tiny+ font-medium leading-none text-slate-800 dark:bg-navy-450 dark:text-white"
                                    >
                                        5
                                    </div>
                                </div>
                                <p
                                    class="text-xs text-slate-400 line-clamp-1 dark:text-navy-300"
                                >
                                    Hello Erick. Lorem ipsum dolor sit amet, consectetur.
                                </p>
                            </div>
                        </div>
                        <a
                            href="#"
                            class="hover:text-primary focus:text-primary dark:hover:text-accent-light dark:focus:text-accent-light"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </a>
                    </div>
                    <div
                        class="flex cursor-pointer items-center justify-between space-x-2"
                    >
                        <div class="flex items-center space-x-3">
                            <div class="avatar">
                                <img
                                    class="rounded-full"
                                    src="images/200x200.png"
                                    alt="avatar"
                                />
                            </div>
                            <div>
                                <p
                                    class="font-medium text-slate-700 dark:text-navy-100"
                                >
                                    Travis Fuller
                                </p>
                                <p
                                    class="text-xs text-slate-400 line-clamp-1 dark:text-navy-300"
                                >
                                    Excepturi magni sequi voluptate.
                                </p>
                            </div>
                        </div>
                        <a
                            href="#"
                            class="hover:text-primary focus:text-primary dark:hover:text-accent-light dark:focus:text-accent-light"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </a>
                    </div>
                    <div
                        class="flex cursor-pointer items-center justify-between space-x-2"
                    >
                        <div class="flex items-center space-x-3">
                            <div class="avatar">
                                <img
                                    class="rounded-full"
                                    src="images/200x200.png"
                                    alt="avatar"
                                />
                            </div>
                            <div>
                                <p
                                    class="font-medium text-slate-700 dark:text-navy-100"
                                >
                                    Alfredo Elliott
                                </p>
                                <p
                                    class="text-xs text-slate-400 line-clamp-1 dark:text-navy-300"
                                >
                                    Adipisicing eli itaque!
                                </p>
                            </div>
                        </div>
                        <a
                            href="#"
                            class="hover:text-primary focus:text-primary dark:hover:text-accent-light dark:focus:text-accent-light"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </a>
                    </div>
                    <div
                        class="flex cursor-pointer items-center justify-between space-x-2"
                    >
                        <div class="flex items-center space-x-3">
                            <div class="avatar">
                                <img
                                    class="rounded-full"
                                    src="images/200x200.png"
                                    alt="avatar"
                                />
                            </div>
                            <div>
                                <p
                                    class="font-medium text-slate-700 dark:text-navy-100"
                                >
                                    Derrick Simmons
                                </p>
                                <p
                                    class="text-xs text-slate-400 line-clamp-1 dark:text-navy-300"
                                >
                                    Ad hic minus repudiandae.
                                </p>
                            </div>
                        </div>
                        <a
                            href="#"
                            class="hover:text-primary focus:text-primary dark:hover:text-accent-light dark:focus:text-accent-light"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};
