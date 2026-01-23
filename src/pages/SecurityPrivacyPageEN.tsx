import { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";

// ✅ Helper: make clean anchor IDs
function slugify(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

type TermSection = {
  title: string;
  content: React.ReactNode;
};

export default function SecurityPrivacyPageEN() {
  useEffect(() => {
    document.title = "Security & Privacy | Cusmato";
  }, []);

  const sections: TermSection[] = useMemo(
    () => [
      {
        title: "1. Introduction",
        content: (
          <p>
            At Cusmato, we take the security and privacy of your data seriously. This page explains how we protect your information and how we handle personal and customer data.
          </p>
        ),
      },
      {
        title: "2. Data Protection",
        content: (
          <>
            <p>
              Cusmato implements appropriate technical and organizational measures to protect data against:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Unauthorized access</li>
              <li>Accidental loss</li>
              <li>Destruction or damage</li>
            </ul>
            <p className="mt-4">
              These measures include access controls, encryption where appropriate, and secure infrastructure.
            </p>
          </>
        ),
      },
      {
        title: "3. Personal Data",
        content: (
          <>
            <p>
              Cusmato processes personal data only for legitimate business purposes, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Providing and improving our services</li>
              <li>Account management and support</li>
              <li>Billing and communication</li>
            </ul>
            <p className="mt-4">
              We only collect data that is necessary to deliver our services.
            </p>
          </>
        ),
      },
      {
        title: "4. Customer Data",
        content: (
          <>
            <p>
              When using Cusmato, you may connect external systems and inboxes. Customer data processed through Cusmato remains the property of you, the customer.
            </p>
            <p className="mt-4">
              Cusmato acts as a data processor and only processes data based on your instructions.
            </p>
          </>
        ),
      },
      {
        title: "5. Data Storage",
        content: (
          <p>
            Data is stored on secure servers with appropriate safeguards in place. We take reasonable steps to ensure data is stored in accordance with applicable laws and regulations.
          </p>
        ),
      },
      {
        title: "6. Access Control",
        content: (
          <p>
            Access to systems and customer data is restricted to authorized personnel only. Employees and contractors are bound by confidentiality obligations.
          </p>
        ),
      },
      {
        title: "7. Third-Party Services",
        content: (
          <p>
            Cusmato may use trusted third-party providers to deliver parts of the service (such as hosting or analytics). These providers are selected carefully and must meet appropriate security and privacy standards.
          </p>
        ),
      },
      {
        title: "8. Compliance",
        content: (
          <p>
            Cusmato aims to comply with applicable data protection laws, including the General Data Protection Regulation (GDPR) where applicable.
          </p>
        ),
      },
      {
        title: "9. Your Responsibilities",
        content: (
          <>
            <p>
              As a customer, you are responsible for:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Securing your own account credentials</li>
              <li>Managing user access within your organization</li>
              <li>Ensuring lawful use of customer data</li>
            </ul>
          </>
        ),
      },
      {
        title: "10. Contact",
        content: (
          <>
            <p>
              If you have questions about security or privacy, please contact us via:{" "}
              <Link to="/en/try-14-days-for-free" className="text-blue-600 hover:text-blue-700 underline">
                /en/try-14-days-for-free
              </Link>
            </p>
          </>
        ),
      },
    ],
    []
  );

  const toc = useMemo(
    () =>
      sections.map((s) => ({
        title: s.title,
        id: slugify(s.title),
      })),
    [sections]
  );

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Subtle background (no busy hero, but "depth") */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-white" />
        <div className="absolute -top-24 left-1/2 h-72 w-[720px] -translate-x-1/2 rounded-full bg-blue-200/20 blur-3xl" />
        <div className="absolute top-40 right-10 h-56 w-56 rounded-full bg-indigo-200/20 blur-3xl" />
      </div>

      <section className="mx-auto max-w-7xl sm:px-6 lg:px-8 pb-16 pt-24 lg:pt-28 overflow-x-hidden">
        {/* Header */}
        <header className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-600 shadow-sm">
            Legal
          </div>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Security & Privacy
          </h1>

          <p className="mt-4 text-base text-slate-600">
            Last updated: <span className="font-medium text-slate-800">January 9, 2025</span>
          </p>

          {/* Callout: trust + clarity */}
          <div className="mt-8 rounded-2xl border border-slate-200 bg-white/80 p-5 text-left shadow-sm">
            <p className="text-sm leading-6 text-slate-700">
              This page explains how Cusmato protects your data and handles security and privacy. Please read this document carefully. If you have questions, you can contact Cusmato.
            </p>
          </div>
        </header>

        {/* Content grid */}
        <div className="mt-12 grid gap-10 lg:grid-cols-12">
          {/* Sticky TOC */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <div className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <h2 className="text-sm font-semibold text-slate-900">Contents</h2>
                  <span className="text-xs text-slate-500">{toc.length} sections</span>
                </div>

                <nav className="mt-4">
                  <ul className="space-y-1">
                    {toc.map((item) => (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          className="group flex items-start gap-2 rounded-xl px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors"
                        >
                          <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-slate-300 group-hover:bg-blue-500 transition-colors" />
                          <span className="leading-6">{item.title}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              {/* small footer info */}
              <div className="mt-4 rounded-2xl border border-slate-200 bg-white/70 p-4 text-xs text-slate-600">
                Tip: you can link directly to a section via the URL with <span className="font-mono">#</span>
                {" "}anchors.
              </div>
            </div>
          </aside>

          {/* Legal content */}
          <article className="lg:col-span-8">
            <div className="rounded-3xl border border-slate-200 bg-white/85 shadow-sm">
              <div className="p-6 sm:p-8">
                {sections.map((section) => {
                  const id = slugify(section.title);
                  return (
                    <section
                      key={id}
                      id={id}
                      className="scroll-mt-28 border-b border-slate-100 pb-10 pt-2 last:border-b-0 last:pb-0"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                          {section.title}
                        </h2>

                        <a
                          href={`#${id}`}
                          className="mt-1 hidden rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 hover:text-slate-900 sm:inline-flex transition-colors"
                          aria-label={`Link to ${section.title}`}
                        >
                          Copy link
                        </a>
                      </div>

                      {/* Body: "prose" look without tailwind-typography plugin needed */}
                      <div className="mt-4 space-y-4 text-[15px] leading-7 text-slate-700">
                        {section.content}
                      </div>
                    </section>
                  );
                })}
              </div>
            </div>

            {/* Bottom spacing (white space conscious, as you want) */}
            <div className="h-10 sm:h-14" />
          </article>
        </div>
      </section>
    </main>
  );
}
