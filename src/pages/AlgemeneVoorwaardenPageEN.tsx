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

export default function AlgemeneVoorwaardenPageEN() {
  useEffect(() => {
    document.title = "Terms & Conditions | Cusmato";
  }, []);

  const sections: TermSection[] = useMemo(
    () => [
      {
        title: "1. General",
        content: (
          <p>
            These terms and conditions apply to all offers, agreements and services provided by Cusmato. By using our website and services, you agree to these terms.
            <br /><br />
            Cusmato reserves the right to modify these terms at any time. The most recent version will always be available on our website.
          </p>
        ),
      },
      {
        title: "2. Services",
        content: (
          <>
            <p>
              Cusmato provides AI-powered customer support software for e-commerce businesses. Our services include, but are not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>AI helpdesk automation</li>
              <li>Email and chat automation</li>
              <li>Workflow and rules automation</li>
              <li>Knowledgebase integration</li>
              <li>Customer data and context enrichment</li>
              <li>Integrations with third-party platforms</li>
            </ul>
            <p className="mt-4">
              Cusmato makes every effort to ensure high availability and performance, but does not guarantee uninterrupted or error-free operation.
            </p>
          </>
        ),
      },
      {
        title: "3. Accounts & Access",
        content: (
          <>
            <p>
              To use Cusmato, you must create an account. You are responsible for:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Keeping your login credentials confidential</li>
              <li>All activities that occur under your account</li>
              <li>Providing accurate and up-to-date information</li>
            </ul>
            <p className="mt-4">
              Cusmato reserves the right to suspend or terminate accounts in case of misuse, violation of these terms, or illegal activities.
            </p>
          </>
        ),
      },
      {
        title: "4. Payments & Billing",
        content: (
          <>
            <p>
              Certain features and services require a paid subscription.
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Prices are listed on the pricing page and may be updated from time to time</li>
              <li>Subscriptions are billed on a monthly basis unless stated otherwise</li>
              <li>All fees are exclusive of VAT unless stated otherwise</li>
              <li>Failure to pay may result in suspension of services</li>
            </ul>
          </>
        ),
      },
      {
        title: "5. Free Trial",
        content: (
          <>
            <p>
              Cusmato may offer a free trial period. During the trial:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>You can test the platform without obligation</li>
              <li>After the trial, a paid subscription is required to continue using the service</li>
              <li>Cusmato reserves the right to change or discontinue free trials at any time</li>
            </ul>
          </>
        ),
      },
      {
        title: "6. Data & Privacy",
        content: (
          <>
            <p>
              Cusmato processes customer data in accordance with applicable privacy laws and regulations.
            </p>
            <p className="mt-4">
              We take appropriate technical and organizational measures to protect your data. For more information, refer to the{" "}
              <Link to="/en/security-privacy" className="text-blue-600 hover:text-blue-700 underline">
                Privacy Policy
              </Link>{" "}
              page.
            </p>
          </>
        ),
      },
      {
        title: "7. Intellectual Property",
        content: (
          <>
            <p>
              All software, content, trademarks and materials provided by Cusmato are the property of Cusmato or its licensors and are protected by intellectual property laws.
            </p>
            <p className="mt-4">
              You may not copy, modify, distribute, sell, or reverse engineer any part of the service without written permission.
            </p>
          </>
        ),
      },
      {
        title: "8. Limitation of Liability",
        content: (
          <>
            <p>
              Cusmato is not liable for indirect damages, including lost profits, business interruption, loss of data, or other consequential damages arising from the use of the service.
            </p>
            <p className="mt-4">
              Cusmato's total liability will never exceed the amount paid by the customer in the last 3 months preceding the event that caused the damage.
            </p>
          </>
        ),
      },
      {
        title: "9. Termination",
        content: (
          <>
            <p>
              You may cancel your subscription at any time in accordance with the subscription terms.
            </p>
            <p className="mt-4">
              Cusmato may terminate or suspend access if you breach these terms.
            </p>
          </>
        ),
      },
      {
        title: "10. Contact",
        content: (
          <>
            <p>
              Questions about these terms? Contact us via:{" "}
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
            Terms & Conditions
          </h1>

          <p className="mt-4 text-base text-slate-600">
            Last updated: <span className="font-medium text-slate-800">January 9, 2025</span>
          </p>

          {/* Callout: trust + clarity */}
          <div className="mt-8 rounded-2xl border border-slate-200 bg-white/80 p-5 text-left shadow-sm">
            <p className="text-sm leading-6 text-slate-700">
              This page describes the terms for using Cusmato. Please read this document carefully. If you have questions, you can contact Cusmato.
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
