interface ProjectCardProps {
  name: string;
  date: string;
  description: string;
  resumePoints: string[];
  tools: string[];
}

export default function ProjectCard({
  name,
  date,
  description,
  resumePoints,
  tools,
}: ProjectCardProps) {
  return (
    <article className="flex flex-col space-y-2 rounded-lg border p-4">
      <div className="flex items-baseline justify-between">
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-sm text-zinc-500">{date}</p>
      </div>
      <p>{description}</p>
      <ul className="list-disc pl-5">
        {resumePoints.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
      <div className="mt-auto pt-2">
        <p className="text-sm font-medium">Tools used:</p>
        <ul className="mt-1 flex flex-wrap gap-1.5">
          {tools.map((tool, i) => (
            <li
              key={i}
              className="rounded-full border px-2.5 py-0.5 text-xs text-zinc-600"
            >
              {tool}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}