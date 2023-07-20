import Image from "next/image";
import Input from "./Input";


export default function InputText({
  withLabel = {
    active: false,
    text: "",
  },
  withHelper = {
    active: false,
    text: "",
  },
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
    <>
      <label className="block">
        {withLabel.active == true ? <span>{withLabel.text}</span> : ``}
        <span className="relative mt-1.5 flex items-center">
          <Input withIcon={withIcon} withMessage={withMessage} props={props} />
          {withIcon.active == true && (<span className="pointer-events-none absolute flex items-center w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
            <i className={`fa-solid ${withIcon.icon} text-base align-center`}></i>
          </span>)}
        </span>
        {withMessage.active
          ? <span className="text-tiny+ text-${withMessage.type}">${withMessage.text}</span>
          : withHelper.active && (
            <span className="text-tiny+ text-slate-400 dark:text-navy-300">
              {withHelper.text}
            </span>
          )}
      </label>
    </>
  );
};
