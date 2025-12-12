// ====== CONFIG: the two months of the Dubai trip ======
// Months are 0-based: 11 = December, 0 = January
const calendarConfig = [
  { year: 2025, month: 11, label: "December 2025" },
  { year: 2026, month: 0, label: "January 2026" },
];

// She is in Dubai from 12 Dec 2025 to 6 Jan 2026 (inclusive)
const tripStart = new Date(2025, 11, 12); // 12 December 2025
// End moment: 6 Jan 2026 at 20:00 UK time (treated as UTC here)
const reunionDateTime = new Date("2026-01-06T20:00:00Z");

// One little poem line for each Dubai day ❤️
const captions = {
  "2025-12-12": "Your arms around me make every city feel like home. 💕",
  "2025-12-13": "Even in a crowd, my heart only looks for you. 🫶",
  "2025-12-14": "Your smile is the sun that fixes all my cloudy days. ☀️",
  "2025-12-15": "No skyline shines brighter than the light in your eyes. 🌃",
  "2025-12-16": "Every laugh with you is a little lifetime I never forget. ✨",
  "2025-12-17": "If love had a shape, it would be the way you hold me. 🫂",
  "2025-12-18": "Your voice is the soft place my tired heart goes to rest. 🎧",
  "2025-12-19": "We don’t just take photos, we freeze tiny pieces of forever. 📸",
  "2025-12-20": "Side by side with you is my favourite kind of adventure. 🌍",
  "2025-12-21": "Your laugh is the bit of magic this world forgot it needed. ✨",
  "2025-12-22": "Every close-up of us is a reminder I’m safely loved. 🤍",
  "2025-12-23": "With you, even the walk back home feels like a movie scene. 🎬",
  "2025-12-24": "All I ever wanted for any Christmas was you next to me. 🎄",
  "2025-12-25": "The best present I’ll ever unwrap is another day with you. 🎁",
  "2025-12-26": "I don’t need perfect days, I just need your imperfect cuddles. 🐻",
  "2025-12-27": "You turn ordinary streets into places my heart remembers. 🛣️",
  "2025-12-28": "Every soft look from you rewrites my definition of love. 🥹",
  "2025-12-29": "In a world full of almosts, you are my ‘always’. ♾️",
  "2025-12-30": "Your face is my favourite notification that life is good. 📱💗",
  "2025-12-31": "No new year wish beats another 365 days of you and me. 🎆",
  "2026-01-01": "Starting the year with your smile feels like cheating at life. 🎇",
  "2026-01-02": "I fall in love with you quietly, in all our silly little moments. 💫",
  "2026-01-03": "Home isn’t a place any more, it’s the space between your arms. 🏡",
  "2026-01-04": "You’re the soft ‘it’s okay’ behind all my chaos. 🌙",
  "2026-01-05": "Every photo of us whispers, ‘look how far love has brought us.’ 🧡",
  "2026-01-06": "Soon this distance ends, but this love never will. ✈️💕"
};

