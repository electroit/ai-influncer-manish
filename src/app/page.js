import Head from "next/head";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      
      <>
  <header>
    <div className="container">
      <div className="d-flex justify-content-between align-items-center header">
        <nav className="navbar">
          <div className="logo">
            <a href="/">
              <img src="./assets/images/Logo.png" />
            </a>
          </div>
        </nav>
        <div>
          <a className="btn" href="/get-started">
            {" "}
            <img src="./assets/images/star-06.png" alt="btn-img" />
            Create Now
          </a>
        </div>
      </div>
    </div>
  </header>
  <div className="main-content">
    <div className="herosection">
      <div className="overlay" />
      <section className="ai-Influencer-banner py-5">
        <div className="container banner text-center ">
          <p className="banner-bedge">Stay on-brand, always relevant</p>
          <h1 className="white-gradient">
            AI-Powered Influencer
            <br />
            Boost your reach on social media!
          </h1>
          <p>
            Elevate your brand with AI-driven video content, custom avatars, and
            real-time analytics—engage the right
            <br />
            audience without the hassle. Optimize and lead on social
            effortlessly!
          </p>
          <a href="#" className="btn discover-btn my-3">
            {" "}
            <img src="./assets/images/star-06.png" alt="btn-img" />
            Discover Now
          </a>
        </div>
      </section>
      <section className="ai-Influencer-avatar py-5">
        <div className="container p-0">
          <div className="d-flex align-items-center ai-avatar-demo">
            <div className="gallery d-flex">
              <div className="gallery-two">
                <div>
                  <img src="./assets/images/ai-video-generator.png" alt="" />
                </div>
                <div>
                  <img src="./assets/images/photo-editor 1.png" alt="" />
                </div>
              </div>
              <div>
                <img
                  className="gallery-big-image"
                  src="./assets/images/ai-image-generator.png"
                  alt=""
                />
              </div>
            </div>
            <div className="image-text-container">
              <div className="inner-image-text-container">
                <div className="top-image">
                  <img src="./assets/gallery-border-1.png" alt="" />
                </div>
                <p>
                  <span>Tired</span> of influencers not fully fitting your{" "}
                  <span>BRAND IDENTITY?</span> Need to engage with the{" "}
                  <span>RIGHT</span> target for your brand? Tik Tok is too time
                  consuming for your brand engagement?{" "}
                  <span>Empower your brand</span> with our <span>AI tools</span>{" "}
                  to create, manage, and optimize video content across
                  platforms, <span>boosting reach.</span> Leverage
                  <span>custom avatars</span>, automated scheduling, leverage
                  algorithms and real-time <span>analytics to lead</span> your
                  presence in social media.
                </p>
                <div className="bottom-image">
                  <img src="./assets/gallery-border.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <section className="how-it-work py-5">
      <div className="container ">
        <div className="how-it-work-content d-flex flex-column ">
          <h6 className="dark-green">
            How It Works: AI-Enhanced Content Creation
          </h6>
          <h1 className="white-gradient">
            Boost your reach and maximize your earned <br /> media with
            [Influencer AI]
          </h1>
          <p className="py-3">
            Powerful, self-serve team engagement tools and analytics.
            Supercharge your
            <br />
            managers &amp; keep employees engaged from anywhere.
          </p>
        </div>
        <div className="work-box-and-image d-flex text-center">
          <div className="all-work-box d-flex flex-column justify-content-between">
            <div className="col-sm-12 work-box">
              <span className="number">1</span>
              <div className="avatar-heading">
                <h6>Avatar Customization</h6>
                <p>
                  Build avatars that align with your brand’s voice and style
                </p>
              </div>
              <img src="./assets/images/arrow-right-solid.svg" alt="next" />
            </div>
            <div className="col-sm-12 work-box">
              <span className="number">2</span>
              <div className="avatar-heading">
                <h6>Automated Content Creation</h6>
                <p>Generate engaging videos at scale</p>
              </div>
              <img src="./assets/images/arrow-right-solid.svg" alt="next" />
            </div>
            <div className="col-sm-12 work-box">
              <span className="number">3</span>
              <div className="avatar-heading">
                <h6>Scheduling &amp; Publishing</h6>
                <p>
                  Seamless, multi-platform scheduling with Buffer and TikTok
                  integration
                </p>
              </div>
              <img src="./assets/images/arrow-right-solid.svg" alt="next" />
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-end">
            <img
              className="workbox-image onlydesktop"
              src="./assets/images/influ-ai/Browser/Get Started  Step 3.png"
              alt="video"
            />
            <img
              className="workbox-image onlymobile"
              src="./assets/images/ipadhome-screen.png"
              alt="video"
            />
          </div>
        </div>
      </div>
    </section>
    <section className="core-features py-5">
      <div className="container">
        <div className="d-flex core-feature-bg-color py-5 px-4">
          <div className="core-feature-text d-flex flex-column">
            <h6 className="core-feature-heading-color">
              Core Features: Built for Influencers, Optimized for Brands
            </h6>
            <h1 className="green-gradient">
              Tools Designed for
              <br /> Maximum Impact
            </h1>
          </div>
          <div className="core-feature-second-text d-flex flex-column">
            <div>
              <p>
                Influencer-AI offers the tools you need to craft compelling
                stories and engage audiences. From video generation to
                analytics, discover the capabilities designed to drive results.
              </p>
            </div>
            <div className="list d-flex">
              <ul className="p-0">
                <li className="list-style">
                  <img
                    className="arrow-image"
                    src="./assets/images/arrow-right-solid.svg"
                    alt="next"
                  />
                  AI influencer generation
                </li>
                <li className="list-style">
                  <img
                    className="arrow-image"
                    src="./assets/images/arrow-right-solid.svg"
                    alt="next"
                  />
                  Performance Analytics
                </li>
                <li className="list-style">
                  <img
                    className="arrow-image"
                    src="./assets/images/arrow-right-solid.svg"
                    alt="next"
                  />
                  AI-Driven Recommendations
                </li>
              </ul>
              <ul>
                <li className="list-style">
                  <img
                    className="arrow-image"
                    src="./assets/images/arrow-right-solid.svg"
                    alt="next"
                  />
                  Content Automation
                </li>
                <li className="list-style">
                  <img
                    className="arrow-image"
                    src="./assets/images/arrow-right-solid.svg"
                    alt="next"
                  />
                  Multi-Time Zone Scheduling
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="advance-analytic py-5">
      <div className="container real-data-container d-flex">
        <div className="real-data">
          <h6 className="color">Real Data, Real Results</h6>
          <h1>
            Uncover What Works
            <br /> with Advanced Analytics
          </h1>
          <p>
            Understand what resonates with your audience. Our analytics
            dashboard tracks likes, shares, comments, and other key metrics,
            delivering insights to optimize your strategy.
          </p>
          <ul className="p-0">
            <li className="list-style">
              <img
                className="right-list"
                src="./assets/images/check-symbol.png"
                alt="right"
              />
              Actionable insights
            </li>
            <li className="list-style">
              <img
                className="right-list"
                src="./assets/images/check-symbol.png"
                alt="right"
              />
              AI-driven recommendations
            </li>
            <li className="list-style">
              <img
                className="right-list"
                src="./assets/images/check-symbol.png"
                alt="right"
              />
              continuous learning based on content performance
            </li>
          </ul>
        </div>
        <div className="image-overlay">
          <img
            className="real-image"
            src="./assets/images/right12345.png"
            width="100%"
            height="100%"
            alt="imagesss"
          />
        </div>
      </div>
    </section>
    <section className="client-success  py-5 pb-0">
      <div className="container">
        <div className="success-story">
          <h6>Client Success Stories</h6>
          <div className="d-flex success-story-content  gap-5">
            <div className="col">
              <h1>
                Brands Growing with
                <br />
                Influencer-AI
              </h1>
            </div>
            <div className="col">
              <p>
                Discover how leading brands are leveraging Influencer-AI to
                boost engagement and drive growth.
              </p>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-end gap-4 my-2 success-story-navigation">
          {/* <span><img src="./assets/images/previous.svg" alt="previous"></span>
              <span><img src="./assets/images/next.svg" alt="next"></span> */}
        </div>
        <div className="all-host-by d-flex gap-4">
          <div className="host-by highlight col">
            <img src="./assets/images/Quotes.png" alt="" />
            <p>
              “I've been using this web hosting service for over a year and I'm
              really impressed with the uptime and support. The website has
              never gone down and the customer service is always quick to help
              with any issues I have. Highly recommend!”
            </p>
            <div className="d-flex gap-2">
              <div>
                <img src="./assets/images/Ellipse 1.png" alt="" />
              </div>
              <div className="author">
                <h6 className="author-name m-0">Host By</h6>
                <p className="author-position m-0">Jane</p>
              </div>
            </div>
          </div>
          <div className="host-by col">
            <div>
              <img src="./assets/images/Quotes.png" alt="" />
            </div>
            <p>
              “I've been using this web hosting service for over a year and I'm
              really impressed with the uptime and support. The website has
              never gone down and the customer service is always quick to help
              with any issues I have. Highly recommend!”
            </p>
            <div className="d-flex  gap-2">
              <div>
                <img src="./assets/images/Ellipse 2.png" alt="" />
              </div>
              <div className="author">
                <h6 className="author-name m-0">Tom Williams </h6>
                <p className="author-position m-0">Software Developer</p>
              </div>
            </div>
          </div>
          <div className="host-by col">
            <div>
              <img src="./assets/images/Quotes.png" alt="" />
            </div>
            <p>
              “I've been using this web hosting service for over a year and I'm
              really impressed with the uptime and support. The website has
              never gone down and the customer service is always quick to help
              with any issues I have. Highly recommend!”
            </p>
            <div className="d-flex gap-2">
              <div>
                <img src="./assets/images/Ellipse 1 (1).png" alt="" />
              </div>
              <div className="author">
                <h6 className="author-name m-0">Michael Brown</h6>
                <p className="author-position m-0">Online Entrepreneur</p>
              </div>
            </div>
          </div>
          <div className="host-by col">
            <img src="./assets/images/Quotes.png" alt="" />
            <p>
              “I've been using this web hosting service for over a year and I'm
              really impressed with the uptime and support. The website has
              never gone down and the customer service is always quick to help
              with any issues I have. Highly recommend!”
            </p>
            <div className="d-flex gap-2">
              <div>
                <img src="./assets/images/Ellipse 2 (1).png" alt="" />
              </div>
              <div className="author">
                <h6 className="author-name m-0">Sarah Johnson</h6>
                <p className="author-position m-0">Online Entrepreneur</p>
              </div>
            </div>
          </div>
          <div className="host-by col">
            <img src="./assets/images/Quotes.png" alt="" />
            <p>
              “I've been using this web hosting service for over a year and I'm
              really impressed with the uptime and support. The website has
              never gone down and the customer service is always quick to help
              with any issues I have. Highly recommend!”
            </p>
            <div className="d-flex gap-2">
              <div>
                <img src="./assets/images/Ellipse 2 (1).png" alt="" />
              </div>
              <div className="author">
                <h6 className="author-name m-0">Sarah Johnson</h6>
                <p className="author-position m-0">Online Entrepreneur</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="streamlined-sec banner text-center py-5">
      <div className="container">
        <p className="heading-bedge mb-4">
          Streamlined for the Platforms You Use
        </p>
        <h1 className="h1-bedge">
          Seamless Integration with Your <br />
          Favorite Platforms
        </h1>
        <p className="mt-4">
          Influencer-AI connects with the platforms you love, including TikTok,
          Instagram, and Buffer,
          <br />
          ensuringa seamless content strategy.
        </p>
        <div className="d-flex gap-4 streamline-social">
          <a href="#">
            <img src="./assets/images/ticktok.svg" alt="ticktok" />
          </a>
          <a href="#">
            <img src="./assets/images/buffer.png" alt="buffer" />
          </a>
          <a href="#">
            <img src="./assets/images/instagram.svg" alt="instagram" />
          </a>
        </div>
      </div>
    </section>
    <footer>
      <div className="container ">
        <div className="d-flex">
          <div className="col-sm-8 col-md-8 col-xs-12">
            <div className="footer-logo">
              <a href="/">
                <img src="./assets/images/Logo.png" />
              </a>
            </div>
            <p className="footer-heading-bedge">
              Get Started with Influencer-AI Today
            </p>
            <h1 className="h1-bedge">Ready to Amplify Your Brand?</h1>
            <p>
              Join hundreds of brands already transforming their content with
              <br />
              Influencer-AI. Start creating impactful content today!
            </p>
            <ul className="d-flex p-0 ready-brand-list">
              <li>
                {" "}
                <img
                  className="right-list"
                  src="./assets/images/check-symbol.png"
                  alt="right"
                />
                Use 300+ tools
              </li>
              <li>
                {" "}
                <img
                  className="right-list"
                  src="./assets/images/check-symbol.png"
                  alt="right"
                />
                Free Forever
              </li>
              <li>
                {" "}
                <img
                  className="right-list"
                  src="./assets/images/check-symbol.png"
                  alt="right"
                />
                1.2% accuracy
              </li>
              <li>
                {" "}
                <img
                  className="right-list"
                  src="./assets/images/check-symbol.png"
                  alt="right"
                />
                1.2% accuracy
              </li>
            </ul>
            <div className="mt-4">
              <button href="#" className="btn demorequest-btn my-3">
                Request a Demo
              </button>
            </div>
            <div className="footer-last mt-4 d-flex align-items-center justify-content-between">
              <div className="d-flex gap-2">
                <p className="m-0">Imagined and executed by</p>
                <a href="#">
                  <img src="./assets/images/Final Logo White 1.png" />
                </a>
              </div>
              <div className="d-flex social-icon">
                <a href="#">
                  <img src="./assets/images/facebook.svg" alt="facebook" />
                </a>
                <a href="#">
                  <img src="./assets/images/linkedin.svg" alt="linkedin" />
                </a>
                <a href="#">
                  <img src="./assets/images/Twitter.svg" alt="Twitter" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-4 col-md-4 col-xs-12 text-center">
            <img src="./assets/images/footer.png" width="100%" alt="" />
            <p>© 2024 Influencer AI. All Rights Reserved. </p>
          </div>
        </div>
      </div>
    </footer>
    {/* <div>
      <label for="file-upload" class="file-input-button">Browse Image</label>
      <input type="file" id="file-upload" class="file-input" accept="image/*">

      
  </div> */}
    {/* <div className="awesome" style={{ border: "1px solid red" }}>
      <label htmlFor="name">Enter your name: </label>
      <input type="text" id="name" />
    </div>
    <p>Enter your HTML here</p>*/}
   </div> 
</>


      <script>
        {`$(document).ready(function() {
          $('.all-host-by').slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 1,
            appendArrows: '.success-story-navigation',
            prevArrow: '<span><img src="/assets/images/previous.svg" alt="previous"></span>',
            nextArrow: '<span><img src="/assets/images/next.svg" alt="previous"></span>',
            responsive: [
              { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3, infinite: true, dots: true } },
              { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 2 } },
              { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } }
            ]
          });
        });`}
      </script>
    </>
  );
}

