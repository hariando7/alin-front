

import Image from "next/image";
import Input from "../atom/Input";


export default function upcomingBanking1() {
    return (
        <>
            {/* <!-- upcomingBanking1 --> */}
            <div class="card p-4 sm:p-5">
                <div
                    class="flex h-12 w-12 items-center justify-center rounded-xl bg-info shadow-xl shadow-info/50"
                >
                    <i class="fa fa-coins text-xl text-white"></i>
                </div>
                <p class="mt-16">Upcoming</p>
                <p class="mt-2 font-medium text-slate-700 dark:text-navy-100">
                    <span class="text-2xl">$7</span
                    ><span class="text-base">.42k</span>
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
                    <span>7.11%</span>
                </p>
            </div>
        </>
    );
};
