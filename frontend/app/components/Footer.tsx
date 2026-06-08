import { Send, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 bg-surface border-t border-gray-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="font-heading text-xl font-bold text-white">
            aiteam
          </span>

          <nav className="flex items-center gap-6">
            <a
              href="https://t.me/aiteam"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className="text-muted hover:text-white transition-colors"
            >
              <Send className="w-6 h-6" strokeWidth={1.5} />
            </a>
            <a
              href="https://github.com/aiteam/aiteam"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted hover:text-white transition-colors"
            >
              <Github className="w-6 h-6" strokeWidth={1.5} />
            </a>
          </nav>

          <p className="text-sm text-muted">
            © 2024 aiteam. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
