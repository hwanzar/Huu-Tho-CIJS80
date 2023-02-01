function SocialCard(props){
    return(
        <div style= {{
            border: '1px solid black',
            display: 'flex',
            width: '14%',
            margin: '2%',
        }}>
            <img src = {props.id} style = {{
                width: '50%',
                height: '100%',
            }}/>
            <p style = {{
                width: '50%',
                height: '100%',
                fontSize: '80%',
                alignContent: 'center',
            }}>{props.name}</p>
        </div>
    )
}
export default SocialCard