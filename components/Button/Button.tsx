import Image from "next/image";
import { ButtonProps } from "@/type/type";

export const Button = ({ type, title, icon, variant, full }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`  flexCenter gap-3 rounded-full border ${variant} ${
        full && "w-full"
      } border border-red-900`}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label htmlFor="" className="bold-16 whitespace-nowrap">
        {title}
      </label>
    </button>
  );
};
