import Link from "next/link";
import Image from "next/image";

export default function formInputTags() {
    return (
        <>
            {/* <!-- Input Tags --> */}
            {/* <!-- formInputTags --> */}
            <div class="card px-4 pb-4 sm:px-5">
                <div class="my-3 flex h-8 items-center justify-between">
                    <h2
                        class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
                    >
                        Input Tags
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
                        <a
                            href="https://tom-select.js.org/"
                            class="text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
                        >Tom Select</a
                        >
                        is a versatile and dynamic &lt;select&gt; UI control. With
                        autocomplete and native-feeling keyboard navigation, it's useful
                        for tagging, contact lists, country selectors, and so on.
                    </p>
                    <div class="inline-space mt-5">
                        <label class="block">
                            <span>Enter Tags:</span>
                            <input
                                id="tom1"
                                class="mt-1.5 w-full"
                                placeholder="Enter tags"
                                type="text"
                            />
                        </label>
                    </div>
                </div>
       
            </div>
        </>
    );
}