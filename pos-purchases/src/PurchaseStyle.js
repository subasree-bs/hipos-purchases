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
    selectFormcontrolFlex:{
        m: 1,
        borderRadius: 2,
        display:"flex",
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
        mb:1,
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
    purchaseContainer : {
        bgcolor: '#fff',
        height: 'max-content',
        borderTop: '5px solid #7009AB;',
        borderLeft: '0px',
        borderRight: '0px',
        borderBottom: '0px',
        borderRadius: '10px',
        boxShadow: '6px 6px 6px 9px #dedbdbae',
    },
}
export const purchaseCreate = {
    disabledSearch:{
        borderRadius: 0,
        ml:0
    },
    addtl_table_p:{
        p:1
    },
    grid_icons: {
        fontSize: '24px',
        paddingLeft: '4px',
        paddingRight: '6px',
        paddingTop: '4px',
        margin: 'auto',
        border: '1px solid #B97DF0',
        width: '33px',
        height: '41px',
        borderRadius: '2px',
        backgroundColor: '#fff',
        color: '#7009AB',
    },
    uploadBtn : {
        border:'1px solid #B97DF0 !important',
        borderRadius: '7px !important',
        width: '159px !important',
        fontSize: '11px !important',
        color: '#7009AB !important',
        fontWeight: '600 !important',
            '&:hover' : {
                backgroundColor: '#7009AB !important',
                color: '#fff !important',
            },
    },
    container_more : {
        marginTop: '20px',
     marginBottom: '20px',
      justifyContent: 'center'
      
     },
     buttonAdd: {
        backgroundColor: '#7009AB !important',
        color: '#fff !important',
        marginRight: '5px !important',
        height: '40px !important',
        padding: '10px !important',
        fontRight: '600 !important',
        borderRadius: '7px !important',
        float: 'right !important',
        border: '0px !important',
        '& :hover' : {
            backgroundColor: '#fff !important',
            border: '1px solid #7009AB !important',
            color: '#7009AB !important',
        }
    },
}