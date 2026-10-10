import { useEffect, useState } from 'react';
import { Link, NavLink, Route, Routes, useNavigate } from 'react-router-dom';

const memberStats = [
  { label: 'Ümumi Qələbə', value: '148', accent: 'primary' },
  { label: 'Öldürmə', value: '89.6K', accent: 'orange' },
  { label: 'Orta K/D', value: '2.42', accent: 'green' },
  { label: 'Tier', value: 'Diamond', accent: 'blue' },
];

const activityFeed = [
  { title: 'Yeni üzv qoşuldu', meta: 'Cavid - 2 saat əvvəl', tag: 'Klan' },
  { title: 'Həftəlik turnir bitdi', meta: 'Squad 3 birinciliyə yüksəldi', tag: 'Turnir' },
  { title: 'Tədbir elan edildi', meta: 'Warzone Savaş Günü - 18 Okt', tag: 'Tədbir' },
  { title: 'Nişan açıldı', meta: 'MVP - Səlim qeyd etdi', tag: 'Nailiyyət' },
];

const leaderboard = [
  { name: 'Faiq', kd: '3.14', wins: '220', role: 'Lider' },
  { name: 'Ramin', kd: '2.96', wins: '196', role: 'Həmlider' },
  { name: 'Səlim', kd: '2.81', wins: '182', role: 'Komanda L.' },
  { name: 'Nurlan', kd: '2.63', wins: '160', role: 'Üzv' },
];

const roster = [
  { name: 'Faiq', username: 'faiq', rank: 'Diamond II', kd: '3.14', squad: 'Shadow Unit', status: 'Online', role: 'Lider' },
  { name: 'Ramin', username: 'ramin', rank: 'Diamond I', kd: '2.96', squad: 'Storm Breakers', status: 'Online', role: 'Həmlider' },
  { name: 'Səlim', username: 'selim', rank: 'Platinum III', kd: '2.81', squad: 'Night Wolves', status: 'Offline', role: 'Komanda L.' },
  { name: 'Nurlan', username: 'nurlan', rank: 'Gold II', kd: '2.63', squad: 'Harbor Ops', status: 'Online', role: 'Üzv' },
  { name: 'Nihad', username: 'nihad', rank: 'Silver I', kd: '1.94', squad: 'Ghostline', status: 'Away', role: 'Üzv' },
  { name: 'Kərim', username: 'kerim', rank: 'Platinum I', kd: '2.52', squad: 'Red Rose', status: 'Online', role: 'Üzv' },
  { name: 'Tural', username: 'tural', rank: 'Diamond IV', kd: '2.88', squad: 'Falcon Crew', status: 'Online', role: 'Üzv' },
  { name: 'Vüsal', username: 'vusal', rank: 'Gold III', kd: '2.35', squad: 'Iron Pursuit', status: 'Offline', role: 'Üzv' },
];

const events = [
  { title: 'Weekend Clash', type: 'Turnir', date: '18 Okt 21:00', description: '4v4 əsas turnir, 50K prizepool və təqdimat medalı.' },
  { title: 'Squad Training', type: 'Təlim', date: '20 Okt 19:30', description: 'Map callout, loot routinləri və komanda koordinasiyası.', },
  { title: 'Recruitment Rush', type: 'İşə Qəbul', date: '23 Okt 20:00', description: 'Yeni üzv qəbul mərhələsi, oyun testləri və müsahibə.', },
  { title: 'Clan Battle Night', type: 'Mübarizə', date: '27 Okt 22:00', description: 'Klan daxili düello, live leaderboard və medal sistemi.' },
];

const adminApprovals = [
  { name: 'Cavid', pubgId: 'Cavid#9870', rank: 'Platinum IV', status: 'Yeni' },
  { name: 'Elvin', pubgId: 'Elvin#2212', rank: 'Gold II', status: 'Gözləmə' },
  { name: 'Hikmət', pubgId: 'Hikmet#8801', rank: 'Diamond III', status: 'Yoxlanılır' },
];

