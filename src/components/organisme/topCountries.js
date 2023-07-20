

import Image from "next/image";
import Input from "../atom/Input";


export default function topCountries() {
    return (
        <>
            {/* <!-- topCountries --> */}
            <div class="card px-4 pb-5 sm:px-5">
                <div class="my-3 flex h-8 items-center justify-between">
                    <h2 class="font-medium tracking-wide text-slate-700 dark:text-navy-100">
                        Top Countries
                    </h2>
                    <a href="#"
                        class="border-b border-dotted border-current pb-0.5 text-xs+ font-medium text-primary outline-none transition-colors duration-300 hover:text-primary/70 focus:text-primary/70 dark:text-accent-light dark:hover:text-accent-light/70 dark:focus:text-accent-light/70">
                        View All
                    </a>
                </div>
                <div>
                    <p>
                        <span class="text-2xl text-slate-700 dark:text-navy-100">64</span>
                    </p>
                    <p class="text-xs+">Countries</p>
                </div>
                <div class="mt-5 space-y-4">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center space-x-2">
                            <img class="h-6 w-6" src="images/flags/australia-round.svg" alt="flag" />
                            <p>Australia</p>
                        </div>
                        <div class="flex items-center space-x-2">
                            <p class="text-sm+ text-slate-800 dark:text-navy-100">
                                $6.41k
                            </p>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-success" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M7 11l5-5m0 0l5 5m-5-5v12" />
                            </svg>
                        </div>
                    </div>
                    <div class="flex items-center justify-between">
                        <div class="flex items-center space-x-2">
                            <img class="h-6 w-6" src="images/flags/brazil-round.svg" alt="flag" />
                            <p>Brazil</p>
                        </div>
                        <div class="flex items-center space-x-2">
                            <p class="text-sm+ text-slate-800 dark:text-navy-100">
                                $2.33k
                            </p>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-success" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M7 11l5-5m0 0l5 5m-5-5v12" />
                            </svg>
                        </div>
                    </div>
                    <div class="flex items-center justify-between">
                        <div class="flex items-center space-x-2">
                            <img class="h-6 w-6" src="images/flags/china-round.svg" alt="flag" />
                            <p>China</p>
                        </div>
                        <div class="flex items-center space-x-2">
                            <p class="text-sm+ text-slate-800 dark:text-navy-100">
                                $7.21k
                            </p>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-success" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M7 11l5-5m0 0l5 5m-5-5v12" />
                            </svg>
                        </div>
                    </div>
                    <div class="flex items-center justify-between">
                        <div class="flex items-center space-x-2">
                            <img class="h-6 w-6" src="images/flags/india-round.svg" alt="flag" />
                            <p>India</p>
                        </div>
                        <div class="flex items-center space-x-2">
                            <p class="text-sm+ text-slate-800 dark:text-navy-100">
                                $754
                            </p>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-error" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M17 13l-5 5m0 0l-5-5m5 5V6" />
                            </svg>
                        </div>
                    </div>
                    <div class="flex items-center justify-between">
                        <div class="flex items-center space-x-2">
                            <img class="h-6 w-6" src="images/flags/italy-round.svg" alt="flag" />
                            <p>Italy</p>
                        </div>
                        <div class="flex items-center space-x-2">
                            <p class="text-sm+ text-slate-800 dark:text-navy-100">
                                $699
                            </p>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-success" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M7 11l5-5m0 0l5 5m-5-5v12" />
                            </svg>
                        </div>
                    </div>
                    <div class="flex items-center justify-between">
                        <div class="flex items-center space-x-2">
                            <img class="h-6 w-6" src="images/flags/japan-round.svg" alt="flag" />
                            <p>Japan</p>
                        </div>
                        <div class="flex items-center space-x-2">
                            <p class="text-sm+ text-slate-800 dark:text-navy-100">
                                $624
                            </p>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-success" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M7 11l5-5m0 0l5 5m-5-5v12" />
                            </svg>
                        </div>
                    </div>
                    <div class="flex items-center justify-between">
                        <div class="flex items-center space-x-2">
                            <img class="h-6 w-6" src="images/flags/russia-round.svg" alt="flag" />
                            <p>Russia</p>
                        </div>
                        <div class="flex items-center space-x-2">
                            <p class="text-sm+ text-slate-800 dark:text-navy-100">
                                $574
                            </p>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-error" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M17 13l-5 5m0 0l-5-5m5 5V6" />
                            </svg>
                        </div>
                    </div>
                    <div class="flex items-center justify-between">
                        <div class="flex items-center space-x-2">
                            <img class="h-6 w-6" src="images/flags/spain-round.svg" alt="flag" />
                            <p>Spain</p>
                        </div>
                        <div class="flex items-center space-x-2">
                            <p class="text-sm+ text-slate-800 dark:text-navy-100">
                                $506
                            </p>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-success" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M7 11l5-5m0 0l5 5m-5-5v12" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
