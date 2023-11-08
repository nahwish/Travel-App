import {FooterColumnProps} from "../../type/type";


export const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <>
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
    </>
  );
};
