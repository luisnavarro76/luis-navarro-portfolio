import { Shield } from "lucide-react";
import { siteConfig, navItems } from "@/data/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border bg-card/50">
      <div className="container-custom section-padding !py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 border border-primary/20">
                <Shield className="h-5 w-5 text-primary" />
              </div>
              <span className="font-semibold">{siteConfig.name}</span>
            </div>
            <p className="text-sm text-muted-foreground">
              {siteConfig.education}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              {siteConfig.role}
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
              Get In Touch
            </h3>
            <p className="text-sm text-muted-foreground">
              Ready to build something great?
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-2 inline-block text-sm text-primary hover:underline"
            >
              {siteConfig.email}
            </a>
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="mt-1 block text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {siteConfig.phone}
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <p className="font-mono text-xs text-muted-foreground">
            Built with Next.js &bull; Secured by Design
          </p>
        </div>
      </div>
    </footer>
  );
}
