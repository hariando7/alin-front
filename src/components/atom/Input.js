export default function Input({
    withIcon = {
        active: false,
        icon: "",
    },
    withMessage = {
        active: false,
        type: "success",
        text: "",
    },
    props = {},
}) {
    return (
        <input
            className={`form-input ${withIcon.active ? `peer pl-9` : ``} w-full rounded-lg border border-${withMessage.active ? withMessage.type : `slate-300`} bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent`}
            type="text"
            {...props}
        />
    );
}