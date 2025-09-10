import { Metadata } from "next";

export const metadata: Metadata = {
  title: "EngageAI",
};

export default function Home() {
  return (
    <section className="space-y-16 bg-cover bg-center bg-no-repeat px-1 p-18">
      <section className="grid grid-cols-1 items-center gap-8 sm:grid-cols-2">
        <div className="space-y-3">
          <h1>Title</h1>
        </div>
      </section>
    </section>
  );
}
