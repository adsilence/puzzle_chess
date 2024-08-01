export function getValidMoves(x,y,board,piece) {
    if (piece === "pawn_black" || piece === "pawn_white") {
        return getValidMovesPawn(x,y,board);
    }
    if (piece === "knight_black" || piece === "knight_white") {
        let pieceColor = true;
        if(piece === "knight_black"){
            pieceColor = false;
        }
        return getValidMovesKnight(x,y,pieceColor,board);
    }
    if (piece === "bishop_black" || piece === "bishop_white") {
        return getValidMovesBishop(x,y,board);
    }
    if (piece === "rook_black" || piece === "rook_white") {
        let pieceColor = true;
        if(piece === "rook_black"){
            pieceColor = false;
        }
        return getValidMovesRook(x,y,pieceColor,board);
    }
    if (piece === "queen_black" || piece === "queen_white") {
        return getValidMovesQueen(x,y,board);
    }
    if (piece === "king_black" || piece === "king_white") {
        return getValidMovesKing(x,y,board);
    }
}

function getValidMovesPawn(x,y,board) {

    return [[0,0], [0,2]];
}

// Used to check if the moving piece and the piece at board[row][col] are opposite colors
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

function isSpotPiece(spot){
    let piece;
    if(spot !== 1 && spot !== 0) {
        piece = true;
    }
    else {
        piece = false;
    }
    return piece;
}

// if pieceColor === true, the piece is white
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
function getValidMovesBishop(x,y,board) {
    return [];
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
                k += 1;
            }
            // On the second for loop, check vertically down
            if(i === 1) {
                r += 1;
                k += 1;
            }
            // On the third for loop, check horizontally right
            if(i === 2) {
                c += 1;
                k += 1;
            }
            // On the fourth for loop, check horizontally left
            if(i === 3) {
                c -= 1;
                k += 1;
            }
            spot = board[c][r];
            // If spot is open
            if(spot === 1) {
                validMoves[k] = [c, r];
            }
            // If spot has a piece and is the same color
            else if(spot === 0 || (isSpotPiece(spot) && !isColorOpp(pieceColor,spot))) {
                break;
            }
            // If spot has a piece but is the opposite color
            else if(isSpotPiece(spot) && isColorOpp(pieceColor,spot)) {
                validMoves[k] = [c, r];
                break;
            }
        }
    }
    return validMoves;
}
function getValidMovesQueen(x,y,board) {
    return [];
}
function getValidMovesKing(x,y,board) {
    return [];
}