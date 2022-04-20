const Success = (props) => {
    return (
        <>
            <div className="alert alert-success" style={{margin: '20px'}}>
                <h5><i className="icon fas fa-ban"></i> Sucesso</h5>
                {props.msg}
            </div>
        </>
    );
}

export default Success;