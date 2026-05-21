// =======================
// EXPENSES
// =======================

let expenses =
    JSON.parse(localStorage.getItem("expenses")) || [];

function addExpenseFromUI() {

    let title =
        document.getElementById("expenseTitle");

    let amount =
        document.getElementById("expenseAmount");

    if (!title || !amount) return;

    if (title.value === "" || amount.value === "") {

        alert("Fill all fields");
        return;
    }

    let expense = {

        title: title.value,
        amount: Number(amount.value)

    };

    expenses.push(expense);

    localStorage.setItem(
        "expenses",
        JSON.stringify(expenses)
    );

    title.value = "";
    amount.value = "";

    loadExpenses();
}

function loadExpenses() {

    let list =
        document.getElementById("transactionList");

    let totalExpense =
        document.getElementById("totalExpense");

    if (!list) return;

    list.innerHTML = "";

    let total = 0;

    expenses.forEach((expense, index) => {

        total += expense.amount;

        let li =
            document.createElement("li");

        li.innerHTML = `

            ${expense.title}
            - ₹${expense.amount}

            <button onclick="deleteExpense(${index})">

                ❌

            </button>

        `;

        list.appendChild(li);

    });

    if (totalExpense) {

        totalExpense.innerText = `₹${total}`;

    }

}

function deleteExpense(index) {

    expenses.splice(index, 1);

    localStorage.setItem(
        "expenses",
        JSON.stringify(expenses)
    );

    loadExpenses();
}

// =======================
// TRIPS
// =======================

function createTrip() {

    let destination =
        document.getElementById("destination");

    let budget =
        document.getElementById("budget");

    let days =
        document.getElementById("days");

    let type =
        document.getElementById("tripType");

    if (!destination || !budget || !days || !type) return;

    if (
        destination.value === "" ||
        budget.value === "" ||
        days.value === ""
    ) {

        alert("Fill all fields");
        return;
    }

    let recommendations = "";

    if (type.value === "Adventure") {

        recommendations =
            "Try trekking and camping.";

    }

    else if (type.value === "Luxury") {

        recommendations =
            "Book premium hotels.";

    }

    else if (type.value === "Family") {

        recommendations =
            "Visit family resorts.";

    }

    else {

        recommendations =
            "Explore local cafes.";

    }

    let resultDiv =
        document.getElementById("tripResults");

    let card =
        document.createElement("div");

    card.classList.add("trip-card");

    card.innerHTML = `

        <h2>✈️ ${destination.value}</h2>

        <p>💰 Budget: ₹${budget.value}</p>

        <p>📅 Days: ${days.value}</p>

        <p>🎒 Type: ${type.value}</p>

        <p>🤖 ${recommendations}</p>

    `;

    resultDiv.appendChild(card);

}

// =======================
// RESTAURANTS
// =======================

function recommendRestaurant() {

    let budget =
        document.getElementById("foodBudget");

    let foodType =
        document.getElementById("foodType");

    let taste =
        document.getElementById("tasteType");

    if (!budget || !foodType || !taste) return;

    let restaurant = "";
    let dishes = "";

    if (foodType.value === "Indian") {

        restaurant = "Punjab Grill";

        dishes =
            "Paneer Tikka, Butter Chicken";

    }

    else if (foodType.value === "Chinese") {

        restaurant = "Wok Express";

        dishes =
            "Noodles, Momos";

    }

    else if (foodType.value === "Italian") {

        restaurant = "Pizza Hub";

        dishes =
            "Pizza, Pasta";

    }

    else {

        restaurant = "Delhi Street";

        dishes =
            "Chaat, Rolls";

    }

    let resultDiv =
        document.getElementById(
            "restaurantResults"
        );

    let card =
        document.createElement("div");

    card.classList.add("trip-card");

    card.innerHTML = `

        <h2>🍔 ${restaurant}</h2>

        <p>💰 Budget: ₹${budget.value}</p>

        <p>🍽 ${foodType.value}</p>

        <p>😋 ${taste.value}</p>

        <p>⭐ ${dishes}</p>

    `;

    resultDiv.appendChild(card);

}

// =======================
// SAVINGS
// =======================

let goals =
    JSON.parse(localStorage.getItem("goals")) || [];

function addGoal() {

    let goalName =
        document.getElementById("goalName");

    let goalAmount =
        document.getElementById("goalAmount");

    let container =
        document.getElementById("goalContainer");

    if (!goalName || !goalAmount || !container) return;

    if (
        goalName.value === "" ||
        goalAmount.value === ""
    ) {

        alert("Fill all fields");
        return;
    }

    let goal = {

        name: goalName.value,
        amount: goalAmount.value

    };

    goals.push(goal);

    localStorage.setItem(
        "goals",
        JSON.stringify(goals)
    );

    renderGoals();

    goalName.value = "";
    goalAmount.value = "";
}

