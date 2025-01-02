document.addEventListener("DOMContentLoaded", () => {
    const amountInput = document.getElementById("amount");
    const descriptionInput = document.getElementById("description");
    const categoryInput = document.getElementById("category");
    const addExpenseBtn = document.getElementById("addExpenseBtn");
    const expensesList = document.createElement("ul");

    document.querySelector(".container").appendChild(expensesList);

    let editingIndex = null; // Track the index of the expense being edited

    // Function to get expenses from localStorage
    const getExpenses = () => {
        const expenses = localStorage.getItem("expenses");
        return expenses ? JSON.parse(expenses) : [];
    };

    // Function to save expenses to localStorage
    const saveExpenses = (expenses) => {
        localStorage.setItem("expenses", JSON.stringify(expenses));
    };

    // Function to render expenses in the <ul>
    const renderExpenses = () => {
        expensesList.innerHTML = ""; // Clear the list
        const expenses = getExpenses();
        expenses.forEach((expense, index) => {
            const li = document.createElement("li");
            li.classList.add("expense-item");
            li.innerHTML = `
                 ${expense.amount} - ${expense.description} - ${expense.category}
                <button onclick="removeExpense(${index})">Delete Expense</button>
                <button onclick="editExpense(${index})">Edit Expense</button><br><br>
            `;
            expensesList.appendChild(li);
        });
    };

    // Function to add an expense
    addExpenseBtn.addEventListener("click", () => {
        const amount = amountInput.value;
        const description = descriptionInput.value;
        const category = categoryInput.value;

        if (!amount || !description || !category) {
            alert("Please fill all fields.");
            return;
        }

        const expenses = getExpenses();
 
        if (editingIndex !== null) {
            // If editing an existing expense, replace it
            expenses[editingIndex] = { amount, description, category };
            editingIndex = null; // Reset the editing flag
        } else {
            // If not editing, add a new expense
            expenses.push({ amount, description, category });
        }

        saveExpenses(expenses);

        amountInput.value = "";
        descriptionInput.value = "";
        categoryInput.value = "Food"; // Reset category to default

        renderExpenses();
        addExpenseBtn.textContent = "Add Expense"; // Reset button text
    });

    // Function to remove an expense
    window.removeExpense = (index) => {
        const expenses = getExpenses();
        expenses.splice(index, 1);
        saveExpenses(expenses);
        renderExpenses();
    };

    // Function to edit an expense
    window.editExpense = (index) => {
        const expenses = getExpenses();
        const expenseToEdit = expenses[index];

        // Populate input fields with the expense data
        amountInput.value = expenseToEdit.amount;
        descriptionInput.value = expenseToEdit.description;
        categoryInput.value = expenseToEdit.category;

        // Set editing index to the index of the expense being edited
        editingIndex = index;

        // Update the Add button to Save the edited expense
        addExpenseBtn.textContent = "Save Changes";
    };

    // Initial render
    renderExpenses();
});
