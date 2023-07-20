

import Image from "next/image";
import Input from "../atom/Input";


export default function sidebarPanelBody() {
    return (
        <>
            {/* <!-- Sidebar Panel Body --> */}
            <div class="nav-wrapper h-[calc(100%-4.5rem)] overflow-x-hidden pb-6" data-simplebar>
                <ul class="flex flex-1 flex-col px-4 font-inter">
                    <li>
                        <a href="dashboards-crm-analytics.html"
                            data-default-class="text-slate-500 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50"
                            data-active-class="font-medium text-primary dark:text-accent-light"
                            class="nav-link flex py-2 text-xs+ tracking-wide outline-none transition-colors duration-300 ease-in-out">
                            CRM Analytics
                        </a>
                    </li>
                    <li>
                        <a href="dashboards-orders.html"
                            data-default-class="text-slate-500 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50"
                            data-active-class="font-medium text-primary dark:text-accent-light"
                            class="nav-link flex py-2 text-xs+ tracking-wide outline-none transition-colors duration-300 ease-in-out">
                            Orders
                        </a>
                    </li>
                </ul>
                <div class="my-3 mx-4 h-px bg-slate-200 dark:bg-navy-500"></div>
                <ul class="flex flex-1 flex-col px-4 font-inter">
                    <li
                        class="ac nav-parent [&.is-active_.ac-trigger]:font-semibold [&.is-active_.ac-trigger]:text-slate-800 dark:[&.is-active_.ac-trigger]:text-navy-50 [&.is-active_svg]:rotate-90">
                        <button
                            class="ac-trigger flex w-full items-center justify-between py-2 text-xs+ tracking-wide text-slate-500 outline-none transition-[color,padding-left] duration-300 ease-in-out hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50">
                            <span>Cryptocurrency</span>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                class="h-4 w-4 text-slate-400 transition-transform ease-in-out" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                        </button>
                        <ul class="ac-panel">
                            <li>
                                <a href="dashboards-crypto-1.html"
                                    class="nav-link flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4"
                                    data-default-class="text-slate-500 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50"
                                    data-active-class="font-medium text-primary dark:text-accent-light">
                                    <div class="flex items-center space-x-2">
                                        <div class="h-1.5 w-1.5 rounded-full border border-current opacity-40"></div>
                                        <span>Cryptocurrency v1</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="dashboards-crypto-2.html"
                                    class="nav-link flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4"
                                    data-default-class="text-slate-500 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50"
                                    data-active-class="font-medium text-primary dark:text-accent-light">
                                    <div class="flex items-center space-x-2">
                                        <div class="h-1.5 w-1.5 rounded-full border border-current opacity-40"></div>
                                        <span>Cryptocurrency v2</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li
                        class="ac nav-parent [&.is-active_.ac-trigger]:font-semibold [&.is-active_.ac-trigger]:text-slate-800 dark:[&.is-active_.ac-trigger]:text-navy-50 [&.is-active_svg]:rotate-90">
                        <button
                            class="ac-trigger flex w-full items-center justify-between py-2 text-xs+ tracking-wide text-slate-500 outline-none transition-[color,padding-left] duration-300 ease-in-out hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50">
                            <span>Banking</span>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                class="h-4 w-4 text-slate-400 transition-transform ease-in-out" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                        </button>
                        <ul class="ac-panel">
                            <li>
                                <a href="dashboards-banking-1.html"
                                    class="nav-link flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4"
                                    data-default-class="text-slate-500 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50"
                                    data-active-class="font-medium text-primary dark:text-accent-light">
                                    <div class="flex items-center space-x-2">
                                        <div class="h-1.5 w-1.5 rounded-full border border-current opacity-40"></div>
                                        <span>Banking v1</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="dashboards-banking-2.html"
                                    class="nav-link flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4"
                                    data-default-class="text-slate-500 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50"
                                    data-active-class="font-medium text-primary dark:text-accent-light">
                                    <div class="flex items-center space-x-2">
                                        <div class="h-1.5 w-1.5 rounded-full border border-current opacity-40"></div>
                                        <span>Banking v2</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <a href="dashboards-personal.html"
                            data-default-class="text-slate-500 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50"
                            data-active-class="font-medium text-primary dark:text-accent-light"
                            class="nav-link flex py-2 text-xs+ tracking-wide outline-none transition-colors duration-300 ease-in-out">
                            Personal
                        </a>
                    </li>
                    <li>
                        <a href="dashboards-cms-analytics.html"
                            data-default-class="text-slate-500 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50"
                            data-active-class="font-medium text-primary dark:text-accent-light"
                            class="nav-link flex py-2 text-xs+ tracking-wide outline-none transition-colors duration-300 ease-in-out">
                            CMS Analytics
                        </a>
                    </li>
                    <li>
                        <a href="dashboards-influencer.html"
                            data-default-class="text-slate-500 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50"
                            data-active-class="font-medium text-primary dark:text-accent-light"
                            class="nav-link flex py-2 text-xs+ tracking-wide outline-none transition-colors duration-300 ease-in-out">
                            Influencer
                        </a>
                    </li>
                    <li>
                        <a href="dashboards-travel.html"
                            data-default-class="text-slate-500 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50"
                            data-active-class="font-medium text-primary dark:text-accent-light"
                            class="nav-link flex py-2 text-xs+ tracking-wide outline-none transition-colors duration-300 ease-in-out">
                            Travel
                        </a>
                    </li>
                    <li>
                        <a href="dashboards-teacher.html"
                            data-default-class="text-slate-500 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50"
                            data-active-class="font-medium text-primary dark:text-accent-light"
                            class="nav-link flex py-2 text-xs+ tracking-wide outline-none transition-colors duration-300 ease-in-out">
                            Teacher
                        </a>
                    </li>
                    <li>
                        <a href="dashboards-education.html"
                            data-default-class="text-slate-500 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50"
                            data-active-class="font-medium text-primary dark:text-accent-light"
                            class="nav-link flex py-2 text-xs+ tracking-wide outline-none transition-colors duration-300 ease-in-out">
                            Education
                        </a>
                    </li>
                    <li>
                        <a href="dashboards-authors.html"
                            data-default-class="text-slate-500 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50"
                            data-active-class="font-medium text-primary dark:text-accent-light"
                            class="nav-link flex py-2 text-xs+ tracking-wide outline-none transition-colors duration-300 ease-in-out">
                            Authors
                        </a>
                    </li>
                    <li>
                        <a href="dashboards-doctor.html"
                            data-default-class="text-slate-500 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50"
                            data-active-class="font-medium text-primary dark:text-accent-light"
                            class="nav-link flex py-2 text-xs+ tracking-wide outline-none transition-colors duration-300 ease-in-out">
                            Doctor
                        </a>
                    </li>
                    <li>
                        <a href="dashboards-employees.html"
                            data-default-class="text-slate-500 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50"
                            data-active-class="font-medium text-primary dark:text-accent-light"
                            class="nav-link flex py-2 text-xs+ tracking-wide outline-none transition-colors duration-300 ease-in-out">
                            Employees
                        </a>
                    </li>
                    <li>
                        <a href="dashboards-workspaces.html"
                            data-default-class="text-slate-500 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50"
                            data-active-class="font-medium text-primary dark:text-accent-light"
                            class="nav-link flex py-2 text-xs+ tracking-wide outline-none transition-colors duration-300 ease-in-out">
                            Workspaces
                        </a>
                    </li>
                    <li>
                        <a href="dashboards-meetings.html"
                            data-default-class="text-slate-500 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50"
                            data-active-class="font-medium text-primary dark:text-accent-light"
                            class="nav-link flex py-2 text-xs+ tracking-wide outline-none transition-colors duration-300 ease-in-out">
                            Meetings
                        </a>
                    </li>
                    <li>
                        <a href="dashboards-project-boards.html"
                            data-default-class="text-slate-500 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50"
                            data-active-class="font-medium text-primary dark:text-accent-light"
                            class="nav-link flex py-2 text-xs+ tracking-wide outline-none transition-colors duration-300 ease-in-out">
                            Project Boards
                        </a>
                    </li>
                </ul>
                <div class="my-3 mx-4 h-px bg-slate-200 dark:bg-navy-500"></div>
                <ul class="flex flex-1 flex-col px-4 font-inter">
                    <li>
                        <a href="dashboards-widget-ui.html"
                            data-default-class="text-slate-500 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50"
                            data-active-class="font-medium text-primary dark:text-accent-light"
                            class="nav-link flex py-2 text-xs+ tracking-wide outline-none transition-colors duration-300 ease-in-out">
                            Widget UI
                        </a>
                    </li>
                    <li>
                        <a href="dashboards-widget-contacts.html"
                            data-default-class="text-slate-500 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50"
                            data-active-class="font-medium text-primary dark:text-accent-light"
                            class="nav-link flex py-2 text-xs+ tracking-wide outline-none transition-colors duration-300 ease-in-out">
                            Widget Contacts
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
};
