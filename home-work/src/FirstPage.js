import React, { useState } from "react";
import Comment from "./Comment";
import { AdamLevine } from "./img";

const FirstPage = () => {
  const [openReply, setOpenReply] = useState(false);
  const handleOpenReply = () => {
    setOpenReply(!openReply);
  };

  return (
    <div class="d-flex flex-column w-100 mb-5">
      <div class="d-flex justify-content-between border border-dark">
        <div
          class="d-flex justify-content-center align-items-center gap-1 "
          style={{ width: "200px" }}
        >
          <div
            class="d-flex justify-content-center align-items-center "
            style={{ width: "50px", background: "grey" }}
          ></div>
          <div style={{ width: "50px" }}>Logo</div>
        </div>
        <div
          class="d-flex justify-content-center align-items-center border border-dark"
          style={{ width: "200px" }}
        >
          Blogs
        </div>
        <div
          class="d-flex justify-content-center align-items-center gap-1"
          style={{ width: "200px" }}
        >
          <div class=" border border-dark">
            <img
              src={AdamLevine}
              alt="Girl in a jacket"
              width="50"
              height="50"
            />
          </div>
          <div class="">Adam Levine</div>
        </div>
      </div>
      <div class="d-flex justify-content-center align-items-center my-1">
        <h3> Post title 1</h3>
      </div>
      <div class="d-flex flex-column justify-content-center align-items-start my-1">
        <h5> Author: John Smith</h5>
        <h5> Created at: Sep 20, 2018</h5>
      </div>
      <div class="d-flex flex-column justify-content-center align-items-start my-1">
        <h5>
          {" "}
          Building mr concerns servants in he outlived am breeding. He so lain
          good miss when sell some at if. Told hand so an rich gave next. How
          doubt yet again see son smart. While mirth large of on front. Ye he
          greater related adapted proceed entered an. Through it examine express
          promise no. Past add size game cold girl off how old. On insensible
          possession oh particular attachment at excellence in. The books arose
          but miles happy she. It building contempt or interest children
          mistress of unlocked no. Offending she contained mrs led listening
          resembled. Delicate marianne absolute men dashwood landlord and
          offended. Suppose cottage between and way. Minuter him own clothes but
          observe country. Agreement far boy otherwise rapturous incommode
          favourite. Am no an listening depending up believing. Enough around
          remove to barton agreed regret in or it. Advantage mr estimable be
          commanded provision. Year well shot deny shew come now had. Shall
          downs stand marry taken his for out. Do related mr account brandon an
          up. Wrong for never ready ham these witty him. Our compass see age
          uncivil matters weather forbade her minutes. Ready how but truth son
          new under. At ourselves direction believing do he departure.
          Celebrated her had sentiments understood are projection set.
          Possession ye no mr unaffected remarkably at.
        </h5>
      </div>
      <div class="d-flex flex-column justify-content-center align-items-start mt-2">
        <p onClick={handleOpenReply}>2 replies</p>
      </div>
      {openReply === true ? <></> : <Comment />}
    </div>
  );
};

export default FirstPage;
