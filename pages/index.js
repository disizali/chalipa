import Layout from "../components/MyLayout";
import Link from "next/link";
import "../styles/style.scss";
import React from "react";
// import { Button } from "reactstrap";

function getPosts() {
  return [
    { id: "hello-nextjs", title: "Hello Next.js" },
    { id: "learn-nextjs", title: "Learn Next.js is awesome" },
    { id: "deploy-nextjs", title: "Deploy apps with ZEIT" }
  ];
}

const PostLink = ({ post }) => (
  <li>
    <Link href="/p/[id]" as={`/p/${post.id}`}>
      <a>{post.title}</a>
    </Link>
    <style jsx>{`
      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
        font-family: "Iran Sans";
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </li>
);

export default function Blog() {
  return (
    <Layout>
      <section id="intro" className="clearfix">
        <div className="container">
          <div className="intro-img">
            <div className="shadow bg-light rounded ml-5 p-5">
              <img src="/static/images/logo.png" className="img-fluid" />
              {/* <img */}
              {/* src="static/images/intro-img.svg" */}
              {/* alt="" */}
              {/* className="img-fluid" */}
              {/* /> */}
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
