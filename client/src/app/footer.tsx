export default function Footer() {
  return (
    <footer className="bg-black text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-4 gap-8 mb-8">
          <div>
            <h5 className="font-bold mb-4">News</h5>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  World
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Indonesia
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Politics
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Business
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-4">Opinion</h5>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Editorials
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Op-Ed
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Letters
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Sunday Review
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-4">More</h5>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Reader Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Corrections
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Work with us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-4">Subscribe</h5>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Home Delivery
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Digital Subscriptions
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Games
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Newsletters
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-2xl font-serif font-bold mb-2">JogjakarTime's</p>
          <p className="text-sm text-gray-400">
            © 2025 JogjakarTime's Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
