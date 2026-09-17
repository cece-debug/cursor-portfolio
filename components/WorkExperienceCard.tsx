interface WorkExperienceCardProps {
  jobTitle: string;
  company: string;
  location: string;
  dates: string;
  description: string;
  resumePoints: string[];
}

export default function WorkExperienceCard({
  jobTitle,
  company,
  location,
  dates,
  description,
  resumePoints,
}: WorkExperienceCardProps) {
  return (
    <article className="space-y-2 rounded-lg border p-4">
      <h2 className="text-lg font-semibold">{jobTitle}</h2>
      <p className="font-medium">{company}</p>
      <p className="text-sm text-zinc-500">{location}</p>
      <p className="text-sm text-zinc-500">{dates}</p>
      <p>{description}</p>
      <ul className="list-disc pl-5">
        {resumePoints.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </article>
  );
}