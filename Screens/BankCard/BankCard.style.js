import { StyleSheet } from 'react-native'
import { Colors } from '../../Assets'

export default StyleSheet.create({
  container: {
    margin: 10
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18
  },
  cardImageContainer: {
    width: '100%',
    height: 200,
    marginTop: 30,
    marginBottom: 15,
    alignSelf: 'center'
  },
  cardImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    alignSelf: 'center'
  },
  inputContainer: {
    width: '90%',
    marginTop: 20
  },
  dateAndCvvInputsContainer: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center'

  },
  dateInput: {
    width: '50%'
  },
  cvvInput: {
    width: '30%'
  },
  button: {
    marginTop: 50,
    width: '90%',
    alignSelf: 'center'
  }
})
