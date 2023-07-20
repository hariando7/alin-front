import Link from "next/link";
import Image from "next/image";

export default function formRadioSize() {
    return (
        <>
            {/* <!-- Radio Size --> */}
            {/* <!-- formRadioSize --> */}
            <div class="card px-4 pb-4 sm:px-5">
                <div class="my-3 flex h-8 items-center justify-between">
                    <h2
                        class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
                    >
                        Radio Size
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
                        The radio component can have various sizes. Check out code for
                        detail of usage.
                    </p>
                    <div class="inline-space mt-5 flex flex-wrap items-center">
                        <label class="inline-flex items-center space-x-2">
                            <input
                                checked
                                class="form-radio is-basic h-3 w-3 rounded-full border-slate-400/70 checked:border-primary checked:bg-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent"
                                name="size"
                                type="radio"
                            />
                            <span>1</span>
                        </label>
                        <label class="inline-flex items-center space-x-2">
                            <input
                                class="form-radio is-basic h-3.5 w-3.5 rounded-full border-slate-400/70 checked:border-primary checked:bg-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent"
                                name="size"
                                type="radio"
                            />
                            <span>2</span>
                        </label>
                        <label class="inline-flex items-center space-x-2">
                            <input
                                class="form-radio is-basic h-4 w-4 rounded-full border-slate-400/70 checked:border-primary checked:bg-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent"
                                name="size"
                                type="radio"
                            />
                            <span>3</span>
                        </label>
                        <label class="inline-flex items-center space-x-2">
                            <input
                                class="form-radio is-basic h-4.5 w-4.5 rounded-full border-slate-400/70 checked:border-primary checked:bg-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent"
                                name="size"
                                type="radio"
                            />
                            <span>4</span>
                        </label>
                        <label class="inline-flex items-center space-x-2">
                            <input
                                class="form-radio is-basic h-5 w-5 rounded-full border-slate-400/70 checked:border-primary checked:bg-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent"
                                name="size"
                                type="radio"
                            />
                            <span>5</span>
                        </label>
                        <label class="inline-flex items-center space-x-2">
                            <input
                                class="form-radio is-basic h-6 w-6 rounded-full border-slate-400/70 checked:border-primary checked:bg-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent"
                                name="size"
                                type="radio"
                            />
                            <span>6</span>
                        </label>
                    </div>
                </div>
                <div class="code-wrapper hidden pt-4">
                    <pre
                        class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"

                    >
                        <code class="language-html">
                            &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      checked&#13;&#10;      class=&quot;form-radio is-basic h-3 w-3 rounded-full border-slate-400/70 checked:border-primary checked:bg-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent&quot;&#13;&#10;      name=&quot;size&quot;&#13;&#10;      type=&quot;radio&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;p&gt;1&lt;/p&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;  &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      class=&quot;form-radio is-basic h-3.5 w-3.5 rounded-full border-slate-400/70 checked:border-primary checked:bg-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent&quot;&#13;&#10;      name=&quot;size&quot;&#13;&#10;      type=&quot;radio&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;p&gt;2&lt;/p&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;  &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      class=&quot;form-radio is-basic h-4 w-4 rounded-full border-slate-400/70 checked:border-primary checked:bg-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent&quot;&#13;&#10;      name=&quot;size&quot;&#13;&#10;      type=&quot;radio&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;p&gt;3&lt;/p&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;  &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      class=&quot;form-radio is-basic h-4.5 w-4.5 rounded-full border-slate-400/70 checked:border-primary checked:bg-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent&quot;&#13;&#10;      name=&quot;size&quot;&#13;&#10;      type=&quot;radio&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;p&gt;4&lt;/p&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;  &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      class=&quot;form-radio is-basic h-5 w-5 rounded-full border-slate-400/70 checked:border-primary checked:bg-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent&quot;&#13;&#10;      name=&quot;size&quot;&#13;&#10;      type=&quot;radio&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;p&gt;5&lt;/p&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;  &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      class=&quot;form-radio is-basic h-6 w-6 rounded-full border-slate-400/70 checked:border-primary checked:bg-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent&quot;&#13;&#10;      name=&quot;size&quot;&#13;&#10;      type=&quot;radio&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;p&gt;6&lt;/p&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;</code>
                    </pre>
                </div>
            </div>
        </>
    );
}