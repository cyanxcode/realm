interface Props {
  children: string;
  color: "red" | "blue" | "orange" | "green" | "purple";
}
export default function Badge({ children, color }: Props) {
  return (
    <button className={"rounded-full py-1 px-5 border h-9 " + color}>
      {children}
    </button>
  );
}
