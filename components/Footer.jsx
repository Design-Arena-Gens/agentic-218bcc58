export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/60 py-10 text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 text-sm text-white/60">
        <p>? {new Date().getFullYear()} Axiom AI Marketing</p>
        <nav className="flex items-center gap-4">
          <a className="hover:text-white" href="#features">Features</a>
          <a className="hover:text-white" href="#pricing">Pricing</a>
          <a className="hover:text-white" href="#testimonials">Customers</a>
        </nav>
      </div>
    </footer>
  );
}
