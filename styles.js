import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    textColor:{
        color:'black',
        marginTop: 70,
        marginLeft: 20,
      },
      topDiv: {
         flex: 0.5,
         backgroundColor: 'yellow',
         margin:'5%',
         borderRadius: 15,
         shadowOffset:{  width: 10,  height: 10,  },
         shadowColor: 'cyan',
         shadowOpacity: 1.0,
         height: 500
      },
      mainContainer:{
        flex:1,
        height: '100%',
       
        backgroundColor:'white'
      },
      input: {
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: 1,
        width: 100,
        height: 20,
        textAlign: 'center'
      }
})