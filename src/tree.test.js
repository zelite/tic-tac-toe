import Node, {createChildrenBoards} from "./tree.js";

it("builds a tree", ()=>{
  const tree = new Node(1, "X");
  const child = new Node(2, "X");
  tree.addChild(child);
  console.log(tree);
  expect(tree.children[0]).toBe(child);
})

it("builds a boards tree", ()=>{
  const board = [["E", "E", "E"],
              ["E", "E", "E"],
              ["E", "E", "E"]];
  const boardNode = new Node(board, null);
  createChildrenBoards(boardNode);
  console.log(boardNode);
  expect(tree.children[0]).toBe(1);
})
