import Card from "./Components/Card";
import Buttons from './Components/Buttons';

export default function Home() {
    return (
        <main>
            <div className="container-xl text-center" style={{padding: '20px 0'}}>
                <div className="row align-items-center" style={{gap: '15px'}}>
                    <Card />
                    <Card />
                    <Card />
                    <Buttons />
                </div>
            </div>
        </main>
    );
}
