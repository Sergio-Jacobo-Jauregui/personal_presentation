import Link from "next/link";

export default function Home() {
    return (
        <main>
            <Link href="/">
                <button type="button" class="btn btn-primary">Ir a pagina1</button>
            </Link>
        </main>
    );
}
