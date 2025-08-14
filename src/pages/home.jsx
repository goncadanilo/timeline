import { Logo } from "../components/logo";
import { Timeline } from "../components/timeline";

import { assignLanes } from "../assignLanes";
import { timelineItems } from "../timelineItems";

export function Home() {
  const lanes = assignLanes(timelineItems);

  return (
    <main className="overflow-hidden">
      <header className="mb-2 border-b border-zinc-300 py-4 px-8 flex items-center justify-between">
        <Logo />
      </header>

      <section className="py-4 px-8">
        <div className=" flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-medium">Timeline</h1>
            <p className="mt-1 font-light text-zinc-600">
              A visual representation of tasks.
            </p>
          </div>

          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors cursor-pointer">
            Add Task
          </button>
        </div>

        <Timeline lanes={lanes} />
      </section>
    </main>
  );
}
