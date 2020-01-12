const ValidationComponent = (props) => {
    let length = parseInt(props.length);
    return (length < 3) ? "Text too short!" : "";
}

export default ValidationComponent;
