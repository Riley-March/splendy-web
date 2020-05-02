const colors = [
    "blue",
    "yellow",
    "pink",
    "green",
    "orange"
]

const get_color = (index) => {
    return colors[index];
}

const random_color = () => {
    const randint = Math.floor(Math.random() * (colors.length));
    return colors[randint];
}

module.exports.get_color = get_color;
module.exports.random_color = random_color;