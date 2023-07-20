

import Image from "next/image";
import Input from "../atom/Input";


export default function salesOverview() {
    return (
        <>
            {/* <!-- salesOverview --> */}
            <div class="col-span-12 lg:col-span-8">
                <div class="flex items-center justify-between space-x-2">
                    <h2 class="text-base font-medium tracking-wide text-slate-800 line-clamp-1 dark:text-navy-100">
                        Sales Overview
                    </h2>
                    <div id="sales-tab"
                        class="is-scrollbar-hidden overflow-x-auto rounded-lg bg-slate-200 text-slate-600 dark:bg-navy-800 dark:text-navy-200">
                        <div class="tabs-list flex p-1">
                            <button data-target="#sales-recent-tab" class="tab btn shrink-0 px-3 py-1 text-xs+ font-medium"
                                data-active-class="bg-white shadow dark:bg-navy-500 dark:text-navy-100"
                                data-default-class="hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100">
                                Last month
                            </button>
                            <button data-target="#sales-all-tab" class="tab btn shrink-0 px-3 py-1 text-xs+ font-medium"
                                data-active-class="bg-white shadow dark:bg-navy-500 dark:text-navy-100"
                                data-default-class="hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100">
                                Last year
                            </button>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col sm:flex-row sm:space-x-7">
                    <div class="mt-4 flex shrink-0 flex-col items-center sm:items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-info" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="1.5">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                        </svg>
                        <div class="mt-4">
                            <div class="flex items-center space-x-1">
                                <p class="text-2xl font-semibold text-slate-700 dark:text-navy-100">
                                    $6,556.55
                                </p>
                                <button
                                    class="btn h-6 w-6 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor" stroke-width="1.5">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                    </svg>
                                </button>
                            </div>
                            <p class="text-xs text-slate-400 dark:text-navy-300">
                                this month
                            </p>
                        </div>
                        <div class="mt-3 flex items-center space-x-2">
                            <div class="ax-transparent-gridline w-28">
                                <div id="salesMonthChart"></div>
                            </div>
                            <div class="flex items-center space-x-0.5">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-success" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M7 11l5-5m0 0l5 5m-5-5v12" />
                                </svg>
                                <p class="text-sm+ text-slate-800 dark:text-navy-100">
                                    3.2%
                                </p>
                            </div>
                        </div>
                        <button
                            class="btn mt-8 space-x-2 rounded-full border border-slate-300 px-3 text-xs+ font-medium text-slate-700 hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-450 dark:text-navy-100 dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4.5 w-4.5 text-slate-400 dark:text-navy-300"
                                fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z" />
                            </svg>
                            <span> Download Report</span>
                        </button>
                    </div>

                    <div class="ax-transparent-gridline grid w-full grid-cols-1">
                        <div id="salesOverview"></div>
                    </div>
                </div>
            </div>
        </>
    );
};
