let age = prompt('Enter your year of birth:');
if (age === null) {
    alert("Too bad you didn't want to enter your year of birth.");
} else {
    let city = prompt('What city do you live in?');
    if (city === null) {
        alert("Too bad you didn't want to enter your city.");
    } else {
        const upperCaseCity = city.toLocaleUpperCase();
        let sport = prompt('What is your favorite sport?');
        if (sport === null) {
            alert("Too bad you didn't want to enter your favorite sport.");
        } else {
            let message = "Your age: " + (new Date().getFullYear() - age) + ".\n";
            if (upperCaseCity === 'Kiev'.toLocaleUpperCase()) {
                message += 'You live in the capital of Ukraine.';
            } else if (upperCaseCity === 'Moscow'.toLocaleUpperCase()) {
                message += "You live in the capital of Russia.";
            } else if (upperCaseCity === 'Minsk'.toLocaleUpperCase()) {
                message += 'You live in the capital of Belarus.';
            } else {
                message += 'You live in a city ' + city + '.';
            }
            switch (sport) {
                case 'football':
                    message += '\nCool! Do you want to be Pele?';
                    break;
                case 'boxing':
                    message += '\nCool! Do you want to be Conor McGregor?';
                    break;
                case 'swimming':
                    message += '\nCool! Do you want to be Mark Spitz?';
                    break;
                default:
                    message += '\nYour favorite sport: ' + sport + '.';
                    break;
            }
            confirm(message);
        }
    }
}
