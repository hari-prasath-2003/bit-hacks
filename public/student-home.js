const container = document.getElementById("container")
function createLeaveCard(fromdate, fromtime, todate, totime, status) {
    const card = document.createElement("div")
    const cardBody = document.createElement("div")
    let cardContent = document.createElement("div")
    let h6 = document.createElement("h6")
    card.className = "card"
    cardBody.className = "card-body"
    cardContent.className = "d-flex"
    h6.innerHTML = "From Date:"
    cardContent.append(h6)
    h6 = document.createElement("h6")
    h6.innerHTML = fromdate
    cardContent.append(h6)
    cardBody.append(cardContent)
    cardContent = document.createElement("div")
    cardContent.className = "d-flex"
    h6 = document.createElement("h6")
    h6.innerHTML = "From Time:"
    cardContent.append(h6)
    h6 = document.createElement("h6")
    h6.innerHTML = fromtime
    cardContent.append(h6)
    cardBody.append(cardContent)
    cardContent = document.createElement("div")
    cardContent.className = "d-flex"
    h6 = document.createElement("h6")
    h6.innerHTML = "To Date:"
    cardContent.append(h6)
    h6 = document.createElement("h6")
    h6.innerHTML = todate
    cardContent.append(h6)
    cardBody.append(cardContent)
    cardContent = document.createElement("div")
    cardContent.className = "d-flex"
    h6 = document.createElement("h6")
    h6.innerHTML = "To Time:"
    cardContent.append(h6)
    h6 = document.createElement("h6")
    h6.innerHTML = totime
    cardContent.append(h6)
    cardBody.append(cardContent)
    cardContent = document.createElement("div")
    cardContent.className = "d-flex status"
    h6 = document.createElement("h6")
    h6.innerHTML = "Status: "
    console.log(status);
    const p = document.createElement("p")
    if (status === "pending") {
        p.innerHTML = "PENDING"
        p.style = "color:orange;font-weight:bold"
    }
    else if (status === "rejected") {

        p.innerHTML = "REJECTED"
        p.style = "color:red;font-weight:bold"
    }
    else if (status === "approved") {
        p.innerHTML = "APPROVED"
        p.style = "color:green;font-weight:bold"
    }
    cardContent.append(h6)
    cardContent.append(p)
    cardBody.append(cardContent)
    card.append(cardBody)
    container.append(card)
}

async function fetchDataAndDisplay() {
    let result = await fetch("/leave/student/all")
    result = await result.json()
    console.log(result);
    result = result.reverse()
    result.forEach(r => {
        createLeaveCard(r.fromDate, r.fromTime, r.toDate, r.toTime, r.status)
    });
}

fetchDataAndDisplay()