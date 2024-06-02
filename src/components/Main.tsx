import Card from "./Card";

export default function Main() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      <Card
        title="Chat GPT"
        description="
          A natural langauge processor that analysis the input and provide
          appropirate data"
        image="/gpt.png"
      />
      <Card
        title="Gemini"
        description="
          A natural langauge processor that analysis the input and provide
          appropirate data"
        image="/gemini.png"
      />
      <Card
        title="Copilot"
        description="
          A natural langauge processor that analysis the input and provide
          appropirate data"
        image="/copilot.png"
      />
    </section>
  );
}
