/**
 * Grace & Truth Bible App
 * Live Internet Bible Verse fetcher, topic guidance, and devotional tool.
 */

// Comprehensive spiritual topics database
const TOPICS = {
  // === SEVEN SINS & TEMPTATIONS ===
  pride: {
    title: "Pride & Arrogance",
    icon: "👑",
    category: "sins",
    passage: "Proverbs 16:18-19",
    context: "Pride elevates the self above God and others, fostering an illusion of self-sufficiency while forgetting that everything we have is an unmerited gift from our Creator.",
    overcome: [
      "Practice gratitude: Acknowledge that your breath, talents, intellect, and achievements all originate from God (1 Corinthians 4:7).",
      "Serve quietly: Look for opportunities to serve others behind the scenes without seeking human recognition or applause (Matthew 6:3-4).",
      "Cultivate teachability: Welcome honest correction, confess weaknesses quickly, and ask God to grant you the gentle humility of Christ (James 4:6)."
    ],
    prayer: "Heavenly Father, forgive me for my pride, self-reliance, and stubborn independence. Strip away my ego and clothe me in the humility of Jesus Christ. Teach me to boast only in Your cross and to honor others above myself. In Jesus' name, Amen.",
    offlineFallback: "Pride goes before destruction, and a haughty spirit before a fall. It is better to be of a lowly spirit with the poor, than to divide the plunder with the proud."
  },

  lust: {
    title: "Lust & Purity of Heart",
    icon: "🔥",
    category: "sins",
    passage: "2 Timothy 2:22",
    context: "Lust reduces sacred human beings created in God's divine image into objects for selfish pleasure, distorting God's holy design for love, self-giving, and intimacy.",
    overcome: [
      "Guard your eyes and gates: Make a conscious covenant with your eyes; remove apps or cut off media that trigger lustful thoughts (Job 31:1).",
      "Flee temptation immediately: Do not linger, debate, or negotiate with sexual temptation; run from it in the moment (1 Corinthians 6:18).",
      "Renew your thoughts: Fill your mind deliberately with whatever is pure, lovely, noble, and worthy of praise (Philippians 4:8).",
      "Walk in transparent community: Share your struggles with trusted Christian friends or mentors for prayer and accountability."
    ],
    prayer: "Lord Jesus, create in me a clean heart and renew a right spirit within me. Cleanse my eyes and sanctify my thoughts. Grant me the courage and quickness to flee impurity, and satisfy my soul with Your holy love. Amen.",
    offlineFallback: "Flee youthful lusts; but pursue righteousness, faith, love, and peace with those who call on the Lord out of a pure heart."
  },

  sloth: {
    title: "Sloth & Spiritual Apathy",
    icon: "⏳",
    category: "sins",
    passage: "Colossians 3:23-24",
    context: "Sloth is not merely physical fatigue; it is a neglect of duty, spiritual indifference, wasting God's gift of time, and delaying obedience to what God has commanded.",
    overcome: [
      "Work as unto Christ: View your daily chores, studies, or career as an act of worship directly offered to Jesus.",
      "Take immediate small steps: Overcome the inertia of procrastination by taking small, disciplined actions one at a time (Proverbs 6:6-8).",
      "Limit mind-numbing distractions: Recognize mindless scrolling and digital consumption as subtle thieves of purpose and spiritual passion (Ephesians 5:15-16)."
    ],
    prayer: "Lord God, awaken my soul from lethargy, complacency, and delay. Ignite in my heart a holy diligence to steward every hour for Your glory. Help me to labor heartily for Your kingdom with joyful strength. Amen.",
    offlineFallback: "Whatever you do, work heartily, as for the Lord, and not for men, knowing that from the Lord you will receive the reward of the inheritance; for you serve the Lord Christ."
  },

  envy: {
    title: "Envy & Comparison",
    icon: "👀",
    category: "sins",
    passage: "James 3:16",
    context: "Envy resents the blessings, successes, or gifts of others. It roots itself in dissatisfaction with God's sovereign care and providential timing for our own lives.",
    overcome: [
      "Celebrate others: Break the power of jealousy by intentionally thanking God for the other person and wishing them well (Romans 12:15).",
      "Count your specific blessings: A heart full of genuine gratitude has no empty room left for bitter comparison (Proverbs 14:30).",
      "Secure your identity: Remember that your worth is rooted in being an adopted child of the King, not in earthly status or possessions."
    ],
    prayer: "Father, tear up every root of jealousy and comparison in my heart. Teach me to delight in the blessings of others, and help me rest content in the unique, gracious plan You have prepared for me. Amen.",
    offlineFallback: "For where envy and selfish ambition are, there is confusion and every evil work."
  },

  wrath: {
    title: "Wrath & Destructive Anger",
    icon: "⚡",
    category: "sins",
    passage: "James 1:19-20",
    context: "Uncontrolled wrath, explosive temper, or nursing bitter grudges gives the enemy an open doorway to fracture peace, relationships, and spiritual discernment.",
    overcome: [
      "Pause before reacting: Be quick to listen, slow to speak, and slow to anger (James 1:19).",
      "Respond gently: A gentle answer turns away wrath, but harsh and reactive words stir up strife (Proverbs 15:1).",
      "Resolve offenses promptly: Do not let the sun go down while you remain angry; forgive quickly as Christ forgave you (Ephesians 4:26-27)."
    ],
    prayer: "Prince of Peace, quiet the boiling storm in my soul. Take away my defensiveness, bitterness, and the desire to strike back. Give me a spirit of meekness, gentleness, and self-control. Amen.",
    offlineFallback: "So, then, my beloved brothers, let every man be swift to hear, slow to speak, and slow to anger; for the anger of man doesn't produce the righteousness of God."
  },

  gluttony: {
    title: "Gluttony & Lack of Self-Control",
    icon: "🍷",
    category: "sins",
    passage: "1 Corinthians 6:19-20",
    context: "Gluttony is excessive, disordered consumption—turning physical food, drinks, or entertainment into coping mechanisms for emotional or spiritual hunger.",
    overcome: [
      "Differentiate hunger: Recognize when you are physically hungry versus when your soul is feeling stressed, lonely, or empty.",
      "Practice fasting and moderation: Intentional fasting re-centers our dependence on God and strengthens self-control (Matthew 4:4).",
      "Honor your temple: Treat your body as a sacred dwelling of the Holy Spirit, purchased at great cost by Jesus Christ."
    ],
    prayer: "Lord, help me to master my appetites rather than allowing them to master me. Satisfy the deepest thirst and hunger of my soul with Your living water and holy Word. Teach me temperate, grateful living. Amen.",
    offlineFallback: "Or don't you know that your body is a temple of the Holy Spirit which is in you, which you have from God? You are not your own, for you were bought with a price. Therefore glorify God in your body and in your spirit, which belong to God."
  },

  greed: {
    title: "Greed & Materialism",
    icon: "💰",
    category: "sins",
    passage: "1 Timothy 6:10",
    context: "Greed is the deceitful craving for wealth, prestige, and worldly possessions, anchoring security in temporary earthly treasures instead of the living God.",
    overcome: [
      "Give generously: Giving systematically breaks the stranglehold of greed over the human heart (Acts 20:35).",
      "Cultivate contentment: Remember that we brought nothing into this world, and we can take nothing out (1 Timothy 6:7).",
      "Invest in eternity: Store up treasures in heaven through kindness, faith, and gospel work (Matthew 6:19-21)."
    ],
    prayer: "Heavenly Father, loosen my grip on money and possessions. Forgive me for trusting in material security rather than Your faithful providence. Fill me with a generous spirit that reflects Your abundance. Amen.",
    offlineFallback: "For the love of money is a root of all kinds of evil. Some have been led astray from the faith in their greed, and have pierced themselves through with many sorrows."
  },

  // === EMOTIONAL STRUGGLES ===
  anxiety: {
    title: "Anxiety & Racing Worries",
    icon: "🌧️",
    category: "emotions",
    passage: "Philippians 4:6-7",
    context: "Anxiety grips our thoughts with worry over an uncertain future, forgetting that God already stands in tomorrow and tenderly cares for every detail of our lives.",
    overcome: [
      "Convert worry into prayer: When anxious thoughts arise, immediately speak them aloud to God with thanksgiving.",
      "Focus on today: Do not borrow trouble from tomorrow; tomorrow will worry about itself (Matthew 6:34).",
      "Cast your burdens: Hand your anxieties over to God knowing He cares deeply and personally for you (1 Peter 5:7)."
    ],
    prayer: "Lord, I lay down my racing thoughts, what-ifs, and heavy chest before You. Let Your peace, which surpasses all human understanding, stand guard over my heart and mind in Christ Jesus. Amen.",
    offlineFallback: "In nothing be anxious, but in everything, by prayer and petition with thanksgiving, let your requests be made known to God. And the peace of God, which surpasses all understanding, will guard your hearts and your thoughts in Christ Jesus."
  },

  fear: {
    title: "Fear & Discouragement",
    icon: "🛡️",
    category: "emotions",
    passage: "Joshua 1:9",
    context: "Fear magnifies circumstances and shrinks our view of God's power. Yet God continually assures us that His presence is our impenetrable shield.",
    overcome: [
      "Remember God's presence: Courage is not the absence of fear, but the conviction that God is with you in the storm.",
      "Proclaim truth: God has not given you a spirit of fear, but of power, love, and a sound mind (2 Timothy 1:7).",
      "Recall past faithfulness: Reflect on how God guided and protected you through past trials."
    ],
    prayer: "Almighty God, when intimidation and fear threaten to overwhelm me, steady my heart with the promise of Your presence. You are my fortress and deliverer. I will not be afraid. Amen.",
    offlineFallback: "Haven't I commanded you? Be strong and courageous. Don't be afraid. Don't be dismayed, for the LORD your God is with you wherever you go."
  },

  grief: {
    title: "Grief & Brokenheartedness",
    icon: "💔",
    category: "emotions",
    passage: "Psalm 34:18",
    context: "Sorrow, loss, and heartbreak can feel crushing. Scripture assures us that God is not distant in our pain—He draws exceptionally near to mend the brokenhearted.",
    overcome: [
      "Lament honestly: Pour out your tears and confusion before the Lord without shame (Psalm 62:8).",
      "Receive comfort: Allow godly friends and the comforting Holy Spirit to minister to your soul (Matthew 5:4).",
      "Rest in eternal hope: Hold onto the promise that God will one day wipe every tear from our eyes (Revelation 21:4)."
    ],
    prayer: "Dear Lord, my heart is deeply wounded and aching. Be my comforter and safe harbor. Hold me gently in Your arms, wipe away my bitter tears, and restore hope to my weary soul. Amen.",
    offlineFallback: "The LORD is near to those who have a broken heart, and saves those who have a crushed spirit."
  },

  forgiveness: {
    title: "Guilt & Needing Forgiveness",
    icon: "🕊️",
    category: "emotions",
    passage: "1 John 1:9",
    context: "Guilt and shame make us want to hide from God like Adam in the garden. But Christ invites us to come openly to the throne of grace to receive boundless mercy.",
    overcome: [
      "Confess without hiding: Acknowledge your sin openly before God without making excuses.",
      "Believe in total cleansing: God removes our sins as far as the east is from the west (Psalm 103:12).",
      "Silence the accuser: Remember there is now no condemnation for those who are in Christ Jesus (Romans 8:1)."
    ],
    prayer: "Merciful Father, I confess my sins and shortcomings to You. Wash me thoroughly with the precious blood of Jesus. Thank You for complete, unearned forgiveness and a fresh new beginning today. Amen.",
    offlineFallback: "If we confess our sins, he is faithful and righteous to forgive us the sins, and to cleanse us from all unrighteousness."
  },

  loneliness: {
    title: "Loneliness & Feeling Forgotten",
    icon: "🕯️",
    category: "emotions",
    passage: "Deuteronomy 31:6",
    context: "Even in crowded rooms, the human soul can feel isolated and unseen. Yet God promises that He will never fail, abandon, or forsake His children.",
    overcome: [
      "Know you are seen: God knows the exact number of hairs on your head and collects your tears (Psalm 56:8).",
      "Commune with Jesus: Use lonely moments to cultivate sweet fellowship with Christ in personal prayer and scripture.",
      "Reach out: Bless someone else who may be lonely; in serving others, we often discover God-given community."
    ],
    prayer: "Jesus, when I feel solitary and forgotten, wrap Your comforting presence around me. Remind me that You are a friend who sticks closer than a brother, and that I am never alone. Amen.",
    offlineFallback: "Be strong and courageous. Don't be afraid, nor be scared of them; for the LORD your God is who goes with you. He will not fail you nor forsake you."
  },

  peace: {
    title: "Inner Rest & Peace",
    icon: "🌿",
    category: "emotions",
    passage: "Matthew 11:28-30",
    context: "The world offers temporary relief, but Jesus gives a deep, immovable peace of heart that sustains us through every storm.",
    overcome: [
      "Lay down burdens: Surrender the heavy loads of control, perfectionism, and anxiety that you were never designed to carry.",
      "Walk alongside Jesus: Take His gentle yoke upon you and learn His rhythms of grace.",
      "Meditate on Christ's gift: 'Peace I leave with you; my peace I give to you. Not as the world gives do I give to you' (John 14:27)."
    ],
    prayer: "Lord Jesus, I am weary and worn out from striving. I come to You to find true rest. Settle my restless thoughts and let Your supernatural peace flood my spirit. Amen.",
    offlineFallback: "Come to me, all you who labor and are heavily burdened, and I will give you rest. Take my yoke upon you, and learn from me, for I am gentle and humble in heart; and you will find rest for your souls. For my yoke is easy, and my burden is light."
  },

  gratitude: {
    title: "Joy & Everyday Gratitude",
    icon: "☀️",
    category: "emotions",
    passage: "1 Thessalonians 5:16-18",
    context: "Gratitude is spiritual eyesight—it trains our hearts to see God's handiwork and blessings even in the midst of ordinary or difficult days.",
    overcome: [
      "Give thanks in everything: Not necessarily for painful trials, but in the midst of them, knowing God works all things for good.",
      "Keep a thankfulness list: Begin and end each day naming at least three specific blessings from God.",
      "Praise God out loud: Speak words of worship and praise; singing lifts the spirit above gloomy circumstances (Psalm 100:4)."
    ],
    prayer: "Father, thank You for Your endless goodness, grace, and daily mercies. Open my eyes to notice the countless gifts You surround me with, and fill my mouth with joyful praise today. Amen.",
    offlineFallback: "Rejoice always. Pray without ceasing. In everything give thanks, for this is the will of God in Christ Jesus toward you."
  },

  // === WISDOM & DAILY WALK ===
  guidance: {
    title: "Guidance & Life Direction",
    icon: "🧭",
    category: "wisdom",
    passage: "Proverbs 3:5-6",
    context: "When decisions loom large and roads fork, God promises to direct our path when we lean on His infinite wisdom rather than our limited insight.",
    overcome: [
      "Surrender self-reliance: Acknowledge that God knows the beginning from the end and wants what is best for you.",
      "Immerse in Scripture: God's Word is a lamp to our feet and a light to our path (Psalm 119:105).",
      "Seek godly counsel: Seek prayerful guidance from mature believers who walk in wisdom and love (Proverbs 11:14)."
    ],
    prayer: "Sovereign Lord, guide my steps today. Direct my thoughts, conversations, and choices. Close doors that lead away from Your will, and open doors of righteousness. I trust in You. Amen.",
    offlineFallback: "Trust in the LORD with all your heart, and don't lean on your own understanding. In all your ways acknowledge him, and he will make your paths straight."
  },

  faith: {
    title: "Strengthening Faith & Doubts",
    icon: "⚓",
    category: "wisdom",
    passage: "Hebrews 11:1",
    context: "Faith is not the total absence of doubt, but trusting in God's immutable character and promises even when the visible road is cloudy.",
    overcome: [
      "Feed on God's Word: Faith comes by hearing, and hearing through the Word of Christ (Romans 10:17).",
      "Bring doubts to Jesus: Like the honest father in the Gospels, pray: 'Lord, I believe; help my unbelief!' (Mark 9:24).",
      "Step out in obedience: Often, spiritual clarity comes not before we step out, but as our feet touch the water."
    ],
    prayer: "Lord, when shadows of doubt loom, anchor my faith to the rock of Your eternal truth. Strengthen my convictions and help me walk by faith, not by sight. In Jesus' name, Amen.",
    offlineFallback: "Now faith is the assurance of things hoped for, proof of things not seen."
  },

  love: {
    title: "Walking in Biblical Love",
    icon: "❤️",
    category: "wisdom",
    passage: "1 Corinthians 13:4-7",
    context: "Biblical love is not merely a warm emotion; it is patient, humble, self-sacrificing action modeled after Christ's love for us upon the cross.",
    overcome: [
      "Choose patience and kindness: When provoked or misunderstood, respond with Christlike gentleness.",
      "Forgive as forgiven: Release grudges, for Christ has cancelled our monumental debt of sin (Colossians 3:13).",
      "Love in tangible action: Show love through service, hospitality, and lifting up the vulnerable (1 John 3:18)."
    ],
    prayer: "Lord Jesus, You laid down Your life out of boundless love for me. Pour Your divine love into my heart so that I may love family, neighbors, and even enemies with grace and generosity. Amen.",
    offlineFallback: "Love is patient and is kind; love doesn't envy. Love doesn't brag, is not proud, doesn't behave itself inappropriately, doesn't seek its own way, is not provoked, takes no account of evil; doesn't rejoice in unrighteousness, but rejoices with the truth; bears all things, believes all things, hopes all things, and endures all things."
  },

  patience: {
    title: "Patience & Waiting on God",
    icon: "🌱",
    category: "wisdom",
    passage: "Isaiah 40:31",
    context: "Waiting on the Lord is never wasted time. In the waiting, God refines our faith, deepens our roots, and prepares us for what lies ahead.",
    overcome: [
      "Trust God's clock: He makes everything beautiful in its proper time (Ecclesiastes 3:11).",
      "Serve where you are: While waiting for tomorrow's doors to open, remain faithful to today's duties.",
      "Meditate on Psalm 27:14: 'Wait for the Lord; be strong, and let your heart take courage; wait for the Lord!'"
    ],
    prayer: "Father, quiet my hurried, anxious spirit. Grant me the grace to wait on Your perfect timing with quiet trust and enduring hope. Renew my strength as I fix my eyes on You. Amen.",
    offlineFallback: "But those who wait for the LORD will renew their strength. They will mount up with wings like eagles. They will run, and not be weary. They will walk, and not faint."
  }
};

