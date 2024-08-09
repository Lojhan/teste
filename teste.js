
const x = () => {
    return "oi";
}

const y = () => {
    return "oi";
};

function z() {
    const a = x();
    const b = y();

    return a + b;
}

module.exports = z;

console.log(z());