interface ButtonProps {
  primary?: boolean;
  size?: "small" | "large";
  label?: string;
}
 
export function Button({
  primary = false,
  label = "Boop",
  size = "small",
}: ButtonProps): JSX.Element{
  return (
    <button
      style={{
        backgroundColor: primary ? "red" : "blue",
        fontSize: size === "large" ? "24px" : "14px",
      }}
      type='button'
    >
      {label}
    </button>
  );
};
