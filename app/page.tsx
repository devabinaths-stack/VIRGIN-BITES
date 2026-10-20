'use client';

import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';

const cafeMenu = [
  { category: 'Sandwich', items: ['Veg Sandwich', 'Paneer Sandwich', 'Chicken Sandwich', 'Sweetcorn Sandwich', 'Egg Sandwich', 'Cheese Sandwich', 'Peanut Butter Sandwich'] },
  { category: 'Burgers', items: ['Veg Burger', 'Paneer Burger', 'Chicken Burger', 'Double Patty Veg Burger', 'Double Patty Paneer Burger', 'Double Patty Chicken Burger', '1000 Island Veg Burger', '1000 Island Paneer Burger', '1000 Island Chicken Burger'] },
  { category: 'Starter', items: ['Veg Nuggets (10 pieces)', 'Chicken Nuggets (5 pieces)', 'Veg Momos', 'Paneer Momos', 'Chicken Momos', 'Cheese Corn Momos', 'Smilies (5 pieces)', 'Chicken Popcorn (10 pieces)', 'Chicken Strips (3 pieces)'] },
  { category: 'Fries', items: ['French Fries', 'Loaded French Fries', 'Peri Peri French Fries'] },
  { category: 'Hot Drinks', items: ['Tea', 'Coffee', 'Milk', 'Horlicks', 'Boost', 'Cold Rose Milk', 'Cold Badam Milk'] },
  { category: 'Mojito', items: ['Lime Mint Mojito', 'Mango Mojito', 'Watermelon Mojito', 'Pomegranate Mojito', 'Blue Lacon Mojito', 'Galaxy Mojito'] },
  { category: 'Pasta', items: ['Chicken Pasta', 'Creamy Tomato Pasta', 'Mushroom Pasta', 'Cheesy Macaroni', 'Spicy Masala Pasta'] },
  { category: 'Maggie', items: ['Veg Maggie', 'Egg Maggie', 'Chicken Maggie', 'Cheese Maggie'] },
  { category: 'Wrap', items: ['Veg Wrap', 'Paneer Wrap', 'Chicken Wrap', 'Egg Wrap'] },
  { category: 'Soup', items: ['Veg Soup', 'Chicken Soup'] },
  { category: 'Milkshake', items: ['Vanilla Milkshake', 'Chocolate Milkshake', 'Oreo Milk Shake', 'Kitkat Milkshake', 'Strawberry Milkshake', 'Brownie Milkshake'] },
  { category: 'Brownie', items: ['Sizzler Brownie', 'Brownie with Ice Cream'] },
];
const bulkMenu = [
  { category: 'Brownies', items: ['Wheat Brownie', 'Classic Brownie', 'Ragi Brownie', 'Choco Lava'] },
  { category: 'Dry Cakes', items: ['Tea Cake', 'Fruit Cake', 'Banana Cake', 'Carrot Cake', 'Pineapple Cake', 'Rose Cake', 'Pudding Cake'] },
  { category: 'Muffins', items: ['Vanilla Muffin', 'Tutti Frutti Muffin', 'Choco Muffin', 'Carrot Muffin', 'Banana Muffin', 'Plum Cake Muffin'] },
  { category: 'Bun Varieties', items: ['Cream Bun', 'Jam Bun', 'Strawberry Cream Bun', 'Mango Cream Bun', 'Pineapple Cream Bun', 'Chocolate Cream Bun'] },
  { category: 'Ready-to-Eat Foods', items: ['Veg Sandwich', 'Chicken Sandwich', 'Paneer Sandwich', 'Veg Burger', 'Paneer Burger', 'Chicken Burger', 'Veg Frankie (Mini)', 'Paneer Frankie (Mini)', 'Chicken Frankie (Mini)'] },
  { category: 'Whole Wheat Cookies', items: ['Salt Cookies', 'Butter Cookies', 'Choco Chip Cookies', 'Coconut Cookies', 'Cashew Cookies', 'Dry Fruit & Nut Cookies'] },
  { category: 'Bread Varieties', items: ['Sandwich Bread', 'Milk Bread', 'Wheat Bread', 'Multigrain Bread', 'Burger Bun', 'Tea Bun (Maida)'] },
  { category: 'Maida Cookies', items: ['Salt Cookies', 'Butter Cookies', 'Choco Chip Cookies', 'Coconut Cookies', 'Cashew Cookies', 'Dry Fruit & Nut Cookies'] },
  { category: 'Pastry', items: ['Dark Choco Pastry', 'White Choco Pastry'] },
  { category: 'Fried Items', items: ['Aloo Samosa', 'Veg Cutlet', 'Onion Samosa', 'B. Onion Samosa', 'B. Sweetcorn Samosa', 'B. Paneer Samosa', 'B. Egg Samosa', 'Chicken Roll', 'Veg Roll', 'Paneer Roll', 'Egg Roll'] },
  { category: 'Ready-to-Cook Foods', items: ['Poori', 'Chapati', 'Parotta', 'Wheat Parotta', 'Savai', 'Idly'] },
  { category: 'Snacks Items', items: ['Veg Puff', 'Egg Puff', 'Mushroom Puff', 'Paneer Puff', 'Chicken Puff', 'Donuts', 'Donuts (Mini)'] },
];
const categoryMarks: Record<string, string> = {
  All: '✦', Sandwich: '▤', Burgers: '◒', Starter: '✳', Fries: '≋',
  'Hot Drinks': '♨', Mojito: '◉', Pasta: '〰', Maggie: '⌁', Wrap: '◖',
  Soup: '∪', Milkshake: '◇', Brownie: '▧', Brownies: '▧', 'Dry Cakes': '◈',
  Muffins: '⌂', 'Bun Varieties': '◓', 'Ready-to-Eat Foods': '✦',
  'Whole Wheat Cookies': '◍', 'Bread Varieties': '▱', 'Maida Cookies': '◉',
  Pastry: '◇', 'Fried Items': '✳', 'Ready-to-Cook Foods': '◌', 'Snacks Items': '✣',
};
const categoryImages: Record<string, string> = {
  Sandwich: '/images/menu/cafe-sandwiches.jpg', Burgers: '/images/menu/cafe-burgers.jpg',
  Starter: '/images/menu/cafe-starters.jpg', Fries: '/images/menu/cafe-fries.jpg',
  'Hot Drinks': '/images/menu/cafe-hot-drinks.svg', Mojito: '/images/menu/cafe-mojito.jpg',
  Pasta: '/images/menu/cafe-pasta.jpg', Maggie: '/images/menu/cafe-maggie.jpg',
  Wrap: '/images/menu/cafe-wrap.jpg', Soup: '/images/menu/cafe-soup.jpg',
  Milkshake: '/images/menu/cafe-milkshake.jpg', Brownie: '/images/menu/cafe-brownies.jpg',
  Brownies: '/images/menu/cafe-brownies.jpg', 'Dry Cakes': '/images/menu/bulk-dry-cakes.jpg',
  Muffins: '/images/menu/bulk-muffins.jpg', 'Bun Varieties': '/images/menu/bulk-buns.jpg',
  'Ready-to-Eat Foods': '/images/menu/bulk-ready-to-eat.jpg',
  'Whole Wheat Cookies': '/images/menu/bulk-wholewheat-cookies.jpg',
  'Bread Varieties': '/images/menu/bulk-breads.jpg', 'Maida Cookies': '/images/menu/bulk-maida-cookies.jpg',
  Pastry: '/images/menu/bulk-pastry.jpg', 'Fried Items': '/images/menu/bulk-fried-items.jpg',
  'Ready-to-Cook Foods': '/images/menu/bulk-ready-to-cook.jpg', 'Snacks Items': '/images/menu/bulk-snacks.jpg',
};
const cafePhone = '+919944919062';
const ceoPhone = '+917708274141';
const cafeAddress = '2/246 Dhanam Nagar, Mylampatti Panchayat, Coimbatore, Tamil Nadu 641062';
const contactLinks = {
  call: `tel:${cafePhone}`,
  whatsapp: `https://wa.me/${cafePhone.replace('+', '')}`,
  email: 'mailto:dineshvenkatachalam0@gmail.com',
  businessEmail: 'mailto:info.virginbites@gmail.com',
  ceoCall: `tel:${ceoPhone}`,
  maps: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`Virgin Bites ${cafeAddress}`)}`,
  studioInstagram: 'https://www.instagram.com/aegonstudioz/',
  studioEmail: 'https://mail.google.com/mail/?view=cm&fs=1&to=aegonstudioz%40gmail.com',
  studioWhatsApp: 'https://wa.me/918754954940?text=Hello%20Aegon%20Studioz%2C%20I%20would%20like%20to%20enquire%20about%20a%20website.',
};

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [menuMode, setMenuMode] = useState<'cafe' | 'bulk'>('cafe');
  const [category, setCategory] = useState('All');
  const [search, setSearch] = useState('');
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1200);
    return () => window.clearTimeout(timer);
  }, []);

  const activeMenu = menuMode === 'cafe' ? cafeMenu : bulkMenu;
  const categories = ['All', ...activeMenu.map((group) => group.category)];
  const filteredGroups = useMemo(() => {
    const query = search.trim().toLowerCase();
    return activeMenu
      .filter((group) => category === 'All' || group.category === category)
      .map((group) => ({ ...group, items: group.items.filter((item) => item.toLowerCase().includes(query)) }))
      .filter((group) => group.items.length > 0);
  }, [activeMenu, category, search]);

  if (loading) {
    return (
      <div className="loader-screen" aria-label="Loading Virgin Bites">
        <div className="loader-ring"><div className="burger">🍔</div></div>
        <div className="loader-word">VIRGIN <span>BITES</span></div>
        <div className="loader-line"><span /></div>
        <p>Unadulterated Love</p>
      </div>
    );
  }

  return (
    <main className="site-shell">
      <header className="nav">
        <a href="#top" className="brand" aria-label="Virgin Bites home">
          <Image src="/images/virgin-bites-header-transparent.png" alt="Virgin Bites — Unadulterated Love" width={300} height={78} priority />
        </a>
        <nav id="site-nav" className={navOpen ? 'navlinks open' : 'navlinks'} aria-label="Main navigation">
          <a href="#menu" onClick={() => setNavOpen(false)}>Menu</a>
          <a href="#about" onClick={() => setNavOpen(false)}>Our kitchen</a>
          <a href="#stalls" onClick={() => setNavOpen(false)}>Event stalls</a>
          <a href="#contact" onClick={() => setNavOpen(false)}>Contact</a>
        </nav>
        <div className="nav-actions">
          <a className="nav-order" href={contactLinks.call}><span className="nav-call-label">Call Dinesh</span><span aria-hidden="true">☎</span></a>
          <button className="hamb" type="button" aria-label={navOpen ? 'Close navigation' : 'Open navigation'} aria-controls="site-nav" aria-expanded={navOpen} onClick={() => setNavOpen(!navOpen)}>
            <span aria-hidden="true">{navOpen ? '×' : '☰'}</span>
          </button>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-bg" />
        <div className="hero-noise" />
        <div className="hero-copy">
          <div className="eyebrow"><span /> CAFE · COMFORT FOOD · GOOD COMPANY <span /></div>
          <h1>Good food.<br /><em>Pure feeling.</em></h1>
          <p>From sandwiches and burgers to pasta, momos and milkshakes — fresh favourites made with <strong>Unadulterated Love.</strong></p>
        </div>
        <div className="hero-badge"><Image src="/images/virgin-bites-seal.jpeg" alt="Virgin Bites seal" width={150} height={150} /><span>MADE WITH LOVE</span></div>
        <a className="scroll-cue" href="#menu">SCROLL TO TASTE <span>↓</span></a>
      </section>

      <section className="marquee" aria-label="Virgin Bites favourites">
        <div>SANDWICHES <i>✦</i> BURGERS <i>✦</i> MOMOS <i>✦</i> FRIES <i>✦</i> PASTA <i>✦</i> MOJITOS <i>✦</i> MILKSHAKES <i>✦</i> UNADULTERATED LOVE <i>✦</i></div>
      </section>

      <section className="menu-section section" id="menu">
        <div className="menu-head">
          <div><div className="section-kicker">02 / THE VIRGIN BITES MENU</div><h2>Find your <em>favourite.</em></h2></div>
          <p>Choose a café favourite or explore the bulk menu. Every category has its own dish photo and complete list.</p>
        </div>
        <div className="menu-type-switch" role="tablist" aria-label="Choose a menu">
          <button type="button" role="tab" aria-selected={menuMode === 'cafe'} className={menuMode === 'cafe' ? 'menu-type-button active' : 'menu-type-button'} onClick={() => { setMenuMode('cafe'); setCategory('All'); setSearch(''); }}>
            <span className="menu-type-mark">01</span><span><strong>Café menu</strong><small>Everyday favourites</small></span><b aria-hidden="true">↗</b>
          </button>
          <button type="button" role="tab" aria-selected={menuMode === 'bulk'} className={menuMode === 'bulk' ? 'menu-type-button active' : 'menu-type-button'} onClick={() => { setMenuMode('bulk'); setCategory('All'); setSearch(''); }}>
            <span className="menu-type-mark">02</span><span><strong>Bulk orders</strong><small>Bakery & event quantities</small></span><b aria-hidden="true">↗</b>
          </button>
        </div>
        <div className="menu-tools">
          <label className="menu-search"><span aria-hidden="true">⌕</span><input type="search" aria-label="Search menu dishes" placeholder="Search the menu…" value={search} onChange={(event) => setSearch(event.target.value)} />{search && <button type="button" aria-label="Clear search" onClick={() => setSearch('')}>×</button>}</label>
          <span className="menu-count">{filteredGroups.reduce((total, group) => total + group.items.length, 0)} DISHES</span>
        </div>
        <div className="journal-tabs" role="tablist" aria-label="Menu categories">
          {categories.map((itemCategory) => <button key={itemCategory} type="button" role="tab" aria-selected={category === itemCategory} className={category === itemCategory ? 'journal-tab active' : 'journal-tab'} onClick={() => setCategory(itemCategory)}><span>{categoryMarks[itemCategory]}</span>{itemCategory}</button>)}
        </div>
        <div className="journal-grid" aria-live="polite">
          {filteredGroups.length ? filteredGroups.map((group, groupIndex) => (
            <article className="journal-card" key={group.category} style={{ animationDelay: `${Math.min(groupIndex * 70, 490)}ms` }}>
              <div className="journal-photo"><Image src={categoryImages[group.category]} alt={`${group.category} food`} width={1200} height={760} sizes="(max-width: 650px) 100vw, (max-width: 980px) 50vw, 33vw" priority={groupIndex < 3} /></div>
              <div className="journal-card-head"><span className="journal-mark">{categoryMarks[group.category]}</span><div><span className="journal-index">CATEGORY {String(activeMenu.findIndex((entry) => entry.category === group.category) + 1).padStart(2, '0')}</span><h3>{group.category}</h3></div><span className="journal-total">{String(group.items.length).padStart(2, '0')}</span></div>
              <ol className="journal-items">{group.items.map((item, itemIndex) => <li key={item} style={{ animationDelay: `${Math.min(itemIndex * 35, 350)}ms` }}><span className="journal-item-index">{String(itemIndex + 1).padStart(2, '0')}</span><span className="journal-item-name">{item}</span><span className="journal-item-end">✦</span></li>)}</ol>
            </article>
          )) : (
            <div className="journal-empty"><span>⌕</span><h3>No dishes found</h3><p>Try another search, or clear it to see the full menu.</p><button className="text-link" onClick={() => { setSearch(''); setCategory('All'); }}>Show the full menu <span>→</span></button></div>
          )}
        </div>
        <p className="menu-footnote"><span>✦</span>{menuMode === 'cafe' ? 'Please contact Mr. Dinesh for availability and details.' : 'For bulk quantities and quotations, please contact Mr. Dinesh.'}</p>
      </section>

      <section className="intro section" id="about">
        <div className="section-kicker">03 / THE VIRGIN BITES TABLE</div>
        <div className="intro-grid"><h2>Your favourites,<br /><em>made fresh.</em></h2><div><p className="lead">A little something for every craving.</p><p>Drop in for a quick bite, catch up over a cold drink, or bring your friends and family around the table. We’d love to help you choose.</p><a href="#contact" className="text-link">Talk to Mr. Dinesh <span>→</span></a></div></div>
      </section>

      <section className="stall-promo section" id="stalls">
        <div className="stall-photo" role="img" aria-label="Virgin Bites burgers with fries" />
        <div className="stall-copy"><div className="section-kicker">04 / VIRGIN BITES AT YOUR EVENT</div><p className="promo-overline">COLLEGE FETS · CONVENTIONS · COMMUNITY EVENTS</p><h2>Bring great food<br /><em>to the crowd.</em></h2><p>Planning a college fest, convention or community event? Bring Virgin Bites favourites to your guests with a welcoming food stall made for good company.</p><a className="btn dark" href={contactLinks.whatsapp + '?text=Hello%20Mr.%20Dinesh%2C%20I%20would%20like%20to%20enquire%20about%20a%20Virgin%20Bites%20food%20stall%20for%20an%20event.'} target="_blank" rel="noreferrer">Enquire about an event stall <span>↗</span></a></div>
      </section>

      <section className="contact-section section" id="contact">
        <div className="contact-card"><div className="section-kicker">05 / WE’RE HERE TO HELP</div><h2>Let’s make it <em>delicious.</em></h2><p>For café visits, bulk quantities and event stalls, reach the right person directly.</p>
          <div className="contact-people">
            <article className="contact-person contact-person-ceo"><div className="contact-person-top"><span className="contact-monogram">N</span><span className="contact-role">CHIEF EXECUTIVE OFFICER</span></div><strong>NANDHANAA K.S</strong><a className="contact-phone" href={contactLinks.ceoCall}>+91 77082 74141</a><a className="btn contact-call" href={contactLinks.ceoCall}><span className="contact-action-icon" aria-hidden="true">☎</span>Call Nandhanaa<span className="contact-action-arrow" aria-hidden="true">↗</span></a></article>
            <article className="contact-person contact-person-owner"><div className="contact-person-top"><span className="contact-monogram">D</span><span className="contact-role">PROPRIETOR</span></div><strong>DINESH V</strong><a className="contact-phone" href={contactLinks.call}>+91 99449 19062</a><div className="person-actions"><a className="btn contact-call" href={contactLinks.call}><span className="contact-action-icon" aria-hidden="true">☎</span>Call Dinesh<span className="contact-action-arrow" aria-hidden="true">↗</span></a><a className="btn whatsapp" href={contactLinks.whatsapp} target="_blank" rel="noreferrer"><span className="contact-action-icon" aria-hidden="true">◉</span>WhatsApp<span className="contact-action-arrow" aria-hidden="true">↗</span></a></div></article>
          </div>
          <div className="contact-emails"><a href={contactLinks.email}>dineshvenkatachalam0@gmail.com</a><a href={contactLinks.businessEmail}>info.virginbites@gmail.com</a></div>
          <div className="address-card"><div><span>HEAD OFFICE</span><address>{cafeAddress}</address></div><a className="btn dark" href={contactLinks.maps} target="_blank" rel="noreferrer">Open location in Google Maps <span>↗</span></a></div>
        </div>
      </section>

      <section className="closing"><Image src="/images/virgin-bites-logo.jpeg" alt="Virgin Bites" width={420} height={185} className="closing-logo" /><h2>Come hungry.<br /><em>Leave loved.</em></h2><p>Unadulterated Love, served every day.</p><a href={contactLinks.whatsapp} target="_blank" rel="noreferrer" className="btn primary">Say hello on WhatsApp <span>↗</span></a></section>

      <footer>
        <div className="footer-brand"><Image src="/images/virgin-bites-logo.jpeg" alt="Virgin Bites" width={210} height={92} /><p>Unadulterated Love.</p></div>
        <div><span>EXPLORE</span><a href="#menu">Menu</a><a href="#about">Our kitchen</a><a href="#stalls">Event stalls</a></div>
        <div><span>CONTACT</span><a href={contactLinks.call}>Call Dinesh V</a><a href={contactLinks.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a><a href={contactLinks.ceoCall}>Call Nandhanaa K.S</a><a href={contactLinks.maps} target="_blank" rel="noreferrer">Head office location</a></div>
        <div><span>EMAIL</span><a href={contactLinks.email}>dineshvenkatachalam0@gmail.com</a><a href={contactLinks.businessEmail}>info.virginbites@gmail.com</a></div>
      </footer>
      <div className="footer-bottom"><span>© 2026 Virgin Bites</span><span>Unadulterated Love</span></div>

      <section className="aegon-endcap" id="aegon-studio" aria-labelledby="aegon-title">
        <div className="aegon-endcap-inner">
          <div className="aegon-logo-frame"><Image src="/images/aegon-studioz-logo.jpg" alt="Aegon Studioz logo" width={640} height={640} /></div>
          <div className="aegon-endcap-copy"><span className="aegon-kicker">THE CREATIVE STUDIO BEHIND THIS WEBSITE</span><h2 id="aegon-title">Your business deserves<br /><em>a beautiful home online.</em></h2><p>Aegon Studioz creates thoughtful, mobile-first websites for businesses and brands. Let’s make yours next.</p>
            <div className="aegon-links">
              <a className="aegon-link" href={contactLinks.studioInstagram} target="_blank" rel="noreferrer"><span aria-hidden="true">◎</span><span><small>FOLLOW ON INSTAGRAM</small><strong>@aegonstudioz</strong></span><b aria-hidden="true">↗</b></a>
              <a className="aegon-link" href={contactLinks.studioEmail} target="_blank" rel="noreferrer"><span aria-hidden="true">✉</span><span><small>EMAIL THE STUDIO</small><strong>aegonstudioz@gmail.com</strong></span><b aria-hidden="true">↗</b></a>
              <a className="aegon-link aegon-whatsapp" href={contactLinks.studioWhatsApp} target="_blank" rel="noreferrer"><span aria-hidden="true">◉</span><span><small>START A WHATSAPP CHAT</small><strong>+91 87549 54940</strong></span><b aria-hidden="true">↗</b></a>
            </div>
          </div>
        </div>
        <p className="aegon-signoff">AEGON STUDIOZ <span>·</span> DESIGNING DIGITAL FIRST IMPRESSIONS</p>
      </section>
    </main>
  );
}
