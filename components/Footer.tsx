export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 py-8 mt-16">
      <div className="max-w-6xl mx-auto px-4 text-sm text-neutral-400 flex flex-col md:flex-row justify-between gap-2">
        <span>© {new Date().getFullYear()} Алексей Попов</span>
        <span>Все права защищены</span>
      </div>
    </footer>
  );
}
