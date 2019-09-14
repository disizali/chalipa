import React from "react";
import categories from "../static/data/categories.json";
import $ from "jquery";
import Link from "next/link";
import "../styles/style.scss";

export default class NavbarEx extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  componentDidMount() {
    $(".dropdown-menu a.dropdown-toggle").on("click", function(e) {
      if (
        !$(this)
          .next()
          .hasClass("show")
      ) {
        $(this)
          .parents(".dropdown-menu")
          .first()
          .find(".show")
          .removeClass("show");
      }
      var $subMenu = $(this).next(".dropdown-menu");
      $subMenu.toggleClass("show");

      $(this)
        .parents("li.nav-item.dropdown.show")
        .on("hidden.bs.dropdown", function(e) {
          $(".dropdown-submenu .show").removeClass("show");
        });

      return false;
    });
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <header id="header" className="fixed-top">
          <div className="container">
            <div className="logo float-left">
              <h1 className="text-light">
                <a href="/" className="scrollto">
                  <img
                    src="/static/images/logo.png"
                    alt=""
                    className="img-fluid"
                  />
                </a>
              </h1>
            </div>

            <nav className="main-nav float-right d-none d-lg-block">
              <ul>
                <Link href="/contact">
                  <li>
                    <a href="/contact">تماس با ما</a>
                  </li>
                </Link>
                <Link href="/about">
                  <li>
                    <a href="/">درباره ما</a>
                  </li>
                </Link>
                <Link href="/blog">
                  <li>
                    <a href="/blog">مقالات</a>
                  </li>
                </Link>
                <Link href="/gallery">
                  <li>
                    <a href="/gallery">گالری تصاویر</a>
                  </li>
                </Link>
                <Link href="/prices">
                  <li>
                    <a href="/prices">لیست قیمت ها</a>
                  </li>
                </Link>
                <Link href="/news">
                  <li>
                    <a href="/news">اخبار</a>
                  </li>
                </Link>
                <li className="drop-down">
                  <a href="">محصولات</a>
                  <ul>
                    {Object.entries(categories).map((item, index) => {
                      const [key, value] = item;
                      if (value.subMenues != undefined) {
                        const subMenues = value.subMenues.map(
                          (menu, index2) => {
                            return (
                              <div key={index2}>
                                <li>
                                  <Link href={`/category/${menu.category}`}>
                                    <a>{menu.title}</a>
                                  </Link>
                                </li>
                              </div>
                            );
                          }
                        );

                        return (
                          <div className="dropdown-submenu" key={index}>
                            <li className="drop-down" href="#">
                              <a href="#">{value.title}</a>
                              <ul>{subMenues}</ul>
                            </li>
                          </div>
                        );
                      }

                      return (
                        <Link href={`/category/${key}`} key={index}>
                          <a href={`/category/${key}`}>{value.title}</a>
                        </Link>
                      );
                    })}
                  </ul>
                </li>
                <Link href="/">
                  <li>
                    <a href="/">صفحه اصلی</a>
                  </li>
                </Link>
              </ul>
            </nav>
          </div>
        </header>
        <br />
        <br />
        <br />
      </div>
    );
  }
}
