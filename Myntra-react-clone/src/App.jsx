
import './App.css'


function App() {
  

  return (
    <>
      <header>
        <div classname="logo_container">
          <a href="#">
            <img
              classname="myntra_home"
              src="../images/myntra_logo.webp"
              alt="Myntra Home"
            />
          </a>
        </div>
        <nav classname="nav_bar">
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">Kids</a>
          <a href="#">Home & Living</a>
          <a href="#">Beauty</a>
          <a href="#">
            Studio <sup>New</sup>
          </a>
        </nav>
        <div classname="search_bar">
          <span classname="material-symbols-outlined search_icon">search</span>
          <input
            classname="search_input"
            placeholder="Search for products, brands and more"
          />
        </div>
        <div classname="action_bar">
          <div classname="action_container">
            <span classname="material-symbols-outlined action_icon">
              person
            </span>
            <span classname="action_name">Profile</span>
          </div>

          <div classname="action_container">
            <span classname="material-symbols-outlined action_icon">
              favorite
            </span>
            <span classname="action_name">Wishlist</span>
          </div>

          <div classname="action_container">
            <span classname="material-symbols-outlined action_icon">
              shopping_bag
            </span>
            <span classname="action_name">Bag</span>
            <span classname="bag-item-count">0</span>
          </div>
        </div>
      </header>

      <main>
        <div className="items-container"></div>
      </main>
      <footer>
        <div classname="footer_container">
          <div classname="footer_column">
            <h3>ONLINE SHOPPING</h3>

            <a href="#">Men</a>
            <a href="#">Women</a>
            <a href="#">Kids</a>
            <a href="#">Home & Living</a>
            <a href="#">Beauty</a>
            <a href="#">Gift Card</a>
            <a href="#">Myntra Insider</a>
          </div>

          <div classname="footer_column">
            <h3>ONLINE SHOPPING</h3>

            <a href="#">Men</a>
            <a href="#">Women</a>
            <a href="#">Kids</a>
            <a href="#">Home & Living</a>
            <a href="#">Beauty</a>
            <a href="#">Gift Card</a>
            <a href="#">Myntra Insider</a>
          </div>

          <div classname="footer_column">
            <h3>ONLINE SHOPPING</h3>

            <a href="#">Men</a>
            <a href="#">Women</a>
            <a href="#">Kids</a>
            <a href="#">Home & Living</a>
            <a href="#">Beauty</a>
            <a href="#">Gift Card</a>
            <a href="#">Myntra Insider</a>
          </div>
        </div>
        <hr />

        <div classname="copyright">
          © 2023 www.myntra.com. All rights reserved.
        </div>
      </footer>
    </>
  );
}

export default App
