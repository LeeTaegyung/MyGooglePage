import TodoSection from "../TodoSection/TodoSection";

export default function BoardSection() {
  return (
    <section className="flex justify-center gap-6 grow-1 p-6 overflow-hidden">
      <TodoSection />
    </section>
  );
}
