

import Image from "next/image";
import Input from "../atom/Input";


export default function dataCrypto2() {
    return (
        <>
            {/* <!-- dataCrypto --> */}
            <div
                class="grid grid-cols-2 gap-4 sm:order-first sm:grid-cols-4 sm:gap-5 lg:gap-6"
            >
                <div
                    class="rounded-lg border border-slate-150 p-3 dark:border-navy-700"
                >
                    <div class="flex justify-between space-x-1">
                        <p
                            class="text-xl font-semibold text-slate-700 dark:text-navy-100"
                        >
                            $5,679
                        </p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 shrink-0 text-primary dark:text-accent"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="1.5"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                            />
                        </svg>
                    </div>
                    <p class="mt-1 text-xs+ line-clamp-1">Total Mining</p>
                </div>
                <div
                    class="rounded-lg border border-slate-150 p-3 dark:border-navy-700"
                >
                    <div class="flex justify-between">
                        <p
                            class="text-xl font-semibold text-slate-700 dark:text-navy-100"
                        >
                            $12.6k
                        </p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 shrink-0 text-success"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"
                            />
                        </svg>
                    </div>
                    <p class="mt-1 text-xs+ line-clamp-1">Total Networth</p>
                </div>
                <div
                    class="rounded-lg border border-slate-150 p-3 dark:border-navy-700"
                >
                    <div class="flex justify-between">
                        <p
                            class="text-xl font-semibold text-slate-700 dark:text-navy-100"
                        >
                            $10.3k
                        </p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 text-warning"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="1.5"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    </div>
                    <p class="mt-1 text-xs+ line-clamp-1">Earnings</p>
                </div>
                <div
                    class="rounded-lg border border-slate-150 p-3 dark:border-navy-700"
                >
                    <div class="flex justify-between">
                        <p
                            class="text-xl font-semibold text-slate-700 dark:text-navy-100"
                        >
                            651
                        </p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 text-info"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="1.5"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                            />
                        </svg>
                    </div>
                    <p class="mt-1 text-xs+ line-clamp-1">Harvested Losses</p>
                </div>
            </div>
        </>
    );
};
