let currentTab = "all";
const allCard = document.getElementById("allCard");
const interviewCard = document.getElementById("interview-card");
const rejectCard = document.getElementById("reject-card");
const emptyState = document.getElementById("empty-state");
const availableState = document.getElementById("available");
allCard.classList.remove("hidden");

// Button color code
const allFilterBtn = document.getElementById("all-filter-btn");
const interviewFilterBtn = document.getElementById("interview-filter-btn");
const rejectedFilterBtn = document.getElementById("rejected-filter-btn");

// Count update code
let total = document.getElementById("total");
let interview = document.getElementById("interview");
let rejected = document.getElementById("rejected");
function calculateCount() {
  const counts = {
    all: allCard.children.length,
    interview: interviewCard.children.length,
    rejected: rejectCard.children.length,
  };

  total.innerText = counts.all;
  interview.innerText = counts.interview;
  rejected.innerText = counts.rejected;

  availableState.innerText = counts[currentTab];

  if(counts[currentTab] < 1){
    emptyState.classList.remove("hidden");
  }else{
    emptyState.classList.add("hidden");
  }
}
calculateCount();

function toggleStyle(id) {
  const tab = ["all", "interview", "rejected"];
  if (id === "all-filter-btn") {
    currentTab = "all";
  } else if (id === "interview-filter-btn") {
    currentTab = "interview";
  } else {
    currentTab = "rejected";
  }
  // Button color Code
  allFilterBtn.classList.remove("bg-blue-600", "text-white");
  interviewFilterBtn.classList.remove("bg-blue-600", "text-white");
  rejectedFilterBtn.classList.remove("bg-blue-600", "text-white");
  document.getElementById(id).classList.add("bg-blue-600", "text-white");

  // Toggleing Buttons
  const pages = [allCard, interviewCard, rejectCard];
  for (const page of pages) {
    page.classList.add("hidden");
  }
  emptyState.classList.add("hidden");
  if (id === "all-filter-btn") {
    allCard.classList.remove("hidden");
    if (allCard.children.length < 1) {
      emptyState.classList.remove("hidden");
    }
  } else if (id === "interview-filter-btn") {
    interviewCard.classList.remove("hidden");
    if (interviewCard.children.length < 1) {
      emptyState.classList.remove("hidden");
    }
  } else {
    rejectCard.classList.remove("hidden");
    if (rejectCard.children.length < 1) {
      emptyState.classList.remove("hidden");
    }
  }
  calculateCount();
}

document
  .getElementById("jobs-container")
  .addEventListener("click", function (event) {
    const clickedElement = event.target;
    const card = clickedElement.closest(".card");
    const parent = card.parentNode;
    const status = card.querySelector(".statu");

    if (clickedElement.classList.contains("interview")) {
      status.innerText = "Interviewed";
      interviewCard.appendChild(card);
    } else if (clickedElement.classList.contains("rejected")) {
      status.innerText = "Rejected";
      rejectCard.appendChild(card);
    } else if (clickedElement.classList.contains("delete")) {
      parent.removeChild(card);
    }
    calculateCount();
  });
