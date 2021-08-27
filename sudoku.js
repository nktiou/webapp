//functions

function number_generator(horizontal_box, vertical_box) {
    var x = 0;
    var y = 0;
    while (x != 9 && y != 9) {
        if (sudoku_array[x][y] == 0) {
            var number = sudoku_number_tracker[x][y]
        } else {
            number = sudoku_array[x][y]
        }
        var stop = False
        while (stop == False)  {
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
                        y = 1
                    }
                    stop = True
                }
            } else {
                sudoku_array[x][y] = 0
                if (x != 0) {
                    x -= 1
                } else {
                    x = 8
                    y -= 1
                }
                stop = True
            }
        }
    }
}


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


function number(horizontal_box, vertical_box) {
    var x = 0;
    var y = 0;
    for (let i = 0; i < horizontal_box; i++) {
        for (let j = 0; i < vertical_box; j++) {
            var number_list = range(1, 9)
            for (let x = 0; i < 3; x++) {
                for (let y = 0; i < 3; y++) {
                    var number = Math.floor(Math.random() * number_list.length)
                    sudoku_number_tracker[i*3 + x][j*3 + y] = number_list(number)
                    number_list.splice(number, 1)
                    y += 1
                }
                x += 1
            }
        }
    }
}


function number_printer() {
    for (let i in columns) {
        for (let j in rows) {
            console.log(sudoku_array[i][j] + " ")
        }
        console.log("")
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


numbers(horizontal_box, vertical_box)
number_generator(horizontal_box, vertical_box)

number_printer()