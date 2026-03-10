import Link from 'next/link';

export default function Navigation() {
    return (
        <nav className="nav-bar">
            <Link href="/" className="nav-logo">✦ Youth Sharing</Link>
            <ul className="nav-links">
                <li><Link href="/#opening">Pembukaan</Link></li>
                <li><Link href="/#bagian1">Daud & Yonatan</Link></li>
                <li><Link href="/#bagian2">Daniel</Link></li>
                <li><Link href="/#refleksi">Refleksi</Link></li>
                <li><Link href="/games" style={{ color: 'var(--gold)' }}>🎮 Games</Link></li>
            </ul>
        </nav>
    );
}
