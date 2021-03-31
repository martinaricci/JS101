// Given the following data structure write some code to return an array containing the colors of the fruits and the sizes of the vegetables. The sizes should be uppercase, and the colors should be capitalized.

let obj = {
    grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
    carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
    apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
    apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
    marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

console.log(Object.values(obj).map(item => {
    if (item['type'] === 'fruit') {
        let colors = item['colors'];
        return colors.map(color => {
            return color[0].toUpperCase() + color.substring(1);
        });
    } else {
        return item['size'].toUpperCase();
    }
}));

console.log(obj)