const squadData = [
  { name: 'Shadow Unit', members: 5, wins: 21, style: 'Agresiv' },
  { name: 'Storm Breakers', members: 4, wins: 18, style: 'Taktik' },
  { name: 'Night Wolves', members: 5, wins: 16, style: 'Tərs' },
];

const achievements = [
  'İlk Qan', '100 Öldürmə', 'MVP', 'Turqay Burnu', 'Top 10 Climber', 'Seasonal Dominator'
];

const navItems = [
  { to: '/', label: 'Ana Səhifə' },
  { to: '/about', label: 'Haqqında' },
  { to: '/roster', label: 'Üzvlər' },
  { to: '/events', label: 'Tədbirlər' },
  { to: '/contact', label: 'Əlaqə' },
];

function useAuthState() {
  const [loggedIn, setLoggedIn] = useState(() => {
    const saved = localStorage.getItem('pubgClanAuth');
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem('pubgClanAuth', JSON.stringify(loggedIn));
  }, [loggedIn]);

  return [loggedIn, setLoggedIn];
}

function App() {
  const [loggedIn, setLoggedIn] = useAuthState();

  const handleLogin = () => setLoggedIn(true);
  const handleLogout = () => setLoggedIn(false);

  return (
    <div className="app-shell">
      <Header loggedIn={loggedIn} onLogout={handleLogout} />
      <main className="page-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/roster" element={<RosterPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/dashboard" element={loggedIn ? <DashboardPage /> : <LoginPage onLogin={handleLogin} />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/profile/:username" element={<ProfilePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function Header({ loggedIn, onLogout }) {
  return (
    <header className="topbar">
      <div className="container nav-wrap">
        <Link to="/" className="brand" aria-label="PUBG Klan Ana səhifə">
          <span className="brand-mark">P</span>
          <span>PUBG Klan</span>
        </Link>

        <nav className="main-nav" aria-label="Əsas naviqasiya">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav-actions">
          {loggedIn ? (
            <>
              <Link to="/dashboard" className="button button-secondary">Dashboard</Link>
              <Link to="/admin" className="button button-ghost">Admin</Link>
              <button type="button" className="button button-primary" onClick={onLogout}>Çıxış</button>
            </>
          ) : (
            <>
              <Link to="/login" className="button button-secondary">Giriş</Link>
              <Link to="/register" className="button button-primary">Qoşul</Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="section-header">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function HomePage() {
  return (
    <>
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Elit PUBG Komandası</p>
            <h1>Ölümcül koordinasiya, müharibə ruhu və qələbə arzusu.</h1>
            <p className="hero-text">
              200 oyunçu limitinə sahib elit klanımızda strateji birlik, turnirlər və daimi inkişaf mərkəzində olursunuz.
            </p>
            <div className="cta-row">
              <Link to="/register" className="button button-primary">İndi Qoşul</Link>
              <Link to="/roster" className="button button-secondary">Üzv Siyahısı</Link>
            </div>
            <div className="hero-stats mini-grid">
              <div>
                <strong>153</strong>
                <span>Aktiv Üzv</span>
              </div>
              <div>
                <strong>24</strong>
                <span>Turnir Qalibiyyəti</span>
              </div>
              <div>
                <strong>7</strong>
                <span>Komanda</span>
              </div>
            </div>
          </div>

          <div className="hero-card">
            <div className="hero-card-top">
              <span className="status-dot" />
              <span>Canlı məlumat</span>
            </div>
            <div className="member-progress">
              <div className="progress-labels">
                <span>Üzv tutumu</span>
                <strong>153 / 200</strong>
              </div>
              <div className="progress-bar">
                <span style={{ width: '76.5%' }} />
              </div>
            </div>

            <div className="hero-metrics">
              {memberStats.map((item) => (
                <div key={item.label} className={`metric-box metric-${item.accent}`}>
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Klan Haqqında"
            title="Mənəvi birliyi, yüksək performansı və daim artan strategiyanı qoruyuruq."
            description="Klanımız uğur, dostluq və oyun qabiliyyətini birləşdirərək daimi yüksəlişə fokuslanır."
          />
          <div className="info-grid two-col">
            <div className="feature-card">
              <h3>Misyon</h3>
              <p>Doğru komanda dinamikası ilə yüksək stresli müsabiqələrdə sürətli qərarlar verməyi öyrədirik.</p>
            </div>
            <div className="feature-card">
              <h3>Vizyon</h3>
              <p>Hər oyunçu üçün irəliləyiş, təcrübə və klan içi məsuliyyət kulturası formalaşdırırıq.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section soft-bg">
        <div className="container">
          <SectionHeader
            eyebrow="Statistika"
            title="Klan performansı"
          />
          <div className="stats-grid">
            {memberStats.map((item) => (
              <div key={item.label} className="stat-card">
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Son Fəaliyyət"
            title="Klan yenilikləri"
          />
          <div className="news-grid">
            {activityFeed.map((item) => (
              <article key={item.title} className="news-card">
                <span className="chip">{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.meta}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section soft-bg">
        <div className="container leaderboard-wrap">
          <div>
            <SectionHeader
              eyebrow="Leader Board"
              title="Ən yaxşı performans"
            />
          </div>
          <div className="leaderboard-card">
            {leaderboard.map((player, index) => (
              <div key={player.name} className="leader-row">
                <div className="rank-tag">#{index + 1}</div>
                <div>
                  <strong>{player.name}</strong>
                  <span>{player.role}</span>
                </div>
                <div className="tl">KD {player.kd}</div>
                <div className="tl">Qalib {player.wins}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container contact-banner">
          <div>
            <p className="eyebrow">İndi qoşul</p>
            <h2>Rəqabətli və profesyonal klanımıza üzv ol.</h2>
          </div>
          <Link to="/register" className="button button-primary">Qeydiyyatdan Keç</Link>
        </div>
      </section>
    </>
  );
}

function AboutPage() {
  return (
    <div className="container page-shell">
      <SectionHeader
        eyebrow="Haqqında"
        title="Klanın məqsədi və ruhu"
        description="Biz burada yalnız oyun oynamırıq, birlik, səbir və daimi inkişafın şəraitini yaradırıq."
      />
      <div className="two-col info-grid">
        <div className="feature-card">
          <h3>Tarix</h3>
          <p>Klan 2022-ci ildə qurulmuş və son 2 ildə 80+ turnirə qoşulmuş, 24 qalibiyyət qazanmışdır.</p>
        </div>
        <div className="feature-card">
          <h3>Tələb</h3>
          <p>Etibarlı oyun sistemi, yaxşı kommunikasiya, gündəlik fəaliyyət və komanda ruhu əsas tələblərdir.</p>
        </div>
      </div>
      <div className="mini-grid wide-boxes">
        <div><strong>24</strong><span>Turnir qələbəsi</span></div>
        <div><strong>8</strong><span>Komanda rəhbərliyi</span></div>
        <div><strong>5</strong><span>Sezon mükafatı</span></div>
      </div>
    </div>
  );
}

function RosterPage() {
  return (
    <div className="container page-shell">
      <SectionHeader
        eyebrow="Komanda"
        title="Klan üzvlərinin siyahısı"
        description="Klan daxilində sıralama, status, rank və komanda təyinatı görünür."
      />
      <div className="roster-tools">
        <input type="text" placeholder="Üzv axtar" className="search-box" />
        <select className="search-box">
          <option>Bütün komandalar</option>
          <option>Shadow Unit</option>
          <option>Storm Breakers</option>
          <option>Night Wolves</option>
        </select>
      </div>
      <div className="roster-grid">
        {roster.map((member) => (
          <div className="member-card" key={member.username}>
            <div className="member-head">
              <div className="avatar">{member.name.charAt(0)}</div>
              <div>
                <h3>{member.name}</h3>
                <p>@{member.username}</p>
              </div>
            </div>
            <ul>
              <li><span>Rank</span><strong>{member.rank}</strong></li>
              <li><span>K/D</span><strong>{member.kd}</strong></li>
              <li><span>Squad</span><strong>{member.squad}</strong></li>
              <li><span>Status</span><strong>{member.status}</strong></li>
            </ul>
            <Link to={`/profile/${member.username}`} className="button button-secondary button-block">Profili Gör</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

function EventsPage() {
  return (
    <div className="container page-shell">
      <SectionHeader
        eyebrow="Tədbirlər"
        title="Gələcək tədbirlər və turnirlər"
      />
      <div className="events-grid">
        {events.map((event) => (
          <article key={event.title} className="event-card">
            <div className="event-meta">
              <span className="chip">{event.type}</span>
              <span>{event.date}</span>
            </div>
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <button type="button" className="button button-primary button-block">Qeydiyyat</button>
          </article>
        ))}
      </div>
    </div>
  );
}

function DashboardPage() {
  return (
    <div className="container page-shell">
      <SectionHeader eyebrow="İstifadəçi Paneli" title="Xoş gəlmisiniz, Faiq" />
      <div className="dashboard-grid">
        <div className="dashboard-card highlight">
          <span className="eyebrow">Profil</span>
          <h3>Diamond II - Lider</h3>
          <p>Qeydiyyat tarixi: 14 İyun 2024</p>
          <p>K/D: 3.14 • Qələbə: 220</p>
        </div>
        <div className="dashboard-card">
          <span className="eyebrow">Birlik</span>
          <h3>Shadow Unit</h3>
          <p>Aktiv komanda üzvü</p>
        </div>
        <div className="dashboard-card">
          <span className="eyebrow">Rəqib</span>
          <h3>Top 5</h3>
          <p>Bu həftə liderlik sırası</p>
        </div>
      </div>

      <div className="two-col info-grid">
        <div className="feature-card">
          <h3>Nişanlar</h3>
          <div className="tag-list">
            {achievements.map((achievement) => (
              <span key={achievement} className="chip chip-faint">{achievement}</span>
            ))}
          </div>
        </div>
        <div className="feature-card">
          <h3>Gələcək tədbirlər</h3>
          <ul className="menu-list">
            <li>Weekend Clash - 18 Okt 21:00</li>
            <li>Squad Training - 20 Okt 19:30</li>
            <li>Clan Battle Night - 27 Okt 22:00</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function AdminPage() {
  return (
    <div className="container page-shell">
      <SectionHeader eyebrow="Admin Panel" title="Klan idarəetməsi" />
      <div className="dashboard-grid">
        <div className="dashboard-card highlight">
          <span className="eyebrow">Üzv tutumu</span>
          <h3>153 / 200</h3>
          <div className="progress-bar"><span style={{ width: '76.5%' }} /></div>
        </div>
        <div className="dashboard-card">
          <span className="eyebrow">Gözləmə siyahısı</span>
          <h3>12</h3>
          <p>Yigilmiş müraciət</p>
        </div>
        <div className="dashboard-card">
          <span className="eyebrow">Komandalar</span>
          <h3>7</h3>
          <p>Ən son aktivlik</p>
        </div>
      </div>

      <div className="two-col info-grid">
        <div className="feature-card">
          <h3>İşə qəbul baxışı</h3>
          <table className="mini-table">
            <thead>
              <tr>
                <th>Ad</th>
                <th>Rank</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {adminApprovals.map((applicant) => (
                <tr key={applicant.pubgId}>
                  <td>{applicant.name}</td>
                  <td>{applicant.rank}</td>
                  <td>{applicant.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="feature-card">
          <h3>Komanda balansı</h3>
          <div className="squad-list">
            {squadData.map((team) => (
              <div key={team.name} className="squad-item">
                <div>
                  <strong>{team.name}</strong>
                  <span>{team.members} üzv</span>
                </div>
                <em>{team.wins} qələbə</em>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function LoginPage({ onLogin }) {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin();
    navigate('/dashboard');
  };

  return (
    <div className="container page-shell centered-form-wrap">
      <form className="auth-card" onSubmit={handleSubmit}>
        <p className="eyebrow">Giriş</p>
        <h2>Hesabınıza daxil olun</h2>

        <label>
          Email / İstifadəçi adı
          <input type="text" defaultValue="faiq@pubgklan.az" />
        </label>

        <label>
          Şifrə
          <input type="password" defaultValue="secret123" />
        </label>

        <div className="auth-row">
          <label className="checkbox-row">
            <input type="checkbox" defaultChecked />
            <span>Məni xatırla</span>
          </label>
          <Link to="/register">Qeydiyyat</Link>
        </div>

        <button type="submit" className="button button-primary button-block">Giriş Et</button>
      </form>
    </div>
  );
}

function RegisterPage() {
  return (
    <div className="container page-shell centered-form-wrap">
      <form className="auth-card multi-step-form">
        <p className="eyebrow">Qeydiyyat</p>
        <h2>Yeni üzv forması</h2>

        <div className="step-indicator">
          <span className="active">1</span>
          <span>2</span>
          <span>3</span>
        </div>

        <label>
          İstifadəçi adı
          <input type="text" placeholder="PUBG Clan" />
        </label>

        <label>
          Email
          <input type="email" placeholder="name@example.com" />
        </label>

        <label>
          Şifrə
          <input type="password" placeholder="Minimum 8 simvol" />
        </label>

        <label>
          PUBG ID
          <input type="text" placeholder="PUBG#1234" />
        </label>

        <label>
          K/D Nisbəti
          <input type="text" placeholder="2.88" />
        </label>

        <button type="submit" className="button button-primary button-block">Qeydiyyatdan Keç</button>
      </form>
    </div>
  );
}

function ProfilePage() {
  const profileName = 'Faiq';

  return (
    <div className="container page-shell">
      <div className="profile-header">
        <div className="avatar large">F</div>
        <div>
          <p className="eyebrow">Profil</p>
          <h2>{profileName}</h2>
          <p>@faiq • Diamond II • Lider</p>
        </div>
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-card"><strong>Qələbə</strong><p>220</p></div>
        <div className="dashboard-card"><strong>Öldürmə</strong><p>12.9K</p></div>
        <div className="dashboard-card"><strong>K/D</strong><p>3.14</p></div>
      </div>
    </div>
  );
}

function ContactPage() {
  return (
    <div className="container page-shell">
      <SectionHeader eyebrow="Əlaqə" title="Bizimlə əlaqə saxlayın" />
      <div className="contact-layout">
        <div className="feature-card">
          <h3>Whatsapp</h3>
          <p><a href="https://wa.me/15551234567" target="_blank" rel="noreferrer">+1 (555) 123-4567</a></p>
        </div>
        <div className="feature-card">
          <h3>Discord</h3>
          <p>discord.gg/pubgklan</p>
        </div>
      </div>
    </div>
  );
}

function PrivacyPage() {
  return (
    <div className="container page-shell">
      <SectionHeader eyebrow="Məxfilik" title="Məxfilik siyasəti" />
      <div className="feature-card">
        <p>İstifadəçi məlumatları yalnız klan üzvü mühüm mərkəzində yerləşdirilir və təhlükəsizlik tədbirləri ilə qorunur.</p>
      </div>
    </div>
  );
}

function TermsPage() {
  return (
    <div className="container page-shell">
      <SectionHeader eyebrow="Şərtlər" title="İstifadə şərtləri" />
      <div className="feature-card">
        <p>Bu platforma daxil olmaqla siz etik davranış, komanda qaydaları və klan üçün uyğun qaydaları qəbul edirsiniz.</p>
      </div>
    </div>
  );
}

function NotFoundPage() {
  return (
    <div className="container page-shell">
      <div className="feature-card centered-card">
        <p className="eyebrow">404</p>
        <h2>Səhifə tapılmadı</h2>
        <Link className="button button-primary" to="/">Ana səhifəyə qayıt</Link>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h3>PUBG Klan</h3>
          <p>Faiq tərəfindən hazırlanıb</p>
        </div>
        <div>
          <Link to="/about">Haqqında</Link>
          <Link to="/privacy">Məxfilik</Link>
          <Link to="/terms">Şərtlər</Link>
        </div>
        <div>
          <Link to="/roster">Üzvlər</Link>
          <Link to="/events">Tədbirlər</Link>
          <Link to="/contact">Əlaqə</Link>
        </div>
      </div>
    </footer>
  );
}

export default App;
