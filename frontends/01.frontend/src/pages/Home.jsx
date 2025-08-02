import "../styles/home.css";

export default function Home() {
  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to BOOKCOM 📚</h1>
          <p>Your ultimate online bookstore. Discover, explore, and enjoy.</p>
        </div>
      </section>

      <section className="category-scroll">
        <h2>Browse by Category</h2>
        <div className="scroll-container">
          <div className="scroll-card">Fiction</div>
          <div className="scroll-card">Non-Fiction</div>
          <div className="scroll-card">Children</div>
          <div className="scroll-card">Science</div>
          <div className="scroll-card">History</div>
          <div className="scroll-card">Comics</div>
        </div>
      </section>

      <section className="highlight-section">
        <h2>Why Choose BOOKCOM?</h2>
        <p>We offer a wide range of books with fast delivery and great discounts. Join thousands of readers who trust us.</p>
         </section>
    </div>
  );
}