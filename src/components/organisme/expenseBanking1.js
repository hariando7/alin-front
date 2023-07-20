import Link from "next/link";
import Image from "next/image";

export default function expenseBanking1() {
    return (
        <>
            {/* <!-- expenseBanking1 --> */}
            <div class="card p-4 sm:p-5">
                <div
                    class="flex h-12 w-12 items-center justify-center rounded-xl bg-warning shadow-xl shadow-warning/50"
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
                            stroke-width="1.5"
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                    </svg>
                </div>
                <p class="mt-16">Expense</p>
                <p class="mt-2 font-medium text-slate-700 dark:text-navy-100">
                    <span class="text-2xl">$7</span
                    ><span class="text-base">.14k</span>
                </p>
                <p class="mt-1 flex items-center text-xs text-error">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4 text-error"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M17 13l-5 5m0 0l-5-5m5 5V6"
                        />
                    </svg>
                    <span>1.9%</span>
                </p>
            </div>
        </>
    );
}