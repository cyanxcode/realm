interface Props {
  text: string;
}
export default function ({ text }: Props) {
  return (
    <form>
      <input
        type="text"
        placeholder={text}
        className="w-full h-8 rounded-full text-white bg-black border-solid border-2 border-zinc-300 px-10 py-5"
      />
    </form>
  );
}
