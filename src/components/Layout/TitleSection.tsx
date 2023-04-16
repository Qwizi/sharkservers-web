
interface Props {
    title: string;
}

const TitleSection: React.FC<Props> = ({title}) => {
    return (
         <section className="page-title-area">
         <div className="container">
            <div className="row wow fadeInUp">
               <div className="col-lg-12">
                  <div className="page-title">
                     <h2 className="breadcrumb-title mb-10">{title}</h2>
                  </div>
               </div>
            </div>
         </div>
      </section>
    )

}

export default TitleSection