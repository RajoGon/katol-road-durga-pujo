const festivalDays = [
  {
    id: "chaturthi",
    tab: "Chaturthi",
    name: "Maha Chaturthi",
    date: "2026-10-14",
    dateLabel: "Wednesday · 14 October 2026",
    shortDate: "14 Oct",
    intro: "The celebration begins as Maa is welcomed to Katol Road with a grand community procession.",
    events: [
      {
        time: "6:30 PM",
        title: "Maa-er Aagomon",
        detail: "Grand procession welcoming Maa Durga",
      },
    ],
    momentTitle: "Ailo Uma Barite",
    video: {
      src: "media/day-chaturthi.mp4",
      poster: "assets/thumbnails/day-chaturthi.webp",
      duration: "22 sec",
    },
  },
  {
    id: "panchami",
    tab: "Panchami",
    name: "Maha Panchami",
    date: "2026-10-15",
    dateLabel: "Thursday · 15 October 2026",
    shortDate: "15 Oct",
    intro: "An evening of Aagomoni and Garba brings the community together at the start of the main festivities.",
    events: [
      {
        time: "7:30 PM",
        title: "Aagomoni Anusthan",
        detail: "Ceremonial welcome for Maa",
      },
      {
        time: "8:00 PM",
        title: "Garba Night",
        detail: "Cultural programme",
      },
    ],
    momentTitle: "Maa arrives where hearts gather",
    momentMessage: "Every song, every step and every smile becomes a welcome for Maa.",
    video: null,
  },
  {
    id: "shashti",
    tab: "Shashti",
    name: "Maha Shashti",
    date: "2026-10-16",
    dateLabel: "Friday · 16 October 2026",
    shortDate: "16 Oct",
    intro: "Maha Shashti opens the puja with worship, anjali, inauguration and an evening of music and dance.",
    events: [
      { time: "8:30 AM", title: "Maha Shashti Puja", detail: "Morning puja" },
      { time: "10:35 AM", title: "Pushpanjali", detail: "Prasad and bhog follow anjali" },
      {
        time: "7:30 PM",
        title: "Inauguration · Bodhan, Amantran and Adhibas",
        detail: "Evening rituals and formal inauguration",
      },
      {
        time: "8:30 PM",
        title: "Instrumental Music",
        detail: "Violin: Janardhan · Hawaiian guitar: Pradeep Chowdhury",
      },
      {
        time: "9:00 PM",
        title: "Nritya Dhaara",
        detail: "Geetanjali Cultural Institute · Choreographed by Shreya Roy",
      },
    ],
    momentTitle: "Bodhan: Maa awakens in our hearts",
    video: {
      src: "media/day-shashti.mp4",
      poster: "assets/thumbnails/day-shashti.webp",
      duration: "20 sec",
    },
  },
  {
    id: "saptami",
    tab: "Saptami",
    name: "Maha Saptami",
    date: "2026-10-17",
    dateLabel: "Saturday · 17 October 2026",
    shortDate: "17 Oct",
    intro: "A full day of worship culminates in an energetic Chhau dance performance from Purulia.",
    events: [
      { time: "8:30 AM", title: "Maha Saptami Puja", detail: "Morning puja" },
      { time: "1:00 PM", title: "Pushpanjali", detail: "Prasad and bhog follow anjali" },
      { time: "7:00 PM", title: "Arati", detail: "Evening arati" },
      {
        time: "8:00 PM",
        title: "Chhau Dance",
        detail: "Presented by Shiv Shakti Chhau Dance Academy, Purulia",
      },
    ],
    momentTitle: "Dhak, devotion and celebration",
    video: {
      src: "media/day-saptami.mp4",
      poster: "assets/thumbnails/day-saptami.webp",
      duration: "18 sec",
    },
  },
  {
    id: "adhik-saptami",
    tab: "Adhik Saptami",
    name: "Maha Saptami Adhik",
    date: "2026-10-18",
    dateLabel: "Sunday · 18 October 2026",
    shortDate: "18 Oct",
    intro: "Sunday’s puja is followed by two acclaimed Bengali productions from West Bengal.",
    events: [
      { time: "8:30 AM", title: "Maha Saptami Adhik Puja", detail: "Morning puja" },
      { time: "12:00 PM", title: "Pushpanjali", detail: "Prasad and bhog follow anjali" },
      { time: "7:00 PM", title: "Arati", detail: "Evening arati" },
      {
        time: "8:00 PM",
        title: "Bhushundir Math and Debi Chowdhurani",
        detail: "Two productions presented by Sangeeta · Yug-er Jaatri Production, West Bengal",
      },
    ],
    momentTitle: "Where devotion meets the stage",
    video: {
      src: "media/day-adhik-saptami.mp4",
      poster: "assets/thumbnails/day-adhik-saptami.webp",
      duration: "24 sec",
    },
  },
  {
    id: "ashtami",
    tab: "Ashtami",
    name: "Maha Ashtami",
    date: "2026-10-19",
    dateLabel: "Monday · 19 October 2026",
    shortDate: "19 Oct",
    intro: "The most sacred morning begins before sunrise, followed by Sandhi Puja and an evening dance production.",
    events: [
      { time: "5:30 AM", title: "Maha Ashtami Puja", detail: "Morning puja" },
      { time: "7:00 AM", title: "Pushpanjali", detail: "Prasad and bhog follow anjali" },
      {
        time: "7:26–8:14 AM",
        title: "Sandhi Puja",
        detail: "Please arrive early for this time-bound ritual",
      },
      { time: "7:00 PM", title: "Arati", detail: "Evening arati" },
      {
        time: "8:00 PM",
        title: "Ekam Bharatam",
        detail: "Presented by Nrityarpan · Choreographed by Madhumita Chuckerbutty",
      },
    ],
    momentTitle: "Ya Devi Sarva Bhuteshu",
    video: {
      src: "media/day-ashtami.mp4",
      poster: "assets/thumbnails/day-ashtami.webp",
      duration: "17 sec",
    },
  },
  {
    id: "navami",
    tab: "Navami",
    name: "Maha Navami",
    date: "2026-10-20",
    dateLabel: "Tuesday · 20 October 2026",
    shortDate: "20 Oct",
    intro: "Navami concludes with a live musical tribute to Mohammed Rafi by celebrated guest singers.",
    events: [
      { time: "7:00 AM", title: "Maha Navami Puja", detail: "Morning puja" },
      { time: "9:00 AM", title: "Pushpanjali", detail: "Prasad and bhog follow anjali" },
      { time: "7:00 PM", title: "Arati", detail: "Evening arati" },
      {
        time: "8:00 PM",
        title: "Rafi: Ek Aawaz, Anant Ehsaas",
        detail: "Live with Prasan Rao and Dhwani Muley · Music arrangement by Pawan Manwatkar and team",
      },
    ],
    momentTitle: "Every voice becomes a prayer",
    video: {
      src: "media/day-navami.mp4",
      poster: "assets/thumbnails/day-navami.webp",
      duration: "20 sec",
    },
  },
  {
    id: "dashami",
    tab: "Dashami",
    name: "Maha Dashami",
    date: "2026-10-21",
    dateLabel: "Wednesday · 21 October 2026",
    shortDate: "21 Oct",
    intro: "We bid Maa a loving farewell with puja, sindoor khela and the visarjan procession.",
    events: [
      { time: "8:00 AM", title: "Maha Dashami Puja", detail: "Morning puja" },
      { time: "10:30 AM", title: "Darpan Bisarjan", detail: "Traditional farewell ritual" },
      { time: "1:30 PM", title: "Baran and Sindoor Khela", detail: "Maa-er Biday" },
      {
        time: "8:30 PM",
        title: "Pratima Bisarjan Procession",
        detail: "Procession begins from the puja venue",
      },
    ],
    momentTitle: "Aasche bochor abar hobe",
    video: {
      src: "media/day-dashami.mp4",
      poster: "assets/thumbnails/day-dashami.webp",
      duration: "21 sec",
    },
  },
];

