

import Image from "next/image";
import Input from "../atom/Input";


export default function topWriterCMSAnalytics() {
    return (
        <>
            {/* <!-- topWriterCMSAnalytics --> */}
            <div
                class="col-span-12 -mt-1 sm:col-span-5 lg:col-span-4 xl:col-span-5"
            >
                <div class="flex items-center justify-between">
                    <h2
                        class="font-medium tracking-wide text-slate-700 dark:text-navy-100"
                    >
                        Top Writers
                    </h2>
                    <div id="top-writers-menu" class="inline-flex">
                        <button
                            class="popper-ref btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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

                <div class="card mt-3">
                    <div>
                        <div id="authors-carousel" class="swiper">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <div
                                        class="h-20 rounded-t-lg bg-primary dark:bg-accent"
                                    >
                                        <img
                                            class="h-full w-full rounded-t-lg object-cover object-center"
                                            src="images/800x600.png"
                                            alt="image"
                                        />
                                    </div>
                                    <div class="px-4 py-2 sm:px-5">
                                        <div class="flex justify-between space-x-4">
                                            <div class="avatar -mt-12 h-20 w-20">
                                                <img
                                                    class="rounded-full border-2 border-white dark:border-navy-700"
                                                    src="images/200x200.png"
                                                    alt="avatar"
                                                />
                                            </div>
                                            <div class="flex space-x-2">
                                                <button
                                                    class="btn h-7 w-7 rounded-full bg-primary/10 p-0 text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-accent-light/10 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25"
                                                >
                                                    <i class="fab fa-twitter"></i>
                                                </button>
                                                <button
                                                    class="btn h-7 w-7 rounded-full bg-primary/10 p-0 text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-accent-light/10 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25"
                                                >
                                                    <i class="fab fa-instagram text-base"></i>
                                                </button>
                                                <button
                                                    class="btn h-7 w-7 rounded-full bg-primary/10 p-0 text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-accent-light/10 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25"
                                                >
                                                    <i class="fab fa-facebook-f"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <h3
                                            class="pt-2 text-base font-medium text-slate-700 dark:text-navy-100"
                                        >
                                            Konnor Guzman
                                        </h3>
                                        <p
                                            class="text-xs text-slate-400 dark:text-navy-300"
                                        >
                                            USA, Washington DC
                                        </p>
                                        <div class="mt-2 flex items-center space-x-4">
                                            <div class="w-9/12">
                                                <div
                                                    id="writer-chart-2"
                                                    class="ax-transparent-gridline"
                                                ></div>
                                            </div>
                                            <div class="w-3/12 text-center">
                                                <p
                                                    class="text-xl font-medium text-slate-700 dark:text-navy-100"
                                                >
                                                    24
                                                </p>
                                                <p class="text-xs+">Posts</p>
                                            </div>
                                        </div>
                                        <div class="mt-3 flex justify-between">
                                            <div class="flex -space-x-2">
                                                <div class="avatar h-7 w-7 hover:z-10">
                                                    <img
                                                        class="rounded-full ring ring-white dark:ring-navy-700"
                                                        src="images/200x200.png"
                                                        alt="avatar"
                                                    />
                                                </div>

                                                <div class="avatar h-7 w-7 hover:z-10">
                                                    <div
                                                        class="is-initial rounded-full bg-info text-xs+ uppercase text-white ring ring-white dark:ring-navy-700"
                                                    >
                                                        jd
                                                    </div>
                                                </div>

                                                <div class="avatar h-7 w-7 hover:z-10">
                                                    <img
                                                        class="rounded-full ring ring-white dark:ring-navy-700"
                                                        src="images/200x200.png"
                                                        alt="avatar"
                                                    />
                                                </div>
                                            </div>
                                            <button
                                                class="btn h-7 w-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    class="h-5 w-5"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    stroke-width="1.5"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                                    />
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="h-8"></div>
                                </div>

                                <div class="swiper-slide">
                                    <div
                                        class="h-20 rounded-t-lg bg-primary dark:bg-accent"
                                    >
                                        <img
                                            class="h-full w-full rounded-t-lg object-cover object-center"
                                            src="images/800x600.png"
                                            alt="image"
                                        />
                                    </div>
                                    <div class="px-4 py-2 sm:px-5">
                                        <div class="flex justify-between space-x-4">
                                            <div class="avatar -mt-12 h-20 w-20">
                                                <img
                                                    class="rounded-full border-2 border-white dark:border-navy-700"
                                                    src="images/200x200.png"
                                                    alt="avatar"
                                                />
                                            </div>
                                            <div class="flex space-x-2">
                                                <button
                                                    class="btn h-7 w-7 rounded-full bg-primary/10 p-0 text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-accent-light/10 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25"
                                                >
                                                    <i class="fab fa-twitter"></i>
                                                </button>
                                                <button
                                                    class="btn h-7 w-7 rounded-full bg-primary/10 p-0 text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-accent-light/10 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25"
                                                >
                                                    <i class="fab fa-instagram text-base"></i>
                                                </button>
                                                <button
                                                    class="btn h-7 w-7 rounded-full bg-primary/10 p-0 text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-accent-light/10 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25"
                                                >
                                                    <i class="fab fa-facebook-f"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <h3
                                            class="pt-2 text-base font-medium text-slate-700 dark:text-navy-100"
                                        >
                                            Travis Fuller
                                        </h3>
                                        <p
                                            class="text-xs text-slate-400 dark:text-navy-300"
                                        >
                                            UK, London
                                        </p>
                                        <div class="mt-3 flex items-center space-x-4">
                                            <div class="w-9/12">
                                                <div
                                                    id="writer-chart-3"
                                                    class="ax-transparent-gridline"
                                                ></div>
                                            </div>
                                            <div class="w-3/12 text-center">
                                                <p
                                                    class="text-xl font-medium text-slate-700 dark:text-navy-100"
                                                >
                                                    168
                                                </p>
                                                <p class="text-xs+">Posts</p>
                                            </div>
                                        </div>
                                        <div class="mt-3 flex justify-between">
                                            <div class="flex -space-x-2">
                                                <div class="avatar h-7 w-7 hover:z-10">
                                                    <img
                                                        class="rounded-full ring ring-white dark:ring-navy-700"
                                                        src="images/200x200.png"
                                                        alt="avatar"
                                                    />
                                                </div>

                                                <div class="avatar h-7 w-7 hover:z-10">
                                                    <div
                                                        class="is-initial rounded-full bg-warning text-xs+ uppercase text-white ring ring-white dark:ring-navy-700"
                                                    >
                                                        qe
                                                    </div>
                                                </div>

                                                <div class="avatar h-7 w-7 hover:z-10">
                                                    <img
                                                        class="rounded-full ring ring-white dark:ring-navy-700"
                                                        src="images/200x200.png"
                                                        alt="avatar"
                                                    />
                                                </div>
                                            </div>
                                            <button
                                                class="btn h-7 w-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    class="h-5 w-5"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    stroke-width="1.5"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                                    />
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="h-9"></div>
                                </div>

                                <div class="swiper-slide">
                                    <div
                                        class="h-20 rounded-t-lg bg-primary dark:bg-accent"
                                    >
                                        <img
                                            class="h-full w-full rounded-t-lg object-cover object-center"
                                            src="images/800x600.png"
                                            alt="image"
                                        />
                                    </div>
                                    <div class="px-4 py-2 sm:px-5">
                                        <div class="flex justify-between space-x-4">
                                            <div class="avatar -mt-12 h-20 w-20">
                                                <img
                                                    class="rounded-full border-2 border-white dark:border-navy-700"
                                                    src="images/200x200.png"
                                                    alt="avatar"
                                                />
                                            </div>
                                            <div class="flex space-x-2">
                                                <button
                                                    class="btn h-7 w-7 rounded-full bg-primary/10 p-0 text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-accent-light/10 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25"
                                                >
                                                    <i class="fab fa-twitter"></i>
                                                </button>
                                                <button
                                                    class="btn h-7 w-7 rounded-full bg-primary/10 p-0 text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-accent-light/10 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25"
                                                >
                                                    <i class="fab fa-instagram text-base"></i>
                                                </button>
                                                <button
                                                    class="btn h-7 w-7 rounded-full bg-primary/10 p-0 text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-accent-light/10 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25"
                                                >
                                                    <i class="fab fa-facebook-f"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <h3
                                            class="pt-2 text-base font-medium text-slate-700 dark:text-navy-100"
                                        >
                                            Alfredo Elliott
                                        </h3>
                                        <p
                                            class="text-xs text-slate-400 dark:text-navy-300"
                                        >
                                            Australia, Sydney
                                        </p>
                                        <div class="mt-3 flex items-center space-x-4">
                                            <div class="w-9/12">
                                                <div
                                                    id="writer-chart-1"
                                                    class="ax-transparent-gridline"
                                                ></div>
                                            </div>
                                            <div class="w-3/12 text-center">
                                                <p
                                                    class="text-xl font-medium text-slate-700 dark:text-navy-100"
                                                >
                                                    426
                                                </p>
                                                <p class="text-xs+">Posts</p>
                                            </div>
                                        </div>
                                        <div class="mt-3 flex justify-between">
                                            <div class="flex -space-x-2">
                                                <div class="avatar h-7 w-7 hover:z-10">
                                                    <img
                                                        class="rounded-full ring ring-white dark:ring-navy-700"
                                                        src="images/200x200.png"
                                                        alt="avatar"
                                                    />
                                                </div>

                                                <div class="avatar h-7 w-7 hover:z-10">
                                                    <div
                                                        class="is-initial rounded-full bg-error text-xs+ uppercase text-white ring ring-white dark:ring-navy-700"
                                                    >
                                                        za
                                                    </div>
                                                </div>

                                                <div class="avatar h-7 w-7 hover:z-10">
                                                    <img
                                                        class="rounded-full ring ring-white dark:ring-navy-700"
                                                        src="images/200x200.png"
                                                        alt="avatar"
                                                    />
                                                </div>
                                            </div>
                                            <button
                                                class="btn h-7 w-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    class="h-5 w-5"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    stroke-width="1.5"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                                    />
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="h-9"></div>
                                </div>
                            </div>
                            <div class="swiper-pagination"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
