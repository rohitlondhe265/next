import Sidebar from './Sidebar';
import Content from './Content';

export default function Page() {

    return (
        <div className="flex flex-no-wrap min-h-screen my-6">
            <Sidebar />
            <Content />
        </div>
    )
}