import defaultActions from "./data.js"

const actions = defaultActions

function getTabs() {
  return browser.tabs.query({
    active: true,
    url: "*://*.twitter.com/*"
  })
}

async function updateCSS () {
  const tabs = await getTabs()
  
  if (tabs.length === 0) return
  
  const tab = tabs[0] // current active twitter tab

  let css = ""
  
  actions.map(action => {
    const selectors = action.selectors.join(", ")

    const declarations = action.rules
      .map(rule => rule.apply ? rule.value : rule.default)
      .join(" ")
    
    const rule = `${selectors} {
      ${declarations}
    }`    

    css += rule    
  })

  // if the css isn't removed the css update action only works one time
  browser.tabs.removeCSS(tab.id, { code: css }); 
  browser.tabs.insertCSS(tab.id, { code: css }); 
}

function updateAction(e) {
  if (e.target.type !== "checkbox") return

  const checked = e.target.checked
  const [action, rule] = e.target.id.split("-")

  const actionIndex = actions.findIndex(a => a.id === action)
  const ruleIndex = actions[actionIndex].rules.findIndex(r => r.id === rule)

  actions[actionIndex].rules[ruleIndex].apply = checked

  updateCSS()
}

export { updateAction, getTabs }
