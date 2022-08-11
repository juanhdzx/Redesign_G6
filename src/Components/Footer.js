import React from 'react'
import './App.css';
export const Footer = () => {
  return (
    <div>
      <footer>
        <div>
          <a aria-label="facebook" href="#" id="FB" className="fa fa-facebook"></a>
          <a aria-label="twitter" href="#" id="Twitter" className="fa fa-twitter"></a>
          <a aria-label="instagram" href="#" id="IG" className="fa fa-instagram"></a>
          <a aria-label="pinterest" href="#" id="Pinterest" className="fa fa-pinterest"></a>
          <p>Wikipedia Copy Rights 2022 &copy; </p>
        </div>
        <div id="footer-info">
          <p id="footer-info-lastmod"> This page was last edited on 10 Aug 2022, at 20:31.</p>
          <p id="footer-info-copyright">Files are available under licenses specified on their description page. All structured data from the file namespace is available under the Creative Commons CC0 License all unstructured text is available under the Creative Commons Attribution - ShareAlike License
            additional terms may apply.
            By using this site, you agree to the Terms of Use and the Privacy Policy.</p>
          <p id="homies">Designed by yours truly Ananyeli, Juan, Jahni, Ethan, Alejandro</p>
        </div>

        <ul id="footer-places">
          <li id="footer-places-privacy"><a href="https://foundation.wikimedia.org/wiki/Privacy_policy">Privacy policy</a></li>
          <li id="footer-places-about"><a href="/wiki/Commons:Welcome">About Wikimedia Commons</a></li>
          <li id="footer-places-disclaimer"><a href="/wiki/Commons:General_disclaimer">Disclaimers</a></li>
          <li id="footer-places-mobileview"><a href="//commons.m.wikimedia.org/w/index.php?title=File:Wikipedia_logo_puzzle_globe_spins_horizontally_and_vertically,_revealing_the_contents_of_all_of_its_puzzle_pieces_(4K_resolution)_(VP9).webm&amp;mobileaction=toggle_view_mobile" class="noprint stopMobileRedirectToggle">Mobile view</a></li>
          <li id="footer-places-developers"><a href="https://developer.wikimedia.org">Developers</a></li>
          <li id="footer-places-statslink"><a href="https://stats.wikimedia.org/#/commons.wikimedia.org">Statistics</a></li>
          <li id="footer-places-cookiestatement"><a href="https://foundation.wikimedia.org/wiki/Cookie_statement">Cookie statement</a></li>
        </ul>
      </footer>
    </div>
  )
}
