const Message = ({ variant, children }) => {
    return <div className={`${variant} text-center text-red-600`}>{children}</div>;
};

Message.defaultProps = {
    variant: 'alert-info',
};

export default Message;
