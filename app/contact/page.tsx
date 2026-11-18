import { Suspense, type ReactNode } from "react";
import type { Metadata } from "next";

import { ArrowRight } from "@/components/Icons";
import { SiteFrame, pagePadding } from "@/components/SiteFrame";
import { contactTopics, profile } from "@/lib/resume";

import { sendMessage } from "./actions";

// Contacts page: headline, the message form from the design, and the direct email address.
// The form posts to a server action (./actions.ts) that validates it and opens a prefilled
// email, so the page needs no client components.

export const metadata: Metadata = { title: "Contacts" };

const errors: Record<string, string> = {
  name: "Please add your name.",
  email: "Please enter a valid email address.",
  details: "Please describe the role or project.",
};

const input =
  "h-[50px] rounded-full border border-line bg-transparent px-5 text-[15px] text-ink outline-none focus:border-ink md:h-auto md:px-[22px] md:py-3.5";

const FormError = async ({
  searchParams,
}: Pick<PageProps<"/contact">, "searchParams">): Promise<ReactNode> => {
  const { error } = await searchParams;
  const text = typeof error === "string" ? errors[error] : undefined;
  return text ? (
    <p role="alert" className="m-0 font-mono text-xs text-ink">
      {text}
    </p>
  ) : null;
};

const ContactForm = ({ searchParams }: Pick<PageProps<"/contact">, "searchParams">): ReactNode => (
  <form
    action={sendMessage}
    className="flex flex-col gap-3 rounded-[26px] border border-line bg-field p-5 md:gap-3.5 md:rounded-[28px] md:bg-glass md:p-[clamp(24px,3vw,40px)] md:backdrop-blur-[6px]"
  >
    <Suspense fallback={null}>
      <FormError searchParams={searchParams} />
    </Suspense>
    <input name="name" required maxLength={100} autoComplete="name" placeholder="Name" aria-label="Name" className={input} />
    <input name="email" type="email" required maxLength={200} autoComplete="email" placeholder="Email" aria-label="Email" className={input} />
    <fieldset className="m-0 flex flex-wrap gap-2 border-0 px-0 py-1 md:py-1.5">
      <legend className="sr-only">Topic</legend>
      {contactTopics.map((topic, i) => (
        <label
          key={topic}
          className="inline-flex h-10 cursor-pointer items-center rounded-full border border-line px-3.5 font-mono text-xs leading-tight whitespace-nowrap hover:border-ink has-checked:border-ink has-checked:bg-ink has-checked:text-paper has-focus-visible:outline has-focus-visible:outline-ink md:h-auto md:px-4 md:py-2"
        >
          <input type="radio" name="topic" value={topic} defaultChecked={i === 0} className="sr-only" />
          {topic}
        </label>
      ))}
    </fieldset>
    <textarea
      name="details"
      required
      maxLength={3000}
      rows={5}
      placeholder="Project details"
      aria-label="Project details"
      className="min-h-[130px] resize-y rounded-[20px] border border-line bg-transparent px-5 py-4 text-[15px] text-ink outline-none focus:border-ink md:rounded-[22px] md:px-[22px]"
    />
    <div className="pair flex items-center gap-2 pt-1 md:gap-2.5 md:pt-1.5">
      <button
        type="submit"
        className="flex-1 cursor-pointer rounded-full border-0 bg-ink py-3.5 text-[15px] leading-tight font-semibold whitespace-nowrap text-paper md:flex-none md:px-[30px] md:py-3 md:text-sm"
      >
        Send message
      </button>
      <span aria-hidden className="grid h-[50px] w-[50px] shrink-0 place-items-center rounded-full border border-ink md:h-11 md:w-11">
        <ArrowRight />
      </span>
    </div>
  </form>
);

const Contact = ({ searchParams }: PageProps<"/contact">): ReactNode => (
  <SiteFrame active="contact">
    <main className={`relative grid grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] gap-7 pt-7 pb-11 md:gap-14 md:pt-6 md:pb-20 ${pagePadding}`}>
      <div className="flex flex-col gap-[18px] md:gap-7">
        <h1 className="m-0 font-mono text-[46px] font-medium leading-none tracking-[-.02em] md:text-[clamp(44px,7vw,104px)]">
          Let&apos;s work together
        </h1>
        <p className="m-0 max-w-[440px] text-[15px] leading-[1.65] text-muted md:text-base">
          Tell me about the role or project. I usually reply within{" "}
          <em className="font-semibold text-ink">one working day</em>.
        </p>
        <a href={`mailto:${profile.email}`} className="mt-auto hidden self-start font-mono text-[clamp(18px,2vw,24px)] hover:text-muted md:inline">
          {profile.email}
        </a>
      </div>
      <ContactForm searchParams={searchParams} />
      <div className="flex flex-col gap-1.5 md:hidden">
        <span className="text-xs text-muted">Or email directly</span>
        <a href={`mailto:${profile.email}`} className="font-mono text-[17px] break-all">
          {profile.email}
        </a>
      </div>
    </main>
  </SiteFrame>
);

export default Contact;
