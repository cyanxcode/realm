import Badge from "./Badge";

export default function BadgeList() {
  return (
    <div className="flex gap-4 px-10 w-full  flex-wrap">
      <Badge color="orange">All</Badge>
      <Badge color="red">Language</Badge>
      <Badge color="blue">Speech</Badge>
      <Badge color="purple">Image Generator</Badge>
    </div>
  );
}
