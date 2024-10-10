export default function Footer() {
  return (
    <div className="footer">
      <h6>© 2024 Mycloset</h6>

      <button
        className="button-instagram"
        onClick={(openNewTab) =>
          window.open(
            "https://www.instagram.com/myclosetofficial2024/?hl=en,",
            "_blank",
            "noopener,noreferrer"
          )
        }
      >
        Instagram
      </button>
    </div>
  );
}
