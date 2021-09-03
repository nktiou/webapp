//function
function number_generator(horizontal_box, vertical_box) {
    var x = 0;
    var y = 0;
    while (x != 9 && y != 9) {
        if (sudoku_array[x][y] == 0) {
            var number = sudoku_number_tracker[x][y]
        } else {
            number = sudoku_array[x][y]
        }
        var stop = false
        while (stop == false)  {
            number = (number + 1) % 9
            number += 1
            if (number != sudoku_number_tracker[x][y]) {
                sudoku_array[x][y] = 0
                if (number_tester(horizontal_box, vertical_box, x, y, number)) {
                    sudoku_array[x][y] = number
                    if (x != 8) {
                        x += 1
                    } else {
                        x = 0
                        y += 1
                    }
                    stop = true
                }
            } else {
                sudoku_array[x][y] = 0
                if (x != 0) {
                    x -= 1
                } else {
                    x = 8
                    y -= 1
                }
                stop = true
            }
        }
    }
}


function number_tester(horizontal_box, vertical_box, x, y, number) {
    if (sudoku_array[x][y] != 0) {
        return false
    }
    for (let i = 0; i < 9; i ++) {
        if (sudoku_array[x][i] == number) {
            return false
        }
    }
    for (let j = 0; j < 9; j ++) {
        if (sudoku_array[j][y] == number) {
        return false
        }
    }
    for (let x2 = 0; x2 < 3; x2++) {
        for (let y2 = 0; y2 < 3; y2++) {
            if (sudoku_array[Math.floor(x/3)*3 + x2][Math.floor(y/3)*3 + y2] == number) {
                return false
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
number_generator(horizontal_box, vertical_box)
console.log(sudoku_array)