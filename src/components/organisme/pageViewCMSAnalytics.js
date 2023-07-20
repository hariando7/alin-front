import Image from "next/image";
import Input from "../atom/Input";


export default function pageViewCMSAnalytics() {
    return (
        <>
            {/* <!-- pageViewCMSAnalytics --> */}
            <div class="card col-span-12 pb-4">
                <div class="mt-3 flex items-center justify-between px-4 sm:px-5">
                    <h2
                        class="text-sm+ font-medium tracking-wide text-slate-700 dark:text-navy-100"
                    >
                        Page Views
                    </h2>

                    <div class="flex items-center space-x-4">
                        <div
                            class="hidden cursor-pointer items-center space-x-2 sm:flex"
                        >
                            <div class="h-3 w-3 rounded-full bg-accent"></div>
                            <p>Current Period</p>
                        </div>
                        <div
                            class="hidden cursor-pointer items-center space-x-2 sm:flex"
                        >
                            <div class="h-3 w-3 rounded-full bg-warning"></div>
                            <p>Previous Period</p>
                        </div>
                        <select
                            class="form-select h-8 rounded-full border border-slate-300 bg-white px-2.5 pr-9 text-xs+ hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:bg-navy-700 dark:hover:border-navy-400 dark:focus:border-accent"
                        >
                            <option>Last week</option>
                            <option>Last month</option>
                            <option>Last year</option>
                        </select>
                    </div>
                </div>
                <div class="mt-3 grid grid-cols-12">
                    <div class="col-span-12 px-4 sm:col-span-6 sm:px-5 lg:col-span-4">
                        <select id="pages-list" class="mt-1.5 w-full">
                            <option>Travel Blog Page</option>
                            <option>Courses Page</option>
                            <option>Grammar Page</option>
                            <option>Sport Page</option>
                            <option>Jobs Page</option>
                            <option>Server Status Page</option>
                        </select>
                        <div class="mt-6 grid grid-cols-2 gap-x-4 gap-y-8">
                            <div>
                                <p
                                    class="text-xs uppercase text-slate-400 dark:text-navy-300"
                                >
                                    Total Views
                                </p>
                                <p
                                    class="mt-1 text-xl font-medium text-slate-700 dark:text-navy-100"
                                >
                                    695,454
                                </p>
                            </div>

                            <div>
                                <p
                                    class="text-xs uppercase text-slate-400 dark:text-navy-300"
                                >
                                    Monthly increase
                                </p>
                                <p class="mt-1">
                                    <span
                                        class="text-xl font-medium text-slate-700 dark:text-navy-100"
                                    >
                                        16,146
                                    </span>
                                    <span class="text-xs text-success">+3%</span>
                                </p>
                            </div>
                            <div>
                                <p
                                    class="text-xs uppercase text-slate-400 dark:text-navy-300"
                                >
                                    Post made
                                </p>
                                <p
                                    class="mt-1 text-xl font-medium text-slate-700 dark:text-navy-100"
                                >
                                    469
                                </p>
                            </div>
                            <div>
                                <p
                                    class="text-xs uppercase text-slate-400 dark:text-navy-300"
                                >
                                    Avg post view
                                </p>
                                <p
                                    class="mt-1 text-xl font-medium text-slate-700 dark:text-navy-100"
                                >
                                    1,559
                                </p>
                            </div>
                            <div>
                                <p
                                    class="text-xs uppercase text-slate-400 dark:text-navy-300"
                                >
                                    Total comments
                                </p>
                                <p
                                    class="mt-1 text-xl font-medium text-slate-700 dark:text-navy-100"
                                >
                                    198
                                </p>
                            </div>
                            <div>
                                <p
                                    class="text-xs uppercase text-slate-400 dark:text-navy-300"
                                >
                                    Post Referred
                                </p>
                                <p
                                    class="mt-1 text-xl font-medium text-slate-700 dark:text-navy-100"
                                >
                                    49
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        class="ax-transparent-gridline col-span-12 px-2 sm:col-span-6 lg:col-span-8"
                    >
                        <div id="pages-view-chart"></div>
                    </div>
                </div>
            </div>
        </>
    );
};
