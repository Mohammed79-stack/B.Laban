export const mnu_btns = document.querySelectorAll(
  ".menu-selector-bar .btn-cover button"
);
export const transition = document.querySelector(".transition-container video");
export const textPart = document.querySelector(".full-text-menu");
export const card_menu = document.querySelector(".full-container-menu-card");
export const fullcontainer = document.querySelector(".menu-moving-container");
export const card_container = document.querySelector(".meal-container");

export function transitionMoving() {
  fullcontainer.style.opacity = "0";

  setTimeout(() => {
    transition.style.opacity = "1";
    transition.play();
    textPart.style.transform = "translateY(-100%)";
    card_menu.style.transform = "translateY(-100%)";
  }, 600);

  setTimeout(() => {
    fullcontainer.style.opacity = "1";
  }, 2000);
}

export function backwardTransition() {
  fullcontainer.style.opacity = "0";

  setTimeout(() => {
    transition.style.opacity = "0";
    textPart.style.transform = "translateY(0%)";
    card_menu.style.transform = "translateY(0%)";
  }, 600);

  setTimeout(() => {
    fullcontainer.style.opacity = "1";
  }, 2000);
}

export function changeContent(list, index) {
  let htmlContent = "";

  htmlContent += `<div class="right-side">

                <div class="img-cover-menu">

                    <div class="text-img-menu">

                        <h1>${list[index].name}</h1>

                    </div>
          



                </div>


                <div class="info-menu">

                    <div class="inf-container">

                        <div class="info-parts">

                            <h5>السعرات الحرارية :</h5>
                            <h5>&nbsp;${list[index].cal}</h5>
                        </div>


                        <div class="info-parts">

                            <h5>الشعبية :</h5>
                            <h5>&nbsp;${list[index].fame}</h5>
                        </div>



                        <div class="info-parts">

                            <h5> قيمة غذائية :</h5>
                            <h5>${list[index].food}</h5>
                        </div>



                        <div class="info-parts">

                            <h5> المناسبة :</h5>
                            <h5>${list[index].food}</h5>
                        </div>


                    </div>
                    



                </div>


                <div class="back-menu"><button>رجوع</button></div>


            </div>


            <div class="left-side">

    <div class="meal-article">
        <h2>معلومات عن الوجبة</h2>

        <section class="meal-description">
        <p>
            ${list[index].story}
        </p>
        </section>



            <div class="meal-article">
        <h2>الصورة النمطيه للوجبة</h2>

        <section class="meal-description">
        <p>
            ${list[index].stero}
        </p>
        </section>


            </div>`;

  card_container.innerHTML = htmlContent;
}

export function getBtn(container) {
  const btn = container.querySelector(".back-menu button");

  return btn;
}
