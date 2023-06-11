interface Server {
    id: number;
    name: string;
    ip: string;
    port: number;
    players: number;
    max_players: number;
    map: string;
    game: string;
}

interface Response {
    servers: Server[];
}

const ServerListSection: React.FC<Response> = ({servers}) => {
    return (
        <>
            <section className="top-seller-area pt-110 pb-100">
                <div className="container">
                    <div className="rank-list-container wow fadeInUp">
                        <div className="rank-list-wrapper mb-30">
                            <div className="login-content">
                                <h4>Serwery</h4>
                            </div>
                            <div className="rank-list-items">
                                {servers.map((server) => (
                                    <div className="rank-list-row">
                                        <div className="rank-list-cell rank-list-cell-sl"><span></span></div>
                                        <div className="rank-list-cell">{server.name}</div>
                                        <div className="rank-list-cell">{server.ip}:{server.port}</div>
                                        <div className="rank-list-cell">{server.players}/{server.max_players}</div>
                                        <div className="rank-list-cell">{server.map}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ServerListSection