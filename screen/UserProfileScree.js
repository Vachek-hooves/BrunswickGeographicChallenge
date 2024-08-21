import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Image,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import MainLayout from '../components/Layout/MainLayout';
import {COLOR} from '../components/constant/color';
import {useState, useEffect} from 'react';
import {fetchUser, updateUser, saveUser} from '../store/asyncStorageUtils';
import UserImagePicker from '../components/ui/UserImagePicker';
import {IconReturn} from '../components/Icons';
import {BlurCustomContainer, MainBgImage} from '../components/ui';

const {width, height} = Dimensions.get('screen');

const WIDTH = width * 0.72;
const HEIGHT = height * 0.3;

const UserProfileScree = () => {
  const [userData, setUserData] = useState(null);
  const [userInputs, setUserInputs] = useState({name: '', image: ''});

  console.log(userInputs);
  const uuid = () => Date.now().toString();

  useEffect(() => {
    const fetchUserData = async () => {
      const data = await fetchUser();
      console.log(data);
      setUserData(data);
    };
    fetchUserData();
  }, []);

  const saveInputs = (identifier, newValue) => {
    setUserInputs(prev => ({...prev, [identifier]: newValue}));
  };
  const userImage = image => {
    saveInputs('image', image);
  };

  const submitData = async () => {
    const {name, image} = userInputs;
    if (!name.trim()) {
      Alert.alert('Problem', 'Name is empty');
      return;
    }
    const dataToSubmit = {id: uuid(), name, image};
    try {
      await saveUser(dataToSubmit);
      const updatedData = await fetchUser();
      setUserData(updatedData);
    } catch (error) {
      console.error('Failed to submit:', error);
    }
  };

  const clearInputs = () => {
    setUserInputs({name: ''});
  };

  return (
    <MainBgImage>
      <BlurCustomContainer>
        <SafeAreaView style={{height: '100%'}}>
          {userData ? (
            <UserDataDetails data={userData} />
          ) : (
            <View style={styles.container}>
              <Text style={styles.nameStyle}>User Name</Text>
              <TextInput
                value={userInputs.name}
                onChangeText={value => saveInputs('name', value)}
                style={styles.textInput}
              />
              <View style={styles.pickerContainer}>
                <UserImagePicker imageSave={image => userImage(image)}>
                  <Text style={styles.pickerText}>Select Image</Text>
                </UserImagePicker>
              </View>
              <View>
                <TouchableOpacity onPress={submitData} style={styles.btn}>
                  <Text style={styles.btnText}>Save</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={clearInputs} style={styles.btn}>
                  <Text style={styles.btnText}>Arise</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
          <View
            style={{
              position: 'absolute',
              bottom: 50,
              right: 60,
            }}>
            <IconReturn />
          </View>
        </SafeAreaView>
      </BlurCustomContainer>
    </MainBgImage>
  );
};

const UserDataDetails = ({data}) => {
  console.log(data);
  const [userIsChanges, setUserIsChanges] = useState(false);
  const [userName, setUserName] = useState(data.name);
  const [userPickture, setUserPickture] = useState(data.image);

  const changeName = async () => {
    await updateUser('name', userName);
    setUserIsChanges(false);
  };

  const changeImage = async image => {
    setUserPickture(image);
    await updateUser('image', image);
  };
  return (
    <View
      style={{
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
        marginTop: 100,
      }}>
      {userIsChanges ? (
        <View
          style={{
            justifyContent: 'center',
            flex: 1,
          }}>
          <TextInput
            value={userName}
            onChangeText={setUserName}
            style={styles.input}
          />
          <View>
            <TouchableOpacity onPress={changeName} style={styles.confirmBtn}>
              <Text style={styles.confirmText}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View style={{flex: 1, alignItems: 'center'}}>
          <UserImagePicker imageSave={pick => changeImage(pick)}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image source={{uri: userPickture}} style={styles.image} />
              <Text style={{position: 'absolute', fontSize: 10}}>
                Select Photo
              </Text>
            </View>
          </UserImagePicker>
          <TouchableOpacity
            onPress={() => setUserIsChanges(true)}
            style={{justifyContent: 'center'}}>
            <Text style={styles.textName}>{userName}</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    backgroundColor: COLOR.teal + 90,
    paddingHorizontal: 15,
    marginVertical: 10,
    fontSize: 20,
    borderRadius: 10,
    paddingVertical: 10,
    minWidth: 150,
    maxWidth: 250,
    borderRadius: 90,
  },
  btn: {
    backgroundColor: COLOR.teal,
    borderRadius: 10,
    width: 200,
    marginVertical: 20,
  },
  btnText: {
    textAlign: 'center',
    fontSize: 22,
    color: COLOR.ocean,
    padding: 5,
    fontWeight: '600',
  },
  profileName: {fontSize: 24, color: COLOR.ocean, fontWeight: '600'},
  pickerContainer: {
    backgroundColor: COLOR.teal,
    padding: 15,
    borderRadius: 90,
    marginVertical: 35,
  },
  pickerText: {fontSize: 20, color: COLOR.darkOrange, fontWeight: '600'},
  nameStyle: {
    textAlign: 'center',
    fontSize: 22,
    padding: 5,
    fontWeight: '600',
    color: COLOR.teal,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    marginTop: 50,
  },
  input: {
    borderWidth: 1,
    backgroundColor: COLOR.teal,
    paddingHorizontal: 10,
    marginVertical: 10,
    fontSize: 20,
    borderRadius: 10,
    paddingVertical: 10,
    minWidth: 100,
    maxWidth: 250,
    borderRadius: 90,
    borderColor: COLOR.brown,
  },
  confirmBtn: {
    alignItems: 'center',
    backgroundColor: COLOR.teal,
    borderRadius: 20,
    marginVertical: 20,
    padding: 5,
  },
  image: {
    height: HEIGHT,
    width: WIDTH,
    borderRadius: 10,
    borderWidth: 3,
    position: 'relative',
    zIndex: 2,
    borderRadius: 60,
    borderColor: COLOR.teal,
  },
  textName: {
    fontSize: 40,
    fontWeight: '800',
    color: COLOR.teal,
    letterSpacing: 5,
  },
  confirmText: {
    fontSize: 20,
    fontWeight: '600',
  },
});

export default UserProfileScree;
