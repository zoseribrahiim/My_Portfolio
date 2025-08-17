export default function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="container px-4 py-8 text-sm text-gray-400 flex items-center justify-center">
        <p>
          © {new Date().getFullYear()} All rights reserved by Ibrahim Ahmed.
        </p>
      </div>
    </footer>
  );
}
