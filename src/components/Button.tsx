import React from "react";

interface IButtonProps {
    children?: React.ReactNode;
    props?: any;
    onClick?: any;
}

const MyButton: React.FC<IButtonProps> = ({ onClick, children, ...props }) => {
    return (
        <button className="bg-sky-700 text-white py-2 px-4 rounded-xl" {...props} onClick={onClick}>
            {children}
        </button>
    );
};

export default MyButton;