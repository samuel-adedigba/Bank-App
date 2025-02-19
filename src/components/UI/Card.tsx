import React from "react";

interface CardProps {
  title?: string;
  value?: string | number;
  percentage?: string;
  icon?: string;
  className?: string;
  children?: React.ReactNode;
  
}

const Card: React.FC<CardProps> = ({ 
  title, 
  value, 
  percentage, 
  icon, 
  className, 
  children 
}) => {
  return (
    <div className={` px-10 py-4 flex items-center ${className}`}>
      {icon && <img src={icon} alt="icon" className={`${className}`} />}
      
      <div className="">
        <h3 className="text-base font-medium">{title}</h3>
        
        <div className="flex justify-between gap-4 items-center">
          <h1 className={`${className}`}>{value}</h1>
          
          {percentage && (
            <span className={`${className}`}>
              {percentage}
            </span>
          )}
        </div>

        {children && <div className={`${className}`}>{children}</div>}
      </div>
    </div>
  );
};

export default Card;
