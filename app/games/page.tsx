'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import StarsBackground from '@/components/StarsBackground';

// --- DATA ---
const quizQuestions = [
    { q: "Siapakah yang mengikat perjanjian persahabatan dengan Daud karena mengasihinya seperti dirinya sendiri?", opts: ["Absalom", "Yonatan", "Samuel", "Saul"], ans: 1, explanation: "Yonatan, putra Raja Saul, mengikat perjanjian dengan Daud karena mengasihinya seperti dirinya sendiri.", verse: "1 Samuel 18:3" },
    { q: "Apa yang diberikan Yonatan kepada Daud sebagai tanda persahabatan?", opts: ["Kuda perang", "Jubah, baju zirah, pedang, busur & ikat pinggangnya", "Tahta kerajaan", "Harta karun"], ans: 1, explanation: "Yonatan menanggalkan jubahnya serta baju zirahnya, juga pedang, busur dan ikat pinggangnya, lalu memberikannya kepada Daud.", verse: "1 Samuel 18:4" },
    { q: "Mengapa Raja Saul ingin membunuh Daud?", opts: ["Daud mencuri hartanya", "Saul iri karena Daud lebih dipuji rakyat", "Daud mengkhianatinya", "Daud menghina Saul"], ans: 1, explanation: "Saul sangat marah ketika perempuan-perempuan menyanyikan 'Saul mengalahkan beribu-ribu, tetapi Daud berlaksa-laksa.' Sejak itu Saul menaruh curiga terhadap Daud.", verse: "1 Samuel 18:7-9" },
    { q: "Bagaimana Yonatan memperingatkan Daud tentang rencana Saul?", opts: ["Mengirim surat", "Menembakkan anak panah sebagai tanda", "Mengirim burung merpati", "Berteriak dari istana"], ans: 1, explanation: "Yonatan menggunakan tanda anak panah untuk memperingatkan Daud bahwa Saul berniat membunuhnya.", verse: "1 Samuel 20:35-42" },
    { q: "Daniel dan teman-temannya dibawa ke mana sebagai tawanan?", opts: ["Mesir", "Asyur", "Babel", "Persia"], ans: 2, explanation: "Daniel dan sahabat-sahabatnya (Hananya, Misael, Azarya) dibawa ke Babel oleh Raja Nebukadnezar.", verse: "Daniel 1:1-6" },
    { q: "Apa yang ditolak Daniel untuk dimakan di istana raja?", opts: ["Roti dan air", "Santapan raja dan anggurnya", "Buah-buahan", "Daging domba"], ans: 1, explanation: "Daniel berketetapan untuk tidak menajiskan dirinya dengan santapan raja dan anggur yang biasa diminum raja.", verse: "Daniel 1:8" },
    { q: "Siapa nama Babel yang diberikan kepada teman-teman Daniel?", opts: ["Sadrakh, Mesakh, Abednego", "Nebukadnezar, Belsyazar, Darius", "Kores, Artahsasta, Darius", "Sem, Ham, Yafet"], ans: 0, explanation: "Pemimpin pegawai istana memberi nama baru: Hananya = Sadrakh, Misael = Mesakh, Azarya = Abednego.", verse: "Daniel 1:7" },
    { q: "Apa yang terjadi ketika Sadrakh, Mesakh, dan Abednego menolak menyembah patung emas?", opts: ["Mereka dipenjara", "Mereka dilempar ke perapian yang menyala-nyala", "Mereka diusir dari Babel", "Mereka dihukum cambuk"], ans: 1, explanation: "Raja Nebukadnezar memerintahkan mereka dilemparkan ke dalam perapian yang menyala-nyala karena menolak menyembah patung emas.", verse: "Daniel 3:19-21" },
    { q: "Apa perkataan Sadrakh, Mesakh, dan Abednego sebelum dilempar ke perapian?", opts: ["'Kami takut akan mati'", "'Allah kami sanggup melepaskan kami, tetapi seandainya tidak, kamipun tidak akan menyembah patung'", "'Kami menyerah'", "'Tolong ampuni kami'"], ans: 1, explanation: "Mereka berkata dengan iman yang teguh bahwa Allah sanggup melepaskan mereka, tetapi seandainya tidak, mereka tetap tidak akan menyembah patung.", verse: "Daniel 3:17-18" },
    { q: "Menurut Amsal 13:20, apa yang terjadi jika kita bergaul dengan orang bijak?", opts: ["Menjadi kaya", "Menjadi bijak", "Menjadi terkenal", "Menjadi berkuasa"], ans: 1, explanation: "'Siapa bergaul dengan orang bijak menjadi bijak, tetapi siapa berteman dengan orang bebal menjadi malang.'", verse: "Amsal 13:20" }
];

