

import Image from "next/image";
import Input from "../atom/Input";


export default function contactListPersonal() {
    return (
        <>
            {/* <!-- contactListPersonal --> */}
            <div class="card px-4 pb-4 sm:px-5">
                <div class="my-3 flex h-8 items-center justify-between">
                    <h2
                        class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100"
                    >
                        Contact List
                    </h2>

                    <div id="contact-list-menu" class="inline-flex">
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

                <div class="space-y-3.5" id="contacts-accordion">
                    <div class="ac [&.is-active_.ac-header_.ac-icon]:rotate-180">
                        <div class="ac-header flex items-center justify-between">
                            <div class=" flex space-x-4">
                                <div class="avatar h-10 w-10">
                                    <img
                                        class="rounded-full"
                                        src="images/200x200.png"
                                        alt="avatar"
                                    />
                                </div>
                                <div>
                                    <h3
                                        class="font-medium text-slate-700 line-clamp-1 dark:text-navy-100"
                                    >
                                        Konnor Guzman
                                    </h3>
                                    <p class="mt-0.5 text-xs line-clamp-1">
                                        (01) 22 888 4444
                                    </p>
                                </div>
                            </div>
                            <button
                                class="ac-trigger btn h-7 w-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                            >
                                <i
                                    class="ac-icon fas fa-chevron-down transition-transform"
                                ></i>
                            </button>
                        </div>
                        <div class="ac-panel">
                            <div class="flex justify-between pt-4">
                                <button
                                    class="btn h-7 w-7 rounded-full bg-success/10 p-0 text-success hover:bg-success/20 focus:bg-success/20 active:bg-success/25"
                                >
                                    <i class="fa-solid fa-phone text-xs"></i>
                                </button>
                                <button
                                    class="btn h-7 w-7 rounded-full bg-warning/10 p-0 text-warning hover:bg-warning/20 focus:bg-warning/20 active:bg-warning/25"
                                >
                                    <i class="fa-solid fa-video text-xs"></i>
                                </button>
                                <button
                                    class="btn h-7 w-7 rounded-full bg-secondary/10 p-0 text-secondary hover:bg-secondary/20 focus:bg-secondary/20 active:bg-secondary/25 dark:bg-secondary-light/10 dark:text-secondary-light dark:hover:bg-secondary-light/20 dark:focus:bg-secondary-light/20 dark:active:bg-secondary-light/25"
                                >
                                    <i class="fa-regular fa-comment text-xs"></i>
                                </button>
                                <button
                                    class="btn h-7 w-7 rounded-full bg-info/10 p-0 text-info hover:bg-info/20 focus:bg-info/20 active:bg-info/25"
                                >
                                    <i class="fa-regular fa-envelope text-xs"></i>
                                </button>
                                <button
                                    class="btn h-7 w-7 rounded-full bg-slate-150 p-0 text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
                                >
                                    <i class="fa-solid fa-ellipsis"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="ac [&.is-active_.ac-header_.ac-icon]:rotate-180">
                        <div class="ac-header flex items-center justify-between">
                            <div class="flex space-x-4">
                                <div class="avatar h-10 w-10">
                                    <img
                                        class="rounded-full"
                                        src="images/200x200.png"
                                        alt="avatar"
                                    />
                                </div>
                                <div>
                                    <h3
                                        class="font-medium text-slate-700 line-clamp-1 dark:text-navy-100"
                                    >
                                        Alfredo Elliott
                                    </h3>
                                    <p class="mt-0.5 text-xs line-clamp-1">
                                        (095)-800-8313
                                    </p>
                                </div>
                            </div>
                            <button
                                class="ac-trigger btn h-7 w-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                            >
                                <i
                                    class="ac-icon fas fa-chevron-down transition-transform"
                                ></i>
                            </button>
                        </div>
                        <div class="ac-panel">
                            <div class="flex justify-between pt-4">
                                <button
                                    class="btn h-7 w-7 rounded-full bg-success/10 p-0 text-success hover:bg-success/20 focus:bg-success/20 active:bg-success/25"
                                >
                                    <i class="fa-solid fa-phone text-xs"></i>
                                </button>
                                <button
                                    class="btn h-7 w-7 rounded-full bg-warning/10 p-0 text-warning hover:bg-warning/20 focus:bg-warning/20 active:bg-warning/25"
                                >
                                    <i class="fa-solid fa-video text-xs"></i>
                                </button>
                                <button
                                    class="btn h-7 w-7 rounded-full bg-secondary/10 p-0 text-secondary hover:bg-secondary/20 focus:bg-secondary/20 active:bg-secondary/25 dark:bg-secondary-light/10 dark:text-secondary-light dark:hover:bg-secondary-light/20 dark:focus:bg-secondary-light/20 dark:active:bg-secondary-light/25"
                                >
                                    <i class="fa-regular fa-comment text-xs"></i>
                                </button>
                                <button
                                    class="btn h-7 w-7 rounded-full bg-info/10 p-0 text-info hover:bg-info/20 focus:bg-info/20 active:bg-info/25"
                                >
                                    <i class="fa-regular fa-envelope text-xs"></i>
                                </button>
                                <button
                                    class="btn h-7 w-7 rounded-full bg-slate-150 p-0 text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
                                >
                                    <i class="fa-solid fa-ellipsis"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="ac [&.is-active_.ac-header_.ac-icon]:rotate-180">
                        <div class="ac-header flex items-center justify-between">
                            <div class="flex space-x-4">
                                <div class="avatar h-10 w-10">
                                    <div
                                        class="is-initial rounded-full bg-info text-sm+ uppercase text-white"
                                    >
                                        ds
                                    </div>
                                </div>
                                <div>
                                    <h3
                                        class="font-medium text-slate-700 line-clamp-1 dark:text-navy-100"
                                    >
                                        Derrick Simmons
                                    </h3>
                                    <p class="mt-0.5 text-xs line-clamp-1">
                                        (350)-813-3861
                                    </p>
                                </div>
                            </div>
                            <button
                                class="ac-trigger btn h-7 w-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                            >
                                <i
                                    class="ac-icon fas fa-chevron-down transition-transform"
                                ></i>
                            </button>
                        </div>
                        <div class="ac-panel">
                            <div class="flex justify-between pt-4">
                                <button
                                    class="btn h-7 w-7 rounded-full bg-success/10 p-0 text-success hover:bg-success/20 focus:bg-success/20 active:bg-success/25"
                                >
                                    <i class="fa-solid fa-phone text-xs"></i>
                                </button>
                                <button
                                    class="btn h-7 w-7 rounded-full bg-warning/10 p-0 text-warning hover:bg-warning/20 focus:bg-warning/20 active:bg-warning/25"
                                >
                                    <i class="fa-solid fa-video text-xs"></i>
                                </button>
                                <button
                                    class="btn h-7 w-7 rounded-full bg-secondary/10 p-0 text-secondary hover:bg-secondary/20 focus:bg-secondary/20 active:bg-secondary/25 dark:bg-secondary-light/10 dark:text-secondary-light dark:hover:bg-secondary-light/20 dark:focus:bg-secondary-light/20 dark:active:bg-secondary-light/25"
                                >
                                    <i class="fa-regular fa-comment text-xs"></i>
                                </button>
                                <button
                                    class="btn h-7 w-7 rounded-full bg-info/10 p-0 text-info hover:bg-info/20 focus:bg-info/20 active:bg-info/25"
                                >
                                    <i class="fa-regular fa-envelope text-xs"></i>
                                </button>
                                <button
                                    class="btn h-7 w-7 rounded-full bg-slate-150 p-0 text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
                                >
                                    <i class="fa-solid fa-ellipsis"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="ac [&.is-active_.ac-header_.ac-icon]:rotate-180">
                        <div class="ac-header flex items-center justify-between">
                            <div class="flex space-x-4">
                                <div class="avatar h-10 w-10">
                                    <img
                                        class="rounded-full"
                                        src="images/200x200.png"
                                        alt="avatar"
                                    />
                                </div>
                                <div>
                                    <h3
                                        class="font-medium text-slate-700 line-clamp-1 dark:text-navy-100"
                                    >
                                        Henry Curtis
                                    </h3>
                                    <p class="mt-0.5 text-xs line-clamp-1">
                                        (675)-975-0083
                                    </p>
                                </div>
                            </div>
                            <button
                                class="ac-trigger btn h-7 w-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                            >
                                <i
                                    class="ac-icon fas fa-chevron-down transition-transform"
                                ></i>
                            </button>
                        </div>
                        <div class="ac-panel">
                            <div class="flex justify-between pt-4">
                                <button
                                    class="btn h-7 w-7 rounded-full bg-success/10 p-0 text-success hover:bg-success/20 focus:bg-success/20 active:bg-success/25"
                                >
                                    <i class="fa-solid fa-phone text-xs"></i>
                                </button>
                                <button
                                    class="btn h-7 w-7 rounded-full bg-warning/10 p-0 text-warning hover:bg-warning/20 focus:bg-warning/20 active:bg-warning/25"
                                >
                                    <i class="fa-solid fa-video text-xs"></i>
                                </button>
                                <button
                                    class="btn h-7 w-7 rounded-full bg-secondary/10 p-0 text-secondary hover:bg-secondary/20 focus:bg-secondary/20 active:bg-secondary/25 dark:bg-secondary-light/10 dark:text-secondary-light dark:hover:bg-secondary-light/20 dark:focus:bg-secondary-light/20 dark:active:bg-secondary-light/25"
                                >
                                    <i class="fa-regular fa-comment text-xs"></i>
                                </button>
                                <button
                                    class="btn h-7 w-7 rounded-full bg-info/10 p-0 text-info hover:bg-info/20 focus:bg-info/20 active:bg-info/25"
                                >
                                    <i class="fa-regular fa-envelope text-xs"></i>
                                </button>
                                <button
                                    class="btn h-7 w-7 rounded-full bg-slate-150 p-0 text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
                                >
                                    <i class="fa-solid fa-ellipsis"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="ac [&.is-active_.ac-header_.ac-icon]:rotate-180">
                        <div class="ac-header flex items-center justify-between">
                            <div class="flex space-x-4">
                                <div class="avatar h-10 w-10">
                                    <img
                                        class="rounded-full"
                                        src="images/200x200.png"
                                        alt="avatar"
                                    />
                                </div>
                                <div>
                                    <h3
                                        class="font-medium text-slate-700 line-clamp-1 dark:text-navy-100"
                                    >
                                        John Doe
                                    </h3>
                                    <p class="mt-0.5 text-xs line-clamp-1">
                                        (727)-810-3880
                                    </p>
                                </div>
                            </div>
                            <button
                                class="ac-trigger btn h-7 w-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                            >
                                <i
                                    class="ac-icon fas fa-chevron-down transition-transform"
                                ></i>
                            </button>
                        </div>
                        <div class="ac-panel">
                            <div class="flex justify-between pt-4">
                                <button
                                    class="btn h-7 w-7 rounded-full bg-success/10 p-0 text-success hover:bg-success/20 focus:bg-success/20 active:bg-success/25"
                                >
                                    <i class="fa-solid fa-phone text-xs"></i>
                                </button>
                                <button
                                    class="btn h-7 w-7 rounded-full bg-warning/10 p-0 text-warning hover:bg-warning/20 focus:bg-warning/20 active:bg-warning/25"
                                >
                                    <i class="fa-solid fa-video text-xs"></i>
                                </button>
                                <button
                                    class="btn h-7 w-7 rounded-full bg-secondary/10 p-0 text-secondary hover:bg-secondary/20 focus:bg-secondary/20 active:bg-secondary/25 dark:bg-secondary-light/10 dark:text-secondary-light dark:hover:bg-secondary-light/20 dark:focus:bg-secondary-light/20 dark:active:bg-secondary-light/25"
                                >
                                    <i class="fa-regular fa-comment text-xs"></i>
                                </button>
                                <button
                                    class="btn h-7 w-7 rounded-full bg-info/10 p-0 text-info hover:bg-info/20 focus:bg-info/20 active:bg-info/25"
                                >
                                    <i class="fa-regular fa-envelope text-xs"></i>
                                </button>
                                <button
                                    class="btn h-7 w-7 rounded-full bg-slate-150 p-0 text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
                                >
                                    <i class="fa-solid fa-ellipsis"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
