import { menu_list } from "../data/menu-list.js";
import {
  mnu_btns,
  transitionMoving,
  card_container,
  transition,
  changeContent,
  getBtn,
  backwardTransition,
} from "../data/menu.js";

function menu_transition() {
  let backbtnn;

  for (let i = 0; i < mnu_btns.length; i++) {
    const el = mnu_btns[i];

    el.addEventListener("click", () => {
      changeContent(menu_list, i);
      transitionMoving();
      backbtnn = getBtn(card_container);

      if (backbtnn) {
        backbtnn.addEventListener("click", () => {
          backwardTransition();
        });
      }
    });
  }
}

menu_transition();
