

import Image from "next/image";
import Input from "../atom/Input";


export default function customerSatisfaction() {
    return (
        <>
            {/* CustomerStatisifacion */}
            <div class="col-span-12 lg:col-span-4">
                <div class="flex items-center justify-between">
                    <h2 class="font-medium tracking-wide text-slate-700 dark:text-navy-100">
                        Customer Satisfaction
                    </h2>
                    <div id="satisfaction-menu" class="inline-flex">
                        <button
                            class="popper-ref btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                            </svg>
                        </button>

                        <div class="popper-root">
                            <div
                                class="popper-box rounded-md border border-slate-150 bg-white py-1.5 font-inter dark:border-navy-500 dark:bg-navy-700">
                                <ul>
                                    <li>
                                        <a href="#"
                                            class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100">Action</a>
                                    </li>
                                    <li>
                                        <a href="#"
                                            class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100">Another
                                            Action</a>
                                    </li>
                                    <li>
                                        <a href="#"
                                            class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100">Something
                                            else</a>
                                    </li>
                                </ul>
                                <div class="my-1 h-px bg-slate-150 dark:bg-navy-500"></div>
                                <ul>
                                    <li>
                                        <a href="#"
                                            class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100">Separated
                                            Link</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-3">
                    <p>
                        <span class="text-3xl text-slate-700 dark:text-navy-100">9.7</span>
                        <span class="text-xs text-success">+2.1%</span>
                    </p>
                    <p class="text-xs+">Performance score</p>
                </div>
                <div class="mt-4 flex h-2 space-x-1">
                    <div class="w-5/12 rounded-full bg-primary dark:bg-accent" data-tooltip="Exellent" data-theme="primary">
                    </div>
                    <div class="w-2/12 rounded-full bg-success" data-tooltip="Very Good" data-theme="success"></div>
                    <div class="w-2/12 rounded-full bg-info" data-tooltip="Good" data-theme="info"></div>

                    <div class="w-2/12 rounded-full bg-warning" data-tooltip="Poor" data-theme="warning"></div>
                    <div class="w-1/12 rounded-full bg-error" data-tooltip="Very Poor" data-theme="error"></div>
                </div>

                <div class="is-scrollbar-hidden mt-4 min-w-full overflow-x-auto">
                    <table class="w-full font-inter">
                        <tbody>
                            <tr>
                                <td class="whitespace-nowrap py-2">
                                    <div class="flex items-center space-x-2">
                                        <div class="h-3.5 w-3.5 rounded-full border-2 border-primary dark:border-accent"></div>
                                        <p class="font-medium tracking-wide text-slate-700 dark:text-navy-100">
                                            Exellent
                                        </p>
                                    </div>
                                </td>
                                <td class="whitespace-nowrap py-2 text-right">
                                    <p class="font-medium text-slate-700 dark:text-navy-100">
                                        1 029
                                    </p>
                                </td>
                                <td class="whitespace-nowrap py-2 text-right">42%</td>
                            </tr>
                            <tr>
                                <td class="whitespace-nowrap py-2">
                                    <div class="flex items-center space-x-2">
                                        <div class="h-3.5 w-3.5 rounded-full border-2 border-success"></div>
                                        <p class="font-medium tracking-wide text-slate-700 dark:text-navy-100">
                                            Very Good
                                        </p>
                                    </div>
                                </td>
                                <td class="whitespace-nowrap py-2 text-right">
                                    <p class="font-medium text-slate-700 dark:text-navy-100">
                                        426
                                    </p>
                                </td>
                                <td class="whitespace-nowrap py-2 text-right">18%</td>
                            </tr>
                            <tr>
                                <td class="whitespace-nowrap py-2">
                                    <div class="flex items-center space-x-2">
                                        <div class="h-3.5 w-3.5 rounded-full border-2 border-info"></div>
                                        <p class="font-medium tracking-wide text-slate-700 dark:text-navy-100">
                                            Good
                                        </p>
                                    </div>
                                </td>
                                <td class="whitespace-nowrap py-2 text-right">
                                    <p class="font-medium text-slate-700 dark:text-navy-100">
                                        326
                                    </p>
                                </td>
                                <td class="whitespace-nowrap py-2 text-right">14%</td>
                            </tr>
                            <tr>
                                <td class="whitespace-nowrap py-2">
                                    <div class="flex items-center space-x-2">
                                        <div class="h-3.5 w-3.5 rounded-full border-2 border-warning"></div>
                                        <p class="font-medium tracking-wide text-slate-700 dark:text-navy-100">
                                            Poor
                                        </p>
                                    </div>
                                </td>
                                <td class="whitespace-nowrap py-2 text-right">
                                    <p class="font-medium text-slate-700 dark:text-navy-100">
                                        395
                                    </p>
                                </td>
                                <td class="whitespace-nowrap py-2 text-right">17%</td>
                            </tr>
                            <tr>
                                <td class="whitespace-nowrap py-2">
                                    <div class="flex items-center space-x-2">
                                        <div class="h-3.5 w-3.5 rounded-full border-2 border-error"></div>
                                        <p class="font-medium tracking-wide text-slate-700 dark:text-navy-100">
                                            Very Poor
                                        </p>
                                    </div>
                                </td>
                                <td class="whitespace-nowrap py-2 text-right">
                                    <p class="font-medium text-slate-700 dark:text-navy-100">
                                        129
                                    </p>
                                </td>
                                <td class="whitespace-nowrap py-2 text-right">9%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};
