interface SpinnerProps {
  isLoading: boolean;
}

export const Spinner = ({ isLoading }: SpinnerProps) => {
  if (!isLoading) return null;
  return (
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};
