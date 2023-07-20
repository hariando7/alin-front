import Image from "next/image";
import Input from "../atom/Input";


export default function recentPaymentsPersonal() {
    return (
        <>
            {/* <!-- recentPaymentsPersonal --> */}
            <div class="card px-4 pb-4 sm:px-5">
                <div class="my-3 flex h-8 items-center justify-between">
                    <h2
                        class="font-medium tracking-wide text-slate-700 dark:text-navy-100"
                    >
                        Recent Payments
                    </h2>
                    <a
                        href="#"
                        class="border-b border-dotted border-current pb-0.5 text-xs+ font-medium text-primary outline-none transition-colors duration-300 hover:text-primary/70 focus:text-primary/70 dark:text-accent-light dark:hover:text-accent-light/70 dark:focus:text-accent-light/70"
                    >View All</a
                    >
                </div>
                <div class="space-y-3.5">
                    <div class="flex cursor-pointer items-center justify-between">
                        <div class="flex items-center space-x-3.5">
                            <div class="avatar">
                                <img
                                    class="rounded-full"
                                    src="images/200x200.png"
                                    alt="avatar"
                                />
                            </div>
                            <div>
                                <p
                                    class="font-medium text-slate-700 dark:text-navy-100"
                                >
                                    Konnor Guzman
                                </p>
                                <p
                                    class="text-xs text-slate-400 line-clamp-1 dark:text-navy-300"
                                >
                                    Dec 21, 2021 - 08:05
                                </p>
                            </div>
                        </div>
                        <p class="font-medium text-slate-600 dark:text-navy-100">
                            $660.22
                        </p>
                    </div>
                    <div class="flex cursor-pointer items-center justify-between">
                        <div class="flex items-center space-x-3.5">
                            <div class="avatar">
                                <img
                                    class="rounded-full"
                                    src="images/200x200.png"
                                    alt="avatar"
                                />
                            </div>
                            <div>
                                <p
                                    class="font-medium text-slate-700 dark:text-navy-100"
                                >
                                    Henry Curtis
                                </p>
                                <p
                                    class="text-xs text-slate-400 line-clamp-1 dark:text-navy-300"
                                >
                                    Dec 19, 2021 - 11:55
                                </p>
                            </div>
                        </div>
                        <p class="font-medium text-slate-600 dark:text-navy-100">
                            $33.63
                        </p>
                    </div>
                    <div class="flex cursor-pointer items-center justify-between">
                        <div class="flex items-center space-x-3.5">
                            <div class="avatar">
                                <img
                                    class="rounded-full"
                                    src="images/200x200.png"
                                    alt="avatar"
                                />
                            </div>
                            <div>
                                <p
                                    class="font-medium text-slate-700 dark:text-navy-100"
                                >
                                    Derrick Simmons
                                </p>
                                <p
                                    class="text-xs text-slate-400 line-clamp-1 dark:text-navy-300"
                                >
                                    Dec 16, 2021 - 14:45
                                </p>
                            </div>
                        </div>
                        <p class="font-medium text-slate-600 dark:text-navy-100">
                            $674.63
                        </p>
                    </div>
                    <div class="flex cursor-pointer items-center justify-between">
                        <div class="flex items-center space-x-3.5">
                            <div class="avatar">
                                <img
                                    class="rounded-full"
                                    src="images/200x200.png"
                                    alt="avatar"
                                />
                            </div>
                            <div>
                                <p
                                    class="font-medium text-slate-700 dark:text-navy-100"
                                >
                                    Kartina West
                                </p>
                                <p
                                    class="text-xs text-slate-400 line-clamp-1 dark:text-navy-300"
                                >
                                    Dec 13, 2021 - 11:30
                                </p>
                            </div>
                        </div>
                        <p class="font-medium text-slate-600 dark:text-navy-100">
                            $547.63
                        </p>
                    </div>
                    <div class="flex cursor-pointer items-center justify-between">
                        <div class="flex items-center space-x-3.5">
                            <div class="avatar">
                                <img
                                    class="rounded-full"
                                    src="images/200x200.png"
                                    alt="avatar"
                                />
                            </div>
                            <div>
                                <p
                                    class="font-medium text-slate-700 dark:text-navy-100"
                                >
                                    Samantha Shelton
                                </p>
                                <p
                                    class="text-xs text-slate-400 line-clamp-1 dark:text-navy-300"
                                >
                                    Dec 10, 2021 - 09:41
                                </p>
                            </div>
                        </div>
                        <p class="font-medium text-slate-600 dark:text-navy-100">
                            $736.24
                        </p>
                    </div>
                    <div class="flex cursor-pointer items-center justify-between">
                        <div class="flex items-center space-x-3.5">
                            <div class="avatar">
                                <img
                                    class="rounded-full"
                                    src="images/200x200.png"
                                    alt="avatar"
                                />
                            </div>
                            <div>
                                <p
                                    class="font-medium text-slate-700 dark:text-navy-100"
                                >
                                    Joe Perkins
                                </p>
                                <p
                                    class="text-xs text-slate-400 line-clamp-1 dark:text-navy-300"
                                >
                                    Dec 06, 2021 - 11:41
                                </p>
                            </div>
                        </div>
                        <p class="font-medium text-slate-600 dark:text-navy-100">
                            $736.24
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};
