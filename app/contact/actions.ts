"use server";

import { redirect } from "next/navigation";

import { contactTopics, profile } from "@/lib/resume";

// Server action behind the Contacts form. Validates every field on the server, then hands the
// message to the visitor's mail app as a prefilled email to profile.email (no email service needed).
// Invalid input sends the visitor back to /contact?error=<field> so the page can explain.

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const field = (data: FormData, key: string, max: number): string => {
  const value = data.get(key);
  return typeof value === "string" ? value.trim().slice(0, max) : "";
};

export const sendMessage = async (data: FormData): Promise<never> => {
  const name = field(data, "name", 100);
  const email = field(data, "email", 200);
  const topic = field(data, "topic", 50);
  const details = field(data, "details", 3000);

  if (!name) redirect("/contact?error=name");
  if (!EMAIL_PATTERN.test(email)) redirect("/contact?error=email");
  if (!details) redirect("/contact?error=details");

  const safeTopic = contactTopics.includes(topic) ? topic : contactTopics[0];
  const subject = `${safeTopic}: message from ${name}`;
  const body = `${details}\n\n${name}\n${email}`;
  redirect(
    `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
  );
};
