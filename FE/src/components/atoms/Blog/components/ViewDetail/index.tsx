interface ViewDetailButtonProps {
  onClick: () => void;
}

export const ViewDetailButton = ({ onClick }: ViewDetailButtonProps) => {
  return (
    <a className="btn btn-secondary text-light mt-1" onClick={onClick}>
      View Detail
    </a>
  );
};
