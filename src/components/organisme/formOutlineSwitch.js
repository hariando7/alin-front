import Link from "next/link";
import Image from "next/image";

export default function formOutlineSwitch() {
    return (
        <>
            {/* <!-- Outline Switch --> */}
            {/* <!-- formOutlineSwitch --> */}
            <div class="card px-4 pb-4 sm:px-5">
                <div class="my-3 flex h-8 items-center justify-between">
                    <h2
                        class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
                    >
                        Outline Switch
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
                        The Switch can be outlied. Check out code for detail of usage.
                        Check out code for detail of usage.
                    </p>
                    <div
                        class="mt-5 grid grid-cols-2 place-items-start gap-6 sm:grid-cols-3"
                    >
                        <label class="inline-flex items-center space-x-2">
                            <input
                                class="form-switch is-outline h-5 w-10 rounded-full border border-slate-400/70 bg-transparent before:rounded-full before:bg-slate-300 checked:border-slate-500 checked:before:bg-slate-500 dark:border-navy-400 dark:before:bg-navy-300 dark:checked:border-navy-200 dark:checked:before:bg-navy-200"
                                type="checkbox"
                            />
                            <span>Default</span>
                        </label>
                        <label class="inline-flex items-center space-x-2">
                            <input
                                class="form-switch is-outline h-5 w-10 rounded-full border border-slate-400/70 bg-transparent before:rounded-full before:bg-slate-300 checked:border-primary checked:before:bg-primary dark:border-navy-400 dark:before:bg-navy-300 dark:checked:border-accent dark:checked:before:bg-accent"
                                type="checkbox"
                            />
                            <span>Primary</span>
                        </label>
                        <label class="inline-flex items-center space-x-2">
                            <input
                                class="form-switch is-outline h-5 w-10 rounded-full border border-slate-400/70 bg-transparent before:rounded-full before:bg-slate-300 checked:border-secondary checked:before:bg-secondary dark:border-navy-400 dark:before:bg-navy-300 dark:checked:border-secondary-light dark:checked:before:bg-secondary-light"
                                type="checkbox"
                            />
                            <span>Secondary</span>
                        </label>
                        <label class="inline-flex items-center space-x-2">
                            <input
                                class="form-switch is-outline h-5 w-10 rounded-full border border-slate-400/70 bg-transparent before:rounded-full before:bg-slate-300 checked:!border-info checked:before:!bg-info dark:border-navy-400 dark:before:bg-navy-300"
                                type="checkbox"
                            />
                            <span>Info</span>
                        </label>
                        <label class="inline-flex items-center space-x-2">
                            <input
                                class="form-switch is-outline h-5 w-10 rounded-full border border-slate-400/70 bg-transparent before:rounded-full before:bg-slate-300 checked:!border-success checked:before:!bg-success dark:border-navy-400 dark:before:bg-navy-300"
                                type="checkbox"
                            />
                            <span>Success</span>
                        </label>
                        <label class="inline-flex items-center space-x-2">
                            <input
                                class="form-switch is-outline h-5 w-10 rounded-full border border-slate-400/70 bg-transparent before:rounded-full before:bg-slate-300 checked:!border-warning checked:before:!bg-warning dark:border-navy-400 dark:before:bg-navy-300"
                                type="checkbox"
                            />
                            <span>Warning</span>
                        </label>
                        <label class="inline-flex items-center space-x-2">
                            <input
                                class="form-switch is-outline h-5 w-10 rounded-full border border-slate-400/70 bg-transparent before:rounded-full before:bg-slate-300 checked:!border-error checked:before:!bg-error dark:border-navy-400 dark:before:bg-navy-300"
                                type="checkbox"
                            />
                            <span>Error</span>
                        </label>
                    </div>
                </div>
                <div class="code-wrapper hidden pt-4">
                    <pre
                        class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
                    >
                        <code class="language-html">
                            &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      class=&quot;form-switch is-outline h-5 w-10 rounded-full border border-slate-400/70 bg-transparent before:rounded-full before:bg-slate-300 checked:border-slate-500 checked:before:bg-slate-500 dark:border-navy-400 dark:before:bg-navy-300 dark:checked:border-navy-200 dark:checked:before:bg-navy-200&quot;&#13;&#10;      type=&quot;checkbox&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;span&gt;Default&lt;/span&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;  &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      class=&quot;form-switch is-outline h-5 w-10 rounded-full border border-slate-400/70 bg-transparent before:rounded-full before:bg-slate-300 checked:border-primary checked:before:bg-primary dark:border-navy-400 dark:before:bg-navy-300 dark:checked:border-accent dark:checked:before:bg-accent&quot;&#13;&#10;      type=&quot;checkbox&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;span&gt;Primary&lt;/span&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;  &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      class=&quot;form-switch is-outline h-5 w-10 rounded-full border border-slate-400/70 bg-transparent before:rounded-full before:bg-slate-300 checked:border-secondary checked:before:bg-secondary dark:border-navy-400 dark:before:bg-navy-300 dark:checked:border-secondary-light dark:checked:before:bg-secondary-light&quot;&#13;&#10;      type=&quot;checkbox&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;span&gt;Secondary&lt;/span&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;  &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      class=&quot;form-switch is-outline h-5 w-10 rounded-full border border-slate-400/70 bg-transparent before:rounded-full before:bg-slate-300 checked:!border-info checked:before:!bg-info dark:border-navy-400 dark:before:bg-navy-300&quot;&#13;&#10;      type=&quot;checkbox&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;span&gt;Info&lt;/span&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;  &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      class=&quot;form-switch is-outline h-5 w-10 rounded-full border border-slate-400/70 bg-transparent before:rounded-full before:bg-slate-300 checked:!border-success checked:before:!bg-success dark:border-navy-400 dark:before:bg-navy-300&quot;&#13;&#10;      type=&quot;checkbox&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;span&gt;Success&lt;/span&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;  &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      class=&quot;form-switch is-outline h-5 w-10 rounded-full border border-slate-400/70 bg-transparent before:rounded-full before:bg-slate-300 checked:!border-warning checked:before:!bg-warning dark:border-navy-400 dark:before:bg-navy-300&quot;&#13;&#10;      type=&quot;checkbox&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;span&gt;Warning&lt;/span&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;  &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      class=&quot;form-switch is-outline h-5 w-10 rounded-full border border-slate-400/70 bg-transparent before:rounded-full before:bg-slate-300 checked:!border-error checked:before:!bg-error dark:border-navy-400 dark:before:bg-navy-300&quot;&#13;&#10;      type=&quot;checkbox&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;span&gt;Error&lt;/span&gt;&#13;&#10;  &lt;/label&gt;</code>
                    </pre>
                </div>
            </div>
        </>
    );
}