import React from 'react';

const Alert = ({ children, className = "", variant = "default", ...props }) => {
  const baseClasses = "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground";
  
  const variantClasses = {
    default: "bg-background text-foreground",
    destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
  };

  return (
    <div
      role="alert"
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

const AlertTitle = ({ children, className = "", ...props }) => (
  <h5
    className={`mb-1 font-medium leading-none tracking-tight ${className}`}
    {...props}
  >
    {children}
  </h5>
);

const AlertDescription = ({ children, className = "", ...props }) => (
  <div
    className={`text-sm [&_p]:leading-relaxed ${className}`}
    {...props}
  >
    {children}
  </div>
);

export { Alert, AlertTitle, AlertDescription };
