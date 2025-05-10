import {Heart} from "lucide-react";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <Heart className="text-red-500 size-28" />
          <p>Všechno nejlepší k svátku, maminko!<br />
              Milujeme tě a máme pro tebe malý dáreček. Vylušti hádanku, ať víš, kde hledat.</p>
          <blockquote className="font-mono font-medium">
              Dlouhé vlásky v horké lázni,<br />
              v misce často s hůlkami,<br />
              pochází z dálného východu,<br />
              co je to za pochoutku?
          </blockquote>
          <p className="mt-6"><small>Maddie & taťka</small></p>
      </main>
    </div>
  );
}
