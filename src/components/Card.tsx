interface Props {
  title: string;
  description: string;
  image: string;
}
export default function Card({ title, description, image }: Props) {
  return (
    <div className="flex items-center justify-center gap-4 p-4 border-2 border-zinc-900 hover:border-zinc-700 rounded-xl">
      <img src={image} className="w-20 aspect-square rounded-full" />
      <div className="flex flex-col gap-1 w-auto">
        <h2 className="text-white text-xl font-medium">{title}</h2>
        <p className="text-zinc-400">{description}</p>
      </div>
    </div>
  );
}
