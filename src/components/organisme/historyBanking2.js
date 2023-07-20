

import Image from "next/image";
import Input from "../atom/Input";


export default function historyBanking2() {
    return (
        <>
            {/* <!-- historyBanking2 --> */}
            <div class="card group col-span-12 pb-5 lg:col-span-8">
                <div
                    class="my-3 flex flex-col justify-between px-4 sm:flex-row sm:items-center sm:px-5"
                >
                    <div
                        class="flex flex-1 items-center justify-between space-x-2 sm:flex-initial"
                    >
                        <h2
                            class="text-sm+ font-medium tracking-wide text-slate-700 dark:text-navy-100"
                        >
                            History
                        </h2>
                        <div id="history-menu" class="inline-flex">
                            <button
                                class="popper-ref btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
                    <div class="flex items-center space-x-4">
                        <div class="flex cursor-pointer items-center space-x-2">
                            <div class="h-3 w-3 rounded-full bg-accent"></div>
                            <p>Sales</p>
                        </div>
                        <div class="flex cursor-pointer items-center space-x-2">
                            <div class="h-3 w-3 rounded-full bg-info"></div>
                            <p>Profit</p>
                        </div>
                    </div>
                </div>

                <div
                    class="grid grid-cols-12 gap-4 px-4 sm:gap-5 sm:px-5 lg:gap-6 lg:px-5"
                >
                    <div
                        class="col-span-12 sm:order-last sm:col-span-6 sm:mt-2 xl:col-span-7"
                    >
                        <div class="ax-transparent-gridline">
                            <div id="history-chart"></div>
                        </div>
                    </div>
                    <div
                        class="col-span-12 rounded-lg bg-slate-50 p-3 dark:bg-navy-600 sm:col-span-6 xl:col-span-5"
                    >
                        <div class="space-y-4">
                            <div class="flex cursor-pointer items-center justify-between">
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
                                            class="text-slate-700 line-clamp-1 dark:text-navy-100"
                                        >
                                            Konnor Guzman
                                        </p>
                                        <p
                                            class="text-xs text-slate-400 line-clamp-1 dark:text-navy-200"
                                        >
                                            Dec 21, 2021 - 08:05
                                        </p>
                                    </div>
                                </div>
                                <p class="font-medium text-success">$660.22</p>
                            </div>
                            <div class="flex cursor-pointer items-center justify-between">
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
                                            class="text-slate-700 line-clamp-1 dark:text-navy-100"
                                        >
                                            Henry Curtis
                                        </p>
                                        <p
                                            class="text-xs text-slate-400 line-clamp-1 dark:text-navy-200"
                                        >
                                            Dec 19, 2021 - 11:55
                                        </p>
                                    </div>
                                </div>
                                <p class="font-medium text-success">$33.63</p>
                            </div>
                            <div class="flex cursor-pointer items-center justify-between">
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
                                            class="text-slate-700 line-clamp-1 dark:text-navy-100"
                                        >
                                            Derrick Simmons
                                        </p>
                                        <p
                                            class="text-xs text-slate-400 line-clamp-1 dark:text-navy-200"
                                        >
                                            Dec 16, 2021 - 14:45
                                        </p>
                                    </div>
                                </div>
                                <p class="font-medium text-success">$674.63</p>
                            </div>
                            <div class="flex cursor-pointer items-center justify-between">
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
                                            class="text-slate-700 line-clamp-1 dark:text-navy-100"
                                        >
                                            Kartina West
                                        </p>
                                        <p
                                            class="text-xs text-slate-400 line-clamp-1 dark:text-navy-200"
                                        >
                                            Dec 13, 2021 - 11:30
                                        </p>
                                    </div>
                                </div>
                                <p class="font-medium text-error">$547.63</p>
                            </div>
                            <div class="flex cursor-pointer items-center justify-between">
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
                                            class="text-slate-700 line-clamp-1 dark:text-navy-100"
                                        >
                                            Samantha Shelton
                                        </p>
                                        <p
                                            class="text-xs text-slate-400 line-clamp-1 dark:text-navy-200"
                                        >
                                            Dec 10, 2021 - 09:41
                                        </p>
                                    </div>
                                </div>
                                <p class="font-medium text-success">$736.24</p>
                            </div>
                            <div class="flex cursor-pointer items-center justify-between">
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
                                            class="text-slate-700 line-clamp-1 dark:text-navy-100"
                                        >
                                            Joe Perkins
                                        </p>
                                        <p
                                            class="text-xs text-slate-400 line-clamp-1 dark:text-navy-200"
                                        >
                                            Dec 06, 2021 - 11:41
                                        </p>
                                    </div>
                                </div>
                                <p class="font-medium text-success">$558.88</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
