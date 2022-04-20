import { Link } from "react-router-dom";

const Contents = ()=>{
    return (
        <>

        <div className="content-wrapper">

        <section className="content-header">
        <div className="container-fluid">
            <div className="row mb-2">
            <div className="col-sm-6">
                <Link to="/a">
                <h1>Blank Page</h1>
                </Link>
            </div>
            <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active">Blank Page</li>
                </ol>
            </div>
            </div>
        </div>
        </section>


        <section className="content">


        <div className="card">
            <div className="card-header">
            <h3 className="card-title">Title</h3>

            <div className="card-tools">
                <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                <i className="fas fa-minus"></i>
                </button>
                <button type="button" className="btn btn-tool" data-card-widget="remove" title="Remove">
                <i className="fas fa-times"></i>
                </button>
            </div>
            </div>
            <div className="card-body">
            Start creating your amazing application!
            </div>

            <div className="card-footer">
            Footer
            </div>

        </div>


        </section>

        </div>

        </>
    );
}

export default Contents;