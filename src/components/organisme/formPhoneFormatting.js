import Link from "next/link";
import Image from "next/image";

export default function formPhoneFormatting() {
    return (
        <>
            {/* <!-- Phone Formatting--> */}
            {/* <!-- formPhoneFormatting --> */}
            <div class="card px-4 pb-4 sm:px-5">
                <div class="my-3 flex h-8 items-center justify-between">
                    <h2
                        class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
                    >
                        Phone Formatting
                    </h2>
                    <label class="flex items-center space-x-2">
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
                        An input mask is a string of characters that indicates the
                        format of valid input values. The
                        <code class="inline-code">Cleave.js</code> library is used for
                        this purpose. See more on
                        <a
                            class="font-normal text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
                            href="https://github.com/nosir/cleave.js"
                        >Github</a
                        >
                        and to the code example below.
                    </p>
                    <div class="mt-5">
                        <span>Phone Number:</span>
                        <label class="mt-1.5 flex -space-x-px">
                            <span
                                class="flex shrink-0 items-center justify-center rounded-l-lg border border-slate-300 px-3.5 font-inter dark:border-navy-450"
                            >
                                <span>US (+1)</span>
                            </span>
                            <input
                                id="inputmask6"
                                class="form-input w-full rounded-r-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:z-10 hover:border-slate-400 focus:z-10 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                                placeholder="Enter Phone"
                                type="text"
                            />
                        </label>
                    </div>
                </div>
       
            </div>
        </>
    );
}