// Popular scriptures for random inspiration & quick chips
const POPULAR_VERSES = [
  "John 3:16",
  "Psalm 23:1-4",
  "Romans 8:28",
  "Philippians 4:6-7",
  "Proverbs 3:5-6",
  "Isaiah 40:31",
  "Matthew 11:28-30",
  "Joshua 1:9",
  "1 Corinthians 13:4-7",
  "Jeremiah 29:11",
  "Romans 12:2",
  "Psalm 46:1-3",
  "2 Timothy 1:7",
  "Galatians 5:22-23",
  "Psalm 121:1-2",
  "Romans 8:38-39",
  "Ephesians 2:8-9",
  "Hebrews 11:1",
  "James 1:2-4",
  "1 Peter 5:7",
  "Colossians 3:12-14",
  "Psalm 91:1-2",
  "Proverbs 16:3",
  "Isaiah 41:10",
  "Micah 6:8",
  "Matthew 6:33-34",
  "Psalm 119:105",
  "1 John 4:18-19",
  "Romans 5:8",
  "Philippians 4:13"
];

// Application state
const state = {
  currentKey: "pride",
  currentPassage: "Proverbs 16:18-19",
  currentTranslation: "web",
  currentVerseData: null,
  isCustomSearch: false,
  savedVerses: [],
  speechSynth: window.speechSynthesis || null,
  speechUtterance: null,
  isSpeaking: false,
  fontSize: 18 // base font size in px for verse text
};

