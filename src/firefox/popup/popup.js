import { updateAction, getTabs, getActions, updateCSS } from "../utils.js"

async function createMenu() {
  const container = document.querySelector("#rules")

  const actions = await getActions()

  actions.map(action => {
    const ruleContainer = document.createElement("div")
    
    const title = document.createElement("h3")  
    title.textContent = action.screenName
    
    ruleContainer.appendChild(title)

    action.rules.map((rule) => {
      const ruleNode = document.createElement("p")
      ruleNode.textContent = rule.screenName

      const check = document.createElement("input")
      check.setAttribute("type", "checkbox")
      check.checked = rule.apply

      const idAttribute = `${action.id}-${rule.id}`
      check.setAttribute("id", idAttribute)

      const label = document.createElement("label")
      label.textContent = rule.screenName
      label.setAttribute("for", idAttribute)

      ruleContainer.appendChild(check)
      ruleContainer.appendChild(label)
    })

    container.appendChild(ruleContainer)
  })
}

async function init() {
  const container = document.querySelector("#rules")
  container.addEventListener("click", updateAction)

  const tabs = await getTabs()

  // the active tab must be twitter.com to display the menu
  if (tabs.length === 0) {
    container.innerHTML = "No twitter"  
    return
  }
  
  await createMenu()
  updateCSS()
}

init()