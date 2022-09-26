export class Budget {

    top_main() {
        const h = document.createElement("header");
        h.className = "head";
        document.body.appendChild(h);
        //return document.querySelector(".head");
        this.text();
    }

    text() {
        let t = document.createElement("div");
        t.className = "info";
        t.textContent = "Available Budget in September 2022:";
        document.querySelector(".head").appendChild(t);
        //return this.top_main().appendChild(t);
        this.output_budget();
    }
    
    output_budget() {
        let current_budget = document.createElement("div");
        current_budget.className = "budget";
        document.querySelector(".head").appendChild(current_budget);
        this.income_expenses();
        //return document.querySelector(".budget");
    }

    budget_sum(sum) {
        let bud_sum = document.querySelector(".budget");
        bud_sum.textContent = sum;
    }

    income_expenses() {
        let inex = document.createElement("div");
        inex.className = "inc_exp";
        document.querySelector(".head").appendChild(inex);
        this.income_box();
        this.expenses_box(); 
    }

    income_box() {
        let income = document.createElement("div");
        income.className = "incomee";
        document.querySelector(".inc_exp").appendChild(income);

        let income_left = document.createElement("div");
        income_left.className = "income1";
        income_left.textContent = "INCOME";
        document.querySelector(".incomee").appendChild(income_left);

        let income_right = document.createElement("div");
        income_right.className = "income2";
        document.querySelector(".incomee").appendChild(income_right);
    }

    incomeRes(sum1) {
        let getIncome = document.querySelector('.income2');
        getIncome.textContent = sum1; 
    }

    expenses_box() {
        let expenses = document.createElement("div");
        expenses.className = "expensess";
        document.querySelector(".inc_exp").appendChild(expenses);

        let expenses_left = document.createElement("div");
        expenses_left.className = "expenses1";
        expenses_left.textContent = "EXPENSES";
        document.querySelector(".expensess").appendChild(expenses_left);

        let expenses_right = document.createElement("div");
        expenses_right.className = "expenses2";
        document.querySelector(".expensess").appendChild(expenses_right);
    }

    ExpensesRes(sum2) {
        let getExpenses = document.querySelector('.expenses2');
        getExpenses.textContent = sum2; 
    }

    addition_main() {
        let addition_box = document.createElement("div");
        addition_box.className = "addbox";
        document.body.appendChild(addition_box);
        this.addtition();
        //return document.querySelector(".addbox");
    }

    addtition () {
        let selection = document.createElement("select");
        selection.className = "select";

        let opt1 = document.createElement("option");
        opt1.className = "option1";
        opt1.textContent = "income";
        opt1.value = "income";

        let opt2 = document.createElement("option");
        opt2.className = "option2";
        opt2.textContent = "expenses";
        opt2.value = "expenses";
        selection.appendChild(opt1);
        selection.appendChild(opt2);

        const cth = document.querySelector(".addbox");

        cth.appendChild(selection);


        let add_description = document.createElement("input");
        add_description.className = "addDes";
        add_description.type = "text";
        add_description.placeholder = "Add description";
        cth.appendChild(add_description);

        let inputNumber = document.createElement("input");
        inputNumber.type = "number";
        inputNumber.className = "inputNumber";
        inputNumber.placeholder = "Value";
        cth.appendChild(inputNumber);

        let buttonAdd = document.createElement("button");
        buttonAdd.className = "addbutton";
        cth.appendChild(buttonAdd);
    }

    incomeExpenses() {
        let mainInEx = document.createElement("div");
        mainInEx.className = "main_inex";
        document.body.appendChild(mainInEx);

        let leftDiv = document.createElement("div");
        leftDiv.className = "leftdiv";
        leftDiv.textContent = "INCOME";
        document.querySelector(".main_inex").appendChild(leftDiv);

        let rightDiv = document.createElement("div");
        rightDiv.className = "rightdiv";
        rightDiv.textContent = "EXPENSES";
        document.querySelector(".main_inex").appendChild(rightDiv);
    }

    make() {
        this.incomeExpenses();
        let getdiv = document.querySelector(".addbox");
        let getMainInEx = document.querySelector(".main_inex");

        let getSign = getdiv.querySelector(".select");
  
        let getButton = getdiv.querySelector(".addbutton");
        let getText = getdiv.querySelector(".addDes");
        let getValue = getdiv.querySelector(".inputNumber");

        let getLeftDiv = getMainInEx.querySelector(".leftdiv");
        let getRightDiv = getMainInEx.querySelector(".rightdiv");
        let sum1 = 0, sum2 = 0;
        getButton.onclick = () => {
            if(getText.value.length > 0 && getValue.value > 0) {
                if(getSign.value === 'income') {
                    let x = document.createElement("div");
                    x.className = "lista";
                    let x1 = document.createElement("div");
                    //x1.className = "x1";
                    let x2 = document.createElement("div");
                    //x2.className = "x2";
                    getLeftDiv.appendChild(x);
                    x.appendChild(x1);
                    x.appendChild(x2);
    
                    x1.textContent = getText.value;
                    x2.textContent = getValue.value;
                    sum1 += Number.parseInt(getValue.value);
                    this.incomeRes(sum1);
                } else {
                    let y = document.createElement("div");
                    y.className = "lista";
                    let y1 = document.createElement("div");
                    //y1.className = "y1";
                    let y2 = document.createElement("div");
                    //x2.className = "y2";
                    getRightDiv.appendChild(y);
                    y.appendChild(y1);
                    y.appendChild(y2);
    
                    y1.textContent = getText.value;
                    y2.textContent = getValue.value;
                    sum2 += Number.parseInt(getValue.value);
                    this.ExpensesRes(sum2);
                }
                let sum = sum1 - sum2;
                console.log(sum);
                this.budget_sum(sum);
            }
        }
    }

}