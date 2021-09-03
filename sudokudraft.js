//function
function number_tester(horizontal_box, vertical_box, x, y, number) {
    if (sudoku_array[x][y] != 0) {
        return False
    }
    for (let i in vertical_box*3) {
        if (sudoku_array[x][i] == number) {
            return False
        }
    }
    for (let i in horizontal_box*3) {
        if (sudoku_array[j][y] == number) {
        return False
        }
    }
    for (let x2 = 0; i2 < 3; i2++) {
        for (let y2 = 0; k2 < 3; k2++) {
            if (sudoku_array[Math.floor(x/3)*3 + x2][Math.floor(y/3)*3 + y2] == number) {
                return False
            }
        }
    }
    return number
}

function grid_randomizer(horizontal_box, vertical_box) {
    var x = 0;
    var y = 0;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            var number_list = [1, 2, 3, 4, 5, 6, 7, 8, 9]
            for (let x = 0; x < 3; x++) {
                for (let y = 0; y < 3; y++) {
                    var number = Math.floor(Math.random() * number_list.length)
                    sudoku_number_tracker[i*3 + x][j*3 + y] = number_list[number]
                    number_list.splice(number, 1)
                }
            }
        }
    }
}



//main
var horizontal_box = 3;
var vertical_box = 3;
var columns = horizontal_box * 3;
var rows = horizontal_box * 3;

var sudoku_array = [];
for (let i = 0; i < rows; i++) {
    sudoku_array[i] = [0];
    for (let j = 0; j < columns; j++) {
        sudoku_array[i][j] = 0;
    }
}

var sudoku_number_tracker = [];
for (let i = 0; i < rows; i++) {
    sudoku_number_tracker[i] = [0];
    for (let j = 0; j < columns; j++) {
        sudoku_number_tracker[i][j] = 0;
    }
}


grid_randomizer(horizontal_box, vertical_box)
console.log(sudoku_number_tracker)