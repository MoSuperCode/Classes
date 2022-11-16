const button = document.getElementById("button");
button.addEventListener("click", (event) => {
    event.preventDefault();
    class Person {
        constructor(name, age) {
            this.name = document.getElementById("name").value;
            this.age = document.getElementById("age").value;
        }
        info() {
            console.log(`${this.name} is ${this.age} years old.`);
        }
        write() {
            let p = document.createElement("p");
            p.innerText = `${this.name} is ${this.age} years old.`;
            document.body.appendChild(p);
            let checkbox = document.getElementById("examCheck").checked;
            if (!checkbox) {
                p.style.color = "red";
            }
        };
    }
    const person1 = new Person();
    person1.info() & person1.write();
});

