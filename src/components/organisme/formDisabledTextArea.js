import Link from "next/link";
import Image from "next/image";

export default function formDisabledTextArea() {
    return (
        <>
            {/* <!-- Disabled Textarea --> */}
            {/* <!-- formDisabledTextArea --> */}
            <div class="card px-4 pb-4 sm:px-5">
                <div class="my-3 flex h-8 items-center justify-between">
                    <h2
                        class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
                    >
                        Disabled Textarea
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
                        The textarea have their own style when disabled. Check out code
                        for detail of usage.
                    </p>
                    <div class="mt-5">
                        <label class="block">
                            <textarea
                                disabled
                                rows="4"
                                placeholder=" Enter Text"
                                class="form-textarea w-full resize-none rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary disabled:pointer-events-none disabled:select-none disabled:border-none disabled:bg-zinc-100 dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent dark:disabled:bg-navy-600"
                            ></textarea>
                        </label>
                    </div>
                </div>
                <div class="code-wrapper hidden pt-4">
                    <pre
                        class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
                    >
                        <code class="language-html">
                            &lt;label class=&quot;block&quot;&gt;&#13;&#10;    &lt;textarea&#13;&#10;      disabled&#13;&#10;      rows=&quot;4&quot;&#13;&#10;      placeholder=&quot; Enter Text&quot;&#13;&#10;      class=&quot;form-textarea w-full resize-none rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary disabled:pointer-events-none disabled:select-none disabled:border-none disabled:bg-zinc-100 dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent dark:disabled:bg-navy-600&quot;&#13;&#10;    &gt;&lt;/textarea&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;
                        </code>
                    </pre>
                </div>
            </div>
        </>
    );
}