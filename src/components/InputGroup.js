export default InputGroup = ({
    withLabel = {
        active: false,
        text: "",
    },
    withHelper = {
        active: false,
        text: "",
    },
    withMessage = {
        active: false,
        type: "success",
        text: "",
    },
    data = [
        {
            type: "icon",
            icon: "",
        },
        {
            type: "input",
            props: {},
        }
    ],
}) => {
    return (
        <div>
            {withLabel.active == true ? `<span>${withLabel.text}</span>` : ``}
            <label class="mt-1.5 flex -space-x-px">
                {
                    data.forEach((item, index) => {
                        if (item.type == "icon") {
                            <div class={`flex items-center justify-center rounded-l-lg border border-slate-300  px-3.5 font-inter dark:border-navy-450`}>
                                <span class="-mt-1">{item.icon}</span>
                            </div>
                        }
                        if (item.type == "input") {
                            <input
                                class={`form-input w-full rounded-r-lg border border-${withMessage.active ? withMessage.type : `slate-300`}  bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:z-10 hover:border-slate-400 focus:z-10 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent`}
                                type="text"
                                {...item.props}
                            />
                        }
                    })
                }
            </label>
            {withMessage.active
                ? `<span class="text-tiny+ text-${withMessage.type}">${withMessage.text}</span>`
                : withHelper.active && (
                    <span class="text-tiny+ text-slate-400 dark:text-navy-300">
                        {withHelper.text}
                    </span>
                )}
        </div>
    );
}