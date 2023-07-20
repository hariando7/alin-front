import Image from "next/image";
import Input from "../atom/Input";


export default function formWithFooter() {
    return (
        <>

            {/* <!-- With Footer --> */}
            {/* <!-- formWithFooter --> */}
            <div class="card px-4 pb-4 sm:px-5">
                <div class="my-3 flex h-8 items-center justify-between">
                    <h2
                        class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
                    >
                        With Footer
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
                        The textare can have footer. Check out code for detail of usage.
                    </p>
                    <div class="mt-5 flex space-x-4 overflow-x-auto">
                        <div class="avatar h-12 w-12">
                            <img
                                class="rounded-full"
                                src="images/200x200.png"
                                alt="avatar"
                            />
                            <div
                                class="absolute right-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-info dark:border-navy-700"
                            ></div>
                        </div>
                        <div
                            class="w-full rounded-xl rounded-tl-none border border-slate-300 transition-colors duration-200 focus-within:!border-primary hover:border-slate-400 dark:border-navy-450 dark:focus-within:!border-accent dark:hover:border-navy-400"
                        >
                            <label class="block">
                                <textarea
                                    rows="5"
                                    placeholder="Write a comment"
                                    class="form-textarea w-full resize-none bg-transparent p-3 pb-0 placeholder:text-slate-400/70"
                                ></textarea>
                            </label>
                            <div class="flex justify-between p-2.5">
                                <div class="flex items-end space-x-1">
                                    <button
                                        class="btn -ml-1 h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="h-5 w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            stroke-width="1.5"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                                            />
                                        </svg>
                                    </button>
                                    <button
                                        class="btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="h-5 w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            stroke-width="1.5"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                                            />
                                        </svg>
                                    </button>
                                    <button
                                        class="btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="h-5 w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            stroke-width="1.5"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                <button
                                    class="btn rounded-md bg-primary px-4 text-xs+ font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
                                >
                                    Comment
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="code-wrapper hidden pt-4">
                    <pre
                        class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
                    >
                        <code class="language-html">
                            &lt;div class=&quot;flex space-x-4 overflow-x-auto&quot;&gt;&#13;&#10;    &lt;div class=&quot;avatar h-12 w-12&quot;&gt;&#13;&#10;      &lt;img&#13;&#10;        class=&quot;rounded-full&quot;&#13;&#10;        src=&quot;images/200x200.png&quot;&#13;&#10;        alt=&quot;avatar&quot;&#13;&#10;      /&gt;&#13;&#10;      &lt;div&#13;&#10;        class=&quot;absolute right-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-info dark:border-navy-700&quot;&#13;&#10;      &gt;&lt;/div&gt;&#13;&#10;    &lt;/div&gt;&#13;&#10;    &lt;div&#13;&#10;      class=&quot;w-full rounded-xl rounded-tl-none border border-slate-300 transition-colors duration-200 focus-within:!border-primary hover:border-slate-400 dark:border-navy-450 dark:focus-within:!border-accent dark:hover:border-navy-400&quot;&#13;&#10;    &gt;&#13;&#10;      &lt;label class=&quot;block&quot;&gt;&#13;&#10;        &lt;textarea&#13;&#10;          rows=&quot;5&quot;&#13;&#10;          placeholder=&quot;Write a comment&quot;&#13;&#10;          class=&quot;form-textarea w-full resize-none bg-transparent p-3 pb-0 placeholder:text-slate-400/70&quot;&#13;&#10;        &gt;&lt;/textarea&gt;&#13;&#10;      &lt;/label&gt;&#13;&#10;      &lt;div class=&quot;flex justify-between p-2.5&quot;&gt;&#13;&#10;        &lt;div class=&quot;flex items-end space-x-1&quot;&gt;&#13;&#10;          &lt;button&#13;&#10;            class=&quot;btn -ml-1 h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25&quot;&#13;&#10;          &gt;&#13;&#10;            &lt;svg&#13;&#10;              xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;              class=&quot;h-5 w-5&quot;&#13;&#10;              fill=&quot;none&quot;&#13;&#10;              viewBox=&quot;0 0 24 24&quot;&#13;&#10;              stroke=&quot;currentColor&quot;&#13;&#10;              stroke-width=&quot;1.5&quot;&#13;&#10;            &gt;&#13;&#10;              &lt;path&#13;&#10;                stroke-linecap=&quot;round&quot;&#13;&#10;                stroke-linejoin=&quot;round&quot;&#13;&#10;                d=&quot;M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13&quot;&#13;&#10;              /&gt;&#13;&#10;            &lt;/svg&gt;&#13;&#10;          &lt;/button&gt;&#13;&#10;          &lt;button&#13;&#10;            class=&quot;btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25&quot;&#13;&#10;          &gt;&#13;&#10;            &lt;svg&#13;&#10;              xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;              class=&quot;h-5 w-5&quot;&#13;&#10;              fill=&quot;none&quot;&#13;&#10;              viewBox=&quot;0 0 24 24&quot;&#13;&#10;              stroke=&quot;currentColor&quot;&#13;&#10;              stroke-width=&quot;1.5&quot;&#13;&#10;            &gt;&#13;&#10;              &lt;path&#13;&#10;                stroke-linecap=&quot;round&quot;&#13;&#10;                stroke-linejoin=&quot;round&quot;&#13;&#10;                d=&quot;M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z&quot;&#13;&#10;              /&gt;&#13;&#10;            &lt;/svg&gt;&#13;&#10;          &lt;/button&gt;&#13;&#10;          &lt;button&#13;&#10;            class=&quot;btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25&quot;&#13;&#10;          &gt;&#13;&#10;            &lt;svg&#13;&#10;              xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;              class=&quot;h-5 w-5&quot;&#13;&#10;              fill=&quot;none&quot;&#13;&#10;              viewBox=&quot;0 0 24 24&quot;&#13;&#10;              stroke=&quot;currentColor&quot;&#13;&#10;              stroke-width=&quot;1.5&quot;&#13;&#10;            &gt;&#13;&#10;              &lt;path&#13;&#10;                stroke-linecap=&quot;round&quot;&#13;&#10;                stroke-linejoin=&quot;round&quot;&#13;&#10;                d=&quot;M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z&quot;&#13;&#10;              /&gt;&#13;&#10;            &lt;/svg&gt;&#13;&#10;          &lt;/button&gt;&#13;&#10;        &lt;/div&gt;&#13;&#10;        &lt;button&#13;&#10;          class=&quot;btn rounded-md bg-primary px-4 text-xs+ font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90&quot;&#13;&#10;        &gt;&#13;&#10;          Comment&#13;&#10;        &lt;/button&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;    &lt;/div&gt;&#13;&#10;  &lt;/div&gt;</code>
                    </pre>
                </div>
            </div>
        </>
    );
};
