import { c as create_ssr_component, e as escape, d as null_to_empty, f as add_attribute, v as validate_component } from "../../chunks/ssr.js";
const app = "";
const button_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".btn_container.svelte-1xy7pmx{display:grid;place-items:center;align-content:start;padding:1em;flex:1 0 minmax(250px);box-shadow:1px 0 6px currentColor;min-height:155px}p.svelte-1xy7pmx{font-size:0.7rem}button.svelte-1xy7pmx{display:flex;align-items:center;justify-content:center;gap:0.5em;transition:all 0.5s, color 0.1s;font-size:1em;font-weight:500;margin:1rem;border-radius:5px;border:none;cursor:pointer}.shadow.svelte-1xy7pmx{box-shadow:0 0px 12px 0px #53ec0e}.outline.svelte-1xy7pmx{outline:4px auto -webkit-focus-ring-color}.hover.svelte-1xy7pmx:hover{box-shadow:0 0px 9px 0px #53ec0e;transform:translate(0px, 3px);color:rgb(102, 255, 0);background-color:transparent}.outline.svelte-1xy7pmx:active{outline:2px solid red}.focus.svelte-1xy7pmx:focus{background-color:yellow;color:black;outline:1px solid wheat}",
  map: null
};
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "Default" } = $$props;
  let { disabled = false } = $$props;
  let { background = "" } = $$props;
  let { color = "" } = $$props;
  let { paddingBlock = 1 } = $$props;
  let { paddingInline = 1 } = $$props;
  let { width = "5rem" } = $$props;
  let { rigthIcon = false } = $$props;
  let { leftIcon = false } = $$props;
  let { shadow = "" } = $$props;
  let { hover = "" } = $$props;
  let { outline = "" } = $$props;
  let { focus = "" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.background === void 0 && $$bindings.background && background !== void 0)
    $$bindings.background(background);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.paddingBlock === void 0 && $$bindings.paddingBlock && paddingBlock !== void 0)
    $$bindings.paddingBlock(paddingBlock);
  if ($$props.paddingInline === void 0 && $$bindings.paddingInline && paddingInline !== void 0)
    $$bindings.paddingInline(paddingInline);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.rigthIcon === void 0 && $$bindings.rigthIcon && rigthIcon !== void 0)
    $$bindings.rigthIcon(rigthIcon);
  if ($$props.leftIcon === void 0 && $$bindings.leftIcon && leftIcon !== void 0)
    $$bindings.leftIcon(leftIcon);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0)
    $$bindings.shadow(shadow);
  if ($$props.hover === void 0 && $$bindings.hover && hover !== void 0)
    $$bindings.hover(hover);
  if ($$props.outline === void 0 && $$bindings.outline && outline !== void 0)
    $$bindings.outline(outline);
  if ($$props.focus === void 0 && $$bindings.focus && focus !== void 0)
    $$bindings.focus(focus);
  $$result.css.add(css$1);
  return `<div class="btn_container svelte-1xy7pmx"><p class="svelte-1xy7pmx">${slots.default ? slots.default({}) : ``}</p> <button class="${escape(null_to_empty(`${hover} ${shadow} ${outline} ${focus}`), true) + " svelte-1xy7pmx"}" ${disabled ? "disabled" : ""}${add_attribute("style", `background-color: ${background}; color: ${color}; padding-block: ${paddingBlock}em; padding-inline:${paddingInline}em ;min-width: ${width};`, 0)}>${leftIcon ? `<svg width="25" height="25" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M2 5.27L3.28 4L5 5.72l.28.28l1 1l2 2L16 16.72l2 2l2 2L18.73 22l-1.46-1.46c-.34.29-.77.46-1.27.46H8c-1.1 0-2-.9-2-2V9.27l-4-4M8 19h7.73L8 11.27V19M18 7v9.18l-2-2V9h-5.18l-2-2H18m-2.5-3H19v2H7.82l-2-2H8.5l1-1h5l1 1Z"></path></svg> ${escape(title)}` : `${rigthIcon ? `${escape(title)} <svg width="25" height="25" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M16 2A14.172 14.172 0 0 0 2 16a14.172 14.172 0 0 0 14 14a14.172 14.172 0 0 0 14-14A14.172 14.172 0 0 0 16 2Zm8 15h-7v7h-2v-7H8v-2h7V8h2v7h7Z"></path><path fill="none" d="M24 17h-7v7h-2v-7H8v-2h7V8h2v7h7v2z"></path></svg>` : `${escape(title)}`}`}</button> </div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-1311fnc{position:relative;padding:1.1em;display:flex;align-items:start;justify-content:space-evenly;flex-flow:row wrap;gap:1em}h1.svelte-1311fnc,h2.svelte-1311fnc{text-align:center;flex:0 0 100%}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main class="svelte-1311fnc"><h1 class="svelte-1311fnc" data-svelte-h="svelte-kgjllb">Buttons with single props</h1> ${validate_component(Button, "Button").$$render($$result, {}, {}, {
    default: () => {
      return `${escape(`<Button />`)}`;
    }
  })} ${validate_component(Button, "Button").$$render($$result, { title: "outline", outline: "outline" }, {}, {
    default: () => {
      return `${escape(`<Button  outline={'outline'} ></Button>`)}`;
    }
  })} ${validate_component(Button, "Button").$$render($$result, { title: "Rigth Icon", rigthIcon: true }, {}, {
    default: () => {
      return `${escape(`<Button  rigthIcon={true}></Button>`)}`;
    }
  })} ${validate_component(Button, "Button").$$render($$result, { title: "Left Icon", leftIcon: true }, {}, {
    default: () => {
      return `${escape(`<Button  leftIcon={true}></Button>`)}`;
    }
  })} ${validate_component(Button, "Button").$$render($$result, { title: "background", background: "green" }, {}, {
    default: () => {
      return `${escape(`<Button  background={"green"}></Button>`)}`;
    }
  })} ${validate_component(Button, "Button").$$render($$result, { title: "disabled", disabled: true }, {}, {
    default: () => {
      return `${escape(`<Button  disabled={true}>`)}`;
    }
  })} ${validate_component(Button, "Button").$$render($$result, { title: "color", color: "orange" }, {}, {
    default: () => {
      return `${escape(`<Button  color={"orange"} </Button>`)}`;
    }
  })} ${validate_component(Button, "Button").$$render(
    $$result,
    {
      title: "size",
      paddingInline: 3,
      paddingBlock: 1.1
    },
    {},
    {
      default: () => {
        return `${escape(`<Button  paddingInline={3} paddingBlock={1.1}>`)}`;
      }
    }
  )} ${validate_component(Button, "Button").$$render($$result, { title: "Focus", focus: "focus" }, {}, {
    default: () => {
      return `${escape(`<Button  focus={"focus"}></Button>`)}`;
    }
  })} ${validate_component(Button, "Button").$$render($$result, { title: "hover", hover: "hover" }, {}, {
    default: () => {
      return `${escape(`<Button  hover={"hover"}></Button>`)}`;
    }
  })} ${validate_component(Button, "Button").$$render($$result, { title: "shadow", shadow: "shadow" }, {}, {
    default: () => {
      return `${escape(`<Button  shadow={"shadow"}></Button>`)}`;
    }
  })} <h2 class="svelte-1311fnc" data-svelte-h="svelte-1smy80c">Buttons with varied props</h2> ${validate_component(Button, "Button").$$render(
    $$result,
    {
      title: "varied",
      background: "#2471A3",
      hover: "hover",
      color: "black"
    },
    {},
    {
      default: () => {
        return `${escape(`<Button  background={"#2471A3"} hover={"hover"} color={"black"}></Button>`)}`;
      }
    }
  )} ${validate_component(Button, "Button").$$render(
    $$result,
    {
      title: "varied",
      background: "red",
      focus: "focus",
      color: "white",
      paddingInline: 4,
      paddingBlock: 1.5
    },
    {},
    {
      default: () => {
        return `${escape(`<Button  background={"red"} focus={"focus"}  color={"white"}> paddingInline={4} paddingBlock={1.5} </Button>`)}`;
      }
    }
  )} </main>`;
});
export {
  Page as default
};
