const search = document.getElementById("search")
let prevres
async function reqinterval() {
    let res = await fetch("/leave/faculty/" + search.value)
    res = await res.json()
    res = res.reverse()
    console.log(res);
    var table = document.getElementById("table")
    table.innerHTML = ""
    if (!(prevres == res)) {

        res.forEach((r, index) => {
            const row = document.createElement("tr")
            var x = row.insertCell(0);
            x.innerHTML = r.name;
            var x = row.insertCell(1);
            x.innerHTML = r.stdid;
            var x = row.insertCell(2);
            x.innerHTML = r.fromDate;
            var x = row.insertCell(3);
            x.innerHTML = r.fromTime;
            var x = row.insertCell(4);
            x.innerHTML = r.toDate;
            var x = row.insertCell(5);
            x.innerHTML = r.toTime;
            var x = row.insertCell(6);
            x.innerHTML = r.reason;
            var x = row.insertCell(7);
            x.innerHTML = r.status;
            table.appendChild(row)

        })
    }
}

search.addEventListener("keypress", function (event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
        reqinterval()
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
    }
});