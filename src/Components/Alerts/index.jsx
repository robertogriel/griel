import Error from './error';
import Success from './success';

const Alerts = (props) => {

    let component = '';

    switch (props.type) {
        case 'error':
            component = <Error msg={props.msg} />
        break;
        default:
            component = <Success msg={props.msg} />
    }

    return (
        
        <>
        {component}
        </>
    )
}

export default Alerts;