const memoryPairs = [
    { emoji: '👑', name: 'Daud', trait: 'Diurapi menjadi Raja Israel' },
    { emoji: '🏹', name: 'Yonatan', trait: 'Sahabat setia yg rela berkorban' },
    { emoji: '🦁', name: 'Daniel', trait: 'Teguh iman di tanah asing' },
    { emoji: '🔥', name: 'Sadrakh', trait: 'Tidak menyembah patung emas' },
    { emoji: '🛡️', name: 'Mesakh', trait: 'Berani menghadapi perapian' },
    { emoji: '⚔️', name: 'Abednego', trait: 'Setia walau diancam mati' },
    { emoji: '📖', name: 'Amsal 13:20', trait: 'Bergaul dengan orang bijak' },
    { emoji: '🤝', name: 'Persahabatan', trait: 'Saling menguatkan dalam iman' },
];

const spinQuestions = [
    "Ceritakan satu hal yang kamu syukuri dari sahabatmu saat ini.",
    "Pernahkah seorang teman membantumu lebih dekat dengan Tuhan? Bagaimana?",
    "Apa satu hal yang bisa kamu lakukan minggu ini untuk menjadi teman yang lebih baik?",
    "Bagaimana caramu menegur teman yang melakukan kesalahan dengan kasih?",
    "Ceritakan pengalaman di mana persahabatan membantumu melewati masa sulit.",
    "Menurutmu, apa perbedaan teman sejati dan teman yang hanya ada saat senang?",
    "Bagaimana kamu bisa menjadi 'Yonatan' bagi temanmu yang sedang berjuang?",
    "Apa arti ayat 'Besi menajamkan besi' (Amsal 27:17) dalam konteks hidupmu?",
    "Pernahkah kamu harus memilih antara mengikuti teman atau mengikuti Tuhan?",
    "Doakan satu temanmu sekarang. Bagikan apa yang kamu doakan."
];

const wheelColors = ['#C0392B', '#8E44AD', '#2980B9', '#16A085', '#27AE60', '#F39C12', '#D35400', '#E74C3C', '#3498DB', '#1ABC9C'];

