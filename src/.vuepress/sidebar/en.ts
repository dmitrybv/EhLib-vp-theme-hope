 import { sidebar } from "vuepress-theme-hope";
//import { defineUserConfig } from "vuepress";
//import { hopeTheme } from "vuepress-theme-hope";



// import { sidebar } from "vuepress-theme-hope";
// //import { defineUserConfig } from "vuepress";

export const enSidebar = //sidebar(
       [
        {
          text: "",
          //link: 'EhLibDoc/01-welcome-page.md',
          prefix: "/EhLibDoc/",
          //collapsable: true,
          link: "/EhLibDoc/",
          //sidebarSorter: "filename",
          children: "structure",
          // children: [
          //     '01-welcome-page.md', // These are pages we'll add later
          //     '02-installing.md',
          //     '03-language-resources.md',
          //     {
          //       text: "TDBGridEh control",
          //       link: '04-using-tdbgrideh-component/01-tdbgrideh-component.md',
          //       prefix: "04-using-tdbgrideh-component/",
          //       collapsable: true,
          //       children: [
          //         '02-brief-description-of-tdbgrideh-tdatalink-and-tdataset.md',
          //         '03-working-with-tdbgrideh-at-design-time.md',
          //         '04-import-export-tdbgrideh-data-to-from-various-formats.md',
          //         {
          //           text: "Type of Columns in TDBGridEh",
          //           link: '05-types-of-columns-and-data-types-in-columns/01-types-of-columns-and-data-types-in-columns.md',
          //           prefix: '05-types-of-columns-and-data-types-in-columns',
          //           children: [
          //             '01-types-of-columns-and-data-types-in-columns.md',
          //             '02-access-to-the-grid-columns.md'
          //           ]
          //         }
          //       ]                     
          //     }
          // ]
        }
      ];
//);

// // export const enSidebar = sidebar({
// //   "/": [
// //     {
// //       text: "EhLibDoc",
// //       prefix: "EhLibDoc/",
// //       children: 
// //       [
// //         {
// //           text: "Getting Started",
// //           path: '/01-welcome-page.md',
// //           collapsable: true,
// //           children: [
// //               '01-welcome-page.md', // These are pages we'll add later
// //               '02-installing.md',
// //               '03-language-resources.md',
// //           ]
// //         }
// //       ],
// //     },
// //     // "",
// //     // {
// //     //   icon: "discover",
// //     //   text: "Demo",
// //     //   prefix: "demo/",
// //     //   link: "demo/",
// //     //   children: "structure",
// //     // },
// //     // {
// //     //   text: "Docs",
// //     //   icon: "note",
// //     //   prefix: "guide/",
// //     //   children: "structure",
// //     // },
// //     // {
// //     //   text: "EhLibDoc",
// //     //   icon: "note",
// //     //   prefix: "EhLibDoc/",
// //     //   children: "structure",
// //     // },
// //     // "slides",
    
// //   ],
// // });

// // export const enSidebar = sidebar([
// //   // Create sidebar groups
// //   {
// //       text: "Getting Started",
// //       link: '/01-welcome-page.md',
// //       collapsable: true,
// //       children: [
// //           '/01-welcome-page.md', // These are pages we'll add later
// //           '/02-installing.md',
// //           '/03-language-resources.md',
// //       ]
// //   },
// //   {
// //     text: 'Guide',
// //     collapsable: false,
// //     children: [
// //           '/04-using-tdbgrideh-component/01-tdbgrideh-component.md', // These are pages we'll add later
// //           '/04-using-tdbgrideh-component/02-brief-description-of-tdbgrideh-tdatalink-and-tdataset.md',
// //           {
// //             text: 'Columns',
// //             children: [
// //               '/04-using-tdbgrideh-component/05-types-of-columns-and-data-types-in-columns/01-types-of-columns-and-data-types-in-columns.md',
// //             ]
// //           }
// //     ]
// //   }
// // ]);


// export const enSidebar = //sidebar(  
//   [
//       {
//         // required, title of group
//         text: "Group 1",
//         // optional, icon of group
//         icon: "tip",
//         // optional, link of group title
//         path: "/foo/",
//         // optional, will be appended to each item link
//         prefix: "/foo/",
//         // optional, defaults to false
//         collapsible: false,
//         // required, items of group
//         children: [
//           "README.md" /* /foo/index.html */,
//           /* ... */
//           "geo.md" /* /foo/geo.html */,
//         ],
//       },
//       {
//         text: "Group 2",
//         children: [
//           /* ... */
//           "bar.md" /* /ray/bar.html */,
//           "baz.md" /* /ray/baz.html */,
//         ],
//       },
//     ];      
// //    ],
// //);
