export function getValidMoves(x,y,board,piece) {
    if (piece === "pawn_black" || piece === "pawn_white") {
        let pieceColor = true;
        if(piece === "pawn_black"){
            pieceColor = false;
        }
        return getValidMovesPawn(x,y,pieceColor,board);
    }
    if (piece === "knight_black" || piece === "knight_white") {
        let pieceColor = true;
        if(piece === "knight_black"){
            pieceColor = false;
        }
        return getValidMovesKnight(x,y,pieceColor,board);
    }
    if (piece === "bishop_black" || piece === "bishop_white") {
        let pieceColor = true;
        if(piece === "bishop_black"){
            pieceColor = false;
        }
        return getValidMovesBishop(x,y,pieceColor,board);
    }
    if (piece === "rook_black" || piece === "rook_white") {
        let pieceColor = true;
        if(piece === "rook_black"){
            pieceColor = false;
        }
        return getValidMovesRook(x,y,pieceColor,board);
    }
    if (piece === "queen_black" || piece === "queen_white") {
        let pieceColor = true;
        if(piece === "queen_black"){
            pieceColor = false;
        }
        return getValidMovesQueen(x,y,pieceColor,board);
    }
    if (piece === "king_black" || piece === "king_white") {
        let pieceColor = true;
        if(piece === "king_black"){
            pieceColor = false;
        }
        return getValidMovesKing(x,y,pieceColor,board);
    }
}

function getValidMovesPawn(x,y,pieceColor,board) {
    let validMoves = [];
    let spot;
    let i = 0;
    if(pieceColor) {
        spot = board[x][y - 1];
        if(spot === 1) {
            validMoves[i] = [x, y - 1];
            i++;
        }
        spot = board[x + 1][y - 1];
        if(isColorOpp(pieceColor,spot)) {
            validMoves[i] = [x + 1, y - 1];
            i++;
        }
        spot = board[x - 1][y - 1];
        if(isColorOpp(pieceColor,spot)) {
            validMoves[i] = [x - 1, y - 1];
            i++;
        }
    }
    else if(!pieceColor) {
        spot = board[x][y + 1];
        if(spot === 1) {
            validMoves[i] = [x, y + 1];
            i++;
        }
        spot = board[x + 1][y + 1];
        if(isColorOpp(pieceColor,spot)) {
            validMoves[i] = [x + 1, y + 1];
            i++;
        }
        spot = board[x - 1][y + 1];
        if(isColorOpp(pieceColor,spot)) {
            validMoves[i] = [x - 1, y + 1];
            i++;
        }
    }
    return validMoves;
}

// Used to check if the moving piece and the piece at board[row][col] are opposite colors
// pieceColor === White; !pieceColor === Black
// Returns true when colors are opposite
function isColorOpp(pieceColor,spot) {
    let oppColor;
    if ((spot === "r" || spot === "p" || spot === "b" || spot === "n" || spot === "q") && pieceColor) {
        oppColor = true;
    }
    else if ((spot === "R" || spot === "P" || spot === "B" || spot === "N" || spot === "Q") && !pieceColor) {
        oppColor = true;
    }
    else {
        oppColor = false;
    }
    return oppColor;
}

