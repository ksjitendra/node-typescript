import mongoose, {connect}    from "mongoose"

function connects() {
    return connect('mongodb+srv://jesseJitendra:zm6byjVCgSnvYCSk@pythonds.eta6rbs.mongodb.net/mydatabase')
    .then(()=> {
        console.log('db connected');
        
    }).catch((error) => {
        console.log(error.message);
        
    })
}


export default connects


