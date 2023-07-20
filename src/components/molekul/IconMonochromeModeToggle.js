

import Image from "next/image";
import Input from "../atom/Input";


export default function IconMonochromeModeToggle() {
    return (
        <>
            {/* <!-- Monochrome Mode Toggle --> */}
            <button
                class="monochrome-toggle btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                <i
                    class="fa-solid fa-palette bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-lg font-semibold text-transparent"></i>
            </button>
        </>
    );
};
