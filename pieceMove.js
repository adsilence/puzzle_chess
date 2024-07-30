export function getValidMoves(x,y,board,piece) {
    if (piece === "pawn_black" || piece === "pawn_white") {
        return getValidMovesPawn(x,y,board);
    }
    if (piece === "knight_black" || piece === "knight_white") {
        return getValidMovesKnight(x,y,board);
    }
    if (piece === "bishop_black" || piece === "bishop_white") {
        return getValidMovesBishop(x,y,board);
    }
    if (piece === "rook_black" || piece === "rook_white") {
        return getValidMovesRook(x,y,board);
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

function getValidMovesKnight(x,y,board) {
    let validMoves = [];

    // Right side
   let spot = board[x + 1][y + 2];
    if (spot === 1) {
        validMoves[0] = [x + 1, y + 2];
    }

    spot = board[x + 2][y + 1];
    if (spot === 1) {
        validMoves[1] = [x + 2, y + 1];
    }

    spot = board[x + 1][y - 2];
    if (spot === 1) {
        validMoves[2] = [x + 1, y - 2];
    }

    spot = board[x + 2][y - 1];
    if (spot === 1) {
        validMoves[3] = [x + 2, y - 1];
    }

    /*// Left side
    spot = board[x - 1][y - 2];
    if (spot === 1) {
        validMoves[4] = [x - 1, y - 2];
    }

    spot = board[x - 2][y - 1];
    if (spot === 1) {
        validMoves[5] = [x - 2, y - 1];
    }

    spot = board[x - 1][y + 2];
    if (spot === 1) {
        validMoves[6] = [x - 1, y + 2];
    }

    spot = board[x - 2][y + 1];
    if (spot === 1) {
        validMoves[7] = [x - 2, y + 1];
    }*/

    return validMoves;
}
function getValidMovesBishop(x,y,board) {
    return [];
}
function getValidMovesRook(x,y,board) {
    return [];
}
function getValidMovesQueen(x,y,board) {
    return [];
}
function getValidMovesKing(x,y,board) {
    return [];
}