// Memory cache for fetched scriptures
const verseCache = {};

// DOM Elements
const elements = {};

// Initialize on DOM load
document.addEventListener("DOMContentLoaded", () => {
  cacheElements();
  loadSavedVerses();
  setupEventListeners();
  applySavedTheme();

  // Load initial topic (pride)
  selectTopic("pride");
});

function cacheElements() {
  elements.categoryPills = document.querySelectorAll(".category-pill");
  elements.topicGrid = document.getElementById("topicGrid");
  elements.searchInput = document.getElementById("searchInput");
  elements.searchBtn = document.getElementById("searchBtn");
  elements.clearSearchBtn = document.getElementById("clearSearchBtn");
  elements.randomBtn = document.getElementById("randomBtn");
  elements.translationSelect = document.getElementById("translationSelect");
  elements.themeToggleBtn = document.getElementById("themeToggleBtn");
  elements.savedVersesBtn = document.getElementById("savedVersesBtn");
  elements.savedBadge = document.getElementById("savedBadge");

  // Display elements
  elements.displayCard = document.getElementById("displayCard");
  elements.topicBadge = document.getElementById("topicBadge");
  elements.topicTitle = document.getElementById("topicTitle");
  elements.sourceBadge = document.getElementById("sourceBadge");
  elements.verseReference = document.getElementById("verseReference");
  elements.verseTranslation = document.getElementById("verseTranslation");
  elements.verseContent = document.getElementById("verseContent");
  elements.verseLoading = document.getElementById("verseLoading");
  elements.verseActionBtns = document.getElementById("verseActionBtns");

  // Topic specific cards
  elements.guidanceSections = document.getElementById("guidanceSections");
  elements.contextSection = document.getElementById("contextSection");
  elements.contextText = document.getElementById("contextText");
  elements.overcomeSection = document.getElementById("overcomeSection");
  elements.overcomeList = document.getElementById("overcomeList");
  elements.prayerSection = document.getElementById("prayerSection");
  elements.prayerText = document.getElementById("prayerText");

  // Actions
  elements.speakBtn = document.getElementById("speakBtn");
  elements.copyBtn = document.getElementById("copyBtn");
  elements.bookmarkBtn = document.getElementById("bookmarkBtn");
  elements.shareBtn = document.getElementById("shareBtn");

  // Font size buttons
  elements.fontDecreaseBtn = document.getElementById("fontDecreaseBtn");
  elements.fontIncreaseBtn = document.getElementById("fontIncreaseBtn");
  elements.fontResetBtn = document.getElementById("fontResetBtn");

  // Saved Modal
  elements.savedModal = document.getElementById("savedModal");
  elements.closeSavedModal = document.getElementById("closeSavedModal");
  elements.savedVersesList = document.getElementById("savedVersesList");
  elements.clearAllSavedBtn = document.getElementById("clearAllSavedBtn");

  // Toast
  elements.toastContainer = document.getElementById("toastContainer");
}

