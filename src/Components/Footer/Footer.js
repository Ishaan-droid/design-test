import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="my-footer d-flex align-items-center">
      <p>&copy; {year} BEST COMPANY, LLP. All rights reserved</p>
    </footer>
  );
}
