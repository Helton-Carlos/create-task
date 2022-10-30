type IButtonProps = {
    text?: string;
    onClick?: any;
}

const MyButton: React.FC<IButtonProps> = ({ onClick, text }) => {
    return (
        <button className="bg-sky-700 text-white py-2 px-4 rounded-xl" onClick={onClick}>
            { text }
        </button>
    );
};

export default MyButton;