// ====== Rotating love poems under the title ======
const rotatingPoems = [
  "Every mile between us just reminds me how far my love can reach.",
  "I miss the weight of your hug more than words will ever admit.",
  "You are my favourite thought in every quiet moment of the day.",
  "Distance is small compared to the way my heart runs to you.",
  "I fall in love with you again every time I remember your laugh.",
  "If missing you was a language, my heart would be fluent by now.",
  "You’re not just my wife, you’re my safest place in the world.",
  "Even when you’re away, you’re the closest thing to me inside my chest.",
  "I count the days, but what I really count are the ways I adore you.",
  "My favourite plan is still the simple one: you and me, together.",
  "Your smile is the soft light I carry through all my dark days.",
  "No matter the timezone, my heart is always perfectly in sync with you.",
  "I don’t just love you, I quietly choose you in every tiny moment.",
  "You’re the reason ordinary days feel like something worth remembering.",
  "I miss your voice, your jokes, your face—honestly, I miss everything.",
  "You’re not just my person, you’re the best chapter of my life.",
  "I adore the way you exist, loudly, softly, and beautifully all at once.",
  "If I could bottle one thing, it would be the way you look at me.",
  "Loving you is the easiest promise my heart has ever kept.",
  "You are the answer to every lonely version of me I used to be.",
  "My days make more sense when they end with your goodnight.",
  "Every message from you feels like a little knock on my heart’s door.",
  "I never knew missing someone could feel this tender and this deep.",
  "You are my favourite hello and the home I always return to.",
  "No photo can fully catch it, but your eyes are where I belong.",
  "If home had a heartbeat, it would sound exactly like your laugh.",
  "I love how you turn my worries down and my joy all the way up.",
  "There isn’t a version of my future where I don’t choose you.",
  "You are the calm in my chaos and the chaos I gladly choose.",
  "Every time I picture you, the distance shrinks just a little bit.",
  "You are my constant in a world that never stops changing.",
  "Loving you feels like breathing—it just happens, over and over.",
  "I don’t need big speeches; your little habits already say ‘I love you’.",
  "My heart keeps a reserved seat with your name on it, always.",
  "You are the wish I would make again, every single time.",
  "Even when you’re far away, you’re still the centre of my world.",
  "I adore the way your presence turns rooms into memories.",
  "Missing you is hard, but loving you makes every second worth it.",
  "You’re the gentle ‘I’ve got you’ behind every rough day I face.",
  "I can’t wait to say, ‘you’re finally home’ and mean it with my whole soul.",
  "You’re the kind of love I used to think only existed in stories.",
  "Every sunrise without you just means I’m one day closer to holding you.",
  "You are the reason my heart feels like it finally knows where to stay.",
  "Loving you long-distance still feels better than life without you close.",
  "You’re the softest, strongest, most beautiful part of my entire life.",
  "The countdown isn’t just to the date—it’s to your arms around me again.",
  "I love you more than yesterday and not even half as much as tomorrow.",
  "No airport, no timezone, no distance can dilute what I feel for you.",
  "Even when the day is heavy, the thought of you is light.",
  "You are my forever favourite person, in every country and every season."
];

let currentPoemIndex = 0;

function updateRotatingPoem() {
  const el = document.getElementById("rotating-poem");
  if (!el || rotatingPoems.length === 0) return;
  el.textContent = rotatingPoems[currentPoemIndex];
  currentPoemIndex = (currentPoemIndex + 1) % rotatingPoems.length;
}

