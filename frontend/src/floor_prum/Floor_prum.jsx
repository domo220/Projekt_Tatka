import "./floor_prum.css";
// Tady si importuj své obrázky
import img1 from "./floor1.jpg";
import img2 from "./floor1.jpg";
import img3 from "./floor1.jpg";

function Floor_prum() {
  return (
    <section className="residential-section">
      <div className="residential-container">
        {/* Nadpis sekce */}
        <span className="section-title">
          DESIGNOVÉ PODLAHY DO BYTOVÉ VÝSTAVBY
        </span>

        {/* Kontejner pro karty */}
        <div className="cards-grid">
          {/* Karta 1 */}
          <div className="card">
            <div className="card-image-wrapper">
              <img src={img1} alt="Metalické podlahy" />
            </div>
            <div className="card-content">
              <h3>METALICKÉ PODLAHY</h3>
            </div>
          </div>

          {/* Karta 2 */}
          <div className="card">
            <div className="card-image-wrapper">
              <img src={img2} alt="Polyuretanové podlahy se vzorem" />
            </div>
            <div className="card-content">
              <h3>POLYURETANOVÉ PODLAHY SE VZOREM</h3>
            </div>
          </div>

          {/* Karta 3 */}
          <div className="card">
            <div className="card-image-wrapper">
              <img src={img3} alt="Polyuretanové podlahy jednobarevné" />
            </div>
            <div className="card-content">
              <h3>POLYURETANOVÉ PODLAHY JEDNOBAREVNÉ</h3>
            </div>
          </div>

          {/* Karta 4 */}
          <div className="card">
            <div className="card-image-wrapper">
              <img src={img3} alt="Polyuretanové podlahy jednobarevné" />
            </div>
            <div className="card-content">
              <h3>POLYURETANOVÉ PODLAHY JEDNOBAREVNÉ</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Floor_prum;
