import Link from "next/link";
import Image from "next/image";

export default function formDisabledSwitch() {
    return (
        <>

            {/* <!-- Disabled Switch --> */}
            {/* <!-- formDisabledSwitch --> */}
            <div class="card px-4 pb-4 sm:px-5">
                <div class="my-3 flex h-8 items-center justify-between">
                    <h2
                        class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
                    >
                        Disabled Switch
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
                <div class="max-w-2xl">
                    <p>
                        The Switch have their own style when disabled. Check out code
                        for detail of usage.
                    </p>
                    <div
                        class="mt-5 grid grid-cols-2 place-items-start gap-6 sm:grid-cols-3"
                    >
                        <label class="inline-flex items-center space-x-2">
                            <input
                                disabled
                                class="form-switch h-5 w-10 rounded-full bg-slate-300 before:rounded-full before:bg-slate-50 checked:bg-slate-500 checked:before:bg-white disabled:pointer-events-none disabled:select-none disabled:opacity-60 dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:bg-navy-400 dark:checked:before:bg-white"
                                type="checkbox"
                            />
                            <span>Default</span>
                        </label>
                        <label class="inline-flex items-center space-x-2">
                            <input
                                checked
                                disabled
                                class="form-switch h-5 w-10 rounded-full bg-slate-300 before:rounded-full before:bg-slate-50 checked:bg-primary checked:before:bg-white disabled:pointer-events-none disabled:select-none disabled:opacity-60 dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:bg-accent dark:checked:before:bg-white"
                                type="checkbox"
                            />
                            <span>Primary</span>
                        </label>
                    </div>
                </div>
                <div class="code-wrapper hidden pt-4">
                    <pre
                        class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
                    >
                        <code class="language-html">
                            &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      disabled&#13;&#10;      class=&quot;form-switch h-5 w-10 rounded-full bg-slate-300 before:rounded-full before:bg-slate-50 checked:bg-slate-500 checked:before:bg-white disabled:pointer-events-none disabled:select-none disabled:opacity-60 dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:bg-navy-400 dark:checked:before:bg-white&quot;&#13;&#10;      type=&quot;checkbox&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;span&gt;Default&lt;/span&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;  &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      checked&#13;&#10;      disabled&#13;&#10;      class=&quot;form-switch h-5 w-10 rounded-full bg-slate-300 before:rounded-full before:bg-slate-50 checked:bg-primary checked:before:bg-white disabled:pointer-events-none disabled:select-none disabled:opacity-60 dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:bg-accent dark:checked:before:bg-white&quot;&#13;&#10;      type=&quot;checkbox&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;span&gt;Primary&lt;/span&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;</code>
                    </pre>
                </div>
            </div>
        </>
    );
}