function Footer(){
    return (
        <div style = {{
            display: 'flex',
            flexDirection: 'row',
            justifyContent : 'center',
            alignItems : 'center',
            width: '100%',
            height: '10%',
        }}>
            <p style = {{
                color: 'grey',
                paddingRight: '0.5%',
            }}> Bạn dã có tài khoản? </p>
            <p style = {{
                color : 'orange',
                paddingLeft: '0.5%',
            }}> Đăng ký </p> 
        </div>
    )
}
export default Footer
