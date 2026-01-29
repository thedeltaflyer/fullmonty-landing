(function () {
  "use strict";

  const translations = {
    en: {
      skipLink: "Skip to main content",
      navAria: "Main navigation",
      langSelectorLabel: "Language",
      opensNewWindow: " (opens in new window)",
      navAbout: "About",
      navFood: "Food",
      navTaps: "On Tap",
      navVisit: "Visit",
      tagline: "British Pub & Cider House · Yokohama",
      eyebrow: "British cider, Japanese nights.",
      heroTitle: "Real cider, real ale, and a proper pub welcome.",
      heroText:
        "Full Monty British Pub & Cider House is a cosy British-style cider pub in the heart of Yokohama, pouring carefully selected ciders, perrys, and beers from the UK, Japan, and beyond.",
      btnTaps: "See what's on tap",
      btnVisit: "Plan your visit",
      socialLabel: "Follow the taps:",
      socialFullmaltyLabel: "(Japanese - Food Updates)",
      socialCkfullmontyLabel: "(English - Drink Updates)",
      socialFacebook: "Facebook",
      socialFullmaltyAria: "Instagram @fullmalty.pub (Japanese - Food Updates)",
      socialCkfullmontyAria: "Instagram @ckfullmonty (English - Drink Updates)",
      socialFacebookAria: "Facebook Full Monty British Pub & Cider House",
      socialFullmaltyFoodAria: "Instagram @fullmalty.pub for food updates",
      socialKaeFood: "(Kae - Food)",
      socialCliveDrinks: "(Clive - Drinks)",
      socialKaeAria: "Instagram @fullmalty.pub (Kae - Food)",
      socialCliveAria: "Instagram @ckfullmonty (Clive - Drinks)",
      heroCardTitle: "Tonight at Full Monty",
      heroCardSubtitle: "Rotating taps · Ask at the bar for today's line-up.",
      heroCardList1: "Dry, off-dry, and fruity ciders",
      heroCardList2: "Traditional perrys",
      heroCardList3: "Guest ales & craft beers",
      heroCardNote1: "The ",
      heroCardNoteLink: "list below",
      heroCardNote2:
        " is what's pouring now. Taps rotate quickly - if you see something you like, drop in soon.",
      aboutTitle: "About Full Monty British Pub & Cider House",
      about1a:
        "Full Monty British Pub & Cider House opened in December 2004, making it ",
      about1b: "Japan's oldest cider house",
      about1c:
        ". We bring the atmosphere of a neighbourhood British pub to Yokohama. Expect a relaxed space, good conversation, and a line-up that celebrates real cider and quality beer.",
      about2:
        "We focus on small producers and interesting pours - from bone-dry farmhouse styles to juicy modern ciders - alongside carefully curated beers and perrys.",
      expectTitle: "What to expect",
      expect1: "Rotating taps with limited kegs",
      expect2: "British-style pub snacks and hearty dishes",
      expect3: "Friendly, English and Japanese-speaking staff",
      foodTitle: "Food",
      foodIntro:
        "Classic British pub fare made fresh. From traditional favorites to rotating specials, we serve hearty dishes that pair perfectly with our ciders and ales.",
      foodFish: "Fish & Chips",
      foodFishDesc:
        "Crispy beer-battered fish with golden chips - Our specialty and a British classic.",
      foodPies: "Meat Pies",
      foodPiesDesc:
        "Flaky pastry filled with tender, slow-cooked meats. Traditional British comfort food at its finest.",
      foodClassic: "Classic British Fare",
      foodClassicDesc:
        "Bangers & mash, shepherd's pie, and other pub favorites. Hearty, satisfying, and authentically British.",
      foodSpecials: "Rotating Specials",
      foodSpecialsDesc:
        "Check our Instagram for weekly specials and seasonal dishes. We're always adding new items to keep things interesting.",
      foodSpecialsNote: " for the latest specials",
      tapsTitle: "On Tap",
      tapsIntro:
        "This list is what's on tap right now. We rotate kegs frequently - if you spot a favorite, come by soon. For day-to-day updates, check Instagram.",
      tapsCiders: "Ciders",
      tapsPerry: "Perry",
      tapsBeers: "Beers & Ales",
      loadingCiders: "Loading ciders…",
      loadingPerry: "Loading perry…",
      loadingBeers: "Loading beers…",
      loadingFallback: "If this doesn't update, please check Instagram.",
      bottlesTitle: "Bottled Selection",
      bottlesText1:
        "In addition to our rotating taps, Full Monty offers a wide array of bottled ciders and perrys. Available for ",
      bottlesDrinkIn: "drink-in",
      bottlesText2: " or ",
      bottlesTakeAway: "take-away",
      bottlesText3:
        " - perfect for enjoying at home or taking to your next gathering.",
      bottlesNote:
        "Ask at the bar to see our current bottle selection, or check Instagram for new arrivals.",
      tapNote1:
        "Taps change fast. For same-day changes and keg kicks, check ",
      tapNote2: " or ",
      tapNote3: " on Instagram.",
      visitTitle: "Visit Full Monty British Pub & Cider House",
      visitIntro1: "We're a short walk from ",
      visitIntro2:
        " (Keikyu Line), with easy access from Yokohama and Tokyo. Drop by for a pint after work, or settle in for a relaxed evening with friends.",
      visitAddressTitle: "Address",
      visitAddress1: "Full Monty British Pub & Cider House",
      visitAddress2: "Kitahara Bldg 102, 41 Nishi-dori, Fukutomicho,",
      visitAddress3: "Naka-ku, Yokohama-shi, Kanagawa",
      visitJapan: "Japan",
      viewMaps: "View on Google Maps (opens in new window)",
      visitHoursTitle: "Hours",
      visitMon: "Mon: ",
      visitClosed: "Closed",
      visitTueThu: "Tue-Thu: 17:00 - 22:00",
      visitFri: "Fri: 17:00 - 24:00",
      visitSat: "Sat: 16:00 - 24:00",
      visitSun: "Sun: 16:00 - 22:00",
      visitHoursNote: "Changes to hours are posted on Instagram.",
      cashOnly: "Cash only.",
      stayInTouch: "Stay in touch",
      stayInTouchText:
        "Follow us for the latest taps, events, and food specials:",
      footerCashRest:
        "For updates and last-minute changes, check Instagram.",
      footerCopyPrefix: "© ",
      footerCopySuffix: " Full Monty British Pub & Cider House, Yokohama.",
      footerNote: "Please drink responsibly.",
      emptyCiders: "No ciders on tap right now.",
      emptyPerry: "No perry on tap right now.",
      emptyBeers: "No beers on tap right now.",
      emptyMeta:
        "There aren't any on tap right now, but more will be coming soon. For the latest, check Instagram.",
      metaTitle: "Full Monty British Pub & Cider House - Yokohama",
      logoAlt: "Full Monty British Pub & Cider House logo",
      metaDesc:
        "Full Monty British Pub & Cider House is a British cider pub in Yokohama, pouring rotating ciders, perrys, and beers in a cosy pub atmosphere.",
    },
    ja: {
      skipLink: "メインコンテンツへスキップ",
      navAria: "メインナビゲーション",
      langSelectorLabel: "言語",
      opensNewWindow: " （新しいタブで開く）",
      navAbout: "店舗紹介",
      navFood: "料理",
      navTaps: "オンタップ",
      navVisit: "アクセス",
      tagline: "British Pub & Cider House · 横浜",
      eyebrow: "英国サイダー、横浜の夜。",
      heroTitle: "本格サイダー、エール、心温まるパブの歓迎。",
      heroText:
        "フルモンティ英国パブ＆サイダーハウスは、横浜の中心にある居心地のよい英国風サイダーパブです。英国・日本・世界各国から厳選したサイダー、ペリー、ビールをご用意しています。",
      btnTaps: "タップの一覧を見る",
      btnVisit: "アクセス",
      socialLabel: "フォローはこちら：",
      socialFullmaltyLabel: "（日本語・料理更新）",
      socialCkfullmontyLabel: "（英語・ドリンク更新）",
      socialFacebook: "Facebook",
      socialFullmaltyAria: "Instagram @fullmalty.pub (日本語・料理更新)",
      socialCkfullmontyAria: "Instagram @ckfullmonty (英語・ドリンク更新)",
      socialFacebookAria: "Facebook フルモンティ英国パブ＆サイダーハウス",
      socialFullmaltyFoodAria: "Instagram @fullmalty.pub 料理更新",
      socialKaeFood: " (Kae・料理)",
      socialCliveDrinks: " (Clive・ドリンク)",
      socialKaeAria: "Instagram @fullmalty.pub (Kae・料理)",
      socialCliveAria: "Instagram @ckfullmonty (Clive・ドリンク)",
      heroCardTitle: "本日のフルモンティ",
      heroCardSubtitle:
        "タップは日替わり。本日のラインナップはバーでお尋ねください。",
      heroCardList1: "辛口・中辛・フルーティなサイダー",
      heroCardList2: "伝統のペリー",
      heroCardList3: "ゲストエール＆クラフトビール",
      heroCardNote1: "「",
      heroCardNoteLink: "下のリスト",
      heroCardNote2:
        "」が現在の提供メニューです。タップは入れ替わりが早いので、お気に入りを見つけたらお早めに。",
      aboutTitle: "フルモンティ英国パブ＆サイダーハウスについて",
      about1a:
        "フルモンティ英国パブ&サイダーハウスは2004年12月にオープンし、",
      about1b: "日本最古のサイダーハウス",
      about1c:
        "です。横浜にイギリスの街角パブの雰囲気をお届けしています。落ち着いた空間、会話、本格サイダーとビールのラインナップをご堪能ください。",
      about2:
        "小規模醸造所とユニークな味わいにこだわり、辛口のファームハウスからフルーティな現代サイダーまで、厳選したビールとペリーをご用意しています。",
      expectTitle: "ご案内",
      expect1: "日替わりのタップ、数量限定樽",
      expect2: "英国風パブスナックとボリュームある料理",
      expect3: "英語・日本語対応のスタッフ",
      foodTitle: "料理",
      foodIntro:
        "英国パブの定番料理をその場で。定番メニューから日替わりスペシャルまで、サイダーやエールに合うボリュームある料理をご提供します。",
      foodFish: "フィッシュ＆チップス",
      foodFishDesc:
        "ビールバッターのサクサク白身と黄金のポテト。当店自慢の英国定番メニュー。",
      foodPies: "ミートパイ",
      foodPiesDesc:
        "ほろほろパイにやわらかい低温調理の肉。英国の定番コンフォートフード。",
      foodClassic: "英国定番メニュー",
      foodClassicDesc:
        "バンガーズ＆マッシュ、シェパーズパイなど。ボリュームたっぷり、本格英国味。",
      foodSpecials: "日替わりスペシャル",
      foodSpecialsDesc:
        "週替わり・季節のメニューはInstagramで。いつも新しい一品を追加しています。",
      foodSpecialsNote: " 最新スペシャルはこちら",
      tapsTitle: "オンタップ",
      tapsIntro:
        "こちらが現在のタップメニューです。樽の入れ替えは頻繁です。お気に入りを見つけたらお早めに。日々の更新はInstagramで。",
      tapsCiders: "サイダー",
      tapsPerry: "ペリー",
      tapsBeers: "ビール＆エール",
      loadingCiders: "サイダーを読み込み中…",
      loadingPerry: "ペリーを読み込み中…",
      loadingBeers: "ビールを読み込み中…",
      loadingFallback: "更新されない場合はInstagramをご確認ください。",
      bottlesTitle: "ボトルメニュー",
      bottlesText1:
        "タップに加え、フルモンティではさまざまなボトルサイダー・ペリーをご用意。",
      bottlesDrinkIn: "店内飲食",
      bottlesText2: "も",
      bottlesTakeAway: "テイクアウト",
      bottlesText3: "も可能。ご自宅や次の飲み会にどうぞ。",
      bottlesNote:
        "現在のボトルメニューはバーでお尋ねください。新入荷はInstagramでもお知らせしています。",
      tapNote1: "タップは入れ替わりが早いです。当日の変更やキックは ",
      tapNote2: " または ",
      tapNote3: " で。",
      visitTitle: "フルモンティ英国パブ＆サイダーハウスへのアクセス",
      visitIntro1: "日の出町駅（京急）から徒歩圏内。",
      visitIntro2:
        " 横浜・都心からもアクセス良好。仕事帰りの一杯や、友達とのんびり過ごすのにぴったりです。",
      visitAddressTitle: "住所",
      visitAddress1: "フルモンティ英国パブ＆サイダーハウス",
      visitAddress2: "北原ビル102, 西通41, 福富町,",
      visitAddress3: "中区、横浜市、神奈川県",
      visitJapan: "日本",
      viewMaps: "Googleマップで見る (新しいタブで開く)",
      visitHoursTitle: "営業時間",
      visitMon: "月：",
      visitClosed: "定休",
      visitTueThu: "火〜木: 17:00〜22:00",
      visitFri: "金: 17:00〜24:00",
      visitSat: "土: 16:00〜24:00",
      visitSun: "日: 16:00〜22:00",
      visitHoursNote: "営業時間の変更はInstagramでお知らせします。",
      cashOnly: "現金のみ。",
      stayInTouch: "フォローはこちら",
      stayInTouchText: "タップ・イベント・料理の最新情報はこちらで。",
      footerCashRest: "最新情報・直前の変更はInstagramをご確認ください。",
      footerCopyPrefix: "© ",
      footerCopySuffix: " フルモンティ英国パブ＆サイダーハウス、横浜",
      footerNote: "お酒は二十歳になってから。適量をお楽しみください。",
      emptyCiders: "現在サイダーは出ておりません。",
      emptyPerry: "現在ペリーは出ておりません。",
      emptyBeers: "現在ビールは出ておりません。",
      emptyMeta:
        "まもなく入荷予定です。最新情報はInstagramをご確認ください。",
      metaTitle: "フルモンティ英国パブ＆サイダーハウス - 横浜",
      logoAlt: "フルモンティ英国パブ＆サイダーハウス ロゴ",
      metaDesc:
        "フルモンティ英国パブ＆サイダーハウスは、横浜の英国風サイダーパブ。厳選したサイダー、ペリー、ビールをご提供しています。",
    },
  };

  let currentLang = "en";
  const STORAGE_KEY = "fullmonty-lang";

  window.t = function (key) {
    const s = translations[currentLang] && translations[currentLang][key];
    return s != null ? s : (translations.en[key] || key);
  };

  window.applyLanguage = function (lang) {
    if (!translations[lang]) lang = "en";
    currentLang = lang;
    document.documentElement.lang = lang === "ja" ? "ja" : "en";

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.content = window.t("metaDesc");
    const titleEl = document.querySelector("title");
    if (titleEl) titleEl.textContent = window.t("metaTitle");

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      const key = el.getAttribute("data-i18n");
      const val = window.t(key);
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        el.placeholder = val;
      } else if (el.tagName === "IMG") {
        el.setAttribute("alt", val);
      } else {
        el.textContent = val;
      }
    });

    const suffix =
      window.t("opensNewWindow") || " (opens in new window)";

    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      const key = el.getAttribute("data-i18n-aria");
      if (!key) return;
      let val = window.t(key);
      if (
        el.tagName === "A" &&
        el.getAttribute("target") === "_blank" &&
        suffix
      ) {
        val = val + suffix;
      }
      el.setAttribute("aria-label", val);
    });
    document.querySelectorAll("[data-i18n-title]").forEach(function (el) {
      const key = el.getAttribute("data-i18n-title");
      if (!key) return;
      let val = window.t(key);
      if (
        el.tagName === "A" &&
        el.getAttribute("target") === "_blank" &&
        suffix
      ) {
        val = val + suffix;
      }
      el.setAttribute("title", val);
    });

    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      const isActive = btn.getAttribute("data-lang") === lang;
      btn.setAttribute("aria-pressed", isActive ? "true" : "false");
      btn.classList.toggle("lang-btn-active", isActive);
    });

    document.querySelectorAll("[data-i18n-hide]").forEach(function (el) {
      const hideWhen = (el.getAttribute("data-i18n-hide") || "").split(/[\s,]+/);
      el.style.display = hideWhen.indexOf(lang) !== -1 ? "none" : "";
    });

    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}

    if (window.taplistCache) {
      window.renderTaplist(window.taplistCache);
    }
  };

  function prefersJapanese() {
    try {
      const n = navigator;
      const lang = n.language || n.userLanguage || "";
      const langs = n.languages || [lang];
      return langs.some(function (l) {
        return (l || "").toLowerCase().startsWith("ja");
      });
    } catch (e) {
      return false;
    }
  }

  window.initI18n = function () {
    let lang = "en";
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "en" || saved === "ja") {
        lang = saved;
      } else if (prefersJapanese()) {
        lang = "ja";
      }
    } catch (e) {}
    window.applyLanguage(lang);

    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        const l = btn.getAttribute("data-lang");
        if (l && (l === "en" || l === "ja")) window.applyLanguage(l);
      });
    });
  };
})();
