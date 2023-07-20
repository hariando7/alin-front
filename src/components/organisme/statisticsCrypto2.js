

import Image from "next/image";
import Input from "../atom/Input";


export default function statisticsCrypto2() {
    return (
        <>
            {/* <!-- Statistics --> */}
            <div class="card px-5 pb-3">
                <div class="flex items-center justify-between py-3">
                    <h3
                        class="text-base font-medium text-slate-800 dark:text-navy-50"
                    >
                        Statistics
                    </h3>

                    <div
                        class="flex space-x-4 font-inter text-slate-700 dark:text-navy-100"
                        id="statistics-tab"
                        data-active-tab="#statistics-tab-12hr"
                    >
                        <div
                            class="hidden w-full justify-between space-x-4 font-inter text-slate-700 dark:text-navy-100 sm:flex"
                        >
                            <button
                                data-target="#statistics-tab-1wk"
                                class="tab font-medium tracking-wide"
                                data-active-class="text-primary dark:text-accent-light"
                            >
                                1 Wk
                            </button>

                            <button
                                data-target="#statistics-tab-5days"
                                class="tab font-medium tracking-wide"
                                data-active-class="text-primary dark:text-accent-light"
                            >
                                5 days
                            </button>

                            <button
                                data-target="#statistics-tab-1day"
                                class="tab font-medium tracking-wide"
                                data-active-class="text-primary dark:text-accent-light"
                            >
                                1 days
                            </button>

                            <button
                                data-target="#statistics-tab-12hr"
                                class="tab font-medium tracking-wide"
                                data-active-class="text-primary dark:text-accent-light"
                            >
                                12 Hr
                            </button>

                            <button
                                data-target="#statistics-tab-1hr"
                                class="tab font-medium tracking-wide"
                                data-active-class="text-primary dark:text-accent-light"
                            >
                                1 Hr
                            </button>
                        </div>

                        <div id="statistics-menu" class="inline-flex">
                            <button
                                class="popper-ref btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25 sm:-mr-1.5"
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
                </div>
                <div>
                    <div id="candlestick-chart"></div>
                </div>
            </div>
        </>
    );
};
