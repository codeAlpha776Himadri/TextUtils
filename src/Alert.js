import React from 'react'

function Alert(props) {
    return (
        props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible show" role="alert"`}>
            <strong>{props.alert.message}</strong>
        </div>
  )
}

// Alert.defaultProps = {
//     heading : 'success' ,
//     message : 'I am default message'
// }

export default Alert