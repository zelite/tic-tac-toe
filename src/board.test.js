import * as board from "./board.js";

const B1 = [["E", "E", "E"],
            ["E", "E", "E"],
            ["E", "E", "E"]];
const B2 = [["X", "O", "X"],
            ["X", "O", "O"],
            ["O", "X", "X"]];
const B3 = [["X", "E", "O"],
            ["X", "O", "E"],
            ["X", "O", "X"]];

describe("get symbols", () =>{
    test("get symbol from first row", ()=>{
        expect(board.getSymbolAtRowCol(B1, 0, 0)).toBe("E");
    });
    test("get symbol from last row and last col", ()=>{
        expect(board.getSymbolAtRowCol(B3, 2, 2)).toBe("X");
    });
    test("get symbol from middle row and last col", ()=>{
        expect(board.getSymbolAtRowCol(B2, 1, 2)).toBe("O");
    });
});

describe("get symbols from row", () =>{
    test("get symbols from first row", ()=>{
        expect(board.getSymbolsFromRow(B1, 0)).toEqual(["E", "E", "E"]);
    });
    test("get symbol from last row", ()=>{
        expect(board.getSymbolsFromRow(B3, 2)).toEqual(["X", "O", "X"]);
    });
    test("get symbol from middle row", ()=>{
        expect(board.getSymbolsFromRow(B2, 1)).toEqual(["X", "O", "O"]);
    });
});

describe("get symbols from col", () =>{
    test("get symbols from first col", ()=>{
        expect(board.getSymbolsFromCol(B2, 0)).toEqual(["X", "X", "O"]);
    });
    test("get symbol from last col", ()=>{
        expect(board.getSymbolsFromCol(B3, 2)).toEqual(["O", "E", "X"]);
    });
    test("get symbol from middle col", ()=>{
        expect(board.getSymbolsFromCol(B2, 1)).toEqual(["O", "O", "X"]);
    });
});

describe("get symbols from diagonal", ()=>{
  test("get symbols from diagonal when row col are in diagonal", ()=>{
    expect(board.getSymbolsFromDiag(B2, 0, 0)).toEqual(["X", "O", "X"])
  })
  test("get empty list because row col are not in diagonal", ()=>{
    expect(board.getSymbolsFromDiag(B2, 0, 1)).toEqual([])
  })
})

describe("get symbols from anti diagonal", ()=>{
  test("get symbols from anti diagonal when row col are in diagonal", ()=>{
    expect(board.getSymbolsFromAntiDiag(B2, 0, 2)).toEqual(["X", "O", "O"])
  })
  test("get emtpy list because row col are not in diagonal", ()=>{
    expect(board.getSymbolsFromAntiDiag(B2, 0, 1)).toEqual([])
  })
})



describe("is in diagonal", () =>{
    test("first diagonal", ()=>{
        expect(board.isInDiagonal(0, 0)).toBe(true);
    });
    test("anti diagonal", ()=>{
        expect(board.isInDiagonal(0, 2)).toBe(true);
    });
    test("not in diagonal", ()=>{
        expect(board.isInDiagonal(0, 1)).toBe(false);
    });
});

describe("are there three of this", ()=>{
  test("there are three", ()=>{
    expect(board.thereAreThreeOfThisSymbol(["X", "X", "X"], "X")).toBe(true);
    expect(board.thereAreThreeOfThisSymbol(["O", "O", "O"], "O")).toBe(true);
  });
  test("there aren't three", ()=>{
    expect(board.thereAreThreeOfThisSymbol(["X", "X", "O"], "X")).toBe(false);
    expect(board.thereAreThreeOfThisSymbol(["X", "O", "O"], "X")).toBe(false);
    expect(board.thereAreThreeOfThisSymbol(["O", "O", "O"], "X")).toBe(false);
  })
})


describe("check for winner", () =>{
  test("is there a winner in a empty board", ()=>{
    expect(board.isThereAWinner(B1, 0, 0)).toBe(false);
  });
  test("is there a winner in winning board", ()=>{
    expect(board.isThereAWinner(B3, 2, 0)).toBe(true);
  });
  test("is there a winner in draw board", ()=>{
    expect(board.isThereAWinner(B2, 2, 0)).toBe(false);
  })
})

describe("inserting symbols", ()=>{
  test("putting a symbol returns new board with symbol in right place", ()=>{
    expect(board.putSymbolAtRowCol(B1, "X", 0, 0)).toEqual([["X", "E", "E"],
                ["E", "E", "E"],
                ["E", "E", "E"]])
    expect(board.putSymbolAtRowCol(B1, "X", 1, 2)).toEqual([["E", "E", "E"],
                            ["E", "E", "X"],
                            ["E", "E", "E"]])
    expect(board.putSymbolAtRowCol(B1, "X", 0, 0)).not.toBe(B1)
  })
})
