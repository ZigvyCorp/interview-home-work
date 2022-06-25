interface IProps {
    color: string;
    text: string;
}

const Tag = ({ color, text }: IProps) => {
    return (
        <span className="tag" style={{ color: color }}>
            {text}
        </span>
    );
};

export default Tag;
