"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Thumbs } from "swiper/modules";
import "swiper/css/effect-fade";
import { gallerySlide } from "@/components/data/gallerySlide";
import { SponsorSlide } from "@/components/data/sponsorSlide";
import { useState } from "react";
import Navbar from "@/components/Navbar";
export default function Home() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div>
      <div className="page-wrapper" id="wrapper">
        <Navbar />
        <section className="main-slider">
          <Swiper
            modules={[EffectFade, Autoplay]}
            effect={"fade"}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 4000 }}
            loop={true}
            fadeEffect={{ crossFade: true }}
          >
            <SwiperSlide>
              <div
                className="image-layer"
                style={{
                  backgroundImage: "url(Untitled-design-12.png)",
                }}
              ></div>
              <div className="container">
                <div className="row justify-content-end row">
                  <div className="text-right col-xl-7 col-lg-12">
                    <p>Changing the Narrative, one story at a time</p>
                    <h2>We are Enabling Female Breadwinners to thrive...</h2>
                    <a
                      href="#"
                      data-target=".donate-options"
                      className="scroll-to-target thm-btn"
                    >
                      Start Donating
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="image-layer"
                style={{
                  backgroundImage:
                    "url(static/images/slider-1-2-1cb88669ffbcebc7190c546768469ced.jpg)",
                }}
              ></div>
              <div className="container">
                <div className="row justify-content-end row">
                  <div className="text-right col-xl-8 col-lg-12">
                    <p>Support Our Initiative, Make a difference</p>
                    <h2>Empowering Female Breadwinners...</h2>
                    <a
                      href="#"
                      data-target=".donate-options"
                      className="scroll-to-target thm-btn"
                    >
                      Start Donating
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>
        <section className="video-card-two">
          <div className="container">
            <div
              className="inner-container"
              style={{
                backgroundImage:
                  "url(static/images/video-bg-1-1-6db0e1ddf8777f1bc90c1d547d2c88e5.png)",
              }}
            >
              <div
                className="align-items-center row"
                style={{ padding: "25px" }}
              >
                <div className="row align-items-center">
                  <div className="col-lg-5">
                    <div className="video-card-two__box">
                      <img
                        src="Untitled-design-8.png"
                        alt=""
                        style={{ width: "100%" }}
                      />
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <h3>
                      We’re creating a community-based platform to support these
                      female breadwinners to thrive.
                    </h3>
                  </div>
                </div>
                <div className="row text-align-justify">
                  <br />
                  <br />
                  <>
                    <p style={{ fontWeight: "bold" }}>
                      In the low-income bracket in Africa, over 80% of women are
                      the sole breadwinners through trading, farming and
                      creative works. In Nigeria alone, 21.1% of households are
                      female led.
                    </p>
                    <p>
                      More women are fast becoming the main breadwinners for
                      their households, yet the society and investment space
                      have not recognized the contribution of these women, by
                      deliberately increasing investment into their businesses.
                      A lot of these women require adequate knowledge,
                      micro-loans & investment to expand their businesses and
                      careers and a community to encourage and enable them
                      thrive. WEVVO provides access to finance, business
                      capacity, trainings, mentorship and a community for these
                      single female breadwinners in Nigeria. We are creating a
                      community-based platform to be able to support these
                      single female breadwinners to thrive in their businesses
                      and careers.
                    </p>
                  </>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="service-one pt-120 pb-90"
          style={{
            backgroundImage:
              "url(static/images/service-hand-bg-1-1-536902658b22a11cfdc20fc10a63ee9e.png)",
          }}
        >
          <div className="container">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAScAAAEjCAMAAABHFTdlAAAAgVBMVEUAAADk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OQ3BO7YAAAAK3RSTlMAzQYkCg8VLRw2yLxCTrJbpWl4iJfD0dWscJFHYbigVj2bZhmAeyqDUYw5iUOVgQAAD3tJREFUeNrsm9uSqjAQRTuCgIB3CTPjqOBd//8DT0k4VdlU6Io1TyTuF95X2Vnp7kh/S3VpPrEIXp9TTJ+YMhFJg6lsMCViQp/oiY86pmsZa5jG+5A+aZKnkYYpEAqTrBpMxZQ+AUxloGGKZK5hGs3J+7SYYqEwlQpTqjCl9wbTbEm+p5IJYJpomMJi/sEUgOKkrrhIbBtMWYvpm15Z+XigP+uoX3FiqmGir1Xz2azJv/Qo7qmd3WH2S68sWkwb8i9GxZ1QcbuljumhMCXkU3IBipOouIN+di/OzWetMK0W5FFye8Xt1zqm5WxE/uQNxW1aTAt/MaHiIk5xF8BU+QGrozgxYRT3ox9Ky6wBNC28uEa9obgfOLvnWagwjcmD9CjuDoq7gOJmIx2T8AlTUk4AEyiuRsUBpq26UJzI7XQUl+aM4vaAKQ3166l0+yiP7bu4GyhOHUoKk6LtcqwU90DFhTomeVK16wUmVFyYYRfHKK6SiRe/JlRcMQXF3UBxX4SKa+9deu26OjXvdHEp08V9g+JyARMYqTBJR1dWVoqrUXFjdgLjZDTF6ZiYLm4KmOISr6eOYyo0TH1d3G6EisMJjNuYsIvLmC7u97/i4OwWOIFRtevcDqZHcWdOcREo7mqawLi2+jQPKhf2iivxeuoqJoGKWzJdXBGC4nAXg7XrWtVFnOLOoLgDKk7CcwPh9h79PcUZlgzcBOZArsSsuA2nOMCEg6pu7d7IkXQVt2K7OFvFzVzbo49Ta8VtUXGSm8C4hqlHcTWnuABf1OEExs3nBjioNK8s75zi4CZgXjJcafDpKm6Ng0pUXMQojqvdmoae0F5xFSpOchMY554bXCwUl3KK2+L11NHnBtHcMKhcWQwqYVDF1+5u+JgoxDLhuzhecfwExgFWUCZ9XVyJXRynOOMu5kGDz2bNdHGCU9wBFcfX7tCDZXLkujjJvKjja3f4mKBM+rq4wFZxt27tuoYJuzhuUJmC4sx79BleT53BZFacRMXhHv2I19P+5wbPtnaHvHzBQeXcSnH4os6+dgf83KCnTFBxMac4+9od8H9jjYqr7AeVtXECkxmvp8PH9I+bc9tJIIqh6AEfFDLog4oOxhugXP7/A02MxBxT1nTbGZLSF17JSda03W33bxcHS+MzaHaZ3fTPNKkXTznFmUKVym7O3uUNMKnuoiDFaewm/pJjips36pDhnsvTtHHABO+ibmCjTmA38Wbd4ZlQqMS7KJPdczvbB0yUu6hXZjf/MwEmKFR+mArMtLs8fSkJ40gXN4EUt7BSnM3u2Zzt2+4WI/0uSlFg8sWe3S28Ke5JYDfjM5UldHH3rrso99n+MvEzmXdRowZmcS9GF6ezm1KEuvR3cWu4i1IUmEXJF2YlyKe/0MW52M24vGJ3cXAXBQqMszzN6P7wt4ubWZjw0rif3bwmGRd+TFpIccSurcAkm70AJkqK09lN9omqK0F2twAFRihPf9hN6P5wZGn8DjbqAs402Z/JMHAS76Ke/EOGhO4PbOB0baQ4Nl9jdtN6iTAm5kbdXHCmAXZTfclrPdfGhJfG/63ApPJka7sx2U6tLm5EXRwPGRI+UxkDJsEUx+zmeqYiYNKnM03KrZUOAycwXwsqMI8lU3QYOMXM12jI8JDKJAMwIXcLPttndjPa369MAyfjLspwpoHyFJ1pEj5TKYAJ3kX5FRhiN9eOj4nJvvqaQIqLKDCnXhx7XXz/NOrUB09/VfM1ZtdWYE4Uy0Ux8q67dRIMnECBwfJ0hewOH5h3FfZXNiZXYL4mKDDM7tDRNNbkYx7Iu1vYygk60zC778NIdsqfEgIxYfO1MLuDRSsM9z+lVTEjxUnONFNQYIDd3kOffHhXxWArh5xp8GzfxW7/MZtZeXfUXTN3EnjjMXAaToHZ9OZrEP9THJ0GTtVWDtw0CuwOMEePTz44wMCJTn/ZmUZjNx5jNe+adjkkjMFWTsCZRmM32sB8bEg99dfMu8KxhqVxSHGRIUONSaAj7nnywQEGTq7TX4Hd/ufoa33ysbVr5ri/6K3oL6qzO5GXWHbrzj+lTz7apmDUi6fsTIMKTIBdLe5IPa27uLlUM2NcNjHzNf+QYQOYeN6qnaB6Gp98cMBdlJzi+GyfFRgMZjc++XgeR8zXNGeaOLtf3J1dUxpBEEWXj9JIgkqgVgVEIoLA//+BqYoPU5Qyd+6cnXXJfUheu0wO7fTQZ+b9k3+8f3/275eg73rC4qmyh2iB094w0/hWqevzg6pPRWmvN/idWUW3OH3JYE1gNLvLAka4lWRXh8vXNLujYWR6ujakp+DmA/bdw1bYLZh8LXN6urWMcLzvXk9kyxMCJ2MCo6xShjjRLar+1HftDxQdLV/Tg0rbKuU/XcGK0h8oOovIKe7GkK8xdquG2X1z2E2LsFtI+VoH2V25Y6FNP+d28GgotKfAKiUwmQh2xSnO+kAZVElZCvka0d8jdssX5b+ncvo/cofla5sm2F347M4z2DUyEKc4aaah7P5pll1dVOi7XgwzDcNEixPv0qenz4Td0HfF2L7sJQNnFxTlsbv3xs8BXCRfG2Sxy/vuKp3d9adbSzf+KS5g0iF2vb7rRdgtpHzNxkRbpWpghDNsjn4WJ5gA/T1gl09PfXY38IUX/Zxp+gTmCbCLbj4G+mj5CnYagXwNs1u+7/JnZ8a2meYh3So1A1Ypxq4qyo9ocXICo/eRH312dVGA3fzci9VfcWBqk93nzBYXJjD5eTf2onz9fXnpqX+03ICnOaa+fC1U1Dy72/S+O/DZLaq/3wkzjSFORBMYzi7X3xtmGihOfABPV2h2xQQmN5tZppkmtLiW2SVHSxBbvjY2MHGtUofAri7K77sgUL4mMAFWqUJFAS8ql6+tCrLbE+y29+zM8FGbafxhR09KTzW7/s2HLook2S96Z2MCp6c+u3MxPQU5e2DaRDAB4kQwgZHsiqJIhHxNdRMgTkQTmH1GUTRHbqYR7LbU4nRRC6SUTFhBmghM0r54emtMYIqwu+P+zRz5WuDfYBdMYLjNkSTy/ezXEjuNdAKzjB0t+4JdENHiXDMNx+QG9F1RFIhcQdoKTORuhX66QrOrbY6aXZxfYm0fiRNfgVXKZVe9pzGseK5Ghv6+gDiRPzszlEfL54qGy9dqsT5osAtanGKXJNJNDgKTAlYpID3V7JJkytfqU0y4VYr3XT2B4T+myG+CYKeRPV2xT21xi1CUYJdlkb4XNRKYmOxuzmMSY3eSVRSP2K0QmBhWKSFwAtJTOT1tKrenmGj5WsBEsAvsFga7dcLNR8XD5WuaXX8Co/eR16dFCXYbcwP7+vuACWY39F1wihNFgWD5WqgowevdM6Snou+601MSJF/jVqnyRrgwPcV5E/p7uj6oBU7GTiNgl+bFlMBwceLua3Z13xVHS9F3YTIlMJEvngqBE9iLImaaTQHPmbs+yO0WtO/qm4+nCkUrtHdsfVALnPwWt4uxG+m7KFoCwzHhLY4XBSL2oiQmQODUshEOTX2T/aK9LzH5nae/v5ItThvh/JsPECaB4QKnNtml4fK18i2ugaJATAkMFziBvShpphHCYpobYwWJCZy49BROT3+gs12B9cE1FjjFTnHrPHaPNZr2SpGExoSz+w683oawmORCBE5NGOFojr7AaVZA4ETY1dNT+mPiK0jlBU7hFLdw2Q1FkXRB4BRhV0xgrL5LYkpgZt8mcFoLdvXaPs110vpgcbvFHlilxPRUQOeaaboucBoSIxxJAfma2GkE4kQuLF6QH1N9MQInKl8jy1IDcTsIBU4FxYmHCLuRovzEVpC6IXA6ncBEioqy+xD6bk6YwGnUusCJW6WyM6gvTeAE5Wt+9AoSFjiVECcyI5yfTgicktmtQlGS3fhbb92RrzWDyaiAVcrPRQucsoxw2bmqL1TgFGE3WpSf7guc7tyiNLt+OihwEqc4VtSkysr/IHDyJzD+xDdg0r7AibObaYTb9is/vkiCC5wyxYnzeYRdo++uKy8dFDj1pN2Cs/teeTEFTuMuCpxa8It2SeBUQ6tU7ZhpvHyTwGmUK3ASRRl914sedvjrgxqTbliljJQXOPG9KC1w8vuun/7P8gInH5Ofgl1Z1Fh8oLjh64MlBU7TSFFAeuqlCwKn/vRD23H8+OvpxVj9BX3XCRM4yQmM3q04m8G4rHzNDxc4+XaL1CPo1d/2znCnjRgIwtvjCIpSUK8/moQqJUrEheb9H7CqrIqGhbX3xnY0Pr4HQGYkn489z8cTYLcwHig+ridw8nEM2R92wKLU9NTBNQVOfva7bIvygwuc4vez1d4FiE9g4ucuXv2tI3CCeFGLsiYweC8K6FaAEhiQsIyJi7ofxIdXJPHDUUGy3wTz4T93+4V4iUtgygicMrJ1TmD8xCtIpQROLvAvH7+gmACBEyiByc9xmbgoP5YEBq0gdabAqRgnyy+66YEffA2BU2ke1aJQ3+PSrCAVEjhVYgxpHQ+CM5g1BlzgpCUwZyGkjww79BGHS2BoMSQwuMBpffl6yh8TLHCyhx38MVUVONFiSmC+YJ4zvXdpKSdw0vez+WMqLHDij8lRH8QFTrTUFTjRklfgdNYCp9eYVvwx3a2N+iAucKKPqXfcz8YFTryMNQVO7FQUOH0XXlwVJHACsxVa6gqcaKkjcOKPqYbAiT8mTwUJV2jTUlPgRByTPOACp/je5Y9Jbuz6oF/gpO9ntxCTuARO+ARmIbzUFDgRD+lUt6KswImVfAKneC+KP6YkgRMwgWGPSTbJriRc4EQck5wdvShY4MROFYETf0ymBAZXaLcSUw2BUwObTt3KiR9xfjMN83t44DcgcPLVB++EmXu1TQpJYJaPQk8lCQw7SUfccrLAqbGYygqcGohpF+lW4Artcc39EP9Lt4EFTvEJDH9MgWICp9ZiKilwamDTBVS3IrdCuxFSBE6ryQKnZmKSw2SBk1hHXGsxiZQQODH3oqIx4QrtdnpR7zJmFjjx96LeZ+MXOP0f0765XpRBROA0q16UgSGSQDS8/BPfCwxXEmSrbm/rnb6mH3F9Ym2/Y75ab+AQOCX9Y/ttJ00CKbR1p/GZ+VO5gXIlYQrt5+ae4f/YJwicXmOKvJ4OzcYkDoFTtBf10uimC+AK7dUg/J8149yGX/NkCpysCQx/fcxBXOCkq7/zjSkqcNKDKuLe2AR+TlRoPzDXEKdgCJysCcwcY7rZJf8VtxrmG1NACZzsXtRsGR22auIWYsWPDE/EEodMdN/GzyMumePbXtTsn90fcBuCufjIsOC///UhfwBon1UawNGaSgAAAABJRU5ErkJggg=="
              alt=""
              className="service-one__shape-1"
            />
            <div className="block-title">
              <p>
                <img
                  src="data:image/png;base64,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"
                  width="15"
                  alt=""
                />
                Welcome to Wevvo Community
              </p>
              <h3>
                The vision behind WEVVO is to enable female <br /> breadwinners
                to thrive.
              </h3>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="service-one__box">
                  <div className="service-one__icon background-secondary">
                    <div className="service-one__icon-inner">
                      <img src="/ab2.png" alt="" />
                    </div>
                  </div>
                  <h3>
                    <a href="#">WEVVO Community</a>
                  </h3>
                  <p>
                    Through a series of events, webinars, podcasts, blogs,
                    articles and more, we spur conversations towards changing
                    the narrative of&nbsp; female breadwinners.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="service-one__box">
                  <div className="service-one__icon background-base">
                    <div className="service-one__icon-inner">
                      <img src="/ab1.png" alt="" />
                    </div>
                  </div>
                  <h3>
                    <a href="#">WEVVO Academy </a>
                  </h3>
                  <p>
                    With a blend of in-house curriculum and a partnership with
                    educational institutions, we offer a range of online and
                    in-person courses and trainings to the women in the
                    community.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="service-one__box">
                  <div className="service-one__icon background-primary">
                    <div className="service-one__icon-inner">
                      <img src="/ab4.png" alt="" />
                    </div>
                  </div>
                  <h3>
                    <a href="#">WEVVO Marketplace </a>
                  </h3>
                  <p>
                    Through partnerships, We offer a range of financial
                    services, community inventory and provide a marketplace for
                    partners offering relevant products and services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="about-counter pt-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="block-title">
                  <p>
                    <img
                      src="data:image/png;base64,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"
                      width="15"
                      alt=""
                    />
                    Help People Now
                  </p>
                  <h3>
                    Charity for the people <br />
                    you care about.
                  </h3>
                </div>
                <p className="about-counter__text">
                  Lorem Ipsum is simply dummy text of the printing and <br />
                  typesetting industry. Have you done google research which{" "}
                  <br />
                  works all the time.
                </p>
                <ul className="list-unstyled ul-list-one">
                  <li>Nsectetur cing elit.</li>
                  <li>Suspe ndisse suscipit sagittis leo.</li>
                  <li>Entum estibulum dignissim posuere.</li>
                </ul>
                <div className="about-counter__count">
                  <h3 className="odometer">
                    <span></span>
                  </h3>
                  <p>
                    Donation campaigns <br />
                    are running
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-counter__image clearfix">
                  <div className="about-counter__image-content">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAAA5CAMAAABarWbmAAAAM1BMVEUAAAD///////////////////////////////////////////////////////////////+3leKCAAAAEHRSTlMAv4AQn+9A388gj2BQMHCvnKi3qgAAA0FJREFUSMe9VlmS4yAMZTECjLG5/2nH2lAydKU6SVW/D8sB6WmF2P05evBpIPzeP2NoeTzAw/sMhzAYtviTXoUWDvhpK25jRYkLwa6e8pJtLLxBSbjYjOSFIw8rxdYD7VWXp9pTtlTv+3G4fpLKVW3XYwyAEhGAYkj0bkqNSGu6TdFtJsJDd4OGLameJA5Sqk8UgcWtew7GLoVCXawQaEP4edJTKIixOXcRPctiCmwSjJvLkSi1FNlPohXnkjgnMb1EsYyY0yMa0HNWjIpJsrDM7hTGpiasaMj0+5JMyCW+YCTS/co5NMqMlT237hkZObK8Y6ioBUHcEkmqeeTE+aPQWAzUE0Hf72BulcCON6mEn3aUI/zAYTN3ov3Nc3mNsWoWLBpx5JWj23gjx13IUrQPh80DYicOv3LskmNBIWMsdXFh1t8Q95UD99uMN1RzGZz4T2kYJjELGiziZiuyGywTFtWPFXMUZgmYA5WbcBSWHjfZ/4VLxSsHmBc9AxrfkXkBdbk/SWKq6NlfyhHFVBe6cHRdC5JuQCG1gcAL2nFZPW1M6bfLYwtPHAc+xoxpnG1m75mjcjLnzVFIhlGAOYDtwDh2ajRMjkumpxc9+hudpnovkr5w7NXa54mjTo4gHe3zLgQ9o62wiqiOCYpZy7CJhecLM0eHyLTTfd+ZIwnHOoziNz40EB4uwoovWjKS5WmUvN2IrAEbpy7wpIP8putp1ep66WUKqHgGEC1FTdYiKZlxwBxG0IlCFm//cg/ZHOTpUl23k8idBO46Xkf08j8Fh5k6xngvRzueVtuuOdt/on+ikIsT5EeeHFZb9bTfPnZt8jP0Crd314TjoXhbuqKDrCO+kthHSdMjrufHeqhBpMOtkNaVin165GCpJi0NVVuh7hPIMSQmu2AI4F98QzEgSVF2stKRuiSVuo0ljxVd/utrHptxOABmYNxlfYlYLFQe1CobIb0MYm1PiZPDSRaCEN0vEJhE3hK3U7BV9zs00pZme8ziLQadATunG2RjeAcdSYDO3rsMBuCL8vDC4Lt7H42y0e/rw32EgN9QRQf7Q9xpFJmpj1GTXIWfU9isfYPIFN8hYXu/BNzd/Rpp+63mP32ibCAUI45SAAAAAElFTkSuQmCC"
                      alt=""
                    />
                    <p>We’re here to support you every step of the way.</p>
                  </div>
                  <img
                    src="static/images/about-counter-1-1-91c3227fa1d689c3209623c876407515.jpg"
                    alt=""
                    className="float-left"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="causes-page causes-home pt-120 pb-120">
          <div className="container">
            <div className="align-items-start align-items-md-center flex-column flex-md-row mb-60 row">
              <div className="col-lg-7">
                <div className="block-title">
                  <h3>
                    Support our initiative and help us make a difference!.
                  </h3>
                </div>
              </div>
              <div className="d-flex col-lg-5">
                <div className="my-auto">
                  <p className="block-text pr-10 mb-0">
                    WEVVO will support 1 Million Female breadwinners by 2025.
                  </p>
                </div>
              </div>
            </div>
            <Swiper
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
              }}
            >
              <SwiperSlide>
                {" "}
                <div className="cause-card">
                  <div className="cause-card__inner">
                    <div className="cause-card__image">
                      <img src="/type1.png" alt="" />
                    </div>
                    <div className="cause-card__content">
                      <div className="cause-card__top"></div>
                      <h3>
                        <a href="cause-details">Divorced Women</a>
                      </h3>
                      <p>
                        Six percent of African women above the age of 14 are
                        divorcees.
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="cause-card">
                  <div className="cause-card__inner">
                    <div className="cause-card__image">
                      <img src="/type3.png" alt="" />
                    </div>
                    <div className="cause-card__content">
                      <h3>
                        <a href="cause-details">Single Mums</a>
                      </h3>
                      <p>Over 20% of mothers in Nigeria are single moms.</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="cause-card">
                  <div className="cause-card__inner">
                    <div className="cause-card__image">
                      <img src="/type2.jpg" alt="" />
                    </div>
                    <div className="cause-card__content">
                      <h3>
                        <a href="cause-details">Sibling Breadwinners</a>
                      </h3>
                      <p>
                        There&apos;s a growing number of orphaned female
                        breadwinners in Nigeria.
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="cause-card">
                  <div className="cause-card__inner">
                    <div className="cause-card__image">
                      <img src="type4.png" alt="" />
                    </div>
                    <div className="cause-card__content">
                      <h3>
                        <a href="cause-details">Widows</a>
                      </h3>
                      <p>About 9 percent of Nigerian women are widows.</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
        <section className="call-to-action-two">
          <div
            className="call-to-action-two__bg"
            style={{
              backgroundImage:
                "url(static/images/page-header-1-1-bf1b88e39a53442c76187f557b9a800c.jpg)",
            }}
          ></div>
          <div className="container pt-80 pb-80 container">
            <i className="azino-icon-charity call-to-action-two__icon"></i>
            <div className="align-items-center row">
              <div className="col-lg-7">
                <div className="block-title">
                  <h3>
                    Join a community of female breadwinners who are changing the
                    narrative.
                  </h3>
                </div>
              </div>
              <div className="d-flex justify-content-start justify-content-lg-end col-lg-5">
                <div className="btn-wrap">
                  <a className="scroll-to-target thm-btn" href="#">
                    Start Donating
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="donate-options pt-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="donate-options__content">
                  <div className="block-title">
                    <p>Founder&apos;s Vision</p>
                    <h3>
                      I got married at 24, gave birth to my beautiful daughter
                      at 25, and became a female breadwinner at 26. An
                      incredible 2 years filled with mixed memories but has
                      become a major part of my story of change.
                    </h3>
                  </div>
                  <p>
                    A few years after those two years were tough but I was
                    privileged to have my family support and some finance that
                    kept me going. Being a single mum is not something anyone
                    plans for. I had to grow up quickly to take care of my
                    child, find myself and face the stigmatization that comes
                    with being divorced in our society.
                  </p>
                  <p>
                    Women struggle in many ways, and for us female breadwinners
                    it’s worse – it’s a full circle of negligence and lack of
                    appreciation for the struggles we go through. I have seen
                    several times how narratives have put women in boxes, this
                    single story has created a gap in women’s careers and
                    businesses.
                  </p>
                  <p>
                    I have been lucky in my journey with the help of friends,
                    family and mentors who have shown up for me when I couldn’t
                    and taught me to connect my dots and live continuously with
                    curiosity but I’m not oblivious to the fact that only a
                    negligible amount of women have the kind of support that I
                    have.
                  </p>
                  <p>
                    Through my journey, I have become more open to seeing beyond
                    the narrative, being kind to women like me and being of a
                    generous spirit. In being and doing, it is important that we
                    create opportunities for ourselves and a safe space where we
                    can support and encourage each other to thrive.
                  </p>
                  <p>This is my hope and aspiration for WEVVO.</p>
                  <p>Love,</p>
                  <p style={{ fontStyle: "italic" }}>Weyinmie</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <img
                  src="Untitled-design-5.png"
                  alt="Founder Image"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
          </div>
        </section>
        <section
          className="team-about pt-120 pb-120"
          style={{
            backgroundImage:
              "url(static/images/team-map-1-1-330c0afb1eb047c0468a8fb59ffd3c08.png)",
          }}
        >
          <div className="container">
            <div className="team-about__top">
              <div className="align-items-center row">
                <div className="col-lg-7 col-md-12">
                  <div className="block-title">
                    <p></p>
                    <h3>Meet the Board</h3>
                  </div>
                </div>
                <div className="col-lg-5 col-md-12">
                  <p className="team-about__top-text">
                    Our amazing board of directors and advisors help us stay
                    grounded and focused on our core mission.
                  </p>
                </div>
              </div>
            </div>
            <Swiper
              modules={[Autoplay]}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 25,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
              }}
              autoplay={{ disableOnInteraction: false, delay: 2500 }}
              className="team-4-col"
            >
              <SwiperSlide className="team-card text-center content-bg-1">
                <div className="team-card__image">
                  <img src="/4.png" alt="Silja Thorbjornsdottir" />
                </div>
                <div className="team-card__social">
                  <a
                    target="_blank"
                    href="https://nl.linkedin.com/in/siljathor"
                    aria-label="social link"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
                <div className="team-card__content">
                  <h3>Silja Thorbjornsdottir</h3>
                  <p>Startup Coach/Mentor</p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="team-card text-center content-bg-2">
                <div className="team-card__image">
                  <img src="/5.jpg" alt="Adegboyega Adebajo" />
                </div>
                <div className="team-card__social">
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/adegboyega-adebajo-94973b10"
                    aria-label="social link"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
                <div className="team-card__content">
                  <h3>Adegboyega Adebajo</h3>
                  <p>CEO, Amethyst and Ashlar advisory</p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="team-card text-center content-bg-3">
                <div className="team-card__image">
                  <img src="/2.jpg" alt="Christine Sesay" />
                </div>
                <div className="team-card__social">
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/christine-sesay-810b881/"
                    aria-label="social link"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
                <div className="team-card__content">
                  <h3>Christine Sesay</h3>
                  <p>Vice President, Kepler Global</p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="team-card text-center content-bg-4">
                <div className="team-card__image">
                  <img src="/6.png" alt="Ariela Collins" />
                </div>
                <div className="team-card__social">
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/arielacollins"
                    aria-label="social link"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
                <div className="team-card__content">
                  <h3>Ariela Collins</h3>
                  <p>People Specialist at SpLa region, Google.</p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="team-card text-center content-bg-4">
                <div className="team-card__image">
                  <img src="/3.png" alt="Wale Ajiboye" />
                </div>
                <div className="team-card__social">
                  <a href="#" aria-label="social link">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
                <div className="team-card__content">
                  <h3>Wale Ajiboye</h3>
                  <p>
                    Associate Director, Strategic partnership and leadership,
                    Acumen WA.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="team-card text-center content-bg-4">
                <div className="team-card__image">
                  <img src="/1.png" alt="Abiodun Baiyewu" />
                </div>
                <div className="team-card__social">
                  <a href="#" aria-label="social link">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
                <div className="team-card__content">
                  <h3>Abiodun Baiyewu</h3>
                  <p>Executive Director, Global Rights Nigeria</p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="team-card text-center content-bg-4">
                <div className="team-card__image">
                  <img src="/7.jpg" alt="Oluwatoyin Adegbite-Moore" />
                </div>
                <div className="team-card__social">
                  <a
                    target="_blank"
                    href="http://linkedin.com/in/oluwatoyin-adegbite-moore-a988aa5"
                    aria-label="social link"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
                <div className="team-card__content">
                  <h3>Oluwatoyin Adegbite-Moore</h3>
                  <p>Executive Director, AVPA</p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
        <div className="gallery-testimonials-parallax">
          <section className="gallery-home-one">
            <div className="container-fluid">
              <Swiper
                modules={[Autoplay]}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 25,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                  },
                }}
                autoplay={{ disableOnInteraction: false, delay: 2500 }}
              >
                {gallerySlide.map((slide) => {
                  return (
                    <SwiperSlide key={slide.id}>
                      <div className="gallery-card">
                        <img src={slide.imgUrl} className="img-fluid" alt="" />
                        <div>
                          <div className="gallery-content">
                            <a
                              href={slide.imgUrl}
                              className="img-popup"
                              data-attribute="SRL"
                              aria-label="open image"
                            >
                              <img
                                src={slide.imgUrl}
                                className="img-fluid sr-only"
                                alt=""
                              />
                              <i className="fal fa-plus"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </section>
          <section className="testimonials-two">
            <div className="container">
              <div className="team-about__top">
                <div className="align-items-center row">
                  <div className="col-lg-7 col-md-12">
                    <div className="block-title">
                      <h3> Our Member Testimonies</h3>
                    </div>
                  </div>
                  <div className="col-lg-5 col-md-12">
                    <p className="team-about__top-text">
                      This is what some of our community members have to say…
                    </p>
                  </div>
                </div>
              </div>
              <Swiper
                modules={[Thumbs]}
                spaceBetween={10}
                slidesPerView={2} //@ts-ignore
                onSwiper={setThumbsSwiper}
                id="testimonials-two__thumb"
              >
                <SwiperSlide>
                  {" "}
                  <img
                    src="static/images/testimonial-2-1-6e01765e3fe2bacfd750907a07b047be.jpg"
                    alt="Christine Rose"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <img
                    src="static/images/testimonial-2-2-7bf7c2d40f903966c5a50a83dea8e051.jpg"
                    alt="Christine Rose"
                  />
                </SwiperSlide>
                {/* <SwiperSlide>
                  <img
                    src="static/images/testimonial-2-3-83cb90f4c7045dbcc9621caaa84f5ab6.jpg"
                    alt="Christine Rose"
                  />
                </SwiperSlide> */}
              </Swiper>
              <Swiper
                modules={[Thumbs]}
                watchSlidesProgress={true}
                spaceBetween={10}
                slidesPerView={1}
                thumbs={{ swiper: thumbsSwiper }}
                id="testimonials-two__carousel"
              >
                <SwiperSlide>
                  {" "}
                  <p>
                    I am so privileged and blessed to be a part of the great
                    Wevvo Community. Before joining, I didn&apos;t know what
                    direction my business was going. The trainings I have
                    received over the months has been enlightening, eye opening
                    and very crucial to the survival of my business during the
                    Covid 19 lock down and after. It has made me realize that
                    how you position your business at all times matter. I
                    recently lost a friend and mentor but got more than 3
                    mentors from the Wevvo Community speed acceleration program.
                    Thanks so much for everything you do for single women
                    breadwinners in the nation. We&apos;ve been overlooked and
                    made to feel irrelevant but with Wevvo Community, the
                    narrative is changing. Wevvo Community to the world.
                  </p>
                  <div className="testimonials-two__meta">
                    <h3>Yemisi Adeleye</h3>
                    <span>Customer</span>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <p>
                    Being a part of Wevvo group has been a lifeline for me.
                    First of all, the women in WEVVO are so inspiring and
                    besides meeting lots of wonderful, strong women WEVVO
                    accepted me as me and not who I needed to be. WEVVO assisted
                    me with a loan to advance my business, mentorship and
                    business trainings that could have cost me thousands of
                    naira and I got it all for free. The business teachings and
                    mentorship have been very beneficial and in-depth. My
                    business and mental health is in a better place because of
                    Wevvo. If not for WEVVO family I would not be encouraged to
                    be where I am today. As an introvert, I have a hard time
                    asking anyone for anything, even when I know I’m in need of
                    help. It seems like I just put myself in a bubble and try to
                    figure out everything on my own. WEVVO made it possible for
                    me to believe that together we can make and be greater.
                    Thank you WEVVO for making life worth living as a single
                    mum.
                  </p>
                  <div className="testimonials-two__meta">
                    <h3>Ud Ikott</h3>
                    <span>Customer</span>
                  </div>
                </SwiperSlide>{" "}
              </Swiper>
            </div>
          </section>
        </div>
        <section className="news-page news-home pt-120 pb-120">
          <div className="container">
            <div className="align-items-start align-items-md-center flex-column flex-md-row mb-60 row">
              <div className="col-lg-7">
                <div className="block-title">
                  <p>News & Updates</p>
                  <h3>
                    Get updates on our activity as well as other useful content.
                  </h3>
                </div>
              </div>
              <div className="d-flex col-lg-5">
                <div className="my-auto">
                  {/* <p className="block-text pr-10 mb-0">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Have you done google research which
                    works all the time.
                  </p> */}
                </div>
              </div>
            </div>
            <Swiper
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 25,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
            >
              <SwiperSlide>
                {" "}
                <div className="blog-card">
                  <div className="blog-card__inner">
                    <div className="blog-card__image">
                      <img src="blog 1.jpg" alt="" />
                      <div className="blog-card__date"> August 1st</div>
                    </div>
                    <div className="blog-card__content">
                      <div className="blog-card__meta">
                        {/* <a href="news-details">
                          <i className="far fa-user-circle"></i>
                          Admin
                        </a> */}
                        {/* <a href="news-details">
                          <i className="far fa-comments"></i>2 Comments
                        </a> */}
                      </div>
                      <h3>
                        <a href="news-details">
                          Managing stress in changing times with ThankGod Ocheho
                          – RECAP
                        </a>
                      </h3>
                      <p>
                        Our increasingly busy lives and the current state of our
                        country with the constant challenges we face daily in
                        Nigeria cause our...
                      </p>
                      <a className="blog-card__more" href="news-details">
                        <i className="far fa-angle-right"></i>Read More
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="blog-card">
                  <div className="blog-card__inner">
                    <div className="blog-card__image">
                      <img src="/blog 2.jpg" alt="" />
                      <div className="blog-card__date"> July 5th</div>
                    </div>
                    <div className="blog-card__content">
                      <div className="blog-card__meta">
                        {/* <a href="news-details">
                          <i className="far fa-user-circle"></i>
                          Admin
                        </a>
                        <a href="news-details">
                          <i className="far fa-comments"></i>2 Comments
                        </a> */}
                      </div>
                      <h3>
                        <a href="news-details">
                          Wevvo Nigeria: 2nd Quarter Activity Report.
                        </a>
                      </h3>
                      <p>
                        QUARTERLY REPORT. FOR: WEVVO NIGERIA MONTHS UNDER
                        REVIEW: APRIL, MAY AND JUNE. YEAR: 2022 We have a long
                        list of programs and activities for this year;...
                      </p>
                      <a className="blog-card__more" href="news-details">
                        <i className="far fa-angle-right"></i>Read More
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>{" "}
              <SwiperSlide>
                <div className="blog-card">
                  <div className="blog-card__inner">
                    <div className="blog-card__image">
                      <img src="/blog 3.jpg" alt="" />
                      <div className="blog-card__date"> May 23rd</div>
                    </div>
                    <div className="blog-card__content">
                      <div className="blog-card__meta">
                        {/* <a href="news-details">
                          <i className="far fa-user-circle"></i>
                          Admin
                        </a>
                        <a href="news-details">
                          <i className="far fa-comments"></i>2 Comments
                        </a> */}
                      </div>
                      <h3>
                        <a href="news-details">
                          Tehila 5.0, A Group Therapy Event, In partnership with
                          Wevvo Nigeria.
                        </a>
                      </h3>
                      <p>
                        Safe Space Initiative in partnership with Wevvo Nigeria,
                        Rubies Ink Initiative (Mediacon) and Fatimah Balaraba
                        Foundation hosted the Tehila 5.0, A life...
                      </p>
                      <a className="blog-card__more" href="news-details">
                        <i className="far fa-angle-right"></i>Read More
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
        <section className="call-to-action">
          <div className="container">
            <div className="align-items-center row">
              <div className="col-xl-9 col-lg-8">
                <div className="call-to-action__content">
                  <div className="call-to-action__icon">
                    <i className="azino-icon-support"></i>
                  </div>
                  <h3>
                    Let’s make a difference in <br />
                    the lives of others
                  </h3>
                </div>
              </div>
              <div className="d-flex justify-content-start justify-content-md-center justify-content-xl-end justify-content-lg-end col-xl-3 col-lg-3">
                <a className="thm-btn" href="become-volunteer">
                  Become a Volunteer
                </a>
              </div>
            </div>
          </div>
        </section>
        <div className="client-carousel pt-120 pb-120 client-carousel__has-top-shadow">
          <div className="container">
            <Swiper
              modules={[Autoplay]}
              slidesPerView={5}
              spaceBetween={100}
              autoplay={{ delay: 1500, disableOnInteraction: false }}
            >
              {SponsorSlide.map((slide) => {
                return (
                  <SwiperSlide key={slide.id}>
                    <img src={slide.imgUrl} alt="sponsor" />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
        <section className="site-footer">
          <div className="main-footer pt-142 pb-80">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="footer-widget mb-40 footer-widget__about">
                    <a aria-label="logo image" href="index.html">
                      <img
                        src="image-10.png"
                        className="footer-widget__logo"
                        width="101"
                        alt=""
                      />
                    </a>
                    <p>
                      WEVVO is a community-based platform, setup to support
                      female breadwinners and help them thrive.
                    </p>
                    <ul className="list-unstyled footer-widget__contact">
                      <li>
                        <a href="tel:+2348136326729">
                          <i className="azino-icon-telephone"></i>+2348136326729
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="azino-icon-email"></i>contact@wevvo.ng
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="footer-widget footer-widget__link mb-40">
                    <h3 className="footer-widget__title">Explore</h3>
                    <ul className="list-unstyled footer-widget__link-list">
                      <li>
                        <a href="causes">Our Causes</a>
                      </li>
                      <li>
                        <a href="about">About us</a>
                      </li>
                      <li>
                        <a href="news">New Campaign</a>
                      </li>
                      <li>
                        <a href="events">Upcoming Events</a>
                      </li>
                      <li>
                        <a href="about">Site Map</a>
                      </li>
                      <li>
                        <a href="contact">Help</a>
                      </li>
                      <li>
                        <a href="causes">Donate</a>
                      </li>
                      <li>
                        <a href="contact">Contact us</a>
                      </li>
                      <li>
                        <a href="contact">Terms</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="footer-widget mb-40 footer-widget__blog">
                    <h3 className="footer-widget__title">Blog</h3>
                    <ul className="list-unstyled footer-widget__blog">
                      <li>
                        <img src="/blog 1.jpg" alt="" />
                        <p>August 1st</p>
                        <h3>
                          <a href="news-details">
                            Managing stress in changing times with ThankGod
                            Ocheho – RECAP
                          </a>
                        </h3>
                      </li>
                      <li>
                        <img src="/blog 2.jpg" alt="" />
                        <p>July 5th</p>
                        <h3>
                          <a href="news-details">
                            Wevvo Nigeria: 2nd Quarter Activity Report.
                          </a>
                        </h3>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="container">
              {/* <a className="scroll-to-top">
                <i className="far fa-angle-up"></i>
              </a> */}
              <p>© Copyright 2023</p>
              <div className="footer-social">
                <a
                  href="https://twitter.com/wevvo_ng"
                  target="_blank"
                  aria-label="twitter"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="https://web.facebook.com/Wevvo.ng"
                  aria-label="facebook"
                  target="_blank"
                >
                  <i className="fab fa-facebook-square"></i>
                </a>

                <a
                  href="https://www.instagram.com/wevvo.ng/"
                  aria-label="instagram"
                  target="_blank"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
