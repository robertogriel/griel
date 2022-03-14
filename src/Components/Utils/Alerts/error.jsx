const Error = (props) => {
    return (
        <>
            <div className="alert alert-danger" style={{margin: '20px'}}>
                <h5><i className="icon fas fa-ban"></i> Erro</h5>
                {props.msg}
            </div>
        </>
    );
}

export default Error;