const tabs = document.querySelector("#day-tabs");
const panel = document.querySelector("#day-panel");
const todayKicker = document.querySelector("#today-kicker");
const todayTitle = document.querySelector("#today-title");
const todaySummary = document.querySelector("#today-summary");
const todayAction = document.querySelector("#today-action");
const mediaDialog = document.querySelector("#media-dialog");
const mediaPlayer = document.querySelector("#media-player");
const mediaTitle = document.querySelector("#media-title");
const posterDialog = document.querySelector("#poster-dialog");
const posterImage = document.querySelector("#poster-image");
const posterTitle = document.querySelector("#poster-title");
const toast = document.querySelector("#toast");

const getISTDateKey = () => {
  const values = Object.fromEntries(
    new Intl.DateTimeFormat("en", {
      timeZone: "Asia/Kolkata",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
      .formatToParts(new Date())
      .filter(({ type }) => type !== "literal")
      .map(({ type, value }) => [type, value]),
  );

  return `${values.year}-${values.month}-${values.day}`;
};

const currentDateKey = getISTDateKey();
const currentIndex = festivalDays.findIndex(({ date }) => date === currentDateKey);
const upcomingIndex = festivalDays.findIndex(({ date }) => date >= currentDateKey);
let selectedIndex = currentIndex >= 0 ? currentIndex : upcomingIndex >= 0 ? upcomingIndex : festivalDays.length - 1;

const dayDistance = (from, to) => {
  const fromDate = new Date(`${from}T00:00:00+05:30`);
  const toDate = new Date(`${to}T00:00:00+05:30`);
  return Math.round((toDate - fromDate) / 86_400_000);
};

const showToast = (message) => {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => toast.classList.remove("is-visible"), 2600);
};

const renderTabs = () => {
  tabs.innerHTML = festivalDays
    .map(
      (day, index) => `
        <button
          class="day-tab${day.date === currentDateKey ? " is-today" : ""}"
          id="tab-${day.id}"
          type="button"
          role="tab"
          aria-controls="day-panel"
          aria-selected="${index === selectedIndex}"
          tabindex="${index === selectedIndex ? "0" : "-1"}"
          data-index="${index}"
        >
          <span>${day.tab}</span>
          <small>${day.shortDate}</small>
        </button>
      `,
    )
    .join("");
};

const renderDay = () => {
  const day = festivalDays[selectedIndex];
  const agenda = day.events
    .map(
      (event) => `
        <li class="agenda-item">
          <span class="agenda-dot" aria-hidden="true"></span>
          <time class="agenda-time">${event.time}</time>
          <span class="agenda-copy">
            <strong>${event.title}</strong>
            <small>${event.detail}</small>
          </span>
        </li>
      `,
    )
    .join("");

  const dayMoment = day.video
    ? `
      <button
        class="day-video-card media-trigger"
        type="button"
        data-video="${day.video.src}"
        data-title="${day.name} · Moments of devotion"
      >
        <img src="${day.video.poster}" alt="A moment from ${day.name} celebrations" loading="lazy" />
        <span class="video-label"><span aria-hidden="true">▶</span> Watch the moment · ${day.video.duration}</span>
      </button>
    `
    : `
      <div class="day-blessing">
        <span aria-hidden="true">✦</span>
        <strong>“${day.momentMessage}”</strong>
        <small>May this evening bring devotion, music and togetherness.</small>
      </div>
    `;

  panel.innerHTML = `
    <header class="day-summary">
      <p class="event-date">${day.dateLabel}</p>
      <h3>${day.name}</h3>
      <p>${day.intro}</p>
    </header>
    <div class="day-content">
      <div class="agenda">
        <h4>Puja and programme timings</h4>
        <ol class="agenda-list">${agenda}</ol>
      </div>
      <div class="day-media">
        <h4>${day.momentTitle}</h4>
        ${dayMoment}
      </div>
    </div>
  `;
};

const selectDay = (index, options = {}) => {
  selectedIndex = Math.max(0, Math.min(index, festivalDays.length - 1));
  renderTabs();
  renderDay();

  const activeTab = document.querySelector(`#tab-${festivalDays[selectedIndex].id}`);
  if (options.focus) activeTab?.focus();
  if (activeTab) {
    const centeredPosition = activeTab.offsetLeft - (tabs.clientWidth - activeTab.offsetWidth) / 2;
    tabs.scrollTo({ left: Math.max(0, centeredPosition), behavior: "smooth" });
  }
  if (window.scrollX !== 0) window.scrollTo(0, window.scrollY);
};

const updateTodayCard = () => {
  if (currentIndex >= 0) {
    const day = festivalDays[currentIndex];
    todayKicker.textContent = `Today · ${day.shortDate}`;
    todayTitle.textContent = day.name;
    todaySummary.textContent = `${day.events[0].time} — ${day.events[0].title}. Open the full guide for all timings.`;
    return;
  }

  if (upcomingIndex >= 0) {
    const day = festivalDays[upcomingIndex];
    const distance = dayDistance(currentDateKey, day.date);
    todayKicker.textContent = "The celebration is almost here";
    todayTitle.textContent = distance === 1 ? "Pujo begins tomorrow" : `Pujo begins in ${distance} days`;
    todaySummary.textContent = `${day.name} · ${day.dateLabel}`;
    return;
  }

  todayKicker.textContent = "Thank you, Nagpur";
  todayTitle.textContent = "What a beautiful celebration";
  todaySummary.textContent = "Revisit the day guides and relive this year’s moments of devotion and celebration.";
};

tabs.addEventListener("click", (event) => {
  const target = event.target.closest(".day-tab");
  if (!target) return;
  selectDay(Number(target.dataset.index));
});

tabs.addEventListener("keydown", (event) => {
  if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
  event.preventDefault();
  let next = selectedIndex;
  if (event.key === "ArrowLeft") next -= 1;
  if (event.key === "ArrowRight") next += 1;
  if (event.key === "Home") next = 0;
  if (event.key === "End") next = festivalDays.length - 1;
  selectDay(next, { focus: true });
});

todayAction.addEventListener("click", () => {
  selectDay(currentIndex >= 0 ? currentIndex : selectedIndex);
  document.querySelector("#schedule").scrollIntoView({ behavior: "smooth" });
});

const closeMedia = () => {
  mediaPlayer.pause();
  mediaPlayer.removeAttribute("src");
  mediaPlayer.load();
  mediaDialog.close();
};

document.addEventListener("click", (event) => {
  const trigger = event.target.closest(".media-trigger");
  if (!trigger) return;
  mediaTitle.textContent = trigger.dataset.title || "Festival moments";
  mediaPlayer.src = trigger.dataset.video;
  mediaDialog.showModal();
  mediaPlayer.play().catch(() => {});
});

document.querySelector(".dialog-close").addEventListener("click", closeMedia);
mediaDialog.addEventListener("click", (event) => {
  if (event.target === mediaDialog) closeMedia();
});
mediaDialog.addEventListener("cancel", (event) => {
  event.preventDefault();
  closeMedia();
});

const posters = {
  puja: {
    src: "assets/images/pujo-timings.jpeg",
    title: "Puja timings 2026",
    alt: "Official Puja timings poster for Sarbajanin Durgotsava 2026",
  },
  cultural: {
    src: "assets/images/cultural-event-timings.jpeg",
    title: "Cultural Extravaganza 2026",
    alt: "Official cultural programme poster for Sarbajanin Durgotsava 2026",
  },
  press: {
    src: "assets/images/news-paper-clip.jpg",
    title: "The Hitavada · 29 September 2025",
    alt: "The Hitavada newspaper feature about Katol Road Sarbajanin Durgotsava's 65th-year celebrations",
  },
};

document.querySelectorAll(".poster-trigger").forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const poster = posters[trigger.dataset.poster];
    posterTitle.textContent = poster.title;
    posterImage.src = poster.src;
    posterImage.alt = poster.alt;
    posterDialog.showModal();
  });
});

