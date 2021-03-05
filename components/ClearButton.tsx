type ClearButtonProps = React.ComponentProps<'button'> & {
  className?: string
  children?: React.ReactNode,
}

const ClearButton = ({ className = '', children, ...buttonProps }: ClearButtonProps): JSX.Element => {
  return (
    <button className={`transparent ${className}`} type="button" {...buttonProps}>{children}</button>
  );
};

export default ClearButton;