function setupEventListeners() {
  // Category filter tabs
  elements.categoryPills.forEach(pill => {
    pill.addEventListener("click", () => {
      elements.categoryPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      const category = pill.dataset.category;
      filterTopicsByCategory(category);
    });
  });

  // Translation change
  elements.translationSelect.addEventListener("change", (e) => {
    state.currentTranslation = e.target.value;
    showToast(`Switched translation to ${elements.translationSelect.options[elements.translationSelect.selectedIndex].text}`);
    if (state.isCustomSearch) {
      fetchAndDisplayVerse(state.currentPassage, false);
    } else {
      selectTopic(state.currentKey, false);
    }
  });

  // Search
  elements.searchBtn.addEventListener("click", () => handleSearch());
  elements.searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  });

  elements.clearSearchBtn.addEventListener("click", () => {
    elements.searchInput.value = "";
    elements.searchInput.focus();
  });

  // Quick Chips
  document.querySelectorAll(".chip-btn").forEach(chip => {
    chip.addEventListener("click", () => {
      const verse = chip.dataset.verse;
      elements.searchInput.value = verse;
      handleSearch(verse);
    });
  });

  // Random Verse
  elements.randomBtn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * POPULAR_VERSES.length);
    const randomVerse = POPULAR_VERSES[randomIndex];
    elements.searchInput.value = randomVerse;
    handleSearch(randomVerse);
  });

  // Theme toggle
  elements.themeToggleBtn.addEventListener("click", toggleTheme);

  // Font size
  elements.fontDecreaseBtn.addEventListener("click", () => adjustFontSize(-2));
  elements.fontIncreaseBtn.addEventListener("click", () => adjustFontSize(2));
  elements.fontResetBtn.addEventListener("click", () => adjustFontSize(0));

  // Speech (Audio Read-Aloud)
  elements.speakBtn.addEventListener("click", toggleSpeech);

  // Copy verse
  elements.copyBtn.addEventListener("click", copyCurrentVerse);

  // Bookmark verse
  elements.bookmarkBtn.addEventListener("click", toggleSaveCurrentVerse);

  // Share verse
  elements.shareBtn.addEventListener("click", shareCurrentVerse);

  // Saved verses modal
  elements.savedVersesBtn.addEventListener("click", openSavedModal);
  elements.closeSavedModal.addEventListener("click", closeSavedModal);
  elements.savedModal.addEventListener("click", (e) => {
    if (e.target === elements.savedModal) closeSavedModal();
  });
  elements.clearAllSavedBtn.addEventListener("click", clearAllSaved);
}

