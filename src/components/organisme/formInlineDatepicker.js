import Link from "next/link";
import Image from "next/image";

export default function formInlineDatepicker() {
    return (
        <>
            {/* <!-- Inline Datepicker --> */}
            {/* <!-- formInlineDatepicker --> */}
            <div class="card px-4 pb-4 sm:px-5">
                <div class="my-3 flex h-8 items-center justify-between">
                    <h2
                        class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
                    >
                        Inline Datepicker
                    </h2>
                    <label class="inline-flex items-center space-x-2">
                        <span class="text-xs text-slate-400 dark:text-navy-300"
                        >Code</span
                        >
                        <input
                            onchange="helpers.toggleCode(event)"
                            class="form-switch h-5 w-10 rounded-full bg-slate-300 before:rounded-full before:bg-slate-50 checked:bg-primary checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:bg-accent dark:checked:before:bg-white"
                            type="checkbox"
                        />
                    </label>
                </div>
                <div class="max-w-xl">
                    <p>
                        The Datetimepicker is used to allow the user to select a date
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
                        <label>
                            <input
                                id="flatpickr7"
                                class="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                                placeholder="Choose date..."
                                type="text"
                            />
                        </label>
                    </div>
                </div>
            </div>
        </>
    );
}