const closePoster = () => {
  posterDialog.close();
  posterImage.removeAttribute("src");
};

document.querySelector(".poster-close").addEventListener("click", closePoster);
posterDialog.addEventListener("click", (event) => {
  if (event.target === posterDialog) closePoster();
});
posterDialog.addEventListener("cancel", (event) => {
  event.preventDefault();
  closePoster();
});

document.querySelector("#share-location").addEventListener("click", async () => {
  const shareData = {
    title: "Katol Road Durga Pujo 2026",
    text: "CPWD Ground, opposite Police Line Takli, Seminary Hills, Nagpur",
    url: "https://maps.app.goo.gl/8EA5eTDX1d6P9J738",
  };

  try {
    if (navigator.userAgent.includes("KatolRoadPujoAndroid")) {
      window.location.href = "pujo://share-location";
      return;
    }
    if (navigator.share) {
      await navigator.share(shareData);
      return;
    }
    await navigator.clipboard.writeText(`${shareData.text}\n${shareData.url}`);
    showToast("Location copied to your clipboard");
  } catch (error) {
    if (error?.name !== "AbortError") showToast("Open directions to share the Google Maps location");
  }
});

const navigationLinks = [...document.querySelectorAll(".bottom-nav a")];
const observedSections = ["home", "schedule", "visit", "help"]
  .map((id) => document.querySelector(`#${id}`))
  .filter(Boolean);

const navObserver = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    navigationLinks.forEach((link) => link.classList.toggle("is-active", link.dataset.nav === visible.target.id));
  },
  { rootMargin: "-20% 0px -60%", threshold: [0, 0.1, 0.3] },
);

observedSections.forEach((section) => navObserver.observe(section));

renderTabs();
renderDay();
updateTodayCard();

if ("serviceWorker" in navigator && window.location.protocol.startsWith("http")) {
  window.addEventListener("load", () => navigator.serviceWorker.register("sw.js"));
}
