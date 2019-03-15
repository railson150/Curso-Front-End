{
    {
        {
            { var sera = "Será???";}
        }
    }
};
console.log(sera);

function teste(){// Só acessada na função
    var local = 123;
};

teste();
console.log(local);