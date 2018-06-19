function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById('nested')
}

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list') //grab the .ranked-list class

  for (let i = 0, l = rankedLists.length; i < l; i++) {  //iterate over ranked-list
    let children = rankedLists[i].children //how do you grab each child of ranked-list? Persist as a variable

    for (let j = 0, k = children.length; j < k; j++) { //iterate over children
      children[j].innerHTML = parseInt(children[j].innerHTML) + n //manipulate children here
    }
  }
}

function deepestChild() {
  let node = document.getElementById('grand-node')
  let nextNode = node.children[0]
  while (nextNode) {
    node = nextNode
    nextNode = node.children[0]
  }
<<<<<<< HEAD
  return node
=======
>>>>>>> cca5fa2bb21309e7c28758cd9f81165c622d984e
}