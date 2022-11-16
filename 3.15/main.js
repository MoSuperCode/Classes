let button = document.getElementById("button");
button.addEventListener("click", (event) => {
    event.preventDefault();
    let manufacturer = document.getElementById("manufacturer").value;
    let model = document.getElementById("model").value;
    let price = document.getElementById("price").value;
    let year = document.getElementById("year").value;
    let processor = document.getElementById("processor").value;
    let graphic = document.getElementById("graphikk").value;
    let storage = document.getElementById("storage").value;
    console.log(manufacturer, model, price, year, processor, graphic, storage);

    class Laptop {
        constructor(manufacturerer, model, price, year, processor, graphic, storage) {
            this.manufacturerer = manufacturerer;
            this.model = model;
            this.price = price;
            this.year = year;
            this.processor = processor;
            this.graphic = graphic;
            this.ROM = storage;
        }
        view() {

            const div = document.createElement("div");
            document.body.appendChild(div);
            div.classList.add("razer");

            for (let specs in laptop1) {
                let p = document.createElement("p");
                p.innerText = laptop1[specs];
                div.appendChild(p);
                console.log(specs);
            }

        }
    };

    let laptop1 = new Laptop(manufacturer, model, price, year, processor, graphic, storage);
    console.log(laptop1);

    laptop1.view();



});





