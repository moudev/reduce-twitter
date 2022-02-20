import defaultActions from "../data.js"

async function createMenu() {
  const container = document.querySelector("#rules")

  const actions = defaultActions

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

function init() {
  createMenu()
}

init()