// Filter buttons in topic grid
function filterTopicsByCategory(category) {
  const buttons = elements.topicGrid.querySelectorAll(".topic-btn");
  buttons.forEach(btn => {
    if (category === "all" || btn.dataset.category === category) {
      btn.style.display = "flex";
    } else {
      btn.style.display = "none";
    }
  });
}

// Select topic
function selectTopic(topicKey, scroll = false) {
  const topic = TOPICS[topicKey];
  if (!topic) return;

  state.currentKey = topicKey;
  state.currentPassage = topic.passage;
  state.isCustomSearch = false;

  // Highlight active button in grid
  document.querySelectorAll(".topic-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.key === topicKey);
  });

  // Update topic header
  elements.topicBadge.innerHTML = `${topic.icon} ${topic.title}`;
  elements.topicTitle.innerText = topic.title;

  // Show contextual sections
  elements.guidanceSections.style.display = "block";
  elements.contextText.innerText = topic.context;

  // Overcome bullet points
  elements.overcomeList.innerHTML = "";
  topic.overcome.forEach(point => {
    const li = document.createElement("li");
    li.innerText = point;
    elements.overcomeList.appendChild(li);
  });

  // Prayer
  elements.prayerText.innerText = `"${topic.prayer}"`;

  // Fetch scripture from internet
  fetchAndDisplayVerse(topic.passage, true, topic.offlineFallback);

  if (scroll && window.innerWidth < 768) {
    elements.displayCard.scrollIntoView({ behavior: "smooth" });
  }
}

