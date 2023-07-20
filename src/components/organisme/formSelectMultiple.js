import Link from "next/link";
import Image from "next/image";

export default function formSelectMultiple() {
    return (
        <>
            {/* <!-- Select Multiple --> */}
            {/* <!-- formSelectMultiple --> */}
            <div class="card px-4 pb-4 sm:px-5">
                <div class="my-3 flex h-8 items-center justify-between">
                    <h2
                        class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
                    >
                        Select Multiple
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
                            <span>Select Countries</span>
                            <select
                                id="tom6"
                                class="mt-1.5 w-full"
                                multiple
                                placeholder="Select a state..."
                                autocomplete="off"
                            >
                                <option value="">Select a state...</option>
                                <option value="AL">Alabama</option>
                                <option value="AK">Alaska</option>
                                <option value="AZ">Arizona</option>
                                <option value="AR">Arkansas</option>
                                <option value="CA" selected>California</option>
                                <option value="CO">Colorado</option>
                                <option value="CT">Connecticut</option>
                                <option value="DE">Delaware</option>
                                <option value="DC">District of Columbia</option>
                                <option value="FL">Florida</option>
                                <option value="GA">Georgia</option>
                                <option value="HI">Hawaii</option>
                                <option value="ID">Idaho</option>
                                <option value="IL">Illinois</option>
                                <option value="IN">Indiana</option>
                                <option value="IA">Iowa</option>
                                <option value="KS">Kansas</option>
                                <option value="KY">Kentucky</option>
                                <option value="LA">Louisiana</option>
                                <option value="ME">Maine</option>
                                <option value="MD">Maryland</option>
                                <option value="MA">Massachusetts</option>
                                <option value="MI">Michigan</option>
                                <option value="MN">Minnesota</option>
                                <option value="MS">Mississippi</option>
                                <option value="MO">Missouri</option>
                                <option value="MT">Montana</option>
                                <option value="NE">Nebraska</option>
                                <option value="NV">Nevada</option>
                                <option value="NH">New Hampshire</option>
                                <option value="NJ">New Jersey</option>
                                <option value="NM">New Mexico</option>
                                <option value="NY">New York</option>
                                <option value="NC">North Carolina</option>
                                <option value="ND">North Dakota</option>
                                <option value="OH">Ohio</option>
                                <option value="OK">Oklahoma</option>
                                <option value="OR">Oregon</option>
                                <option value="PA">Pennsylvania</option>
                                <option value="RI">Rhode Island</option>
                                <option value="SC">South Carolina</option>
                                <option value="SD">South Dakota</option>
                                <option value="TN">Tennessee</option>
                                <option value="TX">Texas</option>
                                <option value="UT">Utah</option>
                                <option value="VT">Vermont</option>
                                <option value="VA">Virginia</option>
                                <option value="WA">Washington</option>
                                <option value="WV">West Virginia</option>
                                <option value="WI">Wisconsin</option>
                                <option value="WY" selected>Wyoming</option>
                            </select>
                        </label>
                    </div>
                </div>
                <div class="code-wrapper hidden pt-4">
                    <pre
                        class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
                    >
                        <code class="language-html">
                            &lt;label class=&quot;block&quot;&gt;&#13;&#10;    &lt;span&gt;Select Countries&lt;/span&gt;&#13;&#10;    &lt;select&#13;&#10;      id=&quot;tom6&quot;&#13;&#10;      class=&quot;mt-1.5 w-full&quot;&#13;&#10;      multiple&#13;&#10;      placeholder=&quot;Select a state...&quot;&#13;&#10;      autocomplete=&quot;off&quot;&#13;&#10;    &gt;&#13;&#10;      &lt;option value=&quot;&quot;&gt;Select a state...&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;AL&quot;&gt;Alabama&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;AK&quot;&gt;Alaska&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;AZ&quot;&gt;Arizona&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;AR&quot;&gt;Arkansas&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;CA&quot; selected&gt;California&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;CO&quot;&gt;Colorado&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;CT&quot;&gt;Connecticut&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;DE&quot;&gt;Delaware&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;DC&quot;&gt;District of Columbia&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;FL&quot;&gt;Florida&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;GA&quot;&gt;Georgia&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;HI&quot;&gt;Hawaii&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;ID&quot;&gt;Idaho&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;IL&quot;&gt;Illinois&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;IN&quot;&gt;Indiana&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;IA&quot;&gt;Iowa&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;KS&quot;&gt;Kansas&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;KY&quot;&gt;Kentucky&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;LA&quot;&gt;Louisiana&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;ME&quot;&gt;Maine&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;MD&quot;&gt;Maryland&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;MA&quot;&gt;Massachusetts&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;MI&quot;&gt;Michigan&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;MN&quot;&gt;Minnesota&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;MS&quot;&gt;Mississippi&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;MO&quot;&gt;Missouri&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;MT&quot;&gt;Montana&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;NE&quot;&gt;Nebraska&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;NV&quot;&gt;Nevada&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;NH&quot;&gt;New Hampshire&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;NJ&quot;&gt;New Jersey&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;NM&quot;&gt;New Mexico&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;NY&quot;&gt;New York&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;NC&quot;&gt;North Carolina&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;ND&quot;&gt;North Dakota&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;OH&quot;&gt;Ohio&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;OK&quot;&gt;Oklahoma&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;OR&quot;&gt;Oregon&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;PA&quot;&gt;Pennsylvania&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;RI&quot;&gt;Rhode Island&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;SC&quot;&gt;South Carolina&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;SD&quot;&gt;South Dakota&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;TN&quot;&gt;Tennessee&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;TX&quot;&gt;Texas&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;UT&quot;&gt;Utah&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;VT&quot;&gt;Vermont&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;VA&quot;&gt;Virginia&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;WA&quot;&gt;Washington&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;WV&quot;&gt;West Virginia&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;WI&quot;&gt;Wisconsin&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;WY&quot; selected&gt;Wyoming&lt;/option&gt;&#13;&#10;    &lt;/select&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;&#13;&#10;  &lt;!-- Javascript --&gt;&#13;&#10;  &lt;script&gt;&#13;&#10;    const tom6 = document.querySelector(&quot;#tom6&quot;);&#13;&#10;    tom6._tom = new Tom(tom6);&#13;&#10;  &lt;/script&gt;&#13;&#10;                </code>
                    </pre>
                </div>
            </div>
        </>
    );
}