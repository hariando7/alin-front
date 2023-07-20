

import Image from "next/image";
import Input from "../atom/Input";


export default function buttonGoogle() {
    return (
        <>
            <button
                class="btn w-full space-x-3 border border-slate-300 font-medium text-slate-800 hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-450 dark:text-navy-50 dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90"
            >
                <img
                    class="h-5.5 w-5.5"
                    src="images/100x100.png"
                    alt="logo"
                />
                <span>Google</span>
            </button>
        </>
    );
};
