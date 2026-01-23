export default function MobileMenu() {
  return (
    <div className="mobile-menu" id="mobileMenu">
      <a href="/about">About us</a>
      <a href="/wedo">What We Do</a>
      <a href="#">Blog</a>
      <a href="/contact">Contact</a>

      <button className="admin-btn">Admin Access</button>
      <button className="donate-btn">Support Us</button>
    </div>
  );
}
