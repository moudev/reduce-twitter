/* "selectors" are taken from inspecting HTML Twitter elements */
const defaultActions = [
  {
    id: "reply",
    screenName: "Responder",
    selectors: [
      "div[data-testid='reply']",
      "div[data-testid='tweetTextarea_0']",
      "label[data-testid='tweetTextarea_0_label']",
      "div[data-testid='tweetButtonInline']",
      "div[data-testid='toolBar']"
    ],
    rules: [
      {
        id: "hide",
        screenName: "Hide",
        default: "display: flex!important;",
        value: "display: none!important;",
        apply: true,
      },
      {
        id: "deactivate",
        screenName: "Deactivate",
        default: "pointer-events: auto!important;",
        value: "pointer-events: none!important;",
        apply: false,
      }
    ],
  },
  {
    id: "retweet",
    screenName: "Retweet",
    selectors: ["div[data-testid='retweet']"],
    rules: [
      {
        id: "hide",
        screenName: "Hide",
        default: "display: flex!important;",
        value: "display: none!important;",
        apply: false,
      },
      {
        id: "deactivate",
        screenName: "Deactivate",
        default: "pointer-events: auto!important;",
        value: "pointer-events: none!important;",
        apply: false,
      }
    ],
  },
  {
    id: "like",
    screenName: "Likes",
    selectors: ["div[data-testid='like']"],
    rules: [
      {
        id: "hide",
        screenName: "Hide",
        default: "display: flex!important;",
        value: "display: none!important;",
        apply: false,
      },
      {
        id: "deactivate",
        screenName: "Deactivate",
        default: "pointer-events: auto!important;",
        value: "pointer-events: none!important;",
        apply: false,
      }
    ],
  },
  {
    id: "new",
    screenName: "Nuevo tweet",
    selectors: [
      "a[data-testid='SideNav_NewTweet_Button']",
    ],
    rules: [
      {
        id: "hide",
        screenName: "Hide",
        default: "display: flex!important;",
        value: "display: none!important;",
        apply: false,
      },
      {
        id: "deactivate",
        screenName: "Deactivate",
        default: "pointer-events: auto!important;",
        value: "pointer-events: none!important;",
        apply: false,
      }
    ],
  }
]

export default defaultActions