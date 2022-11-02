type TButtonProps = {
    text?: string;
    onClick?: any;
}

const MyButton: React.FC<TButtonProps> = ({ onClick, text }) => {
    return (
        <button className="bg-sky-700 text-white py-2 px-4 rounded-xl my-2" onClick={onClick}>
            { text }
        </button>
    );
};

export default MyButton;