// Handle Custom Search
function handleSearch(overrideQuery) {
  const query = (overrideQuery || elements.searchInput.value).trim();
  if (!query) {
    showToast("Please enter a Bible passage or verse to search.", "warning");
    elements.searchInput.focus();
    return;
  }

  stopSpeech();
  state.isCustomSearch = true;
  state.currentPassage = query;

  // Deselect topic buttons
  document.querySelectorAll(".topic-btn").forEach(btn => btn.classList.remove("active"));

  // Adjust display header for custom search
  elements.topicBadge.innerHTML = `🔍 Scripture Search`;
  elements.topicTitle.innerText = query;

  // Hide the topic-specific guidance sections when performing custom search
  elements.guidanceSections.style.display = "none";

  fetchAndDisplayVerse(query, false);
}

/**
 * Fetch verse from bible-api.com with fallback & caching
 */
async function fetchAndDisplayVerse(passageQuery, isTopic = false, offlineFallback = null) {
  stopSpeech();

  // Show loading
  elements.verseLoading.style.display = "flex";
  elements.verseContent.style.opacity = "0.3";
  elements.sourceBadge.innerHTML = `⏳ Fetching from live Internet...`;
  elements.sourceBadge.className = "source-badge source-loading";

  const cacheKey = `${passageQuery}_${state.currentTranslation}`.toLowerCase();

  try {
    let data = null;

    if (verseCache[cacheKey]) {
      data = verseCache[cacheKey];
    } else {
      const encodedPassage = encodeURIComponent(passageQuery.trim());
      const apiUrl = `https://bible-api.com/${encodedPassage}?translation=${state.currentTranslation}`;
      
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`Scripture not found (status ${response.status})`);
      }
      data = await response.json();
      verseCache[cacheKey] = data;
    }

    state.currentVerseData = data;
    renderVerseData(data);
    updateBookmarkButton();

  } catch (error) {
    console.warn("API Fetch error:", error);

    if (isTopic && offlineFallback) {
      // Offline fallback for known topic
      const fallbackData = {
        reference: passageQuery,
        text: offlineFallback,
        translation_name: "Curated Biblical Scripture (Offline Mode)",
        isOffline: true
      };
      state.currentVerseData = fallbackData;
      renderVerseData(fallbackData);
      showToast("Displaying offline scripture archive.", "info");
    } else {
      // Custom search error
      renderSearchError(passageQuery);
    }
  } finally {
    elements.verseLoading.style.display = "none";
    elements.verseContent.style.opacity = "1";
  }
}

// Render verse data
function renderVerseData(data) {
  elements.verseReference.innerText = data.reference;
  elements.verseTranslation.innerText = data.translation_name || state.currentTranslation.toUpperCase();

  if (data.isOffline) {
    elements.sourceBadge.innerHTML = `⚡ Offline Archival Backup`;
    elements.sourceBadge.className = "source-badge source-offline";
  } else {
    elements.sourceBadge.innerHTML = `✓ Verified Live from Internet API`;
    elements.sourceBadge.className = "source-badge source-live";
  }

  // Format verses cleanly
  if (data.verses && data.verses.length > 1) {
    let html = "";
    data.verses.forEach(v => {
      const cleanText = v.text.replace(/\n+/g, " ").trim();
      html += `<p class="verse-line"><sup class="verse-num">${v.verse}</sup> ${cleanText}</p>`;
    });
    elements.verseContent.innerHTML = html;
  } else {
    const cleanText = data.text.replace(/\n+/g, " ").trim();
    elements.verseContent.innerHTML = `<p class="verse-single">"${cleanText}"</p>`;
  }

  elements.verseActionBtns.style.display = "flex";
}

