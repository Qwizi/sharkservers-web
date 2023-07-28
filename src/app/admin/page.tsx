import dynamic from "next/dynamic";

const App = dynamic(() => import('../../components/Admin/App'), {ssr: false});

export default function AdminPage() {
    return (
        <App/>
    )
}