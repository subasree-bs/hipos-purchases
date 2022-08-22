export const purchaseList = {
    buttonGrp: {
        bgcolor: '#fbf2ff',
        color: '#7009AB' ,
        borderColor:'#ddd',
        margin: '1px' ,
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: '12px' ,
    },
    selectInput:{
        "& .MuiOutlinedInput-notchedOutline": {
            border: "1px solid #B97DF0",
        },
    },
    selectFormcontrol:{
        m: 1,
        borderRadius: 2,
    },
    viewBtn:{
        fontSize: 9, 
        padding: "2px 1px",
        borderColor: "#7009AB", 
        color: "#7009AB",
        "&:hover": {
            backgroundColor: "#7009AB",
            color: "#fff",
            borderColor: "#7009AB",
        },

    },  
    add:{
        float: "right",
        width: "97px",
        fontWeight: 600,
        mr: 1,
        backgroundColor: "#7009AB",
         color:"#A5BECC",
         "&:hover":{
            backgroundColor: "#fff",
            border: "1px solid #7009AB",
            color: "#7009AB",
         }
    },
    actionsDropdown:{
        backgroundColor:"#b97df0",
        fontSize: 11,
        "&:hover":{
            backgroundColor: "#fff",
            color: "#b97df0"
        }
    },
}

export const purchaseStyle = {
    prodContainer : {
        bgcolor: '#fff',
        height: 'max-content',
        borderTop: '5px solid #7009AB;',
        borderLeft: '0px',
        borderRight: '0px',
        borderBottom: '0px',
        borderRadius: '10px',
        boxShadow: '6px 6px 6px 9px #dedbdbae',
    },
    prodSave : {
        border: '1px solid #7009AB !important',
        color: '#7009AB !important',
        height: '40px !important',
        fontWeight: '600 !important',
        borderRadius: '7px !important',
        width: '80px',
        '&:hover' : {
            backgroundColor: '#7009AB !important',
            border: '0px !important',
            color: '#fff !important',
        },
    },
    prodGridContainer : {
        marginTop: '10px',
        marginBottom: '10px',
        justifyContent: 'center',
    },
}