

import Image from "next/image";
import Input from "../atom/Input";


export default function itemPersonal() {
    return (
        <>
            {/* <!-- itemPersonal --> */}
            <div
                class="grid grid-cols-1 gap-4 sm:col-span-2 sm:grid-cols-2 sm:gap-5 lg:gap-6"
            >
                <div class="card justify-center p-4.5">
                    <div class="flex items-center justify-between">
                        <div>
                            <p
                                class="text-base font-semibold text-slate-700 dark:text-navy-100"
                            >
                                56
                            </p>
                            <p class="text-xs+ line-clamp-1">Projects</p>
                        </div>
                        <div
                            class="mask is-star flex h-10 w-10 shrink-0 items-center justify-center bg-success"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                                    d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                                />
                            </svg>
                        </div>
                    </div>
                    <div>
                        <div
                            class="badge mt-2 space-x-1 bg-success/10 py-1 px-1.5 text-success dark:bg-success/15"
                        >
                            <span>10%</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-3.5 w-3.5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="card justify-center p-4.5">
                    <div class="flex items-center justify-between">
                        <div>
                            <p
                                class="text-base font-semibold text-slate-700 dark:text-navy-100"
                            >
                                324
                            </p>
                            <p class="text-xs+ line-clamp-1">Total hours</p>
                        </div>
                        <div
                            class="mask is-star flex h-10 w-10 shrink-0 items-center justify-center bg-info"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </div>
                    </div>
                    <div>
                        <div
                            class="badge mt-2 space-x-1 bg-success/10 py-1 px-1.5 text-success dark:bg-success/15"
                        >
                            <span>6%</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-3.5 w-3.5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="card justify-center p-4.5">
                    <div class="flex items-center justify-between">
                        <div>
                            <p
                                class="text-base font-semibold text-slate-700 dark:text-navy-100"
                            >
                                7
                            </p>
                            <p class="text-xs+ line-clamp-1">Support Ticket</p>
                        </div>
                        <div
                            class="mask is-star flex h-10 w-10 shrink-0 items-center justify-center bg-secondary"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                                />
                            </svg>
                        </div>
                    </div>
                    <div>
                        <div
                            class="badge mt-2 space-x-1 bg-success/10 py-1 px-1.5 text-success dark:bg-success/15"
                        >
                            <span>9%</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-3.5 w-3.5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="card justify-center p-4.5">
                    <div class="flex items-center justify-between">
                        <div>
                            <p
                                class="text-base font-semibold text-slate-700 dark:text-navy-100"
                            >
                                56
                            </p>
                            <p class="text-xs+ line-clamp-1">Active Task</p>
                        </div>
                        <div
                            class="mask is-star flex h-10 w-10 shrink-0 items-center justify-center bg-warning"
                        >
                            <svg
                                class="h-5 w-5 text-white"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M12.5293 18L20.9999 8.40002"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M3 13.2L7.23529 18L17.8235 6"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </div>
                    </div>
                    <div>
                        <div
                            class="badge mt-2 space-x-1 bg-error/10 py-1 px-1.5 text-error dark:bg-error/15"
                        >
                            <span>6%</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-3.5 w-3.5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
