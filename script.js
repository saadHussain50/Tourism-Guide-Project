document.querySelector(".search-bar button").addEventListener("click", function() {
    let searchQuery = document.querySelector(".search-bar input").value;
    alert("Searching for: " + searchQuery);
});

// Optional: Add a scrolling effect for popular destinations
document.querySelector(".destination-list").addEventListener("wheel", (event) => {
    event.preventDefault();
    document.querySelector(".destination-list").scrollLeft += event.deltaY;
});
function bookTicket(category, details) {
    let tickets = JSON.parse(localStorage.getItem("myTickets")) || [];
    let newTicket = { category, details, time: new Date().toLocaleString() };
    
    tickets.push(newTicket);
    localStorage.setItem("myTickets", JSON.stringify(tickets));

    alert("Ticket booked successfully!");
    window.location.href = "mytickets.html"; // Redirect to My Tickets page
}

function loadTickets() {
    let tickets = JSON.parse(localStorage.getItem("myTickets")) || [];
    let ticketContainer = document.getElementById("ticket-list");
    
    if (tickets.length === 0) {
        ticketContainer.innerHTML = "<p>No tickets booked yet.</p>";
        return;
    }

    ticketContainer.innerHTML = tickets.map(ticket => `
        <div class="ticket">
            <h3>${ticket.category}</h3>
            <p>${ticket.details}</p>
            <p><small>Booked on: ${ticket.time}</small></p>
        </div>
    `).join("");
}
