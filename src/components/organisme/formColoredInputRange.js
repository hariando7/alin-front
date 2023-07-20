import Link from "next/link";
import Image from "next/image";

export default function formColoredInputRange() {
    return (
        <>
            {/* <!-- Colored Input Range --> */}
            {/* <!-- formColoredInputRange --> */}
            <div class="card px-4 pb-6 sm:px-5">
                <div class="my-3 flex h-8 items-center justify-between">
                    <h2
                        class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
                    >
                        Colored Input Range
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
                        Input Range Thumb can have different colors. Check out code for
                        detail of usage.
                    </p>
                    <div class="mt-5 space-y-6">
                        <label class="block">
                            <input
                                value="50"
                                class="form-range text-primary dark:text-accent"
                                type="range"
                            />
                        </label>
                        <label class="block">
                            <input
                                value="50"
                                class="form-range text-secondary dark:text-secondary-light"
                                type="range"
                            />
                        </label>
                        <label class="block">
                            <input value="50" class="form-range text-info" type="range" />
                        </label>
                        <label class="block">
                            <input
                                value="50"
                                class="form-range text-success"
                                type="range"
                            />
                        </label>
                        <label class="block">
                            <input
                                value="50"
                                class="form-range text-warning"
                                type="range"
                            />
                        </label>
                        <label class="block">
                            <input
                                value="50"
                                class="form-range text-error"
                                type="range"
                            />
                        </label>
                    </div>
                </div>
                <div class="code-wrapper hidden pt-4">
                    <pre
                        class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
                    >
                        <code class="language-html">
                            &lt;label class=&quot;block&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      value=&quot;50&quot;&#13;&#10;      class=&quot;form-range text-primary dark:text-accent&quot;&#13;&#10;      type=&quot;range&quot;&#13;&#10;    /&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;  &lt;label class=&quot;block&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      value=&quot;50&quot;&#13;&#10;      class=&quot;form-range text-secondary dark:text-secondary-light&quot;&#13;&#10;      type=&quot;range&quot;&#13;&#10;    /&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;  &lt;label class=&quot;block&quot;&gt;&#13;&#10;    &lt;input value=&quot;50&quot; class=&quot;form-range text-info&quot; type=&quot;range&quot; /&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;  &lt;label class=&quot;block&quot;&gt;&#13;&#10;    &lt;input value=&quot;50&quot; class=&quot;form-range text-success&quot; type=&quot;range&quot; /&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;  &lt;label class=&quot;block&quot;&gt;&#13;&#10;    &lt;input value=&quot;50&quot; class=&quot;form-range text-warning&quot; type=&quot;range&quot; /&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;  &lt;label class=&quot;block&quot;&gt;&#13;&#10;    &lt;input value=&quot;50&quot; class=&quot;form-range text-error&quot; type=&quot;range&quot; /&gt;&#13;&#10;  &lt;/label&gt;</code>
                    </pre>
                </div>
            </div>
        </>
    );
}