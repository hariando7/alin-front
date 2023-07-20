

import Image from "next/image";
import Input from "../atom/Input";


export default function savingBanking1() {
    return (
        <>
            {/* <!-- savingBanking1 --> */}
            <div class="card p-4 sm:p-5">
                <div
                    class="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary shadow-xl shadow-secondary/50"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        />
                    </svg>
                </div>
                <p class="mt-16">Saving</p>
                <p class="mt-2 font-medium text-slate-700 dark:text-navy-100">
                    <span class="text-2xl">$2</span
                    ><span class="text-base">.44k</span>
                </p>
                <p class="mt-1 flex items-center text-xs text-success">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4 text-success"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M7 11l5-5m0 0l5 5m-5-5v12"
                        />
                    </svg>
                    <span>3.47%</span>
                </p>
            </div>
        </>
    );
};
