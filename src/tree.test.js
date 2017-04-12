import Node from "./tree.js";

it("builds a tree", ()=>{
  const tree = new Node(1, "X");
  const child = new Node(2, "X");
  tree.addChild(child);
  console.log(tree);
  expect(tree.children[0]).toBe(child);
})
