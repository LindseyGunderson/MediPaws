import { useEffect, useState } from "react";

function LiveClock() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const date = currentTime.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const time = currentTime.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });

  return (
    <div className="border-l border-border/70 pl-6 text-right">
      <p className="text-sm font-medium text-text-secondary">{date}</p>

      <p className="mt-1 text-2xl font-semibold tracking-tight text-text-primary">
        {time}
      </p>
    </div>
  );
}

export default LiveClock;
