import Image from "next/image";
import Input from "../atom/Input";


export default function formWithHeader() {
    return (
        <>
            {/* <!-- With Header --> */}
            {/* <!-- formWithHeader --> */}
            <div class="card px-4 pb-4 sm:px-5">
                <div class="my-3 flex h-8 items-center justify-between">
                    <h2
                        class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
                    >
                        With Header
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
                        The textare can have header. Check out code for detail of usage.
                    </p>
                    <div
                        class="mt-5 rounded-lg border border-slate-300 transition-colors duration-200 focus-within:!border-primary hover:border-slate-400 dark:border-navy-450 dark:focus-within:!border-accent dark:hover:border-navy-400"
                    >
                        <div class="flex justify-between">
                            <label class="block w-full">
                                <input
                                    type="text"
                                    class="form-input w-full bg-transparent p-3 text-lg font-medium placeholder:text-slate-400/70"
                                    placeholder="Title"
                                />
                            </label>
                            <div class="p-2">
                                <button
                                    class="btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <label class="block">
                            <textarea
                                rows="5"
                                placeholder="Enter Text"
                                class="form-textarea w-full resize-none bg-transparent p-3 pt-0 placeholder:text-slate-400/70"
                            ></textarea>
                        </label>
                    </div>
                </div>
                <div class="code-wrapper hidden pt-4">
                    <pre
                        class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
                    >
                        <code class="language-html">
                            &lt;div&#13;&#10;    class=&quot;rounded-lg border border-slate-300 transition-colors duration-200 focus-within:!border-primary hover:border-slate-400 dark:border-navy-450 dark:focus-within:!border-accent dark:hover:border-navy-400&quot;&#13;&#10;  &gt;&#13;&#10;    &lt;div class=&quot;flex justify-between&quot;&gt;&#13;&#10;      &lt;label class=&quot;block w-full&quot;&gt;&#13;&#10;        &lt;input&#13;&#10;          type=&quot;text&quot;&#13;&#10;          class=&quot;form-input w-full bg-transparent p-3 text-lg font-medium placeholder:text-slate-400/70&quot;&#13;&#10;          placeholder=&quot;Title&quot;&#13;&#10;        /&gt;&#13;&#10;      &lt;/label&gt;&#13;&#10;      &lt;div class=&quot;p-2&quot;&gt;&#13;&#10;        &lt;button&#13;&#10;          class=&quot;btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25&quot;&#13;&#10;        &gt;&#13;&#10;          &lt;svg&#13;&#10;            xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;            class=&quot;h-5 w-5&quot;&#13;&#10;            fill=&quot;none&quot;&#13;&#10;            viewBox=&quot;0 0 24 24&quot;&#13;&#10;            stroke=&quot;currentColor&quot;&#13;&#10;            stroke-width=&quot;2&quot;&#13;&#10;          &gt;&#13;&#10;            &lt;path&#13;&#10;              stroke-linecap=&quot;round&quot;&#13;&#10;              stroke-linejoin=&quot;round&quot;&#13;&#10;              d=&quot;M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z&quot;&#13;&#10;            /&gt;&#13;&#10;          &lt;/svg&gt;&#13;&#10;        &lt;/button&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;    &lt;/div&gt;&#13;&#10;    &lt;label class=&quot;block&quot;&gt;&#13;&#10;      &lt;textarea&#13;&#10;        rows=&quot;5&quot;&#13;&#10;        placeholder=&quot;Enter Text&quot;&#13;&#10;        class=&quot;form-textarea w-full resize-none bg-transparent p-3 pt-0 placeholder:text-slate-400/70&quot;&#13;&#10;      &gt;&lt;/textarea&gt;&#13;&#10;    &lt;/label&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;                </code>
                    </pre>
                </div>
            </div>
        </>
    );
};