function shuffleArray<T>(arr: T[]): T[] {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

export default function GamesPage() {
    const [activeView, setActiveView] = useState<'hub' | 'quiz' | 'memory' | 'spin'>('hub');

    // QUIZ STATE
    const [shuffledQuiz, setShuffledQuiz] = useState<typeof quizQuestions>([]);
    const [qIndex, setQIndex] = useState(0);
    const [qScore, setQScore] = useState(0);
    const [selectedOpt, setSelectedOpt] = useState<number | null>(null);

    // MEMORY STATE
    const [memCards, setMemCards] = useState<any[]>([]);
    const [flipped, setFlipped] = useState<number[]>([]);
    const [matched, setMatched] = useState<number[]>([]);
    const [attempts, setAttempts] = useState(0);

    // SPIN STATE
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [spinAngle, setSpinAngle] = useState(0);
    const [isSpinning, setIsSpinning] = useState(false);
    const [spinResult, setSpinResult] = useState<number | null>(null);

    useEffect(() => {
        initQuiz();
        initMemory();
    }, []);

    // QUIZ LOGIC
    const initQuiz = () => {
        setShuffledQuiz(shuffleArray(quizQuestions));
        setQIndex(0); setQScore(0); setSelectedOpt(null);
    };
    const handleAnswer = (idx: number) => {
        if (selectedOpt !== null) return;
        setSelectedOpt(idx);
        if (idx === shuffledQuiz[qIndex].ans) setQScore(s => s + 1);
    };

    // MEMORY LOGIC
    const initMemory = () => {
        const cards: any[] = [];
        memoryPairs.forEach((p, i) => {
            cards.push({ id: i * 2, pairId: i, type: 'name', emoji: p.emoji, text: p.name });
            cards.push({ id: i * 2 + 1, pairId: i, type: 'trait', emoji: p.emoji, text: p.trait });
        });
        setMemCards(shuffleArray(cards));
        setFlipped([]); setMatched([]); setAttempts(0);
    };
    const handleCardClick = (idx: number) => {
        if (flipped.length === 2 || flipped.includes(idx) || matched.includes(memCards[idx].pairId)) return;
        const newFlipped = [...flipped, idx];
        setFlipped(newFlipped);
        if (newFlipped.length === 2) {
            setAttempts(a => a + 1);
            const [a, b] = newFlipped;
            if (memCards[a].pairId === memCards[b].pairId) {
                setTimeout(() => {
                    setMatched(m => [...m, memCards[a].pairId]);
                    setFlipped([]);
                }, 400);
            } else {
                setTimeout(() => setFlipped([]), 800);
            }
        }
    };

    // SPIN LOGIC
    useEffect(() => {
        if (activeView === 'spin' && canvasRef.current) drawWheel(spinAngle, spinResult);
    }, [activeView, spinAngle, spinResult]);

    const drawWheel = (angle: number, highlight: number | null = null) => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        const W = canvas.width, H = canvas.height, cx = W / 2, cy = H / 2, R = W / 2 - 8;
        ctx.clearRect(0, 0, W, H);
        const n = spinQuestions.length, arc = 2 * Math.PI / n;
        for (let i = 0; i < n; i++) {
            const startA = angle + i * arc;
            ctx.beginPath(); ctx.moveTo(cx, cy);
            ctx.arc(cx, cy, R, startA, startA + arc);
            ctx.closePath();
            ctx.fillStyle = highlight === i ? '#F0C96A' : wheelColors[i % wheelColors.length];
            ctx.fill();
            ctx.strokeStyle = 'rgba(0,0,0,0.25)'; ctx.lineWidth = 2; ctx.stroke();
            ctx.save(); ctx.translate(cx, cy); ctx.rotate(startA + arc / 2);
            ctx.fillStyle = '#fff'; ctx.font = 'bold 13px "DM Sans"'; ctx.textAlign = 'center';
            ctx.fillText((i + 1).toString(), R * 0.75, 5);
            ctx.restore();
        }
        ctx.beginPath(); ctx.arc(cx, cy, 22, 0, 2 * Math.PI);
        ctx.fillStyle = '#0D0D0D'; ctx.fill();
        ctx.strokeStyle = 'rgba(212,168,67,0.5)'; ctx.lineWidth = 3; ctx.stroke();
        ctx.fillStyle = '#D4A843'; ctx.font = 'bold 11px "Cinzel"'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
        ctx.fillText('✦', cx, cy);
    };

    const spinWheel = () => {
        if (isSpinning) return;
        setIsSpinning(true); setSpinResult(null);
        let velocity = 0.25 + Math.random() * 0.2;
        const friction = 0.985 + Math.random() * 0.008;
        let currentAngle = spinAngle;

        const animate = () => {
            currentAngle += velocity;
            velocity *= friction;
            setSpinAngle(currentAngle);
            if (velocity > 0.002) {
                requestAnimationFrame(animate);
            } else {
                setIsSpinning(false);
                const n = spinQuestions.length, arc = 2 * Math.PI / n;
                const pointerAngle = 3 * Math.PI / 2;
                const rel = ((pointerAngle - currentAngle) % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI);
                const idx = Math.floor(rel / arc) % n;
                setSpinResult(idx);
            }
        };
        animate();
    };

    return (
        <>
            <nav className="nav-bar">
                <Link href="/" className="nav-logo">✦ Youth Sharing</Link>
                <ul className="nav-links">
                    <li><button onClick={() => setActiveView('hub')} className={activeView === 'hub' ? 'active' : ''}>Hub</button></li>
                    <li><button onClick={() => setActiveView('quiz')} className={activeView === 'quiz' ? 'active' : ''}>Kuis</button></li>
                    <li><button onClick={() => setActiveView('memory')} className={activeView === 'memory' ? 'active' : ''}>Memory</button></li>
                    <li><button onClick={() => setActiveView('spin')} className={activeView === 'spin' ? 'active' : ''}>Spin</button></li>
                </ul>
            </nav>
            {activeView !== 'hub' && (
                <button className="back-btn visible" onClick={() => setActiveView('hub')}>← Kembali</button>
            )}

            <StarsBackground />

            {/* HUB */}
            {activeView === 'hub' && (
                <section className="game-hub">
                    <div className="hub-tag">✦ Games Interaktif</div>
                    <h1 className="hub-title">Ayo <span>Bermain</span> & Belajar!</h1>
                    <p className="hub-sub">Pilih salah satu game di bawah untuk mendalami Firman Tuhan</p>
                    <div className="cards-grid">
                        <div className="game-card" onClick={() => setActiveView('quiz')}>
                            <span className="card-icon">📖</span>
                            <div className="card-title">Kuis Firman</div>
                            <div className="card-desc">10 pertanyaan pilihan ganda tentang Daud, Yonatan & Daniel. Uji pengetahuanmu!</div>
                            <div className="card-badge">Mulai Kuis →</div>
                        </div>
                        <div className="game-card" onClick={() => setActiveView('memory')}>
                            <span className="card-icon">🃏</span>
                            <div className="card-title">Memory Match</div>
                            <div className="card-desc">Cocokkan 8 pasang kartu tokoh Alkitab dengan karakternya. Seberapa tajam ingatanmu?</div>
                            <div className="card-badge">Main Sekarang →</div>
                        </div>
                        <div className="game-card" onClick={() => setActiveView('spin')}>
                            <span className="card-icon">🎡</span>
                            <div className="card-title">Spin Refleksi</div>
                            <div className="card-desc">Putar roda dan diskusikan pertanyaan refleksi bersama kelompokmu. Cocok untuk ice-breaker!</div>
                            <div className="card-badge">Putar Roda →</div>
                        </div>
                    </div>
                </section>
            )}

            {/* QUIZ */}
            {activeView === 'quiz' && (
                <section className="game-view">
                    <div className="quiz-container">
                        {qIndex < shuffledQuiz.length ? (
                            <>
                                <div className="quiz-header">
                                    <h2>Kuis <span>Firman</span></h2>
                                    <div className="progress-wrap"><div className="progress-fill" style={{ width: `${(qIndex / shuffledQuiz.length) * 100}%` }}></div></div>
                                    <div className="progress-text">{qIndex} / {shuffledQuiz.length}</div>
                                </div>
                                <div className="quiz-card">
                                    <div className="q-number">Pertanyaan {qIndex + 1}</div>
                                    <div className="q-question">{shuffledQuiz[qIndex].q}</div>
                                    <div className="q-options">
                                        {shuffledQuiz[qIndex].opts.map((opt, i) => {
                                            const isSelected = selectedOpt === i;
                                            const isAns = i === shuffledQuiz[qIndex].ans;
                                            let cls = 'q-option';
                                            if (selectedOpt !== null) {
                                                if (isAns) cls += ' correct';
                                                else if (isSelected) cls += ' wrong';
                                                else cls += ' dimmed';
                                            }
                                            return (
                                                <button key={i} className={cls} onClick={() => handleAnswer(i)} disabled={selectedOpt !== null}>
                                                    <span className="opt-letter">{'ABCD'[i]}</span><span>{opt}</span>
                                                </button>
                                            );
                                        })}
                                    </div>
                                    {selectedOpt !== null && (
                                        <div className={`feedback-box show ${selectedOpt === shuffledQuiz[qIndex].ans ? 'correct-fb' : 'wrong-fb'}`}>
                                            <div className="fb-title">{selectedOpt === shuffledQuiz[qIndex].ans ? '✅ Benar! Hebat!' : '❌ Belum tepat!'}</div>
                                            <div className="fb-verse">📖 {shuffledQuiz[qIndex].verse} — {shuffledQuiz[qIndex].explanation}</div>
                                        </div>
                                    )}
                                    {selectedOpt !== null && (
                                        <button className="next-btn show" onClick={() => { setQIndex(q => q + 1); setSelectedOpt(null); }}>Lanjut →</button>
                                    )}
                                </div>
                            </>
                        ) : (
                            <div className="score-screen">
                                <span className="score-icon">{qScore >= 9 ? '🏆' : qScore >= 7 ? '🌟' : qScore >= 5 ? '💪' : '📖'}</span>
                                <h2>Skor <span>Akhir</span></h2>
                                <div className="score-big">{qScore}/{shuffledQuiz.length}</div>
                                <div className="score-msg">
                                    {qScore >= 9 ? 'Luar biasa! Kamu benar-benar mendalami Firman Tuhan.' :
                                        qScore >= 7 ? 'Bagus sekali! Pengetahuanmu tentang Firman sudah kuat.' :
                                            qScore >= 5 ? 'Cukup baik! Masih ada ruang untuk bertumbuh.' :
                                                'Jangan menyerah! Teruslah menggali Firman Tuhan.'}
                                </div>
                                <button className="next-btn show" onClick={initQuiz}>🔄 Ulangi Kuis</button>
                            </div>
                        )}
                    </div>
                </section>
            )}

            {/* MEMORY */}
            {activeView === 'memory' && (
                <section className="game-view">
                    <div className="memory-container">
                        <div className="memory-header">
                            <h2>Memory <span>Match</span></h2>
                            <div className="memory-stats">
                                <div>Percobaan: <strong>{attempts}</strong></div>
                                <div>Cocok: <strong>{matched.length}</strong> / 8</div>
                            </div>
                        </div>
                        <div className="memory-grid">
                            {memCards.map((c, i) => {
                                const isFlipped = flipped.includes(i) || matched.includes(c.pairId);
                                const isMatched = matched.includes(c.pairId);
                                return (
                                    <div key={i} className={`mem-card ${isFlipped ? 'flipped' : ''} ${isMatched ? 'matched' : ''}`} onClick={() => handleCardClick(i)}>
                                        <div className="mem-card-inner">
                                            <div className="mem-card-front"><span className="front-icon">✦</span><span className="front-q">?</span></div>
                                            <div className="mem-card-back"><span className="back-emoji">{c.emoji}</span><span className="back-text">{c.text}</span></div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        {matched.length === 8 && (
                            <div className="memory-result show">
                                <div className="stars-display">{attempts <= 10 ? '⭐⭐⭐' : attempts <= 16 ? '⭐⭐' : '⭐'}</div>
                                <h3>Selesai!</h3>
                                <div className="result-msg">{attempts} percobaan</div>
                                <button className="next-btn show" onClick={initMemory}>🔄 Main Lagi</button>
                            </div>
                        )}
                    </div>
                </section>
            )}

            {/* SPIN */}
            {activeView === 'spin' && (
                <section className="game-view">
                    <div className="spin-container">
                        <div className="spin-header">
                            <h2>Spin <span>Refleksi</span></h2>
                            <p>Putar roda dan diskusikan pertanyaan bersama kelompokmu!</p>
                        </div>
                        <div className="wheel-wrapper">
                            <div className="wheel-pointer">▼</div>
                            <canvas ref={canvasRef} width="340" height="340" id="wheelCanvas"></canvas>
                        </div>
                        <br />
                        <button className="spin-btn" onClick={spinWheel} disabled={isSpinning}>
                            🎯 Putar Roda!
                        </button>
                        {spinResult !== null && (
                            <div className="spin-result-box show">
                                <div className="sr-label">💬 Pertanyaan Diskusi</div>
                                <div className="sr-question">{spinQuestions[spinResult]}</div>
                                <div className="sr-hint">Diskusikan bersama kelompokmu selama 2-3 menit</div>
                            </div>
                        )}
                    </div>
                </section>
            )}
        </>
    );
}
