import Image from "next/image";
import Input from "../atom/Input";


export default function postRankingsCMDAnalytics() {
    return (
        <>
            {/* <!-- postRankingsCMDAnalytics --> */}
            <div class="col-span-12 xl:col-span-5">
                <div class="-mt-1 flex items-center justify-between">
                    <h2
                        class="text-sm+ font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100"
                    >
                        Post Rankings
                    </h2>
                    <div class="flex">
                        <div class="table-search-wrapper flex items-center">
                            <label class="block">
                                <input
                                    class="table-search-input form-input w-0 bg-transparent px-1 text-right transition-all duration-100 placeholder:text-slate-500 dark:placeholder:text-navy-200"
                                    placeholder="Search here..."
                                    type="text"
                                />
                            </label>
                            <button
                                class="table-search-toggle btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-4.5 w-4.5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div id="post-rankings-menu" class="inline-flex">
                            <button
                                class="popper-ref btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-4.5 w-4.5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                                    />
                                </svg>
                            </button>
                            <div class="popper-root">
                                <div
                                    class="popper-box rounded-md border border-slate-150 bg-white py-1.5 font-inter dark:border-navy-500 dark:bg-navy-700"
                                >
                                    <ul>
                                        <li>
                                            <a
                                                href="#"
                                                class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                                            >Action</a
                                            >
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                                            >Another Action</a
                                            >
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                                            >Something else</a
                                            >
                                        </li>
                                    </ul>
                                    <div
                                        class="my-1 h-px bg-slate-150 dark:bg-navy-500"
                                    ></div>
                                    <ul>
                                        <li>
                                            <a
                                                href="#"
                                                class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                                            >Separated Link</a
                                            >
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card mt-3">
                    <div class="is-scrollbar-hidden min-w-full overflow-x-auto">
                        <table class="is-hoverable w-full text-left">
                            <thead>
                                <tr>
                                    <th
                                        class="whitespace-nowrap rounded-tl-lg bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100"
                                    >
                                        Rank
                                    </th>
                                    <th
                                        class="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"
                                    >
                                        Post Title
                                    </th>
                                    <th
                                        class="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"
                                    >
                                        View
                                    </th>

                                    <th
                                        class="whitespace-nowrap rounded-tr-lg bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"
                                    >
                                        Position
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr
                                    class="border-y border-transparent border-b-slate-200 dark:border-b-navy-500"
                                >
                                    <td class="whitespace-nowrap px-4 py-3">
                                        <p
                                            class="text-center text-base font-medium text-slate-700 dark:text-navy-100"
                                        >
                                            01.
                                        </p>
                                    </td>
                                    <td class="min-w-[20rem] px-4 py-3 sm:px-5">
                                        <div class="flex items-center space-x-4">
                                            <div class="avatar h-12 w-12">
                                                <img
                                                    class="rounded-lg object-cover object-center"
                                                    src="images/800x600.png"
                                                    alt="avatar"
                                                />
                                            </div>

                                            <span
                                                class="font-medium text-slate-700 line-clamp-2 dark:text-navy-100"
                                            >25 Surprising Facts About Chair
                                            </span>
                                        </div>
                                    </td>
                                    <td
                                        class="whitespace-nowrap px-4 py-3 font-medium text-slate-600 dark:text-navy-100 sm:px-5"
                                    >
                                        1,994
                                    </td>
                                    <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                                        <div class="flex items-center justify-end space-x-1">
                                            <p class="text-sm+ text-slate-800 dark:text-navy-100">
                                                2
                                            </p>
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
                                        </div>
                                    </td>
                                </tr>

                                <tr
                                    class="border-y border-transparent border-b-slate-200 dark:border-b-navy-500"
                                >
                                    <td class="whitespace-nowrap px-4 py-3">
                                        <p
                                            class="text-center text-base font-medium text-slate-700 dark:text-navy-100"
                                        >
                                            02.
                                        </p>
                                    </td>
                                    <td class="min-w-[20rem] px-4 py-3 sm:px-5">
                                        <div class="flex items-center space-x-4">
                                            <div class="avatar h-12 w-12">
                                                <img
                                                    class="rounded-lg object-cover object-center"
                                                    src="images/800x600.png"
                                                    alt="avatar"
                                                />
                                            </div>

                                            <span
                                                class="font-medium text-slate-700 line-clamp-2 dark:text-navy-100"
                                            >What is Tailwind CSS?
                                            </span>
                                        </div>
                                    </td>
                                    <td
                                        class="whitespace-nowrap px-4 py-3 font-medium text-slate-600 dark:text-navy-100 sm:px-5"
                                    >
                                        1,719
                                    </td>
                                    <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                                        <div class="flex items-center justify-end space-x-1">
                                            <p class="text-sm+ text-slate-800 dark:text-navy-100">
                                                3
                                            </p>
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
                                        </div>
                                    </td>
                                </tr>

                                <tr
                                    class="border-y border-transparent border-b-slate-200 dark:border-b-navy-500"
                                >
                                    <td class="whitespace-nowrap px-4 py-3">
                                        <p
                                            class="text-center text-base font-medium text-slate-700 dark:text-navy-100"
                                        >
                                            03.
                                        </p>
                                    </td>
                                    <td class="min-w-[20rem] px-4 py-3 sm:px-5">
                                        <div class="flex items-center space-x-4">
                                            <div class="avatar h-12 w-12">
                                                <img
                                                    class="rounded-lg object-cover object-center"
                                                    src="images/800x600.png"
                                                    alt="avatar"
                                                />
                                            </div>

                                            <span
                                                class="font-medium text-slate-700 line-clamp-2 dark:text-navy-100"
                                            >Tailwind CSS Card Example
                                            </span>
                                        </div>
                                    </td>
                                    <td
                                        class="whitespace-nowrap px-4 py-3 font-medium text-slate-600 dark:text-navy-100 sm:px-5"
                                    >
                                        1,621
                                    </td>
                                    <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                                        <div class="flex items-center justify-end space-x-1">
                                            <p class="text-sm+ text-slate-800 dark:text-navy-100">
                                                1
                                            </p>
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
                                        </div>
                                    </td>
                                </tr>

                                <tr
                                    class="border-y border-transparent border-b-slate-200 dark:border-b-navy-500"
                                >
                                    <td class="whitespace-nowrap px-4 py-3">
                                        <p
                                            class="text-center text-base font-medium text-slate-700 dark:text-navy-100"
                                        >
                                            04.
                                        </p>
                                    </td>
                                    <td class="min-w-[20rem] px-4 py-3 sm:px-5">
                                        <div class="flex items-center space-x-4">
                                            <div class="avatar h-12 w-12">
                                                <img
                                                    class="rounded-lg object-cover object-center"
                                                    src="images/800x600.png"
                                                    alt="avatar"
                                                />
                                            </div>

                                            <span
                                                class="font-medium text-slate-700 line-clamp-2 dark:text-navy-100"
                                            >What is PHP?
                                            </span>
                                        </div>
                                    </td>
                                    <td
                                        class="whitespace-nowrap px-4 py-3 font-medium text-slate-600 dark:text-navy-100 sm:px-5"
                                    >
                                        1,411
                                    </td>
                                    <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                                        <div class="flex items-center justify-end space-x-1">
                                            <p class="text-sm+ text-slate-800 dark:text-navy-100">
                                                1
                                            </p>
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
                                        </div>
                                    </td>
                                </tr>

                                <tr
                                    class="border-y border-transparent border-b-slate-200 dark:border-b-navy-500"
                                >
                                    <td class="whitespace-nowrap px-4 py-3">
                                        <p
                                            class="text-center text-base font-medium text-slate-700 dark:text-navy-100"
                                        >
                                            05.
                                        </p>
                                    </td>
                                    <td class="min-w-[20rem] px-4 py-3 sm:px-5">
                                        <div class="flex items-center space-x-4">
                                            <div class="avatar h-12 w-12">
                                                <img
                                                    class="rounded-lg object-cover object-center"
                                                    src="images/800x600.png"
                                                    alt="avatar"
                                                />
                                            </div>

                                            <span
                                                class="font-medium text-slate-700 line-clamp-2 dark:text-navy-100"
                                            >Top Design Systems
                                            </span>
                                        </div>
                                    </td>
                                    <td
                                        class="whitespace-nowrap px-4 py-3 font-medium text-slate-600 dark:text-navy-100 sm:px-5"
                                    >
                                        1,269
                                    </td>
                                    <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                                        <div class="flex items-center justify-end space-x-1">
                                            <p class="text-sm+ text-slate-800 dark:text-navy-100">
                                                2
                                            </p>
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
                                        </div>
                                    </td>
                                </tr>

                                <tr
                                    class="border-y border-transparent border-b-slate-200 dark:border-b-navy-500"
                                >
                                    <td class="whitespace-nowrap px-4 py-3">
                                        <p
                                            class="text-center text-base font-medium text-slate-700 dark:text-navy-100"
                                        >
                                            06.
                                        </p>
                                    </td>
                                    <td class="min-w-[20rem] px-4 py-3 sm:px-5">
                                        <div class="flex items-center space-x-4">
                                            <div class="avatar h-12 w-12">
                                                <img
                                                    class="rounded-lg object-cover object-center"
                                                    src="images/800x600.png"
                                                    alt="avatar"
                                                />
                                            </div>

                                            <span
                                                class="font-medium text-slate-700 line-clamp-2 dark:text-navy-100"
                                            >313 Pattern and Color ideas
                                            </span>
                                        </div>
                                    </td>
                                    <td
                                        class="whitespace-nowrap px-4 py-3 font-medium text-slate-600 dark:text-navy-100 sm:px-5"
                                    >
                                        894
                                    </td>
                                    <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                                        <div class="flex items-center justify-end space-x-1">
                                            <p class="text-sm+ text-slate-800 dark:text-navy-100">
                                                1
                                            </p>
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
                                        </div>
                                    </td>
                                </tr>

                                <tr
                                    class="border-y border-transparent border-b-slate-200 dark:border-b-navy-500"
                                >
                                    <td class="whitespace-nowrap px-4 py-3">
                                        <p
                                            class="text-center text-base font-medium text-slate-700 dark:text-navy-100"
                                        >
                                            07.
                                        </p>
                                    </td>
                                    <td class="min-w-[20rem] px-4 py-3 sm:px-5">
                                        <div class="flex items-center space-x-4">
                                            <div class="avatar h-12 w-12">
                                                <img
                                                    class="rounded-lg object-cover object-center"
                                                    src="images/800x600.png"
                                                    alt="avatar"
                                                />
                                            </div>

                                            <span
                                                class="font-medium text-slate-700 line-clamp-2 dark:text-navy-100"
                                            >NodeJS Design Patterns
                                            </span>
                                        </div>
                                    </td>
                                    <td
                                        class="whitespace-nowrap px-4 py-3 font-medium text-slate-600 dark:text-navy-100 sm:px-5"
                                    >
                                        636
                                    </td>
                                    <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                                        <div class="flex items-center justify-end space-x-1">
                                            <p class="text-sm+ text-slate-800 dark:text-navy-100">
                                                2
                                            </p>
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
                                        </div>
                                    </td>
                                </tr>

                                <tr class="border-y border-transparent">
                                    <td class="whitespace-nowrap rounded-bl-lg px-4 py-3">
                                        <p
                                            class="text-center text-base font-medium text-slate-700 dark:text-navy-100"
                                        >
                                            08.
                                        </p>
                                    </td>
                                    <td class="min-w-[20rem] px-4 py-3 sm:px-5">
                                        <div class="flex items-center space-x-4">
                                            <div class="avatar h-12 w-12">
                                                <img
                                                    class="rounded-lg object-cover object-center"
                                                    src="images/800x600.png"
                                                    alt="avatar"
                                                />
                                            </div>

                                            <span
                                                class="font-medium text-slate-700 line-clamp-2 dark:text-navy-100"
                                            >Tailwind CSS Card Example
                                            </span>
                                        </div>
                                    </td>
                                    <td
                                        class="whitespace-nowrap px-4 py-3 font-medium text-slate-600 dark:text-navy-100 sm:px-5"
                                    >
                                        411
                                    </td>
                                    <td
                                        class="whitespace-nowrap rounded-br-lg px-4 py-3 sm:px-5"
                                    >
                                        <div class="flex items-center justify-end space-x-1">
                                            <p class="text-sm+ text-slate-800 dark:text-navy-100">
                                                1
                                            </p>
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
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};
