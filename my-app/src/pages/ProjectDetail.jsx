import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { projects } from './Projects';

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <section className="min-h-screen bg-[#0B0B09] px-6 py-40 text-white">
        <div className="mx-auto max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-amber-400">
            Project not found
          </p>
          <h1 className="mt-5 text-4xl font-semibold">That case study does not exist.</h1>
          <Link className="mt-8 inline-flex text-amber-300 underline" to="/#projects">
            Return to projects
          </Link>
        </div>
      </section>
    );
  }

  const title = `${project.title} ${project.highlight}`;

  return (
    <section className="min-h-screen overflow-hidden bg-[#0B0B09] py-32 text-white md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/50 transition-colors hover:text-amber-300"
        >
          <span aria-hidden="true">←</span>
          Back to projects
        </Link>

        <div className="mt-14 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-20">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-amber-400">
              {project.number} / {project.category}
            </p>
            <h1 className="mt-6 max-w-3xl text-5xl font-bold leading-[0.95] tracking-[-0.05em] md:text-7xl">
              {project.title}
              <span className="block text-amber-400">{project.highlight}</span>
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-8 text-white/60">
              {project.description}
            </p>
          </div>

          <figure className="group overflow-hidden rounded-3xl border border-white/10 bg-[#151511]">
            <img
              src={project.photo}
              alt={`${title} project environment`}
              className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <figcaption className="border-t border-white/10 px-5 py-4 text-xs text-white/45">
              Representative project visual. Detailed drawings and client data can be shared during a technical discussion.
            </figcaption>
          </figure>
        </div>

        <div className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-3">
          {[
            ['Capacity / scale', project.capacity],
            ['Role', project.role],
            ['Primary tools', project.tools.join(' · ')],
          ].map(([label, value]) => (
            <div key={label} className="bg-[#10100d] p-6 md:p-8">
              <p className="text-[10px] uppercase tracking-[0.22em] text-white/35">{label}</p>
              <p className="mt-4 text-lg font-semibold text-amber-300">{value}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-amber-400">
              Engineering evidence
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              What was designed, checked and documented.
            </h2>
          </div>
          <div>
            <p className="text-lg leading-8 text-white/70">{project.evidence}</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {project.scope.map((item) => (
                <div key={item} className="rounded-lg border border-white/10 bg-white/[0.025] px-4 py-3 text-sm text-white/65">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 rounded-2xl border border-amber-400/20 bg-amber-400/[0.04] p-6 md:p-10">
          <p className="text-[10px] uppercase tracking-[0.22em] text-amber-300/80">Technical discussion</p>
          <p className="mt-4 max-w-3xl text-base leading-8 text-white/70">
            This case study is structured to make the engineering contribution clear without overstating confidential project results. The next version can include approved SLDs, simulation screenshots, calculations and measured outcomes.
          </p>
          <a
            href="/#contact"
            className="mt-7 inline-flex rounded-lg bg-amber-400 px-5 py-3 text-sm font-semibold text-black transition-colors hover:bg-amber-300"
          >
            Discuss this project
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
