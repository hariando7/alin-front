import Link from "next/link";
import Image from "next/image";

export default function formMultipleSelect() {
    return (
        <>
            {/* <!-- Multipie Select --> */}
            {/* <!-- formMultipleSelect --> */}
            <div class="card px-4 pb-4 sm:px-5">
                <div class="my-3 flex h-8 items-center justify-between">
                    <h2
                        class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
                    >
                        Multipie Select
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
                        The <code class="inline-code">multiple</code> attribute
                        indicates that multiple options can be selected in the list.
                        Check out code for detail of usage.
                    </p>
                    <div class="mt-5">
                        <label class="block">
                            <span>What type of event is it?</span>
                            <select
                                multiple
                                class="form-multiselect mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:bg-navy-700 dark:hover:border-navy-400 dark:focus:border-accent"
                            >
                                <option>Corporate event</option>
                                <option selected>Wedding</option>
                                <option>Birthday</option>
                                <option>Other</option>
                            </select>
                        </label>
                    </div>
                </div>

                <div class="code-wrapper hidden pt-4">
                    <pre
                        class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
                    >
                        <code class="language-html">
                            &lt;label class=&quot;block&quot;&gt;&#13;&#10;    &lt;span&gt;What type of event is it?&lt;/span&gt;&#13;&#10;    &lt;select&#13;&#10;      multiple&#13;&#10;      class=&quot;form-multiselect mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:bg-navy-700 dark:hover:border-navy-400 dark:focus:border-accent&quot;&#13;&#10;    &gt;&#13;&#10;      &lt;option&gt;Corporate event&lt;/option&gt;&#13;&#10;      &lt;option selected&gt;Wedding&lt;/option&gt;&#13;&#10;      &lt;option&gt;Birthday&lt;/option&gt;&#13;&#10;      &lt;option&gt;Other&lt;/option&gt;&#13;&#10;    &lt;/select&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;</code>
                    </pre>
                </div>
            </div>
        </>
    );
}