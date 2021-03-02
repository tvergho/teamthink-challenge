type ClearButtonProps = {
  className?: string
  children?: React.ReactNode
}

const ClearButton = ({ className = '', children }: ClearButtonProps): JSX.Element => {
  return (
    <button className={`transparent ${className}`} type="button">{children}</button>
  );
};

export default ClearButton;
