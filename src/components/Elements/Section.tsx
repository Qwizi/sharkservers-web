interface SectionProps {
    children: React.ReactNode
}
const Section: React.FC<SectionProps> = ({ children }) => {
    return (
        <section className="login-area pt-130 pb-90">
                <div className="container">
                    {children}
                </div>
        </section>
    )
}

export default Section