function Item(props) {
    let check = false;
    const temp = props.ratio;
    if(temp == 100){
        check = true;
    }
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '6 0',
            gap: 10,
            width: 21,
            height: 178,
        }}>
            <div style={{
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                alignItems: 'center',
                padding: 0,
                gap: '10px',
                width: '21px',
                height: '75%',
                background: '#BAA5ED',
                border: '1px solid black',
                borderRadius: '50px',
            }}>
                <div style={{
                    background: '#3D15A9',
                    height: `${props.ratio}%`,
                    width: '100%',
                    borderRadius: check ? '50px 50px 50px 50px' : '0 0 50px 50px',
                }}></div>
            </div>
            <div style={{
                width: "21px",
                height: "17px",
                fontWeight: "400",
                fontSize: "12px",
                lineHeight: "17px",
                color: "#000000",
            }}>{props.name}</div>
        </div>
    );
}
export default Item