function Button(){
    return(
        <div style = {{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems : 'center',
            width: '100%',
            height: '30%',
            marginTop: '2%',
        }}>
            <button type = "button" style = {{
                backgroundColor: 'orange',
                height: '100%',
                width: '50%',
            }}> Dang nhap </button>
            <div style = {{
                width: '50%',
                display: 'flex',
                flexDirection: 'row',
                marginTop: '1%'
            }}>
                <div style = {{
                    display: 'flex',
                    flexDirection: 'row',
                    width: '50%',
                    justifyContent: 'flex-start',
                }}>
                Quên mật khẩu </div>
                <div style = {{
                    display: 'flex',
                    flexDirection: 'row',
                    width: '50%',
                    justifyContent: 'flex-end',
                }}>
                Đăng nhập bằng SMS</div>
             </div>
        </div>
    )
}
export default Button