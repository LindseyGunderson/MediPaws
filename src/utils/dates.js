export function formatDate(date) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function convertToTimeInput(time) {
  if (!time) return "";

  if (!time.includes("AM") && !time.includes("PM")) {
    return time;
  }

  const [timePart, period] = time.split(" ");
  let [hours, minutes] = timePart.split(":").map(Number);

  if (period === "PM" && hours !== 12) {
    hours += 12;
  }

  if (period === "AM" && hours === 12) {
    hours = 0;
  }

  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
    2,
    "0",
  )}`;
}

export function formatTimeForDisplay(time) {
  if (!time) return "";

  if (time.includes("AM") || time.includes("PM")) {
    return time;
  }

  const [hours, minutes] = time.split(":");
  const hour = Number(hours);

  if (Number.isNaN(hour) || !minutes) {
    return time;
  }

  const period = hour >= 12 ? "PM" : "AM";
  const displayHour = hour % 12 || 12;

  return `${displayHour}:${minutes} ${period}`;
}