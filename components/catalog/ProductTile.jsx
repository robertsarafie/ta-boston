import Link from 'next/link';

export default function ProductTile() {
  return (
    <article className="product-tile">
      <header className="product-tile-header">
        <div className="product-tile-image">
          <Link href="/" title="Thread Affair traveller suit">
            <picture>
              <img src="/images/products/product-01a.jpg" alt="Suit"></img>
            </picture>
          </Link>

          <span className="badge">%</span>
        </div>

        <h1 className="product-tile-title">
          <Link href="/" title="Thread Affair Traveller Suit">
            <span>Thread Affair</span> <span>Traveller</span> Suit
          </Link>
        </h1>
        <h2 className="product-tile-subtitle">
          <Link href="/" title="Thread Affair Traveller Suit">
            London fit Semi-slim
          </Link>
        </h2>
      </header>

      <section className="product-tile-pricing">
        <span className="product-tile-regular">499.00</span>

        <span className="product-tile-price">
          USD <span>399.00</span>
        </span>
      </section>

      <footer className="product-tile-footer">
        <button className="button" title="Add to Cart" type="button">
          Add to Cart
        </button>
      </footer>
    </article>
  );
}
