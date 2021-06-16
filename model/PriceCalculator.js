const currentYear = new Date().getFullYear();

const calculate = ({ year, genres }) => Math.ceil((1 / (currentYear - year)) * genres.length * 30);

export default calculate;
