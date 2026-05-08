function print(data) {
    let label = document.createElement("label");
    label.innerHTML = data;
    document.body.appendChild(label);
}

function newLine() {
    let br = document.createElement("br");
    document.body.appendChild(br);
}

let board_size = 8;

for (let row = 0; row < board_size; row++) {

    for (let col = 0; col < board_size; col++) {

        if ((row + col) % 2 === 0) {
            print("# ");
        } else {
            print("* ");
        }

    }

    newLine();
}