// ====== Clocks and progress bar ======
function updateClocks() {
  const now = new Date();

  const ukEl = document.getElementById("clock-uk");
  const dubaiEl = document.getElementById("clock-dubai");
  const indiaEl = document.getElementById("clock-india");

  if (ukEl) {
    ukEl.textContent = now.toLocaleTimeString("en-GB", {
      timeZone: "Europe/London",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
  }

  if (dubaiEl) {
    dubaiEl.textContent = now.toLocaleTimeString("en-GB", {
      timeZone: "Asia/Dubai",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
  }

  if (indiaEl) {
    indiaEl.textContent = now.toLocaleTimeString("en-GB", {
      timeZone: "Asia/Kolkata",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
  }
}

function getTimeDiffParts(targetDate) {
  const now = new Date();
  const diffMs = targetDate - now;

  if (diffMs <= 0) {
    return null;
  }

  const totalSeconds = Math.floor(diffMs / 1000);
  const days = Math.floor(totalSeconds / (60 * 60 * 24));
  const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
  const seconds = totalSeconds % 60;

  return { days, hours, minutes, seconds, diffMs };
}

function formatDiff(parts) {
  if (!parts) return "Time reached 🎉";

  const { days, hours, minutes, seconds } = parts;
  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

function updateProgress() {
  const labelEl = document.getElementById("trip-progress-label");
  const fillEl = document.getElementById("trip-progress-fill");
  if (!labelEl || !fillEl) return;

  const now = new Date();

  const totalMs = reunionDateTime - tripStart;
  let doneMs = now - tripStart;

  if (doneMs < 0) doneMs = 0;
  if (doneMs > totalMs) doneMs = totalMs;

  const pct = totalMs > 0 ? (doneMs / totalMs) * 100 : 0;
  fillEl.style.width = `${pct.toFixed(1)}%`;

  const diffParts = getTimeDiffParts(reunionDateTime);
  if (!diffParts) {
    labelEl.textContent = "You’re back in the UK! 🥹🇬🇧";
    fillEl.style.width = "100%";
    return;
  }

  labelEl.textContent = `Time until you are home in the UK: ${formatDiff(diffParts)} (Trip ${
    pct.toFixed(1)
  }% complete)`;
}

// ====== Helpers for calendar ======
function pad(num) {
  return String(num).padStart(2, "0");
}

function dateKey(d) {
  return (
    d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate())
  );
}

function isWithinTrip(d) {
  // Compare only date part by zeroing time
  const a = new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
  const s = new Date(
    tripStart.getFullYear(),
    tripStart.getMonth(),
    tripStart.getDate()
  ).getTime();
  const e = new Date(2026, 0, 6).getTime(); // 6 Jan 2026 end date (midnight)
  return a >= s && a <= e;
}

function getPhotoPathForDate(d) {
  // You should name your image files exactly like: YYYY-MM-DD.jpg
  // Example: images/2025-12-12.jpg
  return "images/" + dateKey(d) + ".jpg";
}

// ====== Calendar generation ======
let currentMonthIndex = 0;

function generateCalendar(configIndex) {
  const { year, month, label } = calendarConfig[configIndex];
  currentMonthIndex = configIndex;

  const monthLabel = document.getElementById("month-label");
  monthLabel.textContent = label;

  const daysContainer = document.getElementById("calendar-days");
  daysContainer.innerHTML = "";

  const firstOfMonth = new Date(year, month, 1);
  const lastDateOfMonth = new Date(year, month + 1, 0).getDate();

  // JS getDay(): 0 = Sunday, 1 = Monday, ... 6 = Saturday
  // We want weeks to start on Monday, so convert:
  let startWeekday = firstOfMonth.getDay(); // 0..6
  startWeekday = (startWeekday + 6) % 7; // Now 0 = Monday, ... 6 = Sunday

  // Add empty cells before the first day
  for (let i = 0; i < startWeekday; i++) {
    const empty = document.createElement("div");
    empty.className = "day empty";
    daysContainer.appendChild(empty);
  }

  // Add one cell per actual day
  for (let day = 1; day <= lastDateOfMonth; day++) {
    const cell = document.createElement("div");
    cell.className = "day";
    cell.dataset.day = day;

    const number = document.createElement("div");
    number.className = "day-number";
    number.textContent = day;

    const dateObj = new Date(year, month, day);
    const inTrip = isWithinTrip(dateObj);

    // Only trip days have photos (by default)
    if (inTrip) {
      cell.classList.add("trip-day", "has-photo");
      const photo = document.createElement("div");
      photo.className = "day-photo";
      photo.style.backgroundImage =
        "url('" + getPhotoPathForDate(dateObj) + "')";
      const overlay = document.createElement("div");
      overlay.className = "day-overlay";

      cell.appendChild(photo);
      cell.appendChild(overlay);
    }

    cell.appendChild(number);

    if (inTrip) {
      cell.addEventListener("click", () => openModal(dateObj));
    } else {
      // Non-trip days just show the number, no click behaviour
      cell.style.cursor = "default";
    }

    daysContainer.appendChild(cell);
  }

  updateNavButtons();
}

// ====== Navigation between months ======
function updateNavButtons() {
  const prevBtn = document.getElementById("prev-month");
  const nextBtn = document.getElementById("next-month");

  prevBtn.disabled = currentMonthIndex === 0;
  nextBtn.disabled = currentMonthIndex === calendarConfig.length - 1;

  prevBtn.style.opacity = prevBtn.disabled ? 0.4 : 1;
  nextBtn.style.opacity = nextBtn.disabled ? 0.4 : 1;
}

document.getElementById("prev-month").addEventListener("click", () => {
  if (currentMonthIndex > 0) {
    generateCalendar(currentMonthIndex - 1);
  }
});

document.getElementById("next-month").addEventListener("click", () => {
  if (currentMonthIndex < calendarConfig.length - 1) {
    generateCalendar(currentMonthIndex + 1);
  }
});

// ====== Modal logic ======
const modal = document.getElementById("photo-modal");
const modalImage = document.getElementById("modal-image");
const modalCaption = document.getElementById("modal-caption");
const closeModalBtn = document.getElementById("close-modal");

function openModal(dateObj) {
  const key = dateKey(dateObj);
  modalImage.src = getPhotoPathForDate(dateObj);
  const text = captions[key] || "Dubai trip – " + key + " 💕";
  modalCaption.textContent = text;

  modal.classList.remove("hidden");
}

function closeModal() {
  modal.classList.add("hidden");
}

// Close on X button
closeModalBtn.addEventListener("click", closeModal);

// Close when clicking backdrop
modal.addEventListener("click", (e) => {
  if (e.target === modal || e.target.classList.contains("modal-backdrop")) {
    closeModal();
  }
});

// Close on ESC key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// ====== Init ======
document.addEventListener("DOMContentLoaded", () => {
  generateCalendar(0);
  updateRotatingPoem();
  setDailyReminder();
  initOpenWhen();
  initMascot();
  initReasons();
  initHug();
  initLoveLetter();
  setInterval(updateRotatingPoem, 10000);

  updateClocks();
  setInterval(updateClocks, 1000);

  updateProgress();
  setInterval(updateProgress, 1000);

  // start floating hearts (more, different sizes & styles)
  for (let i = 0; i < 15; i++) {
    setTimeout(createHeart, i * 400);
  }
  setInterval(createHeart, 500);

  // periodic love affirmations
  setInterval(spawnAffirmation, 22000);

  // load saved feelings
  initFeelings();
});


// ====== Floating heart animation ======
function createHeart() {
  const container = document.getElementById("hearts-container");
  if (!container) return;

  const heart = document.createElement("div");
  heart.className = "heart";

  const emojis = ["❤", "💗", "💖", "💘", "💕", "💜", "🧡", "💝", "💍", "💞", "✨"];
  heart.textContent = emojis[Math.floor(Math.random() * emojis.length)];

  const size = 10 + Math.random() * 32; // 10px to 42px
  heart.style.fontSize = size + "px";

  const left = Math.random() * 100; // 0 to 100vw
  heart.style.left = left + "vw";

  const duration = 5 + Math.random() * 7; // 5-12 seconds
  heart.style.animationDuration = duration + "s";

  container.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, duration * 1000 + 1000);
}




// ====== Daily love reminder ======
const dailyReminders = [
  "No matter how far you are, my heart is always holding your hand.",
  "Today, like every day, I’m grateful that this world gave me you.",
  "If love could be measured, I’d still run out of numbers with you.",
  "You are the quiet comfort behind every noisy day I have.",
  "Even on ordinary days, you are my favourite kind of magic.",
  "I hope today you remember how deeply, gently, endlessly I love you.",
  "You are the best decision my heart keeps making again and again.",
  "In every version of my life, I would still choose you as my home.",
  "The world feels softer and kinder just because you are in it.",
  "You’re not just loved, you’re my whole reason to feel blessed.",
  "Every sunrise brings me one day closer to seeing your smile again.",
  "You are proof that wishes whispered at 11:11 really do come true.",
  "Even when we’re apart, I still carry you with me in everything I do.",
  "You are my favourite part of every story I tell about my life.",
  "I love you today, more than yesterday, and still not as much as tomorrow."
];

function setDailyReminder() {
  const el = document.getElementById("daily-reminder-text");
  if (!el || dailyReminders.length === 0) return;

  const today = new Date();
  const base = new Date(2025, 11, 12); // start of Dubai trip as reference
  const diffDays = Math.floor((today - base) / (1000 * 60 * 60 * 24));
  const index = ((diffDays % dailyReminders.length) + dailyReminders.length) % dailyReminders.length;
  el.textContent = dailyReminders[index];
}



// ====== Open-when letters ======
const openWhenLetters = {
  miss: "When you miss me, close your eyes and remember that somewhere, at this exact moment, I am loving you just as hard.",
  stressed: "When you feel stressed, breathe. You don’t have to carry the world alone—my arms are always waiting for you to rest in.",
  cantSleep: "When you can’t sleep, remember I am always with you forever and always holding on to you and I am always beside you through thick and thin ",
  needSmile: "When you need a smile, remember all the dumb things I say and do remember that the way I say I need a bottle water ",
  lonely: "When you feel lonely, look at this and remember: there is someone whose whole heart is completely yours."
};

function initOpenWhen() {
  const buttons = document.querySelectorAll("[data-open-when]");
  const textEl = document.getElementById("open-when-text");
  if (!buttons.length || !textEl) return;

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const key = btn.getAttribute("data-open-when");
      const msg = openWhenLetters[key] || "I love you endlessly, in every mood and every moment.";
      textEl.textContent = msg;

      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });
}


// ====== Little mascot messages ======
const mascotMessages = [
  "Hi beautiful, your husband asked me to remind you that you are SO loved. 💕",
  "I’ve checked everywhere and guess what? You are his favourite human in the whole world. 🌍",
  "If hugs could travel at light speed, you’d be wrapped up in his arms already. 🫂",
  "Today’s mission: drink water, smile softly, and remember he’s obsessed with you. ✨",
  "Reminder from your tiny teddy: you are doing amazing, even on the days you don’t feel it. 🧸"
];


function initMascot() {
  const textEl = document.getElementById("mascot-text");
  const face = document.querySelector(".mascot-face");
  if (!textEl || !face) return;

  let index = 0;
  function update() {
    textEl.textContent = mascotMessages[index];
    index = (index + 1) % mascotMessages.length;
  }

  update();
  setInterval(update, 15000);

  const clickReplies = [
    "He talks about you like you hung the moon, you know. 🌙",
    "Click me any time you need a little reminder that you’re loved. 💕",
    "Your husband’s heart is basically 100% you. 🫶",
    "I’ve checked everywhere – you are absolutely his favourite person. ✨"
  ];

  face.addEventListener("click", () => {
    face.classList.add("pop");
    const msg = clickReplies[Math.floor(Math.random() * clickReplies.length)];
    textEl.textContent = msg;
    setTimeout(() => {
      face.classList.remove("pop");
    }, 400);
  });
}
// ====== Reasons I love you ======
const reasonsILoveYou = ["You make every room feel warmer just by walking into it.", "Your laugh is my favourite sound in the entire world.", "You believe in me even when I forget how to believe in myself.", "You make even boring days feel like something special.", "I love the way your eyes shine when you are excited about something.", "You are kind even when the world makes it hard to be.", "You always know how to make me feel safe.", "You hug me like you never want to let go—and I never want you to.", "You are my best friend and my favourite person in one.", "You are strong and soft at the same time, and I admire that so much.", "You make me want to be a better version of myself.", "You turn small moments into memories I treasure.", "You are the only person I can be fully myself around.", "You listen to my nonsense and still somehow love me.", "You make long days feel shorter just by texting me.", "Your smile feels like home to me.", "You make my worries feel lighter just by being there.", "You forgive, understand, and hold space for me.", "You are endlessly beautiful, inside and out.", "You make love feel easy and safe.", "You get my weird sense of humour.", "You stand by me, even when life gets messy.", "You make every version of the future look better.", "You make me proud to say, ‘that’s my wife.’", "You care about my feelings in a way no one else ever has.", "You let me love you with my whole heart.", "You make even a simple walk feel romantic.", "You are patient with me even when I’m difficult.", "You choose me, again and again, and I feel that.", "You are my calm in chaos.", "You share your dreams with me and let me be part of them.", "You trust me with your heart.", "You make me miss you even when we just spoke.", "You are my favourite notification on my phone.", "You show me what real partnership looks like.", "You make distance feel smaller with your love.", "You give the best cuddles in the universe.", "You are my first thought in the morning and my last at night.", "You laugh at my dumb jokes (even when they’re not funny).", "You see the good in me even when I can’t.", "You are my safe place when life gets heavy.", "You make me excited about growing old together.", "You are the most beautiful person I have ever seen.", "You make every holiday feel more special.", "You are honest with me, even when it’s hard.", "You let me be vulnerable without judging me.", "You understand parts of me I thought no one ever would.", "You are my home, no matter where we are.", "You make loving you the easiest thing I have ever done.", "You are the answer to every version of ‘what if I never find my person?’", "You turn even simple dinners into memories I never want to forget.", "You look beautiful in every outfit, every hairstyle, every moment.", "You text me just when I need to hear from you.", "You are gentle with my heart even when you are upset.", "You make me feel chosen, not just loved.", "You make long-distance feel a little less painful.", "You are my favourite person to tell good news to.", "You are also the first person I want to hold when things go wrong.", "You have a way of making every place feel like home when you are there.", "You say my name in a way that no one else does.", "You make me feel seen, not just looked at.", "You turn my overthinking into calm by just being you.", "You always find a way to make me laugh even when I am stubborn.", "You are soft with animals and kind to strangers.", "You remember tiny details about me that I forgot I even said.", "You support my dreams and add your own to them.", "You believe in us, even when life is hard.", "You make my favourite songs sound better because they remind me of you.", "You are patient with my flaws and still choose to love me.", "You make my phone feel empty when you are not on it.", "You turn rainy days into cuddling days in my imagination.", "You look at me like I am worth loving.", "You let me be silly and serious and everything in between.", "You make future plans with me and that makes me feel safe.", "You are the reason I smile randomly in the middle of the day.", "You make every goodbye feel like motivation to reach the next hello.", "You teach me what real, grown-up love feels like.", "You never stop trying, even when you are tired.", "You show me love in your actions as well as your words.", "You care about my family and my world.", "You make me feel like I matter more than anything.", "You are the person I want to share both my wins and my failures with.", "You make any place feel less scary when you are there, even just on a call.", "You talk about the future with me and make it sound beautiful.", "You inspire me to heal, grow, and become better.", "You let me love the soft, vulnerable parts of you.", "You are the reason I believe soulmates are real.", "You make time feel slower when we are together and faster when we are apart.", "You are my favourite person to be quiet with.", "You make me feel like loving you is the best thing I will ever do.", "You are the first person I look for in a crowded room.", "You make my heart feel full and still somehow hungry for more of you.", "You are my comfort person on bad days and my celebration person on good ones.", "You make me feel lucky every single day.", "You are my safe place, my peace, and my chaos all in one.", "You turn every ordinary ‘today’ into a day that feels special because you exist.", "You are the proof that wishes, prayers, and manifesting actually work.", "You make me feel like no distance in the world can change what we have.", "You are, simply, my favourite human that has ever existed.", "You make “forever” feel like the most natural thing in the world with you."];
let currentReasonIndex = 0;

function initReasons() {
  const textEl = document.getElementById("reason-text");
  const countEl = document.getElementById("reason-count");
  const prevBtn = document.getElementById("prev-reason");
  const nextBtn = document.getElementById("next-reason");
  if (!textEl || !countEl || !prevBtn || !nextBtn || !reasonsILoveYou.length) return;

  function render() {
    const total = reasonsILoveYou.length;
    textEl.textContent = reasonsILoveYou[currentReasonIndex];
    countEl.textContent = "Reason " + (currentReasonIndex + 1) + " of " + total;
  }

  prevBtn.addEventListener("click", () => {
    currentReasonIndex = (currentReasonIndex - 1 + reasonsILoveYou.length) % reasonsILoveYou.length;
    render();
  });

  nextBtn.addEventListener("click", () => {
    currentReasonIndex = (currentReasonIndex + 1) % reasonsILoveYou.length;
    render();
  });

  render();
}

// ====== Little love pop-ups ======
const loveAffirmations = [
  "I’m so grateful that this life gave me you.",
  "You are more loved than you will ever fully realise.",
  "Somewhere right now, I am thinking about you and smiling.",
  "You are doing so much better than you give yourself credit for.",
  "If you could see yourself through my eyes, you’d never doubt your worth again.",
  "No matter how today feels, you are still my favourite human in this whole world.",
  "You make my heart feel safe, seen, and completely at home."
];

function spawnAffirmation() {
  const container = document.body;
  const div = document.createElement("div");
  div.className = "love-affirmation";
  div.textContent = loveAffirmations[Math.floor(Math.random() * loveAffirmations.length)];

  const left = 10 + Math.random() * 80;
  div.style.left = left + "vw";

  container.appendChild(div);

  setTimeout(() => {
    div.remove();
  }, 5000);
}

// ====== Hug overlay ======
function initHug() {
  const btn = document.getElementById("hug-button");
  const overlay = document.getElementById("hug-overlay");
  if (!btn || !overlay) return;

  btn.addEventListener("click", () => {
    overlay.classList.add("show");
    setTimeout(() => {
      overlay.classList.remove("show");
    }, 3500);
  });
}

// ====== Love letter modal ======
function initLoveLetter() {
  const openBtn = document.getElementById("open-love-letter");
  const modal = document.getElementById("love-letter-modal");
  const closeBtn = document.getElementById("close-love-letter");
  if (!openBtn || !modal || !closeBtn) return;

  function open() {
    modal.classList.remove("hidden");
  }
  function close() {
    modal.classList.add("hidden");
  }

  openBtn.addEventListener("click", open);
  closeBtn.addEventListener("click", close);
  modal.addEventListener("click", (e) => {
    if (e.target === modal || e.target.classList.contains("modal-backdrop")) {
      close();
    }
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      close();
    }
  });
}

// ====== Feelings persistence (localStorage) ======


function initFeelings() {
  const wifeBox = document.getElementById("feeling-wife");
  const husbandBox = document.getElementById("feeling-husband");
  const wifeDisplay = document.getElementById("feeling-wife-display");
  const husbandDisplay = document.getElementById("feeling-husband-display");
  const wifePostBtn = document.getElementById("feeling-wife-post");
  const husbandPostBtn = document.getElementById("feeling-husband-post");

  if (!wifeBox || !husbandBox) return;

  // Load saved draft text locally (per device)
  const savedWife = localStorage.getItem("feeling_wife");
  const savedHusband = localStorage.getItem("feeling_husband");
  if (savedWife !== null) wifeBox.value = savedWife;
  if (savedHusband !== null) husbandBox.value = savedHusband;

  // Firebase realtime database for shared messages
  const db = window.feelingsDatabase || null;
  let wifeRef = null;
  let husbandRef = null;

  if (db) {
    wifeRef = db.ref("feelings/wife");
    husbandRef = db.ref("feelings/husband");

    if (wifeRef && wifeDisplay) {
      wifeRef.on("value", (snap) => {
        const data = snap.val();
        if (data && data.message) {
          wifeDisplay.textContent = data.message;
        } else {
          wifeDisplay.textContent = "Nothing posted yet.";
        }
      });
    }

    if (husbandRef && husbandDisplay) {
      husbandRef.on("value", (snap) => {
        const data = snap.val();
        if (data && data.message) {
          husbandDisplay.textContent = data.message;
        } else {
          husbandDisplay.textContent = "Nothing posted yet.";
        }
      });
    }
  } else {
    // Fallback: load last posted messages from localStorage only
    const savedWifePosted = localStorage.getItem("feeling_wife_posted");
    const savedHusbandPosted = localStorage.getItem("feeling_husband_posted");
    if (wifeDisplay) {
      wifeDisplay.textContent = savedWifePosted || "Nothing posted yet.";
    }
    if (husbandDisplay) {
      husbandDisplay.textContent = savedHusbandPosted || "Nothing posted yet.";
    }
  }

  // Save drafts on input (so you don't lose what you're typing)
  wifeBox.addEventListener("input", () => {
    localStorage.setItem("feeling_wife", wifeBox.value);
  });
  husbandBox.addEventListener("input", () => {
    localStorage.setItem("feeling_husband", husbandBox.value);
  });

  // Post buttons: send to Firebase if available, otherwise store locally
  if (wifePostBtn && wifeDisplay) {
    wifePostBtn.addEventListener("click", () => {
      const text = wifeBox.value.trim();
      if (db && wifeRef) {
        wifeRef.set({
          message: text || "",
          timestamp: Date.now()
        });
      } else {
        if (text) {
          wifeDisplay.textContent = text;
          localStorage.setItem("feeling_wife_posted", text);
        } else {
          wifeDisplay.textContent = "Nothing posted yet.";
          localStorage.removeItem("feeling_wife_posted");
        }
      }
    });
  }

  if (husbandPostBtn && husbandDisplay) {
    husbandPostBtn.addEventListener("click", () => {
      const text = husbandBox.value.trim();
      if (db && husbandRef) {
        husbandRef.set({
          message: text || "",
          timestamp: Date.now()
        });
      } else {
        if (text) {
          husbandDisplay.textContent = text;
          localStorage.setItem("feeling_husband_posted", text);
        } else {
          husbandDisplay.textContent = "Nothing posted yet.";
          localStorage.removeItem("feeling_husband_posted");
        }
      }
    });
  }
}
