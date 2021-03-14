module.exports = function toReadable (number) {
  let str = number.toString();
    let mass1_19 = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let mass20_90 = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (number == 0) return 'zero';
    if (number < 20) return mass1_19[number];
    if (number % 10 == 0 && number < 100) return mass20_90[+(str[0])];
    if (number < 100 && number > 20 && number % 10 != 0) return mass20_90[+str[0]]+ ' ' + mass1_19[+(str[1])];
    if (number % 100 == 0 && number < 1000) return mass1_19[+(str[0])] + ' hundred';
    if (number % 10 == 0 && number % 100 != 0 && number < 1000 && number > 100 && +(str[1] + str[2]) >= 20) return mass1_19[+(str[0])] + ' hundred ' + mass20_90[+(str[1])];
    if (number > 100 && number < 1000 && number % 100 != 0 && +(str[1] + str[2]) < 20) return mass1_19[+(str[0])] + ' hundred ' + mass1_19[+(str[1] + str[2])];
    if (number > 100 && number < 1000 && number % 10 != 0 && number % 100 != 0) return mass1_19[+(str[0])] + ' hundred ' + mass20_90[+(str[1])]+ ' ' + mass1_19[+(str[2])];
}