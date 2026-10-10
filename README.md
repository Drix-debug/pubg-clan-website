* {
  box-sizing: border-box;
}

:root {
  --bg: #0a0d12;
  --bg-soft: #101722;
  --panel: rgba(17, 23, 34, 0.92);
  --panel-alt: rgba(24, 30, 42, 0.95);
  --border: rgba(148, 163, 184, 0.18);
  --text: #edf3ff;
  --muted: #b6c0d9;
  --primary: #ff6b00;
  --primary-soft: rgba(255, 107, 0, 0.12);
  --green: #6ee7b7;
  --blue: #5da9ff;
  --shadow: 0 18px 50px rgba(0, 0, 0, 0.28);
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: 'Inter', sans-serif;
  background:
    radial-gradient(circle at top, rgba(255, 107, 0, 0.18), transparent 25%),
    linear-gradient(180deg, #070b11 0%, #0a0d12 100%);
  color: var(--text);
}

a {
  color: inherit;
  text-decoration: none;
}

button,
input,
select {
  font: inherit;
}

img {
  max-width: 100%;
}

.container {
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;
}

.app-shell {
  min-height: 100vh;
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 30;
  backdrop-filter: blur(14px);
  background: rgba(10, 13, 18, 0.7);
  border-bottom: 1px solid var(--border);
}

.nav-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 78px;
  gap: 16px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-size: 1.1rem;
  font-weight: 800;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.brand-mark {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 34px;
  height: 34px;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--primary), #ff9b42);
  color: #fff;
  font-weight: 900;
  box-shadow: 0 12px 24px rgba(255, 107, 0, 0.32);
}

.main-nav {
  display: flex;
  align-items: center;
  gap: 18px;
  flex-wrap: wrap;
}

.nav-link {
  color: var(--muted);
  font-weight: 500;
  transition: color 0.2s ease;
}

.nav-link:hover,
.nav-link.active {
  color: var(--text);
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  border: 1px solid transparent;
  padding: 0.9rem 1.25rem;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}

.button:hover {
  transform: translateY(-1px);
}

.button-primary {
  background: linear-gradient(135deg, var(--primary), #ff8d3a);
  color: #111;
  box-shadow: 0 12px 24px rgba(255, 107, 0, 0.28);
}

.button-secondary {
  background: rgba(148, 163, 184, 0.1);
  border-color: var(--border);
  color: var(--text);
}

.button-ghost {
  background: transparent;
  border-color: var(--border);
  color: var(--text);
}

.button-block {
  width: 100%;
}

.page-content {
  padding-bottom: 72px;
}

.hero-section {
  padding: 54px 0 32px;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 32px;
  align-items: center;
}

.hero-copy h1 {
  margin: 12px 0;
  font-size: clamp(2.8rem, 5vw, 4.5rem);
  line-height: 0.98;
  letter-spacing: -0.05em;
}

.eyebrow {
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: var(--primary);
  font-size: 0.72rem;
  font-weight: 700;
}

.hero-text {
  max-width: 650px;
  color: var(--muted);
  font-size: 1.08rem;
  line-height: 1.8;
}

.cta-row {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  margin-top: 26px;
}

.hero-stats {
  margin-top: 28px;
}

.mini-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
}

.mini-grid div {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 18px 20px;
  border: 1px solid var(--border);
  border-radius: 18px;
  background: rgba(15, 21, 31, 0.8);
}

.mini-grid strong {
  font-size: 1.6rem;
}

.mini-grid span {
  color: var(--muted);
  font-size: 0.85rem;
}

.hero-card {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 22px;
  padding: 24px;
  background: linear-gradient(180deg, rgba(18, 24, 34, 0.95), rgba(12, 17, 24, 0.94));
  border: 1px solid var(--border);
  border-radius: 26px;
  box-shadow: var(--shadow);
}

.hero-card-top {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--muted);
}

.status-dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--green);
  box-shadow: 0 0 18px rgba(110, 231, 183, 0.9);
}

.progress-labels {
  display: flex;
  justify-content: space-between;
  color: var(--muted);
  margin-bottom: 10px;
}

.progress-bar {
  position: relative;
  width: 100%;
  height: 12px;
  border-radius: 999px;
  background: rgba(148, 163, 184, 0.12);
  overflow: hidden;
}

.progress-bar span {
  display: block;
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, var(--primary), #ff9b42);
}

