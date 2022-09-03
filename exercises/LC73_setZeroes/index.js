

 var setZeroes = function(matrix) {
    let row = new Array(matrix.length);
    let col = new Array(matrix[0].length);
    
    for (let i = 0; i < row.length; i++) {
        for (let j = 0; j < col.length; j++) {
            if (matrix[i][j] === 0) {
                row[i] = 0;
                col[j] = 0;
            }
        }
    }
    
    for (let i = 0; i < row.length; i++) {
        for (let j = 0; j < col.length; j++) {
            if (row[i] == 0 || col[j] == 0) {
                matrix[i][j] = 0;
            }
        }
    }

var setZeroes = function(matrix) {
    //create an array to track the points of the 0's
    let track = []
    
    for (let r = 0; r < matrix.length; r++) {
        for (let c = 0; c < matrix[0].length; c++) {
            if (matrix[r][c] === 0) {
              track.push([r,c])
            }
        }
    }
    
    for (let i = 0 ; i < track.length; i++) {
        let [r,c] = track[i]
        //update column
        for (let j = 0; j < matrix.length; j++) {
            matrix[j][c] = 0
        }
        //update row
        for (let j = 0; j < matrix[0].length; j++) {
            matrix[r][j] = 0
        }

    }
    
}

//     var track = []
    
//     // find zeros
//     for(var i = 0; i < matrix.length; i++){
//       for(var j = 0; j < matrix[0].length; j++){
//         if(matrix[i][j] === 0) track.push([i, j])                
//       }
//     }

//     for(var i = 0; i < track.length; i++){
//       var [x, y] = track[i]
      
//       // update row
//       for(var j = 0; j < matrix[0].length; j++){
//         matrix[x][j] = 0
//       }
      
//       // udpate column
//       for(var j = 0; j < matrix.length; j++){
//         matrix[j][y] = 0
//       }

//     }
    
};

module.exports = setZeroes;
