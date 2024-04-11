"use strict";(self.webpackChunk_kyndryl_design_system_shidoka_foundation=self.webpackChunk_kyndryl_design_system_shidoka_foundation||[]).push([[313],{"./src/stories/Layout.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AspectRatio:()=>AspectRatio,ObjectFit:()=>ObjectFit,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var lit__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lit/index.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Foundation/Layout",decorators:[story=>lit__WEBPACK_IMPORTED_MODULE_0__.qy`
        <style>
          .layout-examples .aspect-ratio-box {
            width: 500px;
            background: var(--kd-color-background-ui-subtle);
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .layout-examples .object-fit-box {
            max-width: 500px;
            border: 1px solid var(--kd-color-background-secondary);
          }
        </style>
        ${story()}
      `]},AspectRatio={argTypes:{aspectRatio:{options:["16x9","2x1","4x3","1x1","1x2","3x4"],control:{type:"select"},description:"Change aspect ratio.",table:{type:{summary:"select"},defaultValue:{summary:"16x9"}}}},args:{aspectRatio:"16x9"},render:args=>{const aspectRatioClass="kd-layout__aspect-ratio--"+args.aspectRatio;return lit__WEBPACK_IMPORTED_MODULE_0__.qy`
      <div class="layout-examples">
        <h3>Aspect Ratio</h3>
        <div class="aspect-ratio-box  kd-type--display-02 ${aspectRatioClass}">
          ${args.aspectRatio}
        </div>
      </div>
    `}},ObjectFit={argTypes:{objectFit:{options:["cover","contain"],control:{type:"select"},description:"Change object fit.",table:{type:{summary:"select"},defaultValue:{summary:"cover"}}}},args:{objectFit:"cover"},render:args=>{const objectFitClass="kd-layout__object-fit--"+args.objectFit;return lit__WEBPACK_IMPORTED_MODULE_0__.qy`
      <div class="layout-examples">
        <h3>Object Fit</h3>
        <p>A 16x9 image in a 4x3 container</p>
        <div class="object-fit-box kd-layout__aspect-ratio--4x3">
          <img
            class="${objectFitClass}"
            src="https://s7d1.scene7.com/is/image/kyndryl/ls_windingriver_16x9?qlt=85&wid=1200&ts=1650983065999&dpr=off"
            alt=""
          />
        </div>
      </div>
    `}};AspectRatio.parameters={...AspectRatio.parameters,docs:{...AspectRatio.parameters?.docs,source:{originalSource:"{\n  argTypes: {\n    aspectRatio: {\n      options: ['16x9', '2x1', '4x3', '1x1', '1x2', '3x4'],\n      control: {\n        type: 'select'\n      },\n      description: 'Change aspect ratio.',\n      table: {\n        type: {\n          summary: 'select'\n        },\n        defaultValue: {\n          summary: '16x9'\n        }\n      }\n    }\n  },\n  args: {\n    aspectRatio: '16x9'\n  },\n  render: args => {\n    const aspectRatioClass = 'kd-layout__aspect-ratio--' + args.aspectRatio;\n    return html`\n      <div class=\"layout-examples\">\n        <h3>Aspect Ratio</h3>\n        <div class=\"aspect-ratio-box  kd-type--display-02 ${aspectRatioClass}\">\n          ${args.aspectRatio}\n        </div>\n      </div>\n    `;\n  }\n}",...AspectRatio.parameters?.docs?.source}}},ObjectFit.parameters={...ObjectFit.parameters,docs:{...ObjectFit.parameters?.docs,source:{originalSource:"{\n  argTypes: {\n    objectFit: {\n      options: ['cover', 'contain'],\n      control: {\n        type: 'select'\n      },\n      description: 'Change object fit.',\n      table: {\n        type: {\n          summary: 'select'\n        },\n        defaultValue: {\n          summary: 'cover'\n        }\n      }\n    }\n  },\n  args: {\n    objectFit: 'cover'\n  },\n  render: args => {\n    const objectFitClass = 'kd-layout__object-fit--' + args.objectFit;\n    return html`\n      <div class=\"layout-examples\">\n        <h3>Object Fit</h3>\n        <p>A 16x9 image in a 4x3 container</p>\n        <div class=\"object-fit-box kd-layout__aspect-ratio--4x3\">\n          <img\n            class=\"${objectFitClass}\"\n            src=\"https://s7d1.scene7.com/is/image/kyndryl/ls_windingriver_16x9?qlt=85&wid=1200&ts=1650983065999&dpr=off\"\n            alt=\"\"\n          />\n        </div>\n      </div>\n    `;\n  }\n}",...ObjectFit.parameters?.docs?.source}}};const __namedExportsOrder=["AspectRatio","ObjectFit"]}}]);
//# sourceMappingURL=stories-Layout-stories.0242b01e.iframe.bundle.js.map