.hero-metrics {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.metric-box {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 18px;
  border-radius: 18px;
  border: 1px solid var(--border);
  background: var(--panel-alt);
}

.metric-box span {
  color: var(--muted);
  font-size: 0.78rem;
}

.metric-box strong {
  font-size: 1.3rem;
}

.metric-primary strong { color: var(--primary); }
.metric-orange strong { color: #ffb266; }
.metric-green strong { color: var(--green); }
.metric-blue strong { color: var(--blue); }

.section {
  padding: 34px 0;
}

.soft-bg {
  background: rgba(14, 20, 29, 0.7);
}

.section-header {
  margin-bottom: 22px;
}

.section-header h2 {
  margin: 8px 0 0;
  font-size: clamp(2rem, 3vw, 3rem);
  line-height: 1.1;
}

.section-header p {
  color: var(--muted);
  margin-top: 12px;
  max-width: 690px;
  line-height: 1.7;
}

.info-grid {
  display: grid;
  gap: 22px;
}

.two-col {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.feature-card,
.news-card,
.stat-card,
.member-card,
.event-card,
.dashboard-card,
.auth-card,
.leaderboard-card {
  background: rgba(15, 21, 31, 0.82);
  border: 1px solid var(--border);
  border-radius: 24px;
  box-shadow: var(--shadow);
}

.feature-card {
  padding: 24px;
}

.feature-card h3,
.news-card h3,
.member-card h3,
.event-card h3 {
  margin-top: 0;
  margin-bottom: 12px;
}

.feature-card p,
.news-card p,
.event-card p,
.member-card p,
.dashboard-card p {
  margin: 0;
  color: var(--muted);
  line-height: 1.8;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
}

.stat-card {
  padding: 24px 20px;
}

.stat-card span {
  display: block;
  color: var(--muted);
  margin-bottom: 10px;
}

.stat-card strong {
  font-size: clamp(1.7rem, 3vw, 2.4rem);
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
}

.news-card {
  padding: 20px;
}

.chip {
  display: inline-flex;
  align-items: center;
  border-radius: 999px;
  padding: 0.38rem 0.7rem;
  background: var(--primary-soft);
  color: var(--primary);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.04em;
}

.chip-faint {
  background: rgba(148, 163, 184, 0.1);
  color: var(--text);
}

.leaderboard-wrap {
  display: grid;
  grid-template-columns: 0.75fr 1.25fr;
  gap: 22px;
  align-items: start;
}

.leaderboard-card {
  padding: 18px;
}

.leader-row {
  display: grid;
  grid-template-columns: 52px 1.2fr 0.7fr 0.8fr;
  gap: 16px;
  align-items: center;
  padding: 16px 8px;
  border-bottom: 1px solid var(--border);
}

.leader-row:last-child {
  border-bottom: none;
}

.rank-tag {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background: rgba(255, 107, 0, 0.1);
  color: var(--primary);
  font-weight: 800;
}

.leader-row strong,
.leader-row span,
.leader-row .tl {
  display: block;
}

.leader-row span,
.tl {
  color: var(--muted);
}

.contact-banner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 22px 26px;
  border-radius: 24px;
  background: linear-gradient(130deg, rgba(255, 107, 0, 0.15), rgba(17, 23, 34, 0.8));
  border: 1px solid rgba(255, 107, 0, 0.26);
}

.contact-banner h2 {
  margin: 8px 0 0;
  font-size: clamp(1.8rem, 3vw, 2.5rem);
}

.page-shell {
  padding-top: 42px;
}

.roster-tools {
  display: grid;
  grid-template-columns: 1fr 260px;
  gap: 16px;
  margin-bottom: 24px;
}

.search-box {
  width: 100%;
  border: 1px solid var(--border);
  border-radius: 14px;
  background: rgba(15, 21, 31, 0.9);
  color: var(--text);
  padding: 0.9rem 1rem;
}

.roster-grid,
.events-grid,
.dashboard-grid,
.contact-layout {
  display: grid;
  gap: 18px;
}

.roster-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.member-card {
  padding: 18px;
}

.member-head {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 14px;
}

.avatar {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: 16px;
  background: linear-gradient(135deg, var(--primary), #ff9b42);
  font-weight: 800;
}

.avatar.large {
  width: 72px;
  height: 72px;
  font-size: 1.8rem;
}

.member-card ul {
  list-style: none;
  padding: 0;
  margin: 0 0 16px;
}

.member-card li {
  display: flex;
  justify-content: space-between;
  gap: 8px;
  padding: 9px 0;
  border-bottom: 1px solid var(--border);
  color: var(--muted);
}

.member-card li strong {
  color: var(--text);
}

.events-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.event-card {
  padding: 24px;
}

.event-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;
  gap: 10px;
  color: var(--muted);
}

.dashboard-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-bottom: 28px;
}

.dashboard-card {
  padding: 24px 20px;
}

.dashboard-card.highlight {
  background: linear-gradient(180deg, rgba(255, 107, 0, 0.12), rgba(15, 21, 31, 0.82));
  border-color: rgba(255, 107, 0, 0.18);
}

.dashboard-card strong {
  display: block;
  margin-bottom: 8px;
  font-size: 1.8rem;
}

.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 12px;
}

