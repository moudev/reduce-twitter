import defaultActions from "./data.js"

function getTabs() {
  return browser.tabs.query({
    active: true,
    url: "*://*.twitter.com/*"
  })
}

function updateAction(e) {
  if (e.target.type !== "checkbox") return

  const actions = defaultActions

  const checked = e.target.checked
  const [action, rule] = e.target.id.split("-")

  const actionIndex = actions.findIndex(a => a.id === action)
  const ruleIndex = actions[actionIndex].rules.findIndex(r => r.id === rule)

  actions[actionIndex].rules[ruleIndex].apply = checked
}

export { updateAction, getTabs }
