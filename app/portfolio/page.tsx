import WorkExperienceCard from "@/components/WorkExperienceCard";
import ProjectCard from "@/components/ProjectCard";

const workExperience = [
  {
    jobTitle: "Senior Software Engineer",
    company: "Acme Corp",
    location: "Remote",
    dates: "2023 – Present",
    description:
      "Led the frontend team building a SaaS analytics dashboard used by 2,000+ customers.",
    resumePoints: [
      "Shipped a real-time data dashboard that cut report generation time by 80%",
      "Mentored 4 junior engineers and ran weekly code reviews",
      "Introduced TypeScript across the codebase, reducing runtime bugs by 40%",
    ],
  },
  {
    jobTitle: "Full Stack Developer",
    company: "Brightside Inc.",
    location: "Austin, TX",
    dates: "2020 – 2023",
    description:
      "Designed and built customer-facing web apps and the internal admin tooling that powers them.",
    resumePoints: [
      "Built a subscription billing flow that lifted conversions 15%",
      "Automated deployment pipeline, cutting release time from days to minutes",
      "Reduced API response times 3x via query optimization and caching",
    ],
  },
  {
    jobTitle: "Junior Web Developer",
    company: "PixelForge Studio",
    location: "Chicago, IL",
    dates: "2018 – 2020",
    description:
      "Developed marketing sites and e-commerce storefronts for small business clients.",
    resumePoints: [
      "Delivered 10+ client websites with responsive, accessible layouts",
      "Integrated payment and CMS platforms for 6 e-commerce stores",
      "Won 2 in-house awards for design implementation quality",
    ],
  },
];

const projects = [
  {
    name: "Budget Tracker",
    date: "2024",
    description:
      "A personal finance app that tracks spending, sets monthly budgets, and visualizes trends.",
    resumePoints: [
      "Processed 10,000+ transactions with automatic categorization",
      "Built interactive charts with 99% data cache hit rate",
    ],
    tools: ["React", "Next.js", "Tailwind CSS", "PostgreSQL"],
  },
  {
    name: "Dev Health CLI",
    date: "2023",
    description:
      "A command-line tool that audits a repository's health: test coverage, dependencies, and TODOs.",
    resumePoints: [
      "Scanned repos in under 2 seconds, used by 300+ developers",
    ],
    tools: ["Node.js", "TypeScript", "Git"],
  },
];

export default function WorkExperience() {
  return (
    <section className="space-y-10">
      <section>
        <h1 className="text-center text-2xl font-bold">Work Experience</h1>
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {workExperience.map((job, i) => (
            <WorkExperienceCard key={i} {...job} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-center text-2xl font-bold">Projects</h2>
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>
      </section>
    </section>
  );
}