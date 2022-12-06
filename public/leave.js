const fromDate = document.getElementById("fromdate")
const fromtime = document.getElementById("fromtime")
const toDate = document.getElementById("todate")
const totime = document.getElementById("totime")
const reason = document.getElementById("reason")
const submit = document.getElementById("submit")


submit.addEventListener("click", (e) => {
    e.preventDefault()
    fetch("http://localhost:3000/leave/apply", { headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": '*' }, method: "POST", body: JSON.stringify({ fromdate: fromdate.value, fromtime: fromtime.value, todate: todate.value, totime: totime.value, reason: reason.value }) }).then((res) => {
        if (res.status === 401) {
            window.location.href = "/auth/google"
        }
        if (res.status === 200) {
            alert("LEAVE ADDED SUCCESSFULLY")
            window.location.href = "/profile"
        }
    })
})