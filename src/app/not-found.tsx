import Link from "next/link";
import { ArrowRight, FileQuestion, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center section-padding pt-32">
      <div className="container-custom max-w-2xl text-center">
        <div className="glass rounded-3xl p-10 sm:p-12 relative overflow-hidden border-primary/20 glow-primary">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10 border border-primary/20 mx-auto">
            <FileQuestion className="h-10 w-10 text-primary" />
          </div>

          <span className="font-mono text-sm uppercase tracking-widest text-primary block mb-2">
            Error 404
          </span>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4 text-foreground">
            Page Not Found
          </h1>
          <p className="text-muted-foreground leading-relaxed mb-8">
            The page you are looking for might have been moved, renamed, or doesn’t exist in this portfolio.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/">
                <Home className="h-4 w-4 mr-2" />
                Return to Home
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
