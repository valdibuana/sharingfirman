'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import StarsBackground from '@/components/StarsBackground';

export default function Home() {
  const revealsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    const currentReveals = revealsRef.current;
    currentReveals.forEach((r) => {
      if (r) observer.observe(r);
    });

    return () => {
      currentReveals.forEach((r) => {
        if (r) observer.unobserve(r);
      });
    };
  }, []);

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !revealsRef.current.includes(el)) {
      revealsRef.current.push(el);
    }
  };

  return (
    <>
      <Navigation />

      {/* ═══════════════════════════════ COVER ═══════════════════════════════ */}
      <section className="slide slide-cover" id="cover">
        <StarsBackground count={80} />
        <div className="cover-tag">Youth Sharing · Firman Tuhan</div>
        <h1 className="cover-title">
          Persahabatan Yang<br />
          <span>Menguatkan</span><br />
          dan menjaga iman
        </h1>
        <p className="cover-sub">Amsal · 1 Samuel · Daniel</p>
        <div className="cover-verse-box">
          <div className="verse-ref">📖 Amsal 13:20</div>
          <div className="verse-text">
            "Siapa bergaul dengan orang bijak menjadi bijak, tetapi siapa berteman dengan orang bebal menjadi malang."
          </div>
        </div>
        <div className="scroll-hint">
          <span>Scroll</span>
          <div className="scroll-arrow"></div>
        </div>
      </section>

      {/* ═══════════════════════════════ OPENING ═══════════════════════════════ */}
      <section className="slide slide-opening" id="opening">
        <div className="content-wrap">
          <div className="section-label reveal" ref={addToRefs}>🙏 Shalom, Teman-Teman!</div>
          <h2 className="slide-heading reveal reveal-delay-1" ref={addToRefs}>
            Persahabatan bisa <em>menentukan arah hidupmu.</em>
          </h2>
          <div className="slide-separator reveal reveal-delay-2" ref={addToRefs}><span>✦</span></div>
          <p className="slide-body reveal reveal-delay-2" ref={addToRefs}>
            Hari ini kita tidak sekadar berbicara tentang teman. Kita berbicara tentang bagaimana orang-orang di sekitarmu bisa membawamu <strong style={{ color: 'var(--gold)' }}>lebih dekat atau lebih jauh dari Tuhan</strong> — dan bagaimana persahabatan yang benar bisa benar-benar menyelamatkan masa depanmu.
          </p>
          <p className="slide-body reveal reveal-delay-3" ref={addToRefs}>Kita akan belajar dari dua kisah nyata di Alkitab:</p>
          <div className="names-row reveal reveal-delay-3" ref={addToRefs}>
            <div className="name-pill">👑 Daud &amp; Yonatan</div>
            <div className="name-pill">🔥 Daniel, Hananya, Misael &amp; Azarya</div>
          </div>
          <div className="big-statement reveal reveal-delay-4" ref={addToRefs}>
            Persahabatan yang benar bukan hanya soal kebersamaan,<br />
            tetapi soal <span>iman dan komitmen.</span>
          </div>
        </div>
        <div className="page-num" suppressHydrationWarning>01</div>
      </section>

      {/* ═══════════════════════════════ BAGIAN 1 ═══════════════════════════════ */}
      <section className="slide slide-b1" id="bagian1">
        <div className="section-number">I</div>
        <div className="content-wrap">
          <div className="section-label reveal" ref={addToRefs}>📖 Bagian 1 · 1 Samuel 18</div>
          <h2 className="slide-heading reveal reveal-delay-1" ref={addToRefs}>
            Daud &amp; Yonatan —<br />
            <em>Sahabat yang Rela Berkorban</em>
          </h2>
          <p className="slide-body reveal reveal-delay-2" ref={addToRefs}>
            Daud adalah orang yang diurapi menjadi raja berikutnya. Yonatan adalah putra Raja Saul — pewaris tahta yang sah. Secara logika dunia? <strong style={{ color: 'var(--cream)' }}>Mereka seharusnya menjadi musuh.</strong>
          </p>

          <div className="quote-block reveal reveal-delay-2" ref={addToRefs}>
            <div className="q-text">"Yonatan mengikat perjanjian dengan Daud, karena ia mengasihi dia seperti dirinya sendiri."</div>
            <div className="q-ref">1 Samuel 18:1</div>
          </div>

          <div className="truth-cards reveal reveal-delay-3" ref={addToRefs}>
            <div className="truth-card">
              <span className="icon">🚫</span>
              <div className="t-title">Tidak Iri</div>
              <div className="t-desc">Yonatan tidak iri saat Daud diberkati Tuhan melebihi dirinya</div>
            </div>
            <div className="truth-card">
              <span className="icon">🛡️</span>
              <div className="t-title">Melindungi</div>
              <div className="t-desc">Ia bahkan melindungi Daud dari ayahnya sendiri, Raja Saul</div>
            </div>
            <div className="truth-card">
              <span className="icon">🤝</span>
              <div className="t-title">Rela Berkorban</div>
              <div className="t-desc">Demi kebaikan sahabat, ia rela melepas haknya sendiri</div>
            </div>
          </div>

          <div className="question-box reveal reveal-delay-4" ref={addToRefs}>
            <div className="q-header">🙋 Pertanyaan Untuk Kita</div>
            <div className="q-item">Apakah kita punya teman yang mendukung panggilan Tuhan dalam hidup kita?</div>
            <div className="q-item">Atau justru menarik kita menjauh dari-Nya?</div>
            <div className="q-item">Persahabatan yang sehat tidak takut melihat kita naik — karena pusatnya bukan ego, tapi kasih.</div>
          </div>
        </div>
        <div className="page-num" suppressHydrationWarning>02</div>
      </section>

      {/* ═══════════════════════════════ BAGIAN 2 ═══════════════════════════════ */}
      <section className="slide slide-b2" id="bagian2">
        <div className="section-number">II</div>
        <div className="content-wrap">
          <div className="section-label reveal" ref={addToRefs}>📖 Bagian 2 · Daniel 1 &amp; 3</div>
          <h2 className="slide-heading reveal reveal-delay-1" ref={addToRefs}>
            Daniel &amp; Sahabatnya —<br />
            <em>Menjaga Iman Bersama</em>
          </h2>

          <div className="names-row reveal reveal-delay-2" ref={addToRefs}>
            <div className="name-pill">🦁 Daniel</div>
            <div className="name-pill">🔥 Shadrach</div>
            <div className="name-pill">🔥 Meshach</div>
            <div className="name-pill">🔥 Abednego</div>
          </div>

          <p className="slide-body reveal reveal-delay-2" ref={addToRefs}>
            Mereka dibuang ke Babel — budaya asing, tekanan besar, godaan besar untuk <strong style={{ color: 'var(--cream)' }}>kompromi dengan dunia.</strong> Tapi mereka memilih berbeda.
          </p>

          <div className="quote-block reveal reveal-delay-3" ref={addToRefs}>
            <div className="q-text">"Daniel berketetapan untuk tidak menajiskan dirinya."</div>
            <div className="q-ref">Daniel 1:8</div>
          </div>

          <div className="quote-block reveal reveal-delay-3" ref={addToRefs}>
            <div className="q-text">"Allah kami sanggup melepaskan kami… tetapi seandainya tidak…"</div>
            <div className="q-ref">Daniel 3:17–18</div>
          </div>

          <div className="highlight-row reveal reveal-delay-4" ref={addToRefs}>
            <div className="hi-chip"><strong>💪 Menguatkan</strong>Menguatkan saat iman kita mulai goyah dan lemah</div>
            <div className="hi-chip"><strong>⚠️ Mengingatkan</strong>Mengingatkan saat kita hampir kompromi dengan dunia</div>
            <div className="hi-chip"><strong>🔗 Berdiri Bersama</strong>Tidak saling meninggalkan saat ada tekanan dan ancaman</div>
          </div>

          <div className="question-box reveal reveal-delay-4" ref={addToRefs}>
            <div className="q-header">🙋 Pertanyaan Untuk Kita</div>
            <div className="q-item">Apakah lingkaran pertemananmu membuat kamu lebih dekat dengan Tuhan?</div>
            <div className="q-item">Atau makin menjauh? Karena teman menentukan standar hidupmu.</div>
          </div>
        </div>
        <div className="page-num" suppressHydrationWarning>03</div>
      </section>

      {/* ═══════════════════════════════ REFLEKSI ═══════════════════════════════ */}
      <section className="slide slide-refleksi" id="refleksi">
        <div className="section-number">III</div>
        <div className="content-wrap">
          <div className="section-label reveal" ref={addToRefs}>💬 Refleksi · Untuk Kita Hari Ini</div>
          <h2 className="slide-heading reveal reveal-delay-1" ref={addToRefs}>
            Dunia Mengukur Pertemanan<br />
            <em>Dengan Cara Yang Berbeda</em>
          </h2>

          <div className="compare-grid reveal reveal-delay-2" ref={addToRefs}>
            <div className="compare-col bad">
              <h4>Dunia Bilang</h4>
              <ul>
                <li>Seberapa seru temanmu</li>
                <li>Seberapa populer dia</li>
                <li>Seberapa banyak followers-nya</li>
                <li>Kamu sukses = dia dukung</li>
                <li>Tertawa bersama</li>
              </ul>
            </div>
            <div className="compare-col good">
              <h4>Alkitab Berkata</h4>
              <ul>
                <li>Kesetiaan yang nyata</li>
                <li>Kejujuran yang membangun</li>
                <li>Komitmen rohani</li>
                <li>Kamu jatuh = dia masih ada</li>
                <li>Berdoa bersama</li>
              </ul>
            </div>
          </div>

          <div className="big-statement reveal reveal-delay-3" ref={addToRefs}>
            Teman yang benar bukan hanya mendukung <span>mimpimu</span>,<br />
            tetapi mendukung <span>panggilan Tuhan</span> dalam hidupmu.
          </div>

          <div className="highlight-row reveal reveal-delay-4" ref={addToRefs}>
            <div className="hi-chip"><strong>🤲 Ada Saat Jatuh</strong>Bukan hanya saat sukses dan saat segalanya baik-baik saja</div>
            <div className="hi-chip"><strong>🙏 Berdoa Bersama</strong>Bukan hanya tertawa — tapi juga bisa berlutut bersama</div>
            <div className="hi-chip"><strong>📣 Mendukung Panggilan</strong>Mendukung kehendak Tuhan, bukan hanya keinginanmu</div>
          </div>
        </div>
        <div className="page-num" suppressHydrationWarning>04</div>
      </section>

      {/* ═══════════════════════════════ PENUTUP ═══════════════════════════════ */}
      <section className="slide slide-closing" id="penutup">
        <div className="closing-box">
          <span className="closing-icon">✝️</span>
          <h2 className="closing-title reveal" ref={addToRefs}>Jadi, <span>Siapa</span> Sahabatmu?</h2>
          <p className="closing-body reveal reveal-delay-1" ref={addToRefs}>
            Persahabatan bukan sekadar kebersamaan. Persahabatan adalah tentang ke mana kamu berjalan bersama. Apakah menuju Tuhan — atau menjauh dari-Nya?
          </p>
          <div className="cover-verse-box reveal reveal-delay-2" ref={addToRefs} style={{ margin: '0 auto 32px' }}>
            <div className="verse-ref">📖 Amsal 13:20</div>
            <div className="verse-text">"Siapa bergaul dengan orang bijak menjadi bijak, tetapi siapa berteman dengan orang bebal menjadi malang."</div>
          </div>
          <p className="closing-body reveal reveal-delay-3" ref={addToRefs}>
            Jadilah teman seperti <strong style={{ color: 'var(--gold)' }}>Yonatan</strong> — yang tidak iri, yang melindungi, yang setia.<br />
            Jadilah teman seperti <strong style={{ color: 'var(--gold)' }}>Daniel</strong> — yang berdiri teguh dalam iman, bersama-sama.
          </p>
          <div className="closing-action-text reveal reveal-delay-4" ref={addToRefs}>
            ✦ God bless your friendships ✦
          </div>
          <br />
          <Link
            href="/games"
            style={{
              display: 'inline-block',
              marginTop: '40px',
              padding: '16px 48px',
              background: 'linear-gradient(135deg,var(--gold),#F0C96A)',
              color: '#0D0D0D',
              fontSize: '15px',
              fontFamily: 'var(--font-dmsans)',
              fontWeight: 700,
              letterSpacing: '2px',
              borderRadius: '100px',
              textDecoration: 'none',
              textTransform: 'uppercase',
              transition: 'all 0.3s'
            }}
            className="reveal reveal-delay-4 hover:scale-105 hover:shadow-[0_8px_32px_rgba(212,168,67,0.35)]"
            ref={addToRefs}
          >
            🎮 Main Games Interaktif
          </Link>
        </div>
        <div className="page-num" suppressHydrationWarning>05</div>
      </section>
    </>
  );
}
