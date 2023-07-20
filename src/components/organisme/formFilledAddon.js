import Link from "next/link";
import Image from "next/image";

export default function formFilledAddon() {
    return (
        <>
            {/* <!-- Filled Addon--> */}
            {/* <!-- formFilledAddon --> */}
            <div class="card px-4 pb-4 sm:px-5">
                <div class="my-3 flex h-8 items-center justify-between">
                    <h2
                        class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
                    >
                        Filled Addon
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
                        Input addon can be filled. Check out code for detail of usage.
                    </p>
                    <div class="mt-5">
                        <div>
                            <span>Between input:</span>
                            <label class="mt-1 flex -space-x-px">
                                <span
                                    class="flex items-center justify-center rounded-l-lg border border-slate-300 bg-slate-150 px-3.5 font-inter text-slate-800 dark:border-navy-450 dark:bg-navy-500 dark:text-navy-100"
                                >
                                    <span>$</span>
                                </span>
                                <input
                                    class="form-input w-full border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:z-10 hover:border-slate-400 focus:z-10 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                                    placeholder="Enter price"
                                    type="text"
                                />
                                <span
                                    class="flex items-center justify-center rounded-r-lg border border-slate-300 bg-slate-150 px-3.5 font-inter text-slate-800 dark:border-navy-450 dark:bg-navy-500 dark:text-navy-100"
                                >
                                    <span>.00</span>
                                </span>
                            </label>
                        </div>
                    </div>
                </div>
                <div class="code-wrapper hidden pt-4">
                    <pre
                        class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
                    >
                        <code class="language-html">
                            &lt;div&gt;&#13;&#10;    &lt;span&gt;Between input:&lt;/span&gt;&#13;&#10;    &lt;label class=&quot;mt-1 flex -space-x-px&quot;&gt;&#13;&#10;      &lt;div&#13;&#10;        class=&quot;flex items-center justify-center rounded-l-lg border border-slate-300 bg-slate-150 px-3.5 font-inter text-slate-800 dark:border-navy-450 dark:bg-navy-500 dark:text-navy-100&quot;&#13;&#10;      &gt;&#13;&#10;        &lt;span&gt;$&lt;/span&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;      &lt;input&#13;&#10;        class=&quot;form-input w-full border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:z-10 hover:border-slate-400 focus:z-10 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent&quot;&#13;&#10;        placeholder=&quot;Enter price&quot;&#13;&#10;        type=&quot;text&quot;&#13;&#10;      /&gt;&#13;&#10;      &lt;div&#13;&#10;        class=&quot;flex items-center justify-center rounded-r-lg border border-slate-300 bg-slate-150 px-3.5 font-inter text-slate-800 dark:border-navy-450 dark:bg-navy-500 dark:text-navy-100&quot;&#13;&#10;      &gt;&#13;&#10;        &lt;span&gt;.00&lt;/span&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;    &lt;/label&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;</code>
                    </pre>
                </div>
            </div>
        </>
    );
}