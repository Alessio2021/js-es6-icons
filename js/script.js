const classes = [
    {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: 'green'
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: 'green'
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: 'green'
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: 'green'
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: 'blue'
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: 'blue'
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: 'blue'
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: 'blue'
    }
];

const container = document.querySelector('.main-container');



const select = document.getElementById('select');
let selectValue = parseInt(select.value);


classes.forEach(element => {
    const template = `
        <div class="square ${element.type} ">
            <i class="${element.family} ${element.prefix}${element.name} fontsizex2"></i>
            <h3>${element.name}</h3>
        </div>
        `
    container.innerHTML += template;
});

select.addEventListener('change', function() {
    switch (selectValue) {
        case 1:
        default:
            container.innerHTML = '';
            classes.forEach(element => {
                const template = `
                <div class="square ${element.type} ">
                    <i class="${element.family} ${element.prefix}${element.name} fontsizex2"></i>
                    <h3>${element.name}</h3>
                </div>
                `
                container.innerHTML += template;
            });
            break;

        case 2:
            container.innerHTML = '';

            let animal = classes.filter((element) => {
                if (element.type == 'animal') {
                    return true;
                } else {
                    return false;
                }
            });
            animal.forEach(element => {
                const template = `
                <div class="square ${element.type} ">
                    <i class="${element.family} ${element.prefix}${element.name} fontsizex2"></i>
                    <h3>${element.name}</h3>
                </div>
                `
                container.innerHTML += template;
            });
            break;

        case 3:
            container.innerHTML = '';

            let vegetable = classes.filter((element) => {
                if (element.type == 'vegetable') {
                    return true;
                } else {
                    return false;
                }
            });
            vegetable.forEach(element => {
                const template = `
                <div class="square ${element.type} ">
                    <i class="${element.family} ${element.prefix}${element.name} fontsizex2"></i>
                    <h3>${element.name}</h3>
                </div>
                `
                container.innerHTML += template;
            });
            break;

        case 4:
            container.innerHTML = '';

            let user = classes.filter((element) => {
                if (element.type == 'user') {
                    return true;
                } else {
                    return false;
                }
            });
            user.forEach(element => {
                const template = `
                <div class="square ${element.type} ">
                    <i class="${element.family} ${element.prefix}${element.name} fontsizex2"></i>
                    <h3>${element.name}</h3>
                </div>
                `
                container.innerHTML += template;
            });
            break;
    }

});
