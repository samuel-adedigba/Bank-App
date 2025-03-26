import React, { forwardRef } from "react";
import classNames from "classnames";

interface CardProps extends React.ComponentPropsWithRef<"div"> {
  title?: string;
  value?: string | number;
  percentage?: string;
  icon?: string;
  clickable?: boolean;
  bordered?: boolean;
  bgColor?: string;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      title,
      value,
      percentage,
      icon,
      clickable = false,
   //   bordered = false,
      bgColor,
      header,
      footer,
      className,
      children,
      onClick,
      ...rest
    },
    ref
  ) => {
    const cardClass = classNames(
      " p-4",
    //  bordered ? "border" : "shadow-sm",
      clickable && "cursor-pointer",
      bgColor,
      className
    );

    return (
      <div ref={ref} className={cardClass} onClick={onClick} {...rest}>

        {header && <div className=" pb-2 mb-2">{header}</div>}

        <div className="flex items-center gap-4">
          {icon && <img src={icon} alt="icon" className="w-8 h-8" />}
          <div>
            {title && <h3 className="text-lg font-semibold">{title}</h3>}
            {value !== undefined && <h1 className="text-2xl">{value}</h1>}
            {percentage && <span className="text-sm text-gray-500">{percentage}</span>}
          </div>
        </div>

        {children && <div className="">{children}</div>}

        {footer && <div className="border-t pt-2 mt-2">{footer}</div>}
      </div>
    );
  }
);

Card.displayName = "Card";
export default Card;
