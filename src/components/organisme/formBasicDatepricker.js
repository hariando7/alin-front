import Link from "next/link";
import Image from "next/image";

export default function formBasicDatepricker() {
    return (
        <>
            {/* <!-- Basic Datepricker --> */}
            {/* <!-- formBasicDatepricker--> */}
            <div class="max-w-xl">
                <p>
                    Hariandooo The Datetimepicker is used to allow the user to select a date
                    and time, and to display that date and time in the specified
                    format.
                    <a
                        class="font-normal text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
                        href="https://github.com/flatpickr/flatpickr"
                    >Flatpickr</a
                    >
                    is a lightweight and powerful datetime picker.
                </p>
                <div class="mt-5">
                    <label class="relative flex">
                        <input
                            id="flatpickr1"
                            class="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                            placeholder="Choose date..."
                            type="text"
                        />
                        <span
                            class="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5 transition-colors duration-200"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="1.5"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                            </svg>
                        </span>
                    </label>
                </div>
            </div>


        </>
    );
}