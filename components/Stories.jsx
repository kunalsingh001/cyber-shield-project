export default function Stories() {
  return (
    <section className="blog-section">
      <div className="blog-header">
        <p className="blog-subtitle">Stories WE POST</p>
        <h2 className="blog-title">Our Latest Success Stories</h2>
      </div>

      <div className="blog-cards">
        {[1, 2, 3, 4].map((_, i) => (
          <div className="blog-card" key={i}>
            <img
              src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80"
              alt="story cover"
            />
            <div className="blog-content">
              <p className="category">Management</p>
              <h3 className="blog-heading">
                Bill Walsh leadership lessons <span>↗</span>
              </h3>
              <p className="blog-description">
                Like to know the secrets of transforming a 2-14 team into a
                3x Super Bowl winning Dynasty?
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="load-more">
        <button id="loadMoreBtn">↓ Load more</button>
      </div>
    </section>
  );
}
