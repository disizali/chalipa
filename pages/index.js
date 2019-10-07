import Layout from "../components/MyLayout";
import Link from "next/link";
import "../styles/style.scss";
import React from "react";
// import { Button } from "reactstrap";

export default function Blog() {
  return (
    <Layout>
      <section id="intro" className="clearfix">
        <div className="container">
          <div className="intro-img">
            <div className="shadow bg-light rounded ml-5 p-5">
              <img src="/static/images/logo.png" className="img-fluid" />
            </div>
          </div>
          <div className="intro-info">
            <h2>
              فروش، پایان یک معامله نیست
              <br />
              <span> آغاز یک تعهد است .</span>
            </h2>
            <div>
              <Link href="/about">
                <a href="/about" className="btn-get-started">
                  درباره شرکت ما
                </a>
              </Link>
              <Link href="/blog/1">
                <a href="/blog/1" className="btn-services">
                  نمایندگی ها
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <style jsx>
        {`
          h1,
          a {
            font-family: "Arial";
          }

          ul {
            padding: 0;
          }
        `}
      </style>
    </Layout>
  );
}
