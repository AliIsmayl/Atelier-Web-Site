import React from "react";
import "./PersonalizedService.scss";
import Photo from "../../Image/personalPhoto.png";

function PersonalizedService() {
  return (
    <section id="personalizedService">
      <div className="text1">
        <p>PERSONALIZED</p> <span>SERVICE</span>
      </div>
      <div className="text2">
        <div className="leftBox">
          <p>Experience Bespoke Tailoring Like Never Before</p>
          <span>
            Atelier Di Falco is dedicated to offering a truly personalized
            experience. From the initial consultation to the final fitting, our
            expert tailors are committed to crafting garments that reflect your
            unique style and preferences. Discover the art of tailoring, where
            every detail is designed with you in mind.
          </span>
        </div>
        <img src={Photo} alt="" />
      </div>
    </section>
  );
}

export default PersonalizedService;
