// src/components/layout/Footer.jsx
function Footer() {
  return (
    <footer className="bg-gray-200 text-center py-4 mt-8">
      <p className="text-sm text-gray-700">
        &copy; {new Date().getFullYear()} Emmaculate's Expense Tracker. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
