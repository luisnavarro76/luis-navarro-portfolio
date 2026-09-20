"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Mail,
  Phone,
  CheckCircle,
  FileDown,
  MapPin,
} from "lucide-react";

import {
  GitHubIcon,
  LinkedInIcon,
} from "@/components/ui/social-icons";

import { siteConfig } from "@/data/site";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ScrollReveal } from "@/components/effects/ScrollReveal";

const projectTypes = [
  "AI / LLM Application",
  "RAG / AI Agent",
  "Backend / API Development",
  "Full-Stack SaaS",
  "API / System Integration",
  "Data / Document Pipeline",
  "Cloud / Platform Engineering",
  "Existing Product Development",
  "Other",
];

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const subject = encodeURIComponent(
      `Project Inquiry: ${data.projectType} - ${data.name}`
    );

    const body = encodeURIComponent(
      [
        `Name: ${data.name}`,
        `Email: ${data.email}`,
        `Project Type: ${data.projectType}`,
        "",
        "Message:",
        `${data.message}`,
      ].join("\n")
    );

    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="relative section-padding">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />

      <div className="container-custom relative">
        <SectionHeading
          label="CONTACT"
          title="Let's Talk About Your Project"
          description="Have an AI, backend, SaaS, integration, or platform project? Tell me what you're building and where you need engineering support."
        />

        <div className="grid gap-10 lg:grid-cols-5">
          {/* Contact details */}
          <ScrollReveal direction="left" className="lg:col-span-2">
            <div className="glass h-full rounded-2xl border border-border/60 p-8">
              <h3 className="mb-3 text-xl font-semibold">
                Get in Touch
              </h3>

              <p className="mb-8 leading-relaxed text-muted-foreground">
                I work directly with clients on AI-powered products, SaaS platforms,
                backend systems, integrations, and cloud-based applications.
                I personally handle the engineering work from architecture through
                implementation, testing, deployment, and production support.
              </p>

              <div className="space-y-4">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="group flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>

                  <span className="break-all text-sm">
                    {siteConfig.email}
                  </span>
                </a>

                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="group flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>

                  <span className="text-sm">{siteConfig.phone}</span>
                </a>

                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>

                  <span className="text-sm">Massachusetts, USA</span>
                </div>

                <a
                  href={siteConfig.resumeUrl}
                  download="Luis-Navarro-Resume.pdf"
                  className="group flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <FileDown className="h-5 w-5 text-primary" />
                  </div>

                  <span className="text-sm">Download Resume</span>
                </a>
              </div>

              <div className="mt-8 border-t border-border/60 pt-6">
                <p className="mb-4 text-sm font-medium text-muted-foreground">
                  Connect with me
                </p>

                <div className="flex gap-3">
                  {siteConfig.socials.map((social) => {
                    const Icon =
                      social.icon === "Github"
                        ? GitHubIcon
                        : social.icon === "Linkedin"
                          ? LinkedInIcon
                          : Mail;

                    const isExternal = social.url.startsWith("http");

                    return (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        {...(isExternal
                          ? {
                              target: "_blank",
                              rel: "noopener noreferrer",
                            }
                          : {})}
                        whileHover={{ y: -3, scale: 1.05 }}
                        className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-muted/30 text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary"
                        aria-label={social.name}
                      >
                        <Icon className="h-5 w-5" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              <div className="mt-8 rounded-xl border border-primary/15 bg-primary/[0.04] p-4">
                <p className="text-sm font-medium text-foreground">
                  Available for remote work
                </p>

                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  I work independently with U.S. and international clients on AI,
                  backend, full-stack, and platform engineering projects.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact form */}
          <ScrollReveal direction="right" className="lg:col-span-3">
            <div className="glass rounded-2xl border border-border/60 p-8">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex min-h-[420px] flex-col items-center justify-center text-center"
                >
                  <CheckCircle className="mb-4 h-14 w-14 text-primary" />

                  <h3 className="mb-2 text-xl font-semibold">
                    Email Ready
                  </h3>

                  <p className="max-w-md text-muted-foreground">
                    Your email client should open with the project details
                    already filled in.
                  </p>

                  <Button
                    variant="outline"
                    className="mt-6"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <>
                  <div className="mb-7">
                    <h3 className="text-xl font-semibold">
                      Tell me what you&apos;re working on
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      A short description of the product, current stack, and
                      problem you&apos;re trying to solve is enough to get
                      started.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>

                        <Input
                          id="name"
                          name="name"
                          placeholder="Your name"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>

                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="you@company.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="projectType">
                        What do you need help with?
                      </Label>

                      <select
                        id="projectType"
                        name="projectType"
                        required
                        defaultValue=""
                        className="flex h-11 w-full rounded-lg border border-border bg-muted/50 px-4 py-2 text-sm text-foreground transition-colors focus-visible:border-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                      >
                        <option value="" disabled>
                          Select a project type
                        </option>

                        {projectTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">
                        Project Details
                      </Label>

                      <Textarea
                        id="message"
                        name="message"
                        placeholder="What are you building, what already exists, and where do you need help?"
                        required
                        rows={7}
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isLoading}
                      className="w-full sm:w-auto"
                    >
                      {isLoading ? (
                        "Preparing..."
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}