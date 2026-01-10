export default function Navbar() {
  return (
    <header className="nav">
      <div className="container nav__inner">
        <a className="nav__brand" href="#top" aria-label="Cusmato">
          <img className="nav__logo" src="/logo.png" alt="Cusmato" />
          <span className="nav__word">Cusmato</span>
        </a>

        <nav className="nav__links" aria-label="Primary">
          <a href="#product">Product</a>
          <a href="#how">Hoe het werkt</a>
          <a href="#integrations">Integraties</a>
          <a href="#faq">FAQ</a>
        </nav>

        <div className="nav__cta">
          <a className="btn btn--ghost" href="https://www.cusmato.app/welkom">Vraag demo</a>
          <a className="btn btn--primary" href="#trial">7 dagen gratis</a>
        </div>
      </div>
    </header>
  );
}