.menu-list {
  list-style: none;
  padding: 0;
  margin: 12px 0 0;
  display: grid;
  gap: 10px;
  color: var(--muted);
}

.mini-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 12px;
}

.mini-table th,
.mini-table td {
  padding: 12px 8px;
  border-bottom: 1px solid var(--border);
  text-align: left;
}

.squad-list {
  display: grid;
  gap: 14px;
  margin-top: 12px;
}

.squad-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  padding: 12px 14px;
  border-radius: 14px;
  background: rgba(148, 163, 184, 0.05);
}

.squad-item strong,
.squad-item span,
.squad-item em {
  display: block;
}

.squad-item span,
.squad-item em {
  color: var(--muted);
}

.centered-form-wrap {
  display: flex;
  justify-content: center;
  padding-top: 52px;
}

.auth-card {
  width: min(520px, 100%);
  padding: 28px 22px;
}

.auth-card h2 {
  margin-top: 8px;
  margin-bottom: 18px;
  font-size: clamp(2rem, 3vw, 2.5rem);
}

.auth-card label {
  display: block;
  margin-bottom: 14px;
  color: var(--muted);
}

.auth-card input {
  width: 100%;
  margin-top: 8px;
  padding: 0.9rem 1rem;
  border-radius: 12px;
  border: 1px solid var(--border);
  background: rgba(9, 13, 19, 0.9);
  color: var(--text);
}

.auth-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  margin: 8px 0 18px;
}

.checkbox-row {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin: 0 !important;
}

.checkbox-row input {
  width: auto;
  margin: 0;
}

.step-indicator {
  display: flex;
  gap: 10px;
  margin-bottom: 18px;
}

.step-indicator span {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid var(--border);
  background: rgba(148, 163, 184, 0.05);
  color: var(--muted);
}

.step-indicator .active {
  background: var(--primary-soft);
  border-color: rgba(255, 107, 0, 0.2);
  color: var(--primary);
}

.profile-header {
  display: flex;
  align-items: center;
  gap: 22px;
  margin-bottom: 28px;
}

.contact-layout {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.wide-boxes {
  margin-top: 22px;
}

.centered-card {
  text-align: center;
  padding: 32px 22px;
}

.site-footer {
  border-top: 1px solid var(--border);
  background: rgba(8, 11, 17, 0.8);
  padding: 28px 0;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr 1fr;
  gap: 18px;
}

.footer-grid h3 {
  margin-top: 0;
  margin-bottom: 10px;
}

.footer-grid a {
  display: block;
  color: var(--muted);
  margin-bottom: 10px;
}

@media (max-width: 980px) {
  .hero-grid,
  .leaderboard-wrap,
  .two-col,
  .dashboard-grid,
  .stats-grid,
  .news-grid,
  .roster-grid,
  .events-grid,
  .contact-layout,
  .footer-grid {
    grid-template-columns: 1fr 1fr;
  }

  .hero-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 720px) {
  .nav-wrap {
    flex-direction: column;
    padding: 16px 0;
  }

  .main-nav,
  .nav-actions {
    justify-content: center;
  }

  .hero-copy h1 {
    font-size: 2.7rem;
  }

  .two-col,
  .dashboard-grid,
  .stats-grid,
  .news-grid,
  .roster-grid,
  .events-grid,
  .contact-layout,
  .footer-grid,
  .leaderboard-wrap,
  .roster-tools {
    grid-template-columns: 1fr;
  }

  .contact-banner {
    flex-direction: column;
    align-items: flex-start;
  }

  .leader-row {
    grid-template-columns: 48px 1fr;
  }

  .leader-row .tl {
    display: none;
  }
}
