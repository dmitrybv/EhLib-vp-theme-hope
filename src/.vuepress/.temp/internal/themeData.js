export const themeData = JSON.parse("{\"blog\":{},\"encrypt\":{\"config\":{\"/demo/encrypt.html\":[\"$2a$10$eOBeXfN/hmANT11s3/o6Fu2m9z3hoH9S.FF4zxPNY8SU3USOB1aHy\"],\"/zh/demo/encrypt.html\":[\"$2a$10$2Uaz7HlXpKow1lFVI41mleMpnPJJ0lRED/xoiiMIEhMwlu88bxR9K\"]}},\"pure\":false,\"darkmode\":\"switch\",\"themeColor\":false,\"fullscreen\":false,\"locales\":{\"/\":{\"blog\":{},\"repoDisplay\":true,\"navbarIcon\":true,\"navbarAutoHide\":\"mobile\",\"hideSiteNameOnMobile\":true,\"sidebar\":[{\"text\":\"\",\"prefix\":\"/EhLibDoc/\",\"link\":\"/EhLibDoc/\",\"children\":\"structure\"}],\"sidebarIcon\":true,\"headerDepth\":2,\"lang\":\"en-US\",\"navbarLocales\":{\"langName\":\"English\",\"selectLangAriaLabel\":\"Select language\"},\"metaLocales\":{\"author\":\"Author\",\"date\":\"Writing Date\",\"origin\":\"Original\",\"views\":\"Page views\",\"category\":\"Category\",\"tag\":\"Tag\",\"readingTime\":\"Reading Time\",\"words\":\"Words\",\"toc\":\"On This Page\",\"prev\":\"Prev\",\"next\":\"Next\",\"lastUpdated\":\"Last update\",\"contributors\":\"Contributors\",\"editLink\":\"Edit this page\"},\"outlookLocales\":{\"themeColor\":\"Theme Color\",\"darkmode\":\"Theme Mode\",\"fullscreen\":\"Full Screen\"},\"encryptLocales\":{\"iconLabel\":\"Page Encrypted\",\"placeholder\":\"Enter password\",\"remember\":\"Remember password\",\"errorHint\":\"Please enter the correct password!\"},\"routeLocales\":{\"skipToContent\":\"Skip to main content\",\"notFoundMsg\":[\"There’s nothing here.\",\"How did we get here?\",\"That’s a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"back\":\"Go back\",\"home\":\"Take me home\",\"openInNewWindow\":\"Open in new window\"},\"author\":{\"name\":\"Admin\",\"url\":\"https://www.ehlib.com\"},\"logo\":\"/EhLib.Logo.Text.png\",\"docsDir\":\"demo/theme-docs/src\",\"pageInfo\":[\"Author\",\"Original\",\"Date\",\"Category\",\"Tag\",\"ReadingTime\"]}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