function renderGoals() {

    let container =
        document.getElementById("goalContainer");

    if (!container) return;

    container.innerHTML = "";

    goals.forEach((goal, index) => {

        let card =
            document.createElement("div");

        card.classList.add("goal-card");

        card.innerHTML = `

            <h2>🎯 ${goal.name}</h2>

            <p>₹${goal.amount}</p>

            <button onclick="deleteGoal(${index})">

                Delete

            </button>

        `;

        container.appendChild(card);

    });

}

function deleteGoal(index) {

    goals.splice(index, 1);

    localStorage.setItem(
        "goals",
        JSON.stringify(goals)
    );

    renderGoals();
}

// =======================
// GROUPS
// =======================

let groups =
    JSON.parse(localStorage.getItem("groups")) || [];

function createGroup() {

    let groupName =
        document.getElementById("groupName");

    let memberCount =
        document.getElementById("memberCount");

    let container =
        document.getElementById("groupContainer");

    if (!groupName || !memberCount || !container) return;

    if (
        groupName.value === "" ||
        memberCount.value === ""
    ) {

        alert("Fill all fields");
        return;
    }

    let group = {

        name: groupName.value,
        members: memberCount.value

    };

    groups.push(group);

    localStorage.setItem(
        "groups",
        JSON.stringify(groups)
    );

    renderGroups();

    groupName.value = "";
    memberCount.value = "";
}

function renderGroups() {

    let container =
        document.getElementById("groupContainer");

    if (!container) return;

    container.innerHTML = "";

    groups.forEach((group, index) => {

        let card =
            document.createElement("div");

        card.classList.add("group-card");

        card.innerHTML = `

            <h2>👥 ${group.name}</h2>

            <p>Members: ${group.members}</p>

            <button onclick="deleteGroup(${index})">

                Delete

            </button>

        `;

        container.appendChild(card);

    });

}

function deleteGroup(index) {

    groups.splice(index, 1);

    localStorage.setItem(
        "groups",
        JSON.stringify(groups)
    );

    renderGroups();
}

// =======================
// SMART AI CHATBOT
// =======================

function sendMessage() {

    let input =
        document.getElementById("userInput");

    let chatBox =
        document.getElementById("chatBox");

    if (!input || !chatBox) return;

    let text =
        input.value.trim().toLowerCase();

    if (text === "") return;

    // USER MESSAGE

    let userDiv =
        document.createElement("div");

    userDiv.classList.add("user-msg");

    userDiv.innerText = text;

    chatBox.appendChild(userDiv);

    // AI RESPONSE VARIABLE

    let aiResponse = "";

    // GREETINGS

    if (
        text.includes("hi") ||
        text.includes("hello") ||
        text.includes("hey")
    ) {

        aiResponse =
            "👋 Hello! Welcome to PetAurPocket AI Assistant.";

    }

    // SAVINGS

    else if (
        text.includes("save") ||
        text.includes("saving")
    ) {

        aiResponse =
            "💸 Try saving at least 20% of your monthly income and avoid unnecessary expenses.";

    }

    // EXPENSES

    else if (
        text.includes("expense") ||
        text.includes("budget")
    ) {

        aiResponse =
            "📊 Track your expenses daily and create a monthly budget plan.";

    }

    // TRAVEL

    else if (
        text.includes("trip") ||
        text.includes("travel") ||
        text.includes("vacation")
    ) {

        aiResponse =
            "✈️ Budget trips can help you save money. Try planning early and booking in advance.";

    }

    // RESTAURANTS

    else if (
        text.includes("food") ||
        text.includes("restaurant") ||
        text.includes("eat")
    ) {

        aiResponse =
            "🍔 Local cafes and street food are usually more budget-friendly.";

    }

    // GROUPS

    else if (
        text.includes("group") ||
        text.includes("friends")
    ) {

        aiResponse =
            "👥 Split expenses with friends to manage group budgets easily.";

    }

    // MONEY TIPS

    else if (
        text.includes("money")
    ) {

        aiResponse =
            "💰 Smart money habits today create financial freedom tomorrow.";

    }

    // DEFAULT REPLY

    else {

        aiResponse =
            "🤖 I can help with savings, budgeting, trips, restaurants and finance tips.";

    }

    // SHOW AI RESPONSE

    setTimeout(() => {

        let aiDiv =
            document.createElement("div");

        aiDiv.classList.add("ai-msg");

        aiDiv.innerText =
            aiResponse;

        chatBox.appendChild(aiDiv);

        // AUTO SCROLL

        chatBox.scrollTop =
            chatBox.scrollHeight;

    }, 500);

    input.value = "";
}
