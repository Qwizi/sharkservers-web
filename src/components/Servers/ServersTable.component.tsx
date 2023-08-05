const ServersTable = () => {
    return (
        <div className="flex justify-center overflow-x-auto">
            <table className="table-fixed border border-slate-800 w-full bg-slate-900 rounded-lg shadow-lg">
                <thead>
                <tr>
                    <th className="border-b border-slate-800 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left mt-1-">Nazwa</th>
                    <th className="border-b border-slate-800 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">IP</th>
                    <th className="border-b border-slate-800 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Gracze</th>
                    <th className="border-b border-slate-800 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Mapa</th>
                </tr>
                </thead>
                <tbody className="bg-slate-900">
                <tr>
                    <td className="border-b border-slate-800 p-4 pl-8 text-slate-400">Jailbreak</td>
                    <td className="border-b border-slate-800 p-4 pl-8 text-slate-400">127.0.0.1:5442</td>
                    <td className="border-b border-slate-800 p-4 pl-8 text-slate-400">29/37</td>
                    <td className="border-b border-slate-800 p-4 pl-8 text-slate-400">jb_test</td>
                </tr>
                <tr>
                    <td className="border-b border-slate-800 p-4 pl-8 text-slate-400">Jailbreak</td>
                    <td className="border-b border-slate-800 p-4 pl-8 text-slate-400">127.0.0.1:5442</td>
                    <td className="border-b border-slate-800 p-4 pl-8 text-slate-400">29/37</td>
                    <td className="border-b border-slate-800 p-4 pl-8 text-slate-400">jb_test</td>
                </tr>
                </tbody>
            </table>

        </div>
    );
}

export default ServersTable;