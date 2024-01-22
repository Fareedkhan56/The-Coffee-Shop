// Q10; The Coffee Machine: In your coffee shop application, you need to simulate the process of brewing coffee asynchronously. Write an async function named brewCoffee that takes the type of coffee and returns a promise. The promise should resolve with a message indicating that the coffee is ready after a random delay.

async function brewCoffee() {
    let inp = document.getElementById('inp').value;

    let coffees = ['expresso', 'latte', 'black coffee', 'mocha', 'americano', 'cappuccino', 'flat white', 'cafe au late', 'macchiato', 'cold brew', 'irish coffee', 'frappe', 'vietnamese coffee', 'affogato', 'red eye'];

    let isAvailable = false;

    if (inp.length > 0) {
        for (const iterator of coffees) {
            if (iterator == inp.toLowerCase()) {
                isAvailable = true;
                break;
            }
        }
    }
    else {
        alert('This item is not available')
    }

    if (isAvailable) {
        try {
            let readyCoffee = await ready(inp)
            alert(readyCoffee)
        }
        catch (error) {
            alert('unexpected error')
        }
    }
}

async function ready(coffee) {

    alert(`making your ${coffee} please wait !...`)

    let delay = Math.floor(Math.random() * 10000);
    console.log(delay)

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`your ${coffee} is ready enjoy`);
        }, delay);
    })

}
