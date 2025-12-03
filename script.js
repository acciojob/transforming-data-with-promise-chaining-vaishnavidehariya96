let calc = {
    value: 0,

    add(num) {
        this.value += num;
        return this; // chaining
    },

    multiply(num) {
        this.value *= num;
        return this; // chaining
    },

    subtract(num) {
        this.value -= num;
        return this; // chaining
    },

    reset() {
        this.value = 0;
        return this; // chaining
    },

    show() {
        document.getElementById("result").innerText = this.value;
        return this; // chaining continue
    }
};