function getValidMovesKnight(x,y,pieceColor,board) {
    let validMoves = [];
    let spot = board[x][y];

    // Right side
   spot = board[x + 1][y + 2];
    if (spot === 1 || isColorOpp(pieceColor,spot)) {
        validMoves[0] = [x + 1, y + 2];
    }
    spot = board[x + 2][y + 1];
    if (spot === 1 || isColorOpp(pieceColor,spot)) {
        validMoves[1] = [x + 2, y + 1];
    }
    spot = board[x + 1][y - 2];
    if (spot === 1 || isColorOpp(pieceColor,spot)) {
        validMoves[2] = [x + 1, y - 2];
    }
    spot = board[x + 2][y - 1];
    if (spot === 1 || isColorOpp(pieceColor,spot)) {
        validMoves[3] = [x + 2, y - 1];
    }

    // Left side
    if(x !== 0) {
        spot = board[x - 1][y - 2];
        if (spot === 1 || isColorOpp(pieceColor,spot)) {
            validMoves[4] = [x - 1, y - 2];
        }
        spot = board[x - 1][y + 2];
        if (spot === 1 || isColorOpp(pieceColor,spot)) {
            validMoves[5] = [x - 1, y + 2];
        }
    }

    if(x >= 2) {
        spot = board[x - 2][y - 1];
        if (spot === 1 || isColorOpp(pieceColor,spot)) {
            validMoves[6] = [x - 2, y - 1];
        }
        spot = board[x - 2][y + 1];
        if (spot === 1 || isColorOpp(pieceColor,spot)) {
            validMoves[7] = [x - 2, y + 1];
        }
    }

    return validMoves;
}
function getValidMovesBishop(x,y,pieceColor,board) {
    let validMoves = [];
    let r = y;  // row
    let c = x;  // column
    let k = -1; // starting index in validMoves
    let spot;
    for(let i = 0; i < 4; i++) {
        r = y;
        c = x;
        while(true) {
            // On the first for loop, check up and right
            if(i === 0) {
                r -= 1;
                c += 1;
            }
            // On the second for loop, check down and right
            else if(i === 1) {
                r += 1;
                c += 1;
            }
            // On the third for loop, check down and left
            else if(i === 2) {
                c -= 1;
                r += 1;
            }
            // On the fourth for loop, check up and left
            else if(i === 3) {
                c -= 1;
                r -= 1;
            }
            spot = board[c][r];
            // If spot is open
            if(spot === 1) {
                k += 1;
                validMoves[k] = [c, r];
            }
            // If spot has a piece and is the same color
            else if(spot === 0 || !isColorOpp(pieceColor,spot)) {
                break;
            }
            // If spot has a piece but is the opposite color
            else if(isColorOpp(pieceColor,spot)) {
                k += 1;
                validMoves[k] = [c, r];
                break;
            }
        }
    }
    return validMoves;
}
function getValidMovesRook(x,y,pieceColor,board) {
    let validMoves = [];
    let r = y;  // row
    let c = x;  // column
    let k = -1; // starting index in validMoves
    let spot;
    for(let i = 0; i < 4; i++) {
        r = y;
        c = x;
        while(true) {
            // On the first for loop, check vertically up
            if(i === 0) {
                r -= 1;
            }
            // On the second for loop, check vertically down
            else if(i === 1) {
                r += 1;
            }
            // On the third for loop, check horizontally right
            else if(i === 2) {
                c += 1;
            }
            // On the fourth for loop, check horizontally left
            else if(i === 3) {
                c -= 1;
            }
            spot = board[c][r];
            // If spot is open
            if(spot === 1) {
                k += 1;
                validMoves[k] = [c, r];
            }
            // If spot has a piece and is the same color
            else if(spot === 0 || !isColorOpp(pieceColor,spot)) {
                break;
            }
            // If spot has a piece and is the opposite color
            else if(isColorOpp(pieceColor,spot)) {
                k += 1;
                validMoves[k] = [c, r];
                break;
            }
        }
    }
    return validMoves;
}
function getValidMovesQueen(x,y,pieceColor,board) {
    let validMoves = [];
    let r = y;  // row
    let c = x;  // column
    let k = -1; // starting index in validMoves
    let spot;
    for(let i = 0; i < 8; i++) {
        r = y;
        c = x;
        while(true) {
            // On the first for loop, check vertically up
            if(i === 0) {
                r -= 1;
            }
            // On the second for loop, check vertically down
            else if(i === 1) {
                r += 1;
            }
            // On the third for loop, check horizontally right
            else if(i === 2) {
                c += 1;
            }
            // On the fourth for loop, check horizontally left
            else if(i === 3) {
                c -= 1;
            }
            // On the fifth for loop, check up and right
            else if(i === 4) {
                r -= 1;
                c += 1;
            }
            // On the sixth for loop, check down and right
            else if(i === 5) {
                r += 1;
                c += 1;
            }
            // On the seventh for loop, check down and left
            else if(i === 6) {
                c -= 1;
                r += 1;
            }
            // On the eigth for loop, check up and left
            else if(i === 7) {
                c -= 1;
                r -= 1;
            }
            spot = board[c][r];
            // If spot is open
            if(spot === 1) {
                k += 1;
                validMoves[k] = [c, r];
            }
            // If spot has a piece and is the same color
            else if(spot === 0 || !isColorOpp(pieceColor,spot)) {
                break;
            }
            // If spot has a piece but is the opposite color
            else if(isColorOpp(pieceColor,spot)) {
                k += 1;
                validMoves[k] = [c, r];
                break;
            }
        }
    }
    return validMoves;
}
function getValidMovesKing(x,y,pieceColor,board) {
    let validMoves = [];
    let r = y;  // row
    let c = x;  // column
    let k = 0; // starting index in validMoves
    let spot;
    let valid = true;
    let checkSpot;

    // Check top square
    r--;
    spot = board[c][r];
    // Check for knights
    if(spot === 1 || isColorOpp(pieceColor,spot)) {
        checkSpot = board[c + 1][r - 2];
        if((checkSpot === "n" || checkSpot === "N") && isColorOpp(pieceColor, checkSpot)) {
            valid = false;
        }
        checkSpot = board[c + 2][r - 1];
        if((checkSpot === "n" || checkSpot === "N") && isColorOpp(pieceColor, checkSpot)) {
            valid = false;
        }
        checkSpot = board[c + 2][r + 1];
        if((checkSpot === "n" || checkSpot === "N") && isColorOpp(pieceColor, checkSpot)) {
            valid = false;
        }
        checkSpot = board[c + 1][r + 2];
        if((checkSpot === "n" || checkSpot === "N") && isColorOpp(pieceColor, checkSpot)) {
            valid = false;
        }
        // Left side
        checkSpot = board[c - 1][r + 2];
        if((checkSpot === "n" || checkSpot === "N") && isColorOpp(pieceColor, checkSpot)) {
            valid = false;
        }
        checkSpot = board[c - 2][r + 1];
        if((checkSpot === "n" || checkSpot === "N") && isColorOpp(pieceColor, checkSpot)) {
            valid = false;
        }
        checkSpot = board[c - 2][r - 1];
        if((checkSpot === "n" || checkSpot === "N") && isColorOpp(pieceColor, checkSpot)) {
            valid = false;
        }
        checkSpot = board[c - 1][r - 2];
        if((checkSpot === "n" || checkSpot === "N") && isColorOpp(pieceColor, checkSpot)) {
            valid = false;
        }

        // Check for bishops and queen
        let diagonalValid = true;
        for(let i = 0; i < 4; i++) {
            r = y - 1;
            c = x;
            while(true) {
                // On the first for loop, check up and right
                if(i === 0) {
                    r -= 1;
                    c += 1;
                }
                // On the second for loop, check down and right
                else if(i === 1) {
                    r += 1;
                    c += 1;
                }
                // On the third for loop, check down and left
                else if(i === 2) {
                    c -= 1;
                    r += 1;
                }
                // On the fourth for loop, check up and left
                else if(i === 3) {
                    c -= 1;
                    r -= 1;
                }
                checkSpot = board[c][r];
                // If spot is open
                if(checkSpot === 1) {
                    continue;
                }
                // If spot is an opposite color bishop or queen
                else if((checkSpot === "b" || checkSpot === "B" || checkSpot === "q" || checkSpot === "Q")
                    && isColorOpp(pieceColor,checkSpot)) {
                    diagonalValid = false;
                    break;
                }
                // If spot has a piece but is the same color
                else if(!isColorOpp(pieceColor,checkSpot)) {
                    break;
                }
                else if(checkSpot === 0) {
                    break;
                }
            }
        }

        if(valid && diagonalValid) {
            validMoves[k] = [x, y - 1];
        }
    }


    return validMoves;
}