// Render search error
function renderSearchError(query) {
  elements.verseReference.innerText = `Passage Not Found`;
  elements.verseTranslation.innerText = "Check spelling or format";
  elements.sourceBadge.innerHTML = `⚠️ Search Notice`;
  elements.sourceBadge.className = "source-badge source-offline";

  elements.verseContent.innerHTML = `
    <div class="search-error-box">
      <p>We could not find <strong>"${query}"</strong> in the online Bible database.</p>
      <p class="search-hint">💡 <strong>Search tips:</strong></p>
      <ul>
        <li>Use standard book names and chapter:verse numbers (e.g., <code>John 3:16</code>, <code>Psalm 23</code>, <code>Romans 8:28</code>).</li>
        <li>For ranges, use a hyphen: <code>Philippians 4:6-7</code> or <code>1 Corinthians 13:4-8</code>.</li>
        <li>Make sure the book name is spelled correctly.</li>
      </ul>
      <p>Try clicking one of the popular verse buttons above!</p>
    </div>
  `;

  elements.verseActionBtns.style.display = "none";
}

/**
 * Text-to-Speech (Audio read-aloud)
 */
function toggleSpeech() {
  if (!state.speechSynth) {
    showToast("Text-to-speech is not supported by your browser.", "warning");
    return;
  }

  if (state.isSpeaking) {
    stopSpeech();
    return;
  }

  if (!state.currentVerseData) return;

  const textToRead = `${state.currentVerseData.reference}. ${state.currentVerseData.text}`;
  state.speechUtterance = new SpeechSynthesisUtterance(textToRead);
  state.speechUtterance.rate = 0.9; // gentle devotional reading pace
  state.speechUtterance.pitch = 1.0;

  state.speechUtterance.onstart = () => {
    state.isSpeaking = true;
    elements.speakBtn.classList.add("playing");
    elements.speakBtn.innerHTML = `<span>⏹️</span> Stop Audio`;
    showToast("Reading scripture aloud...");
  };

  state.speechUtterance.onend = () => {
    stopSpeech();
  };

  state.speechUtterance.onerror = () => {
    stopSpeech();
  };

  state.speechSynth.speak(state.speechUtterance);
}

function stopSpeech() {
  if (state.speechSynth && state.isSpeaking) {
    state.speechSynth.cancel();
  }
  state.isSpeaking = false;
  if (elements.speakBtn) {
    elements.speakBtn.classList.remove("playing");
    elements.speakBtn.innerHTML = `<span>🔊</span> Listen`;
  }
}

/**
 * Copy verse to clipboard
 */
function copyCurrentVerse() {
  if (!state.currentVerseData) return;

  const cleanText = state.currentVerseData.text.replace(/\s+/g, " ").trim();
  const fullText = `"${cleanText}" — ${state.currentVerseData.reference} (${elements.verseTranslation.innerText})\nShared via Grace & Truth Bible App`;

  navigator.clipboard.writeText(fullText).then(() => {
    showToast("Verse copied to clipboard!", "success");
  }).catch(() => {
    showToast("Failed to copy verse.", "warning");
  });
}

/**
 * Share current verse
 */
function shareCurrentVerse() {
  if (!state.currentVerseData) return;

  const cleanText = state.currentVerseData.text.replace(/\s+/g, " ").trim();
  const shareData = {
    title: `${state.currentVerseData.reference} - Bible Verse`,
    text: `"${cleanText}" — ${state.currentVerseData.reference} (${elements.verseTranslation.innerText})`
  };

  if (navigator.share) {
    navigator.share(shareData).catch(() => {});
  } else {
    copyCurrentVerse();
  }
}

/**
 * Save / Favorite verses management
 */
function loadSavedVerses() {
  try {
    const stored = localStorage.getItem("grace_saved_verses");
    state.savedVerses = stored ? JSON.parse(stored) : [];
  } catch (e) {
    state.savedVerses = [];
  }
  updateSavedBadge();
}

function updateSavedBadge() {
  if (elements.savedBadge) {
    elements.savedBadge.innerText = state.savedVerses.length;
    elements.savedBadge.style.display = state.savedVerses.length > 0 ? "inline-flex" : "none";
  }
}

function updateBookmarkButton() {
  if (!state.currentVerseData) return;
  const isSaved = state.savedVerses.some(v => v.reference === state.currentVerseData.reference && v.translation === state.currentTranslation);
  if (isSaved) {
    elements.bookmarkBtn.classList.add("saved");
    elements.bookmarkBtn.innerHTML = `<span>⭐</span> Saved`;
  } else {
    elements.bookmarkBtn.classList.remove("saved");
    elements.bookmarkBtn.innerHTML = `<span>☆</span> Save`;
  }
}

function toggleSaveCurrentVerse() {
  if (!state.currentVerseData) return;

  const ref = state.currentVerseData.reference;
  const translation = state.currentTranslation;
  const existingIndex = state.savedVerses.findIndex(v => v.reference === ref && v.translation === translation);

  if (existingIndex > -1) {
    // Remove
    state.savedVerses.splice(existingIndex, 1);
    showToast(`Removed ${ref} from saved verses.`);
  } else {
    // Add
    state.savedVerses.unshift({
      reference: ref,
      text: state.currentVerseData.text.replace(/\s+/g, " ").trim(),
      translation: translation,
      translationName: elements.verseTranslation.innerText,
      date: new Date().toLocaleDateString()
    });
    showToast(`Saved ${ref} to favorites! ⭐`, "success");
  }

  try {
    localStorage.setItem("grace_saved_verses", JSON.stringify(state.savedVerses));
  } catch (e) {}

  updateSavedBadge();
  updateBookmarkButton();
}

function openSavedModal() {
  renderSavedVersesList();
  elements.savedModal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeSavedModal() {
  elements.savedModal.classList.remove("active");
  document.body.style.overflow = "auto";
}

function renderSavedVersesList() {
  if (state.savedVerses.length === 0) {
    elements.savedVersesList.innerHTML = `
      <div class="empty-saved">
        <p>📖 You haven't saved any verses yet.</p>
        <p class="empty-sub">Click the <strong>☆ Save</strong> button on any verse to collect your favorites here!</p>
      </div>
    `;
    elements.clearAllSavedBtn.style.display = "none";
    return;
  }

  elements.clearAllSavedBtn.style.display = "inline-block";
  let html = "";
  state.savedVerses.forEach((verse, index) => {
    html += `
      <div class="saved-item">
        <div class="saved-item-header">
          <strong class="saved-item-ref">${verse.reference}</strong>
          <span class="saved-item-trans">${verse.translationName || verse.translation.toUpperCase()}</span>
        </div>
        <p class="saved-item-text">"${verse.text}"</p>
        <div class="saved-item-actions">
          <button class="saved-action-btn view-btn" onclick="viewSavedVerse(${index})">👁️ View</button>
          <button class="saved-action-btn copy-btn" onclick="copySavedVerseText(${index})">📋 Copy</button>
          <button class="saved-action-btn delete-btn" onclick="deleteSavedVerse(${index})">🗑️ Remove</button>
        </div>
      </div>
    `;
  });
  elements.savedVersesList.innerHTML = html;
}

// Global functions for modal item buttons
window.viewSavedVerse = function(index) {
  const item = state.savedVerses[index];
  if (!item) return;
  closeSavedModal();
  state.currentTranslation = item.translation;
  elements.translationSelect.value = item.translation;
  elements.searchInput.value = item.reference;
  handleSearch(item.reference);
};

window.copySavedVerseText = function(index) {
  const item = state.savedVerses[index];
  if (!item) return;
  const fullText = `"${item.text}" — ${item.reference} (${item.translationName || item.translation.toUpperCase()})`;
  navigator.clipboard.writeText(fullText).then(() => {
    showToast("Saved verse copied to clipboard!", "success");
  });
};

window.deleteSavedVerse = function(index) {
  const item = state.savedVerses[index];
  if (!item) return;
  state.savedVerses.splice(index, 1);
  try {
    localStorage.setItem("grace_saved_verses", JSON.stringify(state.savedVerses));
  } catch (e) {}
  updateSavedBadge();
  updateBookmarkButton();
  renderSavedVersesList();
  showToast("Removed verse from saved.", "info");
};

function clearAllSaved() {
  if (confirm("Are you sure you want to remove all saved verses?")) {
    state.savedVerses = [];
    try {
      localStorage.removeItem("grace_saved_verses");
    } catch (e) {}
    updateSavedBadge();
    updateBookmarkButton();
    renderSavedVersesList();
    showToast("Cleared all saved verses.");
  }
}

/**
 * Font size adjustment
 */
function adjustFontSize(delta) {
  if (delta === 0) {
    state.fontSize = 18;
  } else {
    state.fontSize = Math.min(28, Math.max(14, state.fontSize + delta));
  }
  elements.verseContent.style.fontSize = `${state.fontSize}px`;
}

/**
 * Dark/Light Mode Theme Toggle
 */
function toggleTheme() {
  const isDark = document.body.classList.toggle("dark-theme");
  elements.themeToggleBtn.innerHTML = isDark ? "☀️ Light" : "🌙 Dark";
  try {
    localStorage.setItem("grace_theme", isDark ? "dark" : "light");
  } catch (e) {}
}

function applySavedTheme() {
  try {
    const saved = localStorage.getItem("grace_theme");
    if (saved === "dark") {
      document.body.classList.add("dark-theme");
      elements.themeToggleBtn.innerHTML = "☀️ Light";
    } else {
      elements.themeToggleBtn.innerHTML = "🌙 Dark";
    }
  } catch (e) {}
}

/**
 * Toast notifications
 */
function showToast(message, type = "info") {
  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.innerText = message;

  elements.toastContainer.appendChild(toast);

  // Trigger animation
  setTimeout(() => toast.classList.add("visible"), 10);

  // Dismiss
  setTimeout(() => {
    toast.